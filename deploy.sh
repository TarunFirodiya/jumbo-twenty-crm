#!/bin/bash
# Deploy wrapper for Jumbo Twenty SDK syncs
# Usage: ./deploy.sh [--skip-backup] [--skip-verify]
# Runs: backup → sync → verify → (optional) server restart

set -e

VPS="root@167.71.231.251"
SDK_DIR="$HOME/code_projects/jumbo-realestate"
SKIP_BACKUP=false
SKIP_VERIFY=false
RESTART_SERVER=false

for arg in "$@"; do
  case $arg in
    --skip-backup) SKIP_BACKUP=true ;;
    --skip-verify) SKIP_VERIFY=true ;;
    --restart) RESTART_SERVER=true ;;
    --help|-h)
      echo "Usage: ./deploy.sh [--skip-backup] [--skip-verify] [--restart]"
      echo ""
      echo "Steps (in order):"
      echo "  1. SSH: dump metadata tables on VPS to /opt/backups/"
      echo "  2. Run: yarn twenty typecheck"
      echo "  3. Run: yarn twenty dev --once --remote production"
      echo "  4. Verify: curl healthz endpoint, check server status"
      echo ""
      echo "Options:"
      echo "  --skip-backup   Skip the pre-sync metadata dump"
      echo "  --skip-verify   Skip post-sync health verification"
      echo "  --restart       Restart twenty-server-1 after sync (causes ~5min downtime)"
      exit 0
      ;;
  esac
done

echo "============================================"
echo "JUMBO TWENTY CRM — DEPLOY TO PRODUCTION"
echo "============================================"

# STEP 1: Backup
if [ "$SKIP_BACKUP" = false ]; then
  echo ""
  echo "📦 STEP 1/4: Backing up metadata on VPS..."
  BACKUP_RESULT=$(ssh -o StrictHostKeyChecking=no -o ConnectTimeout=10 "$VPS" "/opt/backups/backup-metadata.sh" 2>&1)
  if echo "$BACKUP_RESULT" | grep -q "^OK:"; then
    echo "   ✅ Backup saved: $(echo "$BACKUP_RESULT" | sed 's/OK://')"
  else
    echo "   ❌ Backup FAILED: $BACKUP_RESULT"
    echo "   Aborting deploy. Run with --skip-backup to bypass."
    exit 1
  fi
else
  echo ""
  echo "⚠️  STEP 1/4: Backup SKIPPED (--skip-backup)"
fi

# STEP 2: Typecheck
echo ""
echo "🔍 STEP 2/4: Running typecheck..."
cd "$SDK_DIR"
if npx twenty typecheck 2>&1; then
  echo "   ✅ Typecheck passed"
else
  echo "   ❌ Typecheck FAILED"
  exit 1
fi

# STEP 3: Sync
echo ""
echo "🚀 STEP 3/4: Syncing to production..."
if NODE_TLS_REJECT_UNAUTHORIZED=0 npx twenty dev --once --remote production 2>&1; then
  echo "   ✅ Sync completed"
else
  SYNC_EXIT=$?
  echo "   ❌ Sync FAILED (exit code: $SYNC_EXIT)"
  echo ""
  echo "   ROLLBACK: To restore the pre-sync backup:"
  echo "   ssh $VPS 'docker exec -i -e PGPASSWORD=jumboDbPass2026! twenty-db-1 psql -U twenty -d default' < /opt/backups/pre-sync-<timestamp>.sql"
  echo "   ssh $VPS 'docker restart twenty-server-1'"
  exit $SYNC_EXIT
fi

# STEP 4: Verify
if [ "$SKIP_VERIFY" = false ]; then
  echo ""
  echo "🩺 STEP 4/4: Verifying production health..."

  # Health endpoint
  HEALTH=$(curl -s -o /dev/null -w '%{http_code}' --connect-timeout 10 https://admin.jumbohomes.in/healthz 2>/dev/null || echo "000")
  if [ "$HEALTH" = "200" ]; then
    echo "   ✅ Health endpoint: 200"
  else
    echo "   ⚠️  Health endpoint: $HEALTH (may be cold-booting)"
  fi

  # Container status
  CONTAINER_STATUS=$(ssh -o StrictHostKeyChecking=no -o ConnectTimeout=10 "$VPS" "docker ps --filter name=twenty-server-1 --format '{{.Status}}'" 2>/dev/null || echo "unknown")
  echo "   📊 Server container: $CONTAINER_STATUS"

  # Recent errors in logs
  ERRORS=$(ssh -o StrictHostKeyChecking=no -o ConnectTimeout=10 "$VPS" "docker logs twenty-server-1 --since 2m 2>&1 | grep -ciE 'ERROR|Exception'" 2>/dev/null || echo "?")
  echo "   📋 Recent errors (2min): $ERRORS"
else
  echo ""
  echo "⚠️  STEP 4/4: Verification SKIPPED (--skip-verify)"
fi

# Optional: restart
if [ "$RESTART_SERVER" = true ]; then
  echo ""
  echo "🔄 Restarting twenty-server-1 (this will cause ~5 minutes downtime)..."
  ssh -o StrictHostKeyChecking=no "$VPS" "docker restart twenty-server-1"
  echo "   Waiting for healthy status..."
  for i in $(seq 1 30); do
    STATUS=$(ssh -o StrictHostKeyChecking=no -o ConnectTimeout=10 "$VPS" "docker ps --filter name=twenty-server-1 --format '{{.Status}}'" 2>/dev/null)
    if echo "$STATUS" | grep -q "healthy"; then
      echo "   ✅ Server healthy after ~$((i * 10)) seconds"
      break
    fi
    sleep 10
  done
fi

echo ""
echo "============================================"
echo "DEPLOY COMPLETE"
echo "============================================"
echo "Rollback: ssh $VPS 'docker exec -i -e PGPASSWORD=jumboDbPass2026! twenty-db-1 psql -U twenty -d default' < /opt/backups/pre-sync-<timestamp>.sql && ssh $VPS 'docker restart twenty-server-1'"

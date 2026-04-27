import { defineLogicFunction, HTTPMethod } from 'twenty-sdk/define';

export const LEAD_WEBHOOK_LOGIC_FUNCTION_ID = 'f32368e9-fc02-451b-b5ab-ff6d49802082';

export default defineLogicFunction({
  universalIdentifier: LEAD_WEBHOOK_LOGIC_FUNCTION_ID,
  name: 'lead-webhook',
  description: 'Receive incoming lead webhooks from WhatsApp or website forms',
  timeoutSeconds: 30,
  handler: async (req: any, res: any) => {
    const body = req.body || {};
    console.log('[Lead Webhook] Received:', JSON.stringify(body));

    return {
      status: 'success',
      receivedAt: new Date().toISOString(),
      leadName: body.name || 'Unknown',
      leadPhone: body.phone || null,
      leadSource: body.source || 'unknown',
    };
  },
  httpRouteTriggerSettings: {
    path: '/webhooks/leads',
    httpMethod: HTTPMethod.POST,
    isAuthRequired: false,
  },
});

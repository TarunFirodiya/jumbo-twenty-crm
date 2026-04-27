import { defineField, FieldType, RelationType, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS } from 'twenty-sdk/define';
import { DEAL_UNIVERSAL_IDENTIFIER } from '../objects/deal.object';
import { ASSIGNED_AGENT_ON_DEAL_ID, DEALS_ON_ASSIGNED_AGENT_ID } from './assigned-agent-on-deal.field';

export default defineField({
  universalIdentifier: DEALS_ON_ASSIGNED_AGENT_ID,
  objectUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.workspaceMember.universalIdentifier,
  type: FieldType.RELATION,
  name: 'assignedDeals',
  label: 'Assigned Deals',
  description: 'Deals assigned to this agent',
  icon: 'IconHandCoins',
  relationTargetObjectMetadataUniversalIdentifier: DEAL_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: ASSIGNED_AGENT_ON_DEAL_ID,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});

import { defineField, FieldType, RelationType, OnDeleteAction, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS } from 'twenty-sdk/define';
import { DEAL_UNIVERSAL_IDENTIFIER } from '../objects/deal.object';

export const ASSIGNED_AGENT_ON_DEAL_ID = 'f01fa742-7dbd-4232-b16c-28fe7988f7dc';
export const DEALS_ON_ASSIGNED_AGENT_ID = '7311c23e-0895-41f3-8b24-86cab8d709d8';

export default defineField({
  universalIdentifier: ASSIGNED_AGENT_ON_DEAL_ID,
  objectUniversalIdentifier: DEAL_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'assignedAgent',
  label: 'Assigned Agent',
  description: 'Agent owner of this deal',
  icon: 'IconUser',
  relationTargetObjectMetadataUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.workspaceMember.universalIdentifier,
  relationTargetFieldMetadataUniversalIdentifier: DEALS_ON_ASSIGNED_AGENT_ID,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'assignedAgentId',
  },
});

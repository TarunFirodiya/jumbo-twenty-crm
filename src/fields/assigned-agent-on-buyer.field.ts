import { defineField, FieldType, RelationType, OnDeleteAction, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS } from 'twenty-sdk/define';
import { BUYER_UNIVERSAL_IDENTIFIER } from '../objects/buyer.object';

export const ASSIGNED_AGENT_ON_BUYER_ID = '6e721a45-ac24-4ac0-b4ad-31d562240f85';
export const BUYERS_ON_ASSIGNED_AGENT_ID = 'c161cdfa-5bb4-4f84-8505-01b042875848';

export default defineField({
  universalIdentifier: ASSIGNED_AGENT_ON_BUYER_ID,
  objectUniversalIdentifier: BUYER_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'assignedAgent',
  label: 'Assigned Agent',
  description: 'Agent assigned to this buyer',
  icon: 'IconUser',
  relationTargetObjectMetadataUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.workspaceMember.universalIdentifier,
  relationTargetFieldMetadataUniversalIdentifier: BUYERS_ON_ASSIGNED_AGENT_ID,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'assignedAgentId',
  },
});

import { defineField, FieldType, RelationType, OnDeleteAction, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS } from 'twenty-sdk/define';
import { SELLER_UNIVERSAL_IDENTIFIER } from '../objects/seller.object';

export const ASSIGNED_AGENT_ON_SELLER_ID = '86784586-16ac-4f04-8427-d40e78fb6f80';
export const SELLERS_ON_ASSIGNED_AGENT_ID = '060c5f81-f36a-4950-b75c-f2be8bfaebd3';

export default defineField({
  universalIdentifier: ASSIGNED_AGENT_ON_SELLER_ID,
  objectUniversalIdentifier: SELLER_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'assignedAgent',
  label: 'Assigned Agent',
  description: 'Agent assigned to this seller',
  icon: 'IconUser',
  relationTargetObjectMetadataUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.workspaceMember.universalIdentifier,
  relationTargetFieldMetadataUniversalIdentifier: SELLERS_ON_ASSIGNED_AGENT_ID,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'assignedAgentId',
  },
});

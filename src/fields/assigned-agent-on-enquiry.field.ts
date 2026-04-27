import { defineField, FieldType, RelationType, OnDeleteAction, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS } from 'twenty-sdk/define';
import { ENQUIRY_UNIVERSAL_IDENTIFIER } from '../objects/enquiry.object';

export const ASSIGNED_AGENT_ON_ENQUIRY_ID = '130c23d4-361c-4a58-b2af-dc5d18467c34';
export const ENQUIRIES_ON_ASSIGNED_AGENT_ID = '580d4870-ccfc-4599-92fc-4bb27bec08e4';

export default defineField({
  universalIdentifier: ASSIGNED_AGENT_ON_ENQUIRY_ID,
  objectUniversalIdentifier: ENQUIRY_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'assignedAgent',
  label: 'Assigned Agent',
  description: 'Agent assigned to this enquiry',
  icon: 'IconUser',
  relationTargetObjectMetadataUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.workspaceMember.universalIdentifier,
  relationTargetFieldMetadataUniversalIdentifier: ENQUIRIES_ON_ASSIGNED_AGENT_ID,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'assignedAgentId',
  },
});

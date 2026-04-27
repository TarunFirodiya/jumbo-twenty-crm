import { defineField, FieldType, RelationType, OnDeleteAction, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS } from 'twenty-sdk/define';
import { PROPERTY_UNIVERSAL_IDENTIFIER } from '../objects/property.object';

export const ASSIGNED_AGENT_FIELD_ID = '0807f6f4-4b61-40d2-966b-06b28390cd31';
export const ASSIGNED_AGENT_INVERSE_FIELD_ID = '3b98ed57-b792-4e7b-9c87-d2864e3bf446';

export default defineField({
  universalIdentifier: ASSIGNED_AGENT_FIELD_ID,
  objectUniversalIdentifier: PROPERTY_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'assignedAgent',
  label: 'Assigned Agent',
  description: 'Agent assigned to this property listing',
  icon: 'IconUser',
  relationTargetObjectMetadataUniversalIdentifier:
    STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.workspaceMember.universalIdentifier,
  relationTargetFieldMetadataUniversalIdentifier: ASSIGNED_AGENT_INVERSE_FIELD_ID,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'assignedAgentId',
  },
});

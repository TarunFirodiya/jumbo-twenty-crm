import { defineField, FieldType, RelationType, OnDeleteAction, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS } from 'twenty-sdk/define';
import { PROPERTY_UNIVERSAL_IDENTIFIER } from '../objects/property.object';

export const CLOSING_AGENT_ON_PROPERTY_ID = '3f86d3bb-02ee-4103-a850-15b83d113b7c';
export const CLOSING_AGENT_PROPERTIES_ON_WORKSPACE_MEMBER_ID = '82f04a6b-d2d0-4bfb-9f7f-f980b1ae99a1';

export default defineField({
  universalIdentifier: CLOSING_AGENT_ON_PROPERTY_ID,
  objectUniversalIdentifier: PROPERTY_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'closingAgent',
  label: 'Closing Agent',
  description: 'Agent who closed the sale for this property',
  icon: 'IconUser',
  relationTargetObjectMetadataUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.workspaceMember.universalIdentifier,
  relationTargetFieldMetadataUniversalIdentifier: CLOSING_AGENT_PROPERTIES_ON_WORKSPACE_MEMBER_ID,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'closingAgentId',
  },
});

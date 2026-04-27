import { defineField, FieldType, RelationType, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS } from 'twenty-sdk/define';
import { PROPERTY_UNIVERSAL_IDENTIFIER } from '../objects/property.object';
import { CLOSING_AGENT_ON_PROPERTY_ID, CLOSING_AGENT_PROPERTIES_ON_WORKSPACE_MEMBER_ID } from './closing-agent-on-property.field';

export default defineField({
  universalIdentifier: CLOSING_AGENT_PROPERTIES_ON_WORKSPACE_MEMBER_ID,
  objectUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.workspaceMember.universalIdentifier,
  type: FieldType.RELATION,
  name: 'closedProperties',
  label: 'Closed Properties',
  description: 'Properties closed by this agent',
  icon: 'IconHome',
  relationTargetObjectMetadataUniversalIdentifier: PROPERTY_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: CLOSING_AGENT_ON_PROPERTY_ID,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});

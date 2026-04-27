import { defineField, FieldType, RelationType } from 'twenty-sdk/define';
import { PROPERTY_UNIVERSAL_IDENTIFIER } from '../objects/property.object';
import { ASSIGNED_AGENT_FIELD_ID, ASSIGNED_AGENT_INVERSE_FIELD_ID } from './assigned-agent-on-property.field';

export default defineField({
  universalIdentifier: ASSIGNED_AGENT_INVERSE_FIELD_ID,
  objectUniversalIdentifier: '20202020-3319-4234-a34c-82d5c0e881a6', // WorkspaceMember standard object UUID
  type: FieldType.RELATION,
  name: 'assignedProperties',
  label: 'Assigned Properties',
  description: 'Properties assigned to this workspace member',
  icon: 'IconHome',
  relationTargetObjectMetadataUniversalIdentifier: PROPERTY_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: ASSIGNED_AGENT_FIELD_ID,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});

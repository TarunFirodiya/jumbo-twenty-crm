import { defineField, FieldType, RelationType, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS } from 'twenty-sdk/define';
import { PROPERTY_UNIVERSAL_IDENTIFIER } from '../objects/property.object';
import { ZONE_LEAD_ON_PROPERTY_ID, ZONE_LEAD_PROPERTIES_ON_WORKSPACE_MEMBER_ID } from './zone-lead-on-property.field';

export default defineField({
  universalIdentifier: ZONE_LEAD_PROPERTIES_ON_WORKSPACE_MEMBER_ID,
  objectUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.workspaceMember.universalIdentifier,
  type: FieldType.RELATION,
  name: 'zoneLeadProperties',
  label: 'Zone Lead Properties',
  description: 'Properties where this member is the zone lead',
  icon: 'IconHome',
  relationTargetObjectMetadataUniversalIdentifier: PROPERTY_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: ZONE_LEAD_ON_PROPERTY_ID,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});

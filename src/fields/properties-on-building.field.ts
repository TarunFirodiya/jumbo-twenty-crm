import { defineField, FieldType, RelationType } from 'twenty-sdk/define';
import { PROPERTY_UNIVERSAL_IDENTIFIER } from '../objects/property.object';
import { BUILDING_UNIVERSAL_IDENTIFIER } from '../objects/building.object';
import { BUILDING_ON_PROPERTY_ID, PROPERTIES_ON_BUILDING_ID } from './building-on-property.field';

export default defineField({
  universalIdentifier: PROPERTIES_ON_BUILDING_ID,
  objectUniversalIdentifier: BUILDING_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'properties',
  label: 'Properties',
  description: 'Properties in this building',
  icon: 'IconHome',
  relationTargetObjectMetadataUniversalIdentifier: PROPERTY_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: BUILDING_ON_PROPERTY_ID,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});

import { defineField, FieldType, RelationType } from 'twenty-sdk/define';
import { PROPERTY_UNIVERSAL_IDENTIFIER } from '../objects/property.object';
import { TOWER_UNIVERSAL_IDENTIFIER } from '../objects/tower.object';
import { TOWER_ON_PROPERTY_FIELD_ID, PROPERTIES_ON_TOWER_FIELD_ID } from './tower-on-property.field';

export default defineField({
  universalIdentifier: PROPERTIES_ON_TOWER_FIELD_ID,
  objectUniversalIdentifier: TOWER_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'properties',
  label: 'Properties',
  description: 'Properties in this tower',
  icon: 'IconHome',
  relationTargetObjectMetadataUniversalIdentifier: PROPERTY_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: TOWER_ON_PROPERTY_FIELD_ID,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});

import { defineField, FieldType, RelationType, OnDeleteAction } from 'twenty-sdk/define';
import { PROPERTY_UNIVERSAL_IDENTIFIER } from '../objects/property.object';
import { TOWER_UNIVERSAL_IDENTIFIER } from '../objects/tower.object';

export const TOWER_ON_PROPERTY_FIELD_ID = '7b532197-2be0-4d88-b197-8de6fbe227d5';
export const PROPERTIES_ON_TOWER_FIELD_ID = 'd699a779-73a7-4ac3-bb1d-235cd3048ace';

export default defineField({
  universalIdentifier: TOWER_ON_PROPERTY_FIELD_ID,
  objectUniversalIdentifier: PROPERTY_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'tower',
  label: 'Tower',
  description: 'Tower this property belongs to',
  icon: 'IconBuilding',
  relationTargetObjectMetadataUniversalIdentifier: TOWER_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: PROPERTIES_ON_TOWER_FIELD_ID,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'towerId',
  },
});

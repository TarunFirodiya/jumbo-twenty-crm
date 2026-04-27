import { defineField, FieldType, RelationType, OnDeleteAction } from 'twenty-sdk/define';
import { PROPERTY_UNIVERSAL_IDENTIFIER } from '../objects/property.object';
import { BUILDING_UNIVERSAL_IDENTIFIER } from '../objects/building.object';

export const BUILDING_ON_PROPERTY_ID = '4aa78ac6-d6d1-4769-a846-a9e9cd3d009a';
export const PROPERTIES_ON_BUILDING_ID = '220712ed-ac26-49b2-bc7e-15e1a91231e4';

export default defineField({
  universalIdentifier: BUILDING_ON_PROPERTY_ID,
  objectUniversalIdentifier: PROPERTY_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'building',
  label: 'Building',
  description: 'Building or project this property belongs to',
  icon: 'IconBuildingSkyscraper',
  relationTargetObjectMetadataUniversalIdentifier: BUILDING_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: PROPERTIES_ON_BUILDING_ID,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'buildingId',
  },
});

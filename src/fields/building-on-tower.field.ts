import { defineField, FieldType, RelationType, OnDeleteAction } from 'twenty-sdk/define';
import { TOWER_UNIVERSAL_IDENTIFIER } from '../objects/tower.object';
import { BUILDING_UNIVERSAL_IDENTIFIER } from '../objects/building.object';

export const BUILDING_ON_TOWER_FIELD_ID = 'bd8a4901-0b4e-498a-8abe-2b7c81e7c8a2';
export const TOWERS_ON_BUILDING_FIELD_ID = '964083a7-2aaa-45ef-8972-2a768fdaa517';

export default defineField({
  universalIdentifier: BUILDING_ON_TOWER_FIELD_ID,
  objectUniversalIdentifier: TOWER_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'building',
  label: 'Building',
  description: 'Building this tower belongs to',
  icon: 'IconBuildingSkyscraper',
  relationTargetObjectMetadataUniversalIdentifier: BUILDING_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: TOWERS_ON_BUILDING_FIELD_ID,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'buildingId',
  },
});

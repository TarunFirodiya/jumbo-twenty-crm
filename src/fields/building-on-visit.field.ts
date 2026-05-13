import { defineField, FieldType, RelationType, OnDeleteAction } from 'twenty-sdk/define';
import { VISIT_UNIVERSAL_IDENTIFIER } from '../objects/visit.object';
import { BUILDING_UNIVERSAL_IDENTIFIER } from '../objects/building.object';

export const BUILDING_ON_VISIT_ID = 'cef2318e-37e7-4e9f-a128-f89f38e39e0a';
export const VISITS_ON_BUILDING_ID = '240e264e-e1ce-4742-820c-9def845c3583';

export default defineField({
  universalIdentifier: BUILDING_ON_VISIT_ID,
  objectUniversalIdentifier: VISIT_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'building',
  label: 'Building',
  description: 'Building this visit is at',
  icon: 'IconBuildingSkyscraper',
  relationTargetObjectMetadataUniversalIdentifier: BUILDING_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: VISITS_ON_BUILDING_ID,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'buildingId',
  },
});
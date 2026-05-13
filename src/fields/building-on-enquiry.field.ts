import { defineField, FieldType, RelationType, OnDeleteAction } from 'twenty-sdk/define';
import { ENQUIRY_UNIVERSAL_IDENTIFIER } from '../objects/enquiry.object';
import { BUILDING_UNIVERSAL_IDENTIFIER } from '../objects/building.object';

export const BUILDING_ON_ENQUIRY_ID = '60209e8e-df8a-4632-93b2-108c696cf257';
export const ENQUIRIES_ON_BUILDING_ID = 'd51705c9-8c96-4ccd-bf16-b7c0b6ebd151';

export default defineField({
  universalIdentifier: BUILDING_ON_ENQUIRY_ID,
  objectUniversalIdentifier: ENQUIRY_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'building',
  label: 'Building',
  description: 'Building this enquiry is about',
  icon: 'IconBuildingSkyscraper',
  relationTargetObjectMetadataUniversalIdentifier: BUILDING_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: ENQUIRIES_ON_BUILDING_ID,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'buildingId',
  },
});
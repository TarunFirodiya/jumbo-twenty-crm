import { defineField, FieldType, RelationType, OnDeleteAction } from 'twenty-sdk/define';
import { ENQUIRY_UNIVERSAL_IDENTIFIER } from '../objects/enquiry.object';
import { PROPERTY_UNIVERSAL_IDENTIFIER } from '../objects/property.object';

export const PROPERTY_ON_ENQUIRY_ID = '23c44919-17ab-4319-b5a8-2ea078c1425c';
export const ENQUIRIES_ON_PROPERTY_ID = '6616b09a-89a6-4365-8468-879d667e21a3';

export default defineField({
  universalIdentifier: PROPERTY_ON_ENQUIRY_ID,
  objectUniversalIdentifier: ENQUIRY_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'property',
  label: 'Property',
  description: 'Property of interest',
  icon: 'IconHome',
  relationTargetObjectMetadataUniversalIdentifier: PROPERTY_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: ENQUIRIES_ON_PROPERTY_ID,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'propertyId',
  },
});

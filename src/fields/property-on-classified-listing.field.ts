import { defineField, FieldType, RelationType, OnDeleteAction } from 'twenty-sdk/define';
import { PROPERTY_UNIVERSAL_IDENTIFIER } from '../objects/property.object';
import { CLASSIFIED_LISTING_UNIVERSAL_IDENTIFIER } from '../objects/classified-listing.object';

export const PROPERTY_ID = 'c82e5e05-6d05-4f69-b2fc-a7ea97c676d6';
export const PROPERTY_INVERSE_ID = '2a0d4ded-4bda-4ae1-ac48-746248550f8e';

export default defineField({
  universalIdentifier: PROPERTY_ID,
  objectUniversalIdentifier: CLASSIFIED_LISTING_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'property',
  label: 'Property',
  icon: 'IconHome',
  relationTargetObjectMetadataUniversalIdentifier: PROPERTY_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: '2a0d4ded-4bda-4ae1-ac48-746248550f8e',
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'propertyId',
  },
});

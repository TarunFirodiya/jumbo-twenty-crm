import { defineField, FieldType, RelationType, OnDeleteAction } from 'twenty-sdk/define';
import { CLASSIFIED_LISTING_UNIVERSAL_IDENTIFIER } from '../objects/classified-listing.object';

export const ENQUIRY_LISTING_ID = '655f5807-6aed-4fb9-98a4-a51f0973c2e8';
export const LISTING_ENQUIRIES_ID = 'fe8b8ea2-f593-4fdb-99d1-7cfc37c24cb3';

const ENQUIRY_UUID = 'e718ab0c-b6d3-456c-a496-c8d588393820';

export default defineField({
  universalIdentifier: ENQUIRY_LISTING_ID,
  objectUniversalIdentifier: ENQUIRY_UUID,
  type: FieldType.RELATION,
  name: 'classifiedListing',
  label: 'Classified Listing',
  description: 'The classified listing this enquiry was made on',
  icon: 'IconExternalLink',
  relationTargetObjectMetadataUniversalIdentifier: CLASSIFIED_LISTING_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: LISTING_ENQUIRIES_ID,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'classifiedListingId',
  },
});

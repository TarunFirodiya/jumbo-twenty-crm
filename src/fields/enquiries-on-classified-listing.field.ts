import { defineField, FieldType, RelationType } from 'twenty-sdk/define';
import { CLASSIFIED_LISTING_UNIVERSAL_IDENTIFIER } from '../objects/classified-listing.object';
import { ENQUIRY_LISTING_ID, LISTING_ENQUIRIES_ID } from './classified-listing-on-enquiry.field';

const ENQUIRY_UUID = 'e718ab0c-b6d3-456c-a496-c8d588393820';

export default defineField({
  universalIdentifier: LISTING_ENQUIRIES_ID,
  objectUniversalIdentifier: CLASSIFIED_LISTING_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'enquiries',
  label: 'Enquiries',
  description: 'Enquiries made on this classified listing',
  icon: 'IconMessageCircle',
  relationTargetObjectMetadataUniversalIdentifier: ENQUIRY_UUID,
  relationTargetFieldMetadataUniversalIdentifier: ENQUIRY_LISTING_ID,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});

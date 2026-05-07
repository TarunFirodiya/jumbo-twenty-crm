import { defineField, FieldType, RelationType, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS } from 'twenty-sdk/define';
import { BUYER_UNIVERSAL_IDENTIFIER } from '../objects/buyer.object';
import { BUYER_ON_ENQUIRY_ID, ENQUIRIES_ON_BUYER_ID } from './buyer-on-enquiry.field';

const ENQUIRY_UUID = 'e718ab0c-b6d3-456c-a496-c8d588393820';

export default defineField({
  universalIdentifier: ENQUIRIES_ON_BUYER_ID,
  objectUniversalIdentifier: BUYER_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'enquiries',
  label: 'Enquiries',
  description: 'Enquiries made by this buyer',
  icon: 'IconMessageCircle',
  relationTargetObjectMetadataUniversalIdentifier: ENQUIRY_UUID,
  relationTargetFieldMetadataUniversalIdentifier: BUYER_ON_ENQUIRY_ID,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});

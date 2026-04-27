import { defineField, FieldType, RelationType } from 'twenty-sdk/define';
import { ENQUIRY_UNIVERSAL_IDENTIFIER } from '../objects/enquiry.object';
import { PROPERTY_UNIVERSAL_IDENTIFIER } from '../objects/property.object';
import { PROPERTY_ON_ENQUIRY_ID, ENQUIRIES_ON_PROPERTY_ID } from './property-on-enquiry.field';

export default defineField({
  universalIdentifier: ENQUIRIES_ON_PROPERTY_ID,
  objectUniversalIdentifier: PROPERTY_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'enquiries',
  label: 'Enquiries',
  description: 'Enquiries related to this property',
  icon: 'IconMessageCircle',
  relationTargetObjectMetadataUniversalIdentifier: ENQUIRY_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: PROPERTY_ON_ENQUIRY_ID,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});

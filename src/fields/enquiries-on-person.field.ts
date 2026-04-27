import { defineField, FieldType, RelationType, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS } from 'twenty-sdk/define';
import { ENQUIRY_UNIVERSAL_IDENTIFIER } from '../objects/enquiry.object';
import { PERSON_ON_ENQUIRY_ID, ENQUIRIES_ON_PERSON_ID } from './person-on-enquiry.field';

export default defineField({
  universalIdentifier: ENQUIRIES_ON_PERSON_ID,
  objectUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.person.universalIdentifier,
  type: FieldType.RELATION,
  name: 'enquiries',
  label: 'Enquiries',
  description: 'Enquiries linked to this person',
  icon: 'IconMessageCircle',
  relationTargetObjectMetadataUniversalIdentifier: ENQUIRY_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: PERSON_ON_ENQUIRY_ID,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});

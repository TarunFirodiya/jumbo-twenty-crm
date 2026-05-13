import { defineField, FieldType, RelationType } from 'twenty-sdk/define';
import { ENQUIRY_UNIVERSAL_IDENTIFIER } from '../objects/enquiry.object';
import { BUILDING_UNIVERSAL_IDENTIFIER } from '../objects/building.object';
import { BUILDING_ON_ENQUIRY_ID, ENQUIRIES_ON_BUILDING_ID } from './building-on-enquiry.field';

export default defineField({
  universalIdentifier: ENQUIRIES_ON_BUILDING_ID,
  objectUniversalIdentifier: BUILDING_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'enquiries',
  label: 'Enquiries',
  description: 'Enquiries for this building',
  icon: 'IconMessageCircle',
  relationTargetObjectMetadataUniversalIdentifier: ENQUIRY_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: BUILDING_ON_ENQUIRY_ID,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
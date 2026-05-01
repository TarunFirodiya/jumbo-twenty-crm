import { defineField, FieldType, RelationType, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS } from 'twenty-sdk/define';
import { ENQUIRY_UNIVERSAL_IDENTIFIER } from '../objects/enquiry.object';

export default defineField({
  universalIdentifier: '1accd6da-09a7-4d5e-b8e4-2ec28c873eb2',
  objectUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.workspaceMember.universalIdentifier,
  type: FieldType.RELATION,
  name: 'createdEnquiries',
  label: 'Created Enquiries',
  icon: 'IconMessageCircle',
  relationTargetObjectMetadataUniversalIdentifier: ENQUIRY_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: '599ee74f-2671-4ed9-81d3-c7ace4b707c4',
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});

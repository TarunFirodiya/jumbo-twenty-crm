import { defineField, FieldType, RelationType, OnDeleteAction, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS } from 'twenty-sdk/define';
import { ENQUIRY_UNIVERSAL_IDENTIFIER } from '../objects/enquiry.object';

export const PERSON_ON_ENQUIRY_ID = '56fd2974-b196-4fcd-a81d-a605c6a724b2';
export const ENQUIRIES_ON_PERSON_ID = '22fed992-d91f-40af-83ad-43caff4e32c9';

export default defineField({
  universalIdentifier: PERSON_ON_ENQUIRY_ID,
  objectUniversalIdentifier: ENQUIRY_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'person',
  label: 'Person',
  description: 'Person who made the enquiry',
  icon: 'IconUser',
  relationTargetObjectMetadataUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.person.universalIdentifier,
  relationTargetFieldMetadataUniversalIdentifier: ENQUIRIES_ON_PERSON_ID,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'personId',
  },
});

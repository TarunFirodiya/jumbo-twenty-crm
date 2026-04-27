import { defineField, FieldType, RelationType, OnDeleteAction, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS } from 'twenty-sdk/define';
import { BUYER_UNIVERSAL_IDENTIFIER } from '../objects/buyer.object';

export const PERSON_ON_BUYER_ID = 'c01d287c-0f45-46e8-a21a-e4e088894d81';
export const BUYERS_ON_PERSON_ID = '53a4ec8e-c63e-4bee-8688-05537c63637b';

export default defineField({
  universalIdentifier: PERSON_ON_BUYER_ID,
  objectUniversalIdentifier: BUYER_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'person',
  label: 'Person',
  description: 'Contact person for this buyer',
  icon: 'IconUser',
  relationTargetObjectMetadataUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.person.universalIdentifier,
  relationTargetFieldMetadataUniversalIdentifier: BUYERS_ON_PERSON_ID,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'personId',
  },
});

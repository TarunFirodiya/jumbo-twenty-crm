import { defineField, FieldType, RelationType, OnDeleteAction, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS } from 'twenty-sdk/define';
import { SELLER_UNIVERSAL_IDENTIFIER } from '../objects/seller.object';

export const PERSON_ON_SELLER_ID = '389d379c-7db6-45d7-bd27-d10bfdfbd510';
export const SELLERS_ON_PERSON_ID = 'ccd75814-5c45-4608-95b1-8c28be3d5796';

export default defineField({
  universalIdentifier: PERSON_ON_SELLER_ID,
  objectUniversalIdentifier: SELLER_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'person',
  label: 'Person',
  description: 'Contact person for this seller',
  icon: 'IconUser',
  relationTargetObjectMetadataUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.person.universalIdentifier,
  relationTargetFieldMetadataUniversalIdentifier: SELLERS_ON_PERSON_ID,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'personId',
  },
});

import { defineField, FieldType, RelationType, OnDeleteAction, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS } from 'twenty-sdk/define';
import { SELLER_UNIVERSAL_IDENTIFIER } from '../objects/seller.object';

export const REFERRALSOURCE_ID = '6506efda-84e2-47f2-bc27-497d9c2d44db';
export const REFERRALSOURCE_INVERSE_ID = '184ce806-d709-45ba-bbf7-98055d0c7469';

export default defineField({
  universalIdentifier: REFERRALSOURCE_ID,
  objectUniversalIdentifier: SELLER_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'referralSource',
  label: 'Referral Source',
  icon: 'IconUser',
  relationTargetObjectMetadataUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.person.universalIdentifier,
  relationTargetFieldMetadataUniversalIdentifier: '184ce806-d709-45ba-bbf7-98055d0c7469',
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'referralSourceId',
  },
});

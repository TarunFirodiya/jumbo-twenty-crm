import { defineField, FieldType, RelationType, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS } from 'twenty-sdk/define';
import { SELLER_UNIVERSAL_IDENTIFIER } from '../objects/seller.object';

export default defineField({
  universalIdentifier: '184ce806-d709-45ba-bbf7-98055d0c7469',
  objectUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.person.universalIdentifier,
  type: FieldType.RELATION,
  name: 'referredSellers',
  label: 'Referred Sellers',
  icon: 'IconUserDollar',
  relationTargetObjectMetadataUniversalIdentifier: SELLER_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: '6506efda-84e2-47f2-bc27-497d9c2d44db',
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});

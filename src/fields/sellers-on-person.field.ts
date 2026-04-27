import { defineField, FieldType, RelationType, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS } from 'twenty-sdk/define';
import { SELLER_UNIVERSAL_IDENTIFIER } from '../objects/seller.object';
import { PERSON_ON_SELLER_ID, SELLERS_ON_PERSON_ID } from './person-on-seller.field';

export default defineField({
  universalIdentifier: SELLERS_ON_PERSON_ID,
  objectUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.person.universalIdentifier,
  type: FieldType.RELATION,
  name: 'sellerProfiles',
  label: 'Seller Profiles',
  description: 'Seller profiles linked to this person',
  icon: 'IconUserDollar',
  relationTargetObjectMetadataUniversalIdentifier: SELLER_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: PERSON_ON_SELLER_ID,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});

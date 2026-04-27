import { defineField, FieldType, RelationType, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS } from 'twenty-sdk/define';
import { DEAL_UNIVERSAL_IDENTIFIER } from '../objects/deal.object';
import { SELLER_ON_DEAL_ID, DEALS_ON_SELLER_ID } from './seller-on-deal.field';

export default defineField({
  universalIdentifier: DEALS_ON_SELLER_ID,
  objectUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.person.universalIdentifier,
  type: FieldType.RELATION,
  name: 'sellerDeals',
  label: 'Seller Deals',
  description: 'Deals where this person is the seller',
  icon: 'IconHandCoins',
  relationTargetObjectMetadataUniversalIdentifier: DEAL_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: SELLER_ON_DEAL_ID,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});

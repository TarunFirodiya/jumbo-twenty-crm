import { defineField, FieldType, RelationType, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS } from 'twenty-sdk/define';
import { DEAL_UNIVERSAL_IDENTIFIER } from '../objects/deal.object';
import { BUYER_ON_DEAL_ID, DEALS_ON_BUYER_ID } from './buyer-on-deal.field';

export default defineField({
  universalIdentifier: DEALS_ON_BUYER_ID,
  objectUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.person.universalIdentifier,
  type: FieldType.RELATION,
  name: 'buyerDeals',
  label: 'Buyer Deals',
  description: 'Deals where this person is the buyer',
  icon: 'IconHandCoins',
  relationTargetObjectMetadataUniversalIdentifier: DEAL_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: BUYER_ON_DEAL_ID,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});

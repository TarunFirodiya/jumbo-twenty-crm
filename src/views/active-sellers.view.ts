import { defineView, ViewType, ViewFilterOperand } from 'twenty-sdk/define';
import { SELLER_UNIVERSAL_IDENTIFIER, SELLER_NAME_FIELD, SELLER_STAGE_FIELD, SELLER_EXPECTED_PRICE_FIELD, SELLER_TIMELINE_FIELD, SELLER_MOTIVATION_FIELD } from '../objects/seller.object';

export const ACTIVE_SELLERS_VIEW_ID = '7e4cdee5-7de2-4f45-a34e-a76176bdd000';

export default defineView({
  universalIdentifier: ACTIVE_SELLERS_VIEW_ID,
  name: 'Active Sellers',
  objectUniversalIdentifier: SELLER_UNIVERSAL_IDENTIFIER,
  type: ViewType.TABLE,
  icon: 'IconUserDollar',
  isCompact: false,
  fields: [
    { universalIdentifier: '8303ec93-2b26-4887-a239-28ca51292d9d', fieldMetadataUniversalIdentifier: SELLER_NAME_FIELD, position: 0, isVisible: true },
    { universalIdentifier: '9da1029c-89ea-4310-a833-237e91da7a7a', fieldMetadataUniversalIdentifier: SELLER_STAGE_FIELD, position: 1, isVisible: true },
    { universalIdentifier: 'b3e58c78-8fc3-40ec-a4ce-289172a8a4ee', fieldMetadataUniversalIdentifier: SELLER_EXPECTED_PRICE_FIELD, position: 2, isVisible: true },
    { universalIdentifier: 'd4d85113-1b06-4201-ae0b-784228e36fae', fieldMetadataUniversalIdentifier: SELLER_TIMELINE_FIELD, position: 3, isVisible: true },
  ],
  filters: [
    {
      universalIdentifier: '1fdec5c4-9a1a-4ba3-9434-aff04a017134',
      fieldMetadataUniversalIdentifier: SELLER_STAGE_FIELD,
      operand: ViewFilterOperand.IS_NOT,
      value: 'DROPPED',
    },
  ],
});

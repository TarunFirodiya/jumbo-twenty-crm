import { defineView, ViewKey } from 'twenty-sdk/define';
import { SELLER_UNIVERSAL_IDENTIFIER, SELLER_NAME_FIELD, SELLER_STAGE_FIELD, SELLER_EXPECTED_PRICE_FIELD, SELLER_TIMELINE_FIELD, SELLER_PROPERTY_ADDRESS_FIELD } from '../objects/seller.object';

export const ALL_SELLERS_VIEW_ID = '3aa2e404-caa7-4993-a29f-59703c3e8912';

export default defineView({
  universalIdentifier: ALL_SELLERS_VIEW_ID,
  name: 'All Sellers',
  objectUniversalIdentifier: SELLER_UNIVERSAL_IDENTIFIER,
  key: ViewKey.INDEX,
  icon: 'IconUserDollar',
  isCompact: false,
  fields: [
    { universalIdentifier: 'a87223d2-1d5f-4ac5-aa54-a45edee85600', fieldMetadataUniversalIdentifier: SELLER_NAME_FIELD, position: 0, isVisible: true },
    { universalIdentifier: '3cf34840-bae7-45a0-8d2e-93f907aeaa63', fieldMetadataUniversalIdentifier: SELLER_STAGE_FIELD, position: 1, isVisible: true },
    { universalIdentifier: 'f36a3eff-5348-4d6e-9206-25c7bdffaa15', fieldMetadataUniversalIdentifier: SELLER_EXPECTED_PRICE_FIELD, position: 2, isVisible: true },
    { universalIdentifier: '0f5139e8-802f-4f2c-9bdb-23ff3552f421', fieldMetadataUniversalIdentifier: SELLER_TIMELINE_FIELD, position: 3, isVisible: true },
    { universalIdentifier: '53cef32c-0adf-473a-a37b-972fdba4c4d5', fieldMetadataUniversalIdentifier: SELLER_PROPERTY_ADDRESS_FIELD, position: 4, isVisible: true },
  ],
});

import { defineView, ViewType } from 'twenty-sdk/define';
import { PROPERTY_PRICE_HISTORY_UNIVERSAL_IDENTIFIER } from '../objects/property-price-history.object';
import {
  PPH_NAME_FIELD,  PPH_PRICE_FIELD,  PPH_UPDATED_ON_DATE_FIELD,
} from '../objects/property-price-history.object';

export const PROPERTYPRICEHISTORY_RECORD_PAGE_FIELDS_VIEW_ID = 'e799e768-8a5f-45d1-b2d7-7a8e8c8db522';

export default defineView({
  universalIdentifier: PROPERTYPRICEHISTORY_RECORD_PAGE_FIELDS_VIEW_ID,
  name: 'propertyPriceHistory Record Page Fields',
  objectUniversalIdentifier: PROPERTY_PRICE_HISTORY_UNIVERSAL_IDENTIFIER,
  type: ViewType.FIELDS_WIDGET,
  icon: 'IconExternalLink',
  isCompact: false,
  fields: [
    { universalIdentifier: '2e531762-83a5-402f-a6fb-79e641e3728e', fieldMetadataUniversalIdentifier: PPH_NAME_FIELD, position: 0, isVisible: true },
    { universalIdentifier: '27214b94-ad20-4dc9-b8d8-081df55c549c', fieldMetadataUniversalIdentifier: PPH_PRICE_FIELD, position: 1, isVisible: true },
    { universalIdentifier: '994d6840-1ca2-4642-b8f1-9dce80f0fe38', fieldMetadataUniversalIdentifier: PPH_UPDATED_ON_DATE_FIELD, position: 2, isVisible: true },
  ],
});

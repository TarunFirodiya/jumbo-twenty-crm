import { defineView, ViewType, ViewFilterOperand } from 'twenty-sdk/define';
import { BUYER_UNIVERSAL_IDENTIFIER, BUYER_NAME_FIELD, BUYER_STAGE_FIELD, BUYER_BUDGET_MIN_FIELD, BUYER_BUDGET_MAX_FIELD, BUYER_BEDROOMS_MIN_FIELD, BUYER_BATHROOMS_MIN_FIELD, BUYER_SQFT_MIN_FIELD } from '../objects/buyer.object';

export const ACTIVE_BUYERS_VIEW_ID = '77319538-4bea-4e72-97a3-9bebf98376d9';

export default defineView({
  universalIdentifier: ACTIVE_BUYERS_VIEW_ID,
  name: 'Active Buyers',
  objectUniversalIdentifier: BUYER_UNIVERSAL_IDENTIFIER,
  type: ViewType.TABLE,
  icon: 'IconUser',
  isCompact: false,
  fields: [
    { universalIdentifier: '5f24d37b-451b-4949-aef1-e591ecb95564', fieldMetadataUniversalIdentifier: BUYER_NAME_FIELD, position: 0, isVisible: true },
    { universalIdentifier: '5d3a9803-f712-43dd-97bc-3c0e3f13d4a3', fieldMetadataUniversalIdentifier: BUYER_STAGE_FIELD, position: 1, isVisible: true },
    { universalIdentifier: '67118432-061c-4214-8bd7-2dc26461bd5c', fieldMetadataUniversalIdentifier: BUYER_BUDGET_MIN_FIELD, position: 2, isVisible: true },
    { universalIdentifier: 'a9e8b452-9732-4d56-8b63-830187ac28b6', fieldMetadataUniversalIdentifier: BUYER_BUDGET_MAX_FIELD, position: 3, isVisible: true },
    { universalIdentifier: 'ab0ebe04-07ec-4836-b1ec-3ce1c9ed5c73', fieldMetadataUniversalIdentifier: BUYER_BEDROOMS_MIN_FIELD, position: 4, isVisible: true },
    { universalIdentifier: '307cdd09-5a67-4825-8a54-5bec5310273a', fieldMetadataUniversalIdentifier: BUYER_BATHROOMS_MIN_FIELD, position: 5, isVisible: true },
    { universalIdentifier: 'd3d99232-3387-45da-ac71-fe0db38e5742', fieldMetadataUniversalIdentifier: BUYER_SQFT_MIN_FIELD, position: 6, isVisible: true },
  ],
  filters: [
    {
      universalIdentifier: 'ffea3275-ce23-4f55-859a-9448eb34289d',
      fieldMetadataUniversalIdentifier: BUYER_STAGE_FIELD,
      operand: ViewFilterOperand.IS_NOT,
      value: 'DROPPED',
    },
  ],
});

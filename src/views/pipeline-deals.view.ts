import { defineView, ViewType, ViewFilterOperand } from 'twenty-sdk/define';
import { DEAL_UNIVERSAL_IDENTIFIER, DEAL_NAME_FIELD_UNIVERSAL_IDENTIFIER, DEAL_VALUE_FIELD_UNIVERSAL_IDENTIFIER, DEAL_STAGE_FIELD_UNIVERSAL_IDENTIFIER } from '../objects/deal.object';
import { PROPERTY_ON_DEAL_ID } from '../fields/property-on-deal.field';

export const PIPELINE_DEALS_VIEW_ID = 'cab8d887-f4e5-4902-9096-7e652d9d2cf3';

export default defineView({
  universalIdentifier: PIPELINE_DEALS_VIEW_ID,
  name: 'Pipeline',
  objectUniversalIdentifier: DEAL_UNIVERSAL_IDENTIFIER,
  type: ViewType.TABLE,
  icon: 'IconHandCoins',
  isCompact: false,
  fields: [
    { universalIdentifier: '3bae5e18-89e1-4a93-b9ba-cb61664a4a8c', fieldMetadataUniversalIdentifier: DEAL_NAME_FIELD_UNIVERSAL_IDENTIFIER, position: 0, isVisible: true },
    { universalIdentifier: 'e3c9fdf0-acee-4d72-8b07-1cfe931c7a36', fieldMetadataUniversalIdentifier: DEAL_VALUE_FIELD_UNIVERSAL_IDENTIFIER, position: 1, isVisible: true },
    { universalIdentifier: 'b2a41c9a-294c-4cbb-9f85-087a291628fb', fieldMetadataUniversalIdentifier: DEAL_STAGE_FIELD_UNIVERSAL_IDENTIFIER, position: 2, isVisible: true },
    { universalIdentifier: '16495258-0911-4562-90eb-7935cb3047df', fieldMetadataUniversalIdentifier: PROPERTY_ON_DEAL_ID, position: 3, isVisible: true },
  ],
  filters: [
    {
      universalIdentifier: '7bd184c0-98ca-4388-9412-996189aaab1e',
      fieldMetadataUniversalIdentifier: DEAL_STAGE_FIELD_UNIVERSAL_IDENTIFIER,
      operand: ViewFilterOperand.IS_NOT,
      value: 'CLOSED_WON',
    },
  ],
});

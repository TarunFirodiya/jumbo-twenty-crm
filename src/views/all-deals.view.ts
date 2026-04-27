import { defineView, ViewKey } from 'twenty-sdk/define';
import { DEAL_UNIVERSAL_IDENTIFIER } from '../objects/deal.object';
import {
  DEAL_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  DEAL_VALUE_FIELD_UNIVERSAL_IDENTIFIER,
  DEAL_STAGE_FIELD_UNIVERSAL_IDENTIFIER,
  DEAL_CLOSE_DATE_FIELD_UNIVERSAL_IDENTIFIER,
  DEAL_OFFER_STATUS_FIELD,
} from '../objects/deal.object';
import { PROPERTY_ON_DEAL_ID } from '../fields/property-on-deal.field';
import { BUYER_ON_DEAL_ID } from '../fields/buyer-on-deal.field';
import { ASSIGNED_AGENT_ON_DEAL_ID } from '../fields/assigned-agent-on-deal.field';

export const ALL_DEALS_VIEW_ID = '881bc27c-2064-4816-b0c4-0b8e34924c81';

export default defineView({
  universalIdentifier: ALL_DEALS_VIEW_ID,
  name: 'All Deals',
  objectUniversalIdentifier: DEAL_UNIVERSAL_IDENTIFIER,
  key: ViewKey.INDEX,
  icon: 'IconHandCoins',
  isCompact: false,
  fields: [
    { universalIdentifier: 'df051148-27bb-4e68-8d19-6abb7e8e19b3', fieldMetadataUniversalIdentifier: DEAL_NAME_FIELD_UNIVERSAL_IDENTIFIER, position: 0, isVisible: true },
    { universalIdentifier: '829cbe11-d52e-4e94-a33f-b664b91c0839', fieldMetadataUniversalIdentifier: DEAL_VALUE_FIELD_UNIVERSAL_IDENTIFIER, position: 1, isVisible: true },
    { universalIdentifier: 'b8c9468a-9aee-4747-97c9-5500320207cb', fieldMetadataUniversalIdentifier: DEAL_STAGE_FIELD_UNIVERSAL_IDENTIFIER, position: 2, isVisible: true },
    { universalIdentifier: 'e6551d11-66a8-4422-aefd-5ce619376297', fieldMetadataUniversalIdentifier: DEAL_CLOSE_DATE_FIELD_UNIVERSAL_IDENTIFIER, position: 3, isVisible: true },
    { universalIdentifier: '5f61cf13-bf92-4dd8-99ad-2be80bdc8bfb', fieldMetadataUniversalIdentifier: PROPERTY_ON_DEAL_ID, position: 4, isVisible: true },
    { universalIdentifier: '331a9a10-9f5d-47af-bcf0-f7935aac1795', fieldMetadataUniversalIdentifier: BUYER_ON_DEAL_ID, position: 5, isVisible: true },
    { universalIdentifier: 'cc0e4d0b-2b04-4ad2-8d10-abee330af56f', fieldMetadataUniversalIdentifier: ASSIGNED_AGENT_ON_DEAL_ID, position: 6, isVisible: true },
    { universalIdentifier: '07a07e7d-5012-4493-9ab8-ff45e0138130', fieldMetadataUniversalIdentifier: DEAL_OFFER_STATUS_FIELD, position: 7, isVisible: true },
  ],
});

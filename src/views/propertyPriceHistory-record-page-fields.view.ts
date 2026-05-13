import { defineView, ViewType } from 'twenty-sdk/define';
import { PROPERTY_PRICE_HISTORY_UNIVERSAL_IDENTIFIER } from '../objects/property-price-history.object';

export default defineView({
  universalIdentifier: '1cf23b4a-bb12-408d-8b59-b7edcdb273f2',
  name: 'Property Price History Record Page Fields',
  objectUniversalIdentifier: PROPERTY_PRICE_HISTORY_UNIVERSAL_IDENTIFIER,
  type: ViewType.FIELDS_WIDGET,
  icon: 'IconList',
  isCompact: false,
  fields: [],
});

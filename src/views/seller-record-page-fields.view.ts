import { defineView, ViewType } from 'twenty-sdk/define';
import { SELLER_UNIVERSAL_IDENTIFIER } from '../objects/seller.object';

export default defineView({
  universalIdentifier: '085f2f1c-c8e8-44ef-b2b4-16e8f7c1d7a1',
  name: 'Seller Record Page Fields',
  objectUniversalIdentifier: SELLER_UNIVERSAL_IDENTIFIER,
  type: ViewType.FIELDS_WIDGET,
  icon: 'IconList',
  isCompact: false,
  fields: [],
});

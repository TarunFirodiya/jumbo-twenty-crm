import { defineView, ViewType } from 'twenty-sdk/define';
import { BUYER_UNIVERSAL_IDENTIFIER } from '../objects/buyer.object';

export default defineView({
  universalIdentifier: '937de1aa-c635-4013-ab00-48ff4fd8f55e',
  name: 'Buyer Record Page Fields',
  objectUniversalIdentifier: BUYER_UNIVERSAL_IDENTIFIER,
  type: ViewType.FIELDS_WIDGET,
  icon: 'IconList',
  isCompact: false,
  fields: [],
});

import { defineView, ViewType } from 'twenty-sdk/define';
import { VISIT_UNIVERSAL_IDENTIFIER } from '../objects/visit.object';

export default defineView({
  universalIdentifier: 'bee7c2e5-b0e5-4db1-9858-e01a31088fec',
  name: 'Visit Record Page Fields',
  objectUniversalIdentifier: VISIT_UNIVERSAL_IDENTIFIER,
  type: ViewType.FIELDS_WIDGET,
  icon: 'IconList',
  isCompact: false,
  fields: [],
});

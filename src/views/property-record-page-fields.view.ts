import { defineView, ViewType } from 'twenty-sdk/define';
import { PROPERTY_UNIVERSAL_IDENTIFIER } from '../objects/property.object';

export default defineView({
  universalIdentifier: 'ed766921-de6f-4d37-b424-1f2815fcccb3',
  name: 'Property Record Page Fields',
  objectUniversalIdentifier: PROPERTY_UNIVERSAL_IDENTIFIER,
  type: ViewType.FIELDS_WIDGET,
  icon: 'IconList',
  isCompact: false,
  fields: [],
});

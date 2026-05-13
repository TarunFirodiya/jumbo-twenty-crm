import { defineView, ViewType } from 'twenty-sdk/define';
import { PROPERTY_CATALOGUE_UNIVERSAL_IDENTIFIER } from '../objects/property-catalogue.object';

export default defineView({
  universalIdentifier: '0d26ed4d-367f-491f-ab29-164de86445b6',
  name: 'Property Catalogue Record Page Fields',
  objectUniversalIdentifier: PROPERTY_CATALOGUE_UNIVERSAL_IDENTIFIER,
  type: ViewType.FIELDS_WIDGET,
  icon: 'IconList',
  isCompact: false,
  fields: [],
});

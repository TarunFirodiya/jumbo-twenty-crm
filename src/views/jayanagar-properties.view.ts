import { defineView, ViewType, ViewFilterOperand } from 'twenty-sdk/define';
import { PROPERTY_UNIVERSAL_IDENTIFIER, ZONE_FIELD_UNIVERSAL_IDENTIFIER } from '../objects/property.object';
import {
  NAME_FIELD_UNIVERSAL_IDENTIFIER,
  ADDRESS_FIELD_UNIVERSAL_IDENTIFIER,
  PRICE_FIELD_UNIVERSAL_IDENTIFIER,
  STATUS_FIELD_UNIVERSAL_IDENTIFIER,
  TYPE_FIELD_UNIVERSAL_IDENTIFIER,
} from '../objects/property.object';

export const JAYANAGAR_PROPERTIES_VIEW_ID = '99a2db84-2f84-4c91-9974-e9e448af7ef1';

export default defineView({
  universalIdentifier: JAYANAGAR_PROPERTIES_VIEW_ID,
  name: 'Jayanagar',
  objectUniversalIdentifier: PROPERTY_UNIVERSAL_IDENTIFIER,
  type: ViewType.TABLE,
  icon: 'IconMapPin',
  isCompact: false,
  fields: [
    { universalIdentifier: '8321f190-0fa8-45dd-8974-d70aa6948e17', fieldMetadataUniversalIdentifier: NAME_FIELD_UNIVERSAL_IDENTIFIER, position: 0, isVisible: true },
    { universalIdentifier: '5bf0e44e-cf71-45b9-9940-5e7fe3fcdedc', fieldMetadataUniversalIdentifier: ADDRESS_FIELD_UNIVERSAL_IDENTIFIER, position: 1, isVisible: true },
    { universalIdentifier: 'b56ee98d-9396-4d02-be89-ee01a9aa722d', fieldMetadataUniversalIdentifier: PRICE_FIELD_UNIVERSAL_IDENTIFIER, position: 2, isVisible: true },
    { universalIdentifier: 'ff5a1d7f-2289-4c9f-974f-e20810f6851e', fieldMetadataUniversalIdentifier: STATUS_FIELD_UNIVERSAL_IDENTIFIER, position: 3, isVisible: true },
    { universalIdentifier: '92ea89a2-6d94-41d6-8a24-571c8c73d008', fieldMetadataUniversalIdentifier: TYPE_FIELD_UNIVERSAL_IDENTIFIER, position: 4, isVisible: true },
  ],
  filters: [
    {
      universalIdentifier: 'de60218d-3bb6-49d8-8f33-a11045ad8b73',
      fieldMetadataUniversalIdentifier: ZONE_FIELD_UNIVERSAL_IDENTIFIER,
      operand: ViewFilterOperand.IS,
      value: 'JAYANAGAR',
    },
  ],
});

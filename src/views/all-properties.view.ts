import { defineView, ViewKey } from 'twenty-sdk/define';
import { PROPERTY_UNIVERSAL_IDENTIFIER } from '../objects/property.object';
import {
  NAME_FIELD_UNIVERSAL_IDENTIFIER,
  ADDRESS_FIELD_UNIVERSAL_IDENTIFIER,
  PRICE_FIELD_UNIVERSAL_IDENTIFIER,
  STATUS_FIELD_UNIVERSAL_IDENTIFIER,
  TYPE_FIELD_UNIVERSAL_IDENTIFIER,
  BEDROOMS_FIELD_UNIVERSAL_IDENTIFIER,
  BATHROOMS_FIELD_UNIVERSAL_IDENTIFIER,
  SQFT_FIELD_UNIVERSAL_IDENTIFIER,
} from '../objects/property.object';

export const ALL_PROPERTIES_VIEW_ID = '50330cea-0735-400c-8234-195de61f58c3';

export default defineView({
  universalIdentifier: ALL_PROPERTIES_VIEW_ID,
  name: 'All Properties',
  objectUniversalIdentifier: PROPERTY_UNIVERSAL_IDENTIFIER,
  key: ViewKey.INDEX,
  icon: 'IconHome',
  isCompact: false,
  fields: [
    { universalIdentifier: '50b9854f-4310-407e-9427-98823405864a', fieldMetadataUniversalIdentifier: NAME_FIELD_UNIVERSAL_IDENTIFIER, position: 0, isVisible: true },
    { universalIdentifier: '58ae00cb-5be5-474a-a90d-ee5708c0077c', fieldMetadataUniversalIdentifier: ADDRESS_FIELD_UNIVERSAL_IDENTIFIER, position: 1, isVisible: true },
    { universalIdentifier: '6f45669f-c9cb-49c9-9b7f-db0b7d943c94', fieldMetadataUniversalIdentifier: PRICE_FIELD_UNIVERSAL_IDENTIFIER, position: 2, isVisible: true },
    { universalIdentifier: '5ec11f87-490d-4a20-aed8-95704c2b5511', fieldMetadataUniversalIdentifier: STATUS_FIELD_UNIVERSAL_IDENTIFIER, position: 3, isVisible: true },
    { universalIdentifier: 'a9c78f35-2625-4040-a7c7-4714c4be89a7', fieldMetadataUniversalIdentifier: TYPE_FIELD_UNIVERSAL_IDENTIFIER, position: 4, isVisible: true },
    { universalIdentifier: '72afdcb8-365d-4fff-add8-264ba4a7b673', fieldMetadataUniversalIdentifier: BEDROOMS_FIELD_UNIVERSAL_IDENTIFIER, position: 5, isVisible: true },
    { universalIdentifier: 'a27f6c62-15b2-4dc4-8805-9b7e652f5f6a', fieldMetadataUniversalIdentifier: BATHROOMS_FIELD_UNIVERSAL_IDENTIFIER, position: 6, isVisible: true },
    { universalIdentifier: '4843b17a-f313-4e64-bd14-807e5129c9b4', fieldMetadataUniversalIdentifier: SQFT_FIELD_UNIVERSAL_IDENTIFIER, position: 7, isVisible: true },
  ],
});

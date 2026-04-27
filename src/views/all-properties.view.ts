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
  JUMBO_ID_FIELD,
  LISTING_TYPE_FIELD,
  ZONE_FIELD_UNIVERSAL_IDENTIFIER,
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
    { universalIdentifier: '5b795801-1004-4cb4-9575-b8d967f19387', fieldMetadataUniversalIdentifier: NAME_FIELD_UNIVERSAL_IDENTIFIER, position: 0, isVisible: true },
    { universalIdentifier: '2e09c25b-552e-439c-95df-65334d73d5c7', fieldMetadataUniversalIdentifier: JUMBO_ID_FIELD, position: 1, isVisible: true },
    { universalIdentifier: '0f84771a-6e8f-41bd-97f5-e09bc8c80af9', fieldMetadataUniversalIdentifier: PRICE_FIELD_UNIVERSAL_IDENTIFIER, position: 2, isVisible: true },
    { universalIdentifier: '2f736f8c-0085-416f-b12d-ac8798015083', fieldMetadataUniversalIdentifier: STATUS_FIELD_UNIVERSAL_IDENTIFIER, position: 3, isVisible: true },
    { universalIdentifier: '89fbaf79-8d86-483d-97a1-47feda8320d0', fieldMetadataUniversalIdentifier: LISTING_TYPE_FIELD, position: 4, isVisible: true },
    { universalIdentifier: '9d4cd474-1eb8-4867-b1a5-0ec15e504755', fieldMetadataUniversalIdentifier: TYPE_FIELD_UNIVERSAL_IDENTIFIER, position: 5, isVisible: true },
    { universalIdentifier: 'a7c78c78-2de5-43ab-8788-e4a7b5512d20', fieldMetadataUniversalIdentifier: ZONE_FIELD_UNIVERSAL_IDENTIFIER, position: 6, isVisible: true },
    { universalIdentifier: '0d3564c3-eba7-466f-81d2-6a8858c98193', fieldMetadataUniversalIdentifier: BEDROOMS_FIELD_UNIVERSAL_IDENTIFIER, position: 7, isVisible: true },
    { universalIdentifier: '2d5db7d3-9214-46cb-8755-a3760659bf7a', fieldMetadataUniversalIdentifier: BATHROOMS_FIELD_UNIVERSAL_IDENTIFIER, position: 8, isVisible: true },
    { universalIdentifier: 'f84771a6-6e8f-41bd-97f5-e09bc8c80af0', fieldMetadataUniversalIdentifier: SQFT_FIELD_UNIVERSAL_IDENTIFIER, position: 9, isVisible: true },
  ],
});

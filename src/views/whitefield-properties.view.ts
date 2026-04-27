import { defineView, ViewType, ViewFilterOperand } from 'twenty-sdk/define';
import { PROPERTY_UNIVERSAL_IDENTIFIER, ZONE_FIELD_UNIVERSAL_IDENTIFIER } from '../objects/property.object';
import {
  NAME_FIELD_UNIVERSAL_IDENTIFIER,
  ADDRESS_FIELD_UNIVERSAL_IDENTIFIER,
  PRICE_FIELD_UNIVERSAL_IDENTIFIER,
  STATUS_FIELD_UNIVERSAL_IDENTIFIER,
  TYPE_FIELD_UNIVERSAL_IDENTIFIER,
} from '../objects/property.object';

export const WHITEFIELD_PROPERTIES_VIEW_ID = 'c4a8d3e1-7b2f-4a9c-8e5d-1f3a6b7c9d2e';

export default defineView({
  universalIdentifier: WHITEFIELD_PROPERTIES_VIEW_ID,
  name: 'Whitefield',
  objectUniversalIdentifier: PROPERTY_UNIVERSAL_IDENTIFIER,
  type: ViewType.TABLE,
  icon: 'IconMapPin',
  isCompact: false,
  fields: [
    { universalIdentifier: 'af7ddb5f-919d-4f94-92e2-b0ee202e03eb', fieldMetadataUniversalIdentifier: NAME_FIELD_UNIVERSAL_IDENTIFIER, position: 0, isVisible: true },
    { universalIdentifier: 'a682863a-b0c0-41eb-af62-517d7d90805c', fieldMetadataUniversalIdentifier: ADDRESS_FIELD_UNIVERSAL_IDENTIFIER, position: 1, isVisible: true },
    { universalIdentifier: '75558962-66c7-46b2-8ca6-1f939bbb4dde', fieldMetadataUniversalIdentifier: PRICE_FIELD_UNIVERSAL_IDENTIFIER, position: 2, isVisible: true },
    { universalIdentifier: '200a40a4-9957-476f-9b9e-c51ac5c7c8e4', fieldMetadataUniversalIdentifier: STATUS_FIELD_UNIVERSAL_IDENTIFIER, position: 3, isVisible: true },
    { universalIdentifier: '7d090702-dcce-47a1-8e45-cab37466f5c1', fieldMetadataUniversalIdentifier: TYPE_FIELD_UNIVERSAL_IDENTIFIER, position: 4, isVisible: true },
  ],
  filters: [
    {
      universalIdentifier: 'bad34569-a424-4ee1-bcc3-18778a9fd8ff',
      fieldMetadataUniversalIdentifier: ZONE_FIELD_UNIVERSAL_IDENTIFIER,
      operand: ViewFilterOperand.IS,
      value: 'WHITEFIELD',
    },
  ],
});

import { defineView, ViewType, ViewFilterOperand } from 'twenty-sdk/define';
import { PROPERTY_UNIVERSAL_IDENTIFIER, ZONE_FIELD_UNIVERSAL_IDENTIFIER } from '../objects/property.object';
import {
  NAME_FIELD_UNIVERSAL_IDENTIFIER,
  ADDRESS_FIELD_UNIVERSAL_IDENTIFIER,
  PRICE_FIELD_UNIVERSAL_IDENTIFIER,
  STATUS_FIELD_UNIVERSAL_IDENTIFIER,
  TYPE_FIELD_UNIVERSAL_IDENTIFIER,
} from '../objects/property.object';

export const INDIRANAGAR_PROPERTIES_VIEW_ID = '1ae8e5de-b2f4-4fa8-9f65-d7821b49eb0b';

export default defineView({
  universalIdentifier: INDIRANAGAR_PROPERTIES_VIEW_ID,
  name: 'Indiranagar',
  objectUniversalIdentifier: PROPERTY_UNIVERSAL_IDENTIFIER,
  type: ViewType.TABLE,
  icon: 'IconMapPin',
  isCompact: false,
  fields: [
    { universalIdentifier: 'f92bf734-2c69-4052-8a2e-094d71023a6f', fieldMetadataUniversalIdentifier: NAME_FIELD_UNIVERSAL_IDENTIFIER, position: 0, isVisible: true },
    { universalIdentifier: '18b79e1d-4971-41ba-8010-704616b7943f', fieldMetadataUniversalIdentifier: ADDRESS_FIELD_UNIVERSAL_IDENTIFIER, position: 1, isVisible: true },
    { universalIdentifier: '6051ef6c-202f-4c63-be0c-4892bb6ff42e', fieldMetadataUniversalIdentifier: PRICE_FIELD_UNIVERSAL_IDENTIFIER, position: 2, isVisible: true },
    { universalIdentifier: '7d0b3cd2-03ef-4c1c-bb34-2b91894b0ce8', fieldMetadataUniversalIdentifier: STATUS_FIELD_UNIVERSAL_IDENTIFIER, position: 3, isVisible: true },
    { universalIdentifier: 'e22d8f48-6ddc-4599-8202-ac4eaea70f9d', fieldMetadataUniversalIdentifier: TYPE_FIELD_UNIVERSAL_IDENTIFIER, position: 4, isVisible: true },
  ],
  filters: [
    {
      universalIdentifier: 'f1c24ad2-0a64-442b-9e93-0b3e3327b261',
      fieldMetadataUniversalIdentifier: ZONE_FIELD_UNIVERSAL_IDENTIFIER,
      operand: ViewFilterOperand.IS,
      value: 'INDIRANAGAR',
    },
  ],
});

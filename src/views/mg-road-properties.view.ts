import { defineView, ViewType, ViewFilterOperand } from 'twenty-sdk/define';
import { PROPERTY_UNIVERSAL_IDENTIFIER, ZONE_FIELD_UNIVERSAL_IDENTIFIER } from '../objects/property.object';
import {
  NAME_FIELD_UNIVERSAL_IDENTIFIER,
  ADDRESS_FIELD_UNIVERSAL_IDENTIFIER,
  PRICE_FIELD_UNIVERSAL_IDENTIFIER,
  STATUS_FIELD_UNIVERSAL_IDENTIFIER,
  TYPE_FIELD_UNIVERSAL_IDENTIFIER,
} from '../objects/property.object';

export const MG_ROAD_PROPERTIES_VIEW_ID = 'd5b9e4f2-8c3a-5b8d-9f6e-2a4b7c8d9e3f';

export default defineView({
  universalIdentifier: MG_ROAD_PROPERTIES_VIEW_ID,
  name: 'MG Road',
  objectUniversalIdentifier: PROPERTY_UNIVERSAL_IDENTIFIER,
  type: ViewType.TABLE,
  icon: 'IconMapPin',
  isCompact: false,
  fields: [
    { universalIdentifier: '0c9b8e70-d6ff-4083-bd85-486b8323907d', fieldMetadataUniversalIdentifier: NAME_FIELD_UNIVERSAL_IDENTIFIER, position: 0, isVisible: true },
    { universalIdentifier: '0731a1b6-e1f9-4047-9f90-e3ae5991f961', fieldMetadataUniversalIdentifier: ADDRESS_FIELD_UNIVERSAL_IDENTIFIER, position: 1, isVisible: true },
    { universalIdentifier: '9e3502e5-3226-4d60-beff-2f446f93aa12', fieldMetadataUniversalIdentifier: PRICE_FIELD_UNIVERSAL_IDENTIFIER, position: 2, isVisible: true },
    { universalIdentifier: '3ad516e6-8312-4fb4-9e6d-4f87b85a61cb', fieldMetadataUniversalIdentifier: STATUS_FIELD_UNIVERSAL_IDENTIFIER, position: 3, isVisible: true },
    { universalIdentifier: 'e0ab4934-78a5-46b3-b1f9-51155caaaa9a', fieldMetadataUniversalIdentifier: TYPE_FIELD_UNIVERSAL_IDENTIFIER, position: 4, isVisible: true },
  ],
  filters: [
    {
      universalIdentifier: 'eee75a85-f5e8-4c7c-a6eb-c5e4fc7529ff',
      fieldMetadataUniversalIdentifier: ZONE_FIELD_UNIVERSAL_IDENTIFIER,
      operand: ViewFilterOperand.IS,
      value: 'MG_ROAD',
    },
  ],
});

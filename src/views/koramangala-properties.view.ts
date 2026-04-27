import { defineView, ViewType, ViewFilterOperand } from 'twenty-sdk/define';
import { PROPERTY_UNIVERSAL_IDENTIFIER, ZONE_FIELD_UNIVERSAL_IDENTIFIER } from '../objects/property.object';
import {
  NAME_FIELD_UNIVERSAL_IDENTIFIER,
  ADDRESS_FIELD_UNIVERSAL_IDENTIFIER,
  PRICE_FIELD_UNIVERSAL_IDENTIFIER,
  STATUS_FIELD_UNIVERSAL_IDENTIFIER,
  TYPE_FIELD_UNIVERSAL_IDENTIFIER,
} from '../objects/property.object';

export const KORAMANGALA_PROPERTIES_VIEW_ID = 'be1900c9-8545-44c4-82f1-4b65db8a3b4e';

export default defineView({
  universalIdentifier: KORAMANGALA_PROPERTIES_VIEW_ID,
  name: 'Koramangala',
  objectUniversalIdentifier: PROPERTY_UNIVERSAL_IDENTIFIER,
  type: ViewType.TABLE,
  icon: 'IconMapPin',
  isCompact: false,
  fields: [
    { universalIdentifier: '378cedfd-443f-46e9-a932-7ca13c7e4097', fieldMetadataUniversalIdentifier: NAME_FIELD_UNIVERSAL_IDENTIFIER, position: 0, isVisible: true },
    { universalIdentifier: '263ac359-baae-463c-a7ed-d88a6fe13ff1', fieldMetadataUniversalIdentifier: ADDRESS_FIELD_UNIVERSAL_IDENTIFIER, position: 1, isVisible: true },
    { universalIdentifier: '52125054-9e2c-48f2-9705-75fc7a3057e8', fieldMetadataUniversalIdentifier: PRICE_FIELD_UNIVERSAL_IDENTIFIER, position: 2, isVisible: true },
    { universalIdentifier: '9a667a94-bbb2-4ef3-8a26-4b1d0ea5b7ef', fieldMetadataUniversalIdentifier: STATUS_FIELD_UNIVERSAL_IDENTIFIER, position: 3, isVisible: true },
    { universalIdentifier: 'f64d17d8-5a26-4f1f-b356-7f9ee915d816', fieldMetadataUniversalIdentifier: TYPE_FIELD_UNIVERSAL_IDENTIFIER, position: 4, isVisible: true },
  ],
  filters: [
    {
      universalIdentifier: '4775bcaa-81e7-47f9-bd28-dc0fbf86655b',
      fieldMetadataUniversalIdentifier: ZONE_FIELD_UNIVERSAL_IDENTIFIER,
      operand: ViewFilterOperand.IS,
      value: 'KORAMANGALA',
    },
  ],
});

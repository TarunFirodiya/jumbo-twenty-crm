import { defineView, ViewType, ViewFilterOperand } from 'twenty-sdk/define';
import { PROPERTY_UNIVERSAL_IDENTIFIER, STATUS_FIELD_UNIVERSAL_IDENTIFIER, NAME_FIELD_UNIVERSAL_IDENTIFIER, PRICE_FIELD_UNIVERSAL_IDENTIFIER, ZONE_FIELD_UNIVERSAL_IDENTIFIER } from '../objects/property.object';

export const ACTIVE_LISTINGS_VIEW_ID = 'cc96dc72-ade2-4b38-9d64-93041a225a00';

export default defineView({
  universalIdentifier: ACTIVE_LISTINGS_VIEW_ID,
  name: 'Active Listings',
  objectUniversalIdentifier: PROPERTY_UNIVERSAL_IDENTIFIER,
  type: ViewType.TABLE,
  icon: 'IconHome',
  isCompact: false,
  fields: [
    { universalIdentifier: '81ec80e8-9623-4b55-923c-72a5b9531431', fieldMetadataUniversalIdentifier: NAME_FIELD_UNIVERSAL_IDENTIFIER, position: 0, isVisible: true },
    { universalIdentifier: 'ab5565df-496d-4adb-9529-473583c429ea', fieldMetadataUniversalIdentifier: PRICE_FIELD_UNIVERSAL_IDENTIFIER, position: 1, isVisible: true },
    { universalIdentifier: 'e940cc59-d278-4fd0-8fc5-2535f06d4dc4', fieldMetadataUniversalIdentifier: STATUS_FIELD_UNIVERSAL_IDENTIFIER, position: 2, isVisible: true },
    { universalIdentifier: '6bb3e794-e1bb-4b66-b0b0-6e2147bca41d', fieldMetadataUniversalIdentifier: ZONE_FIELD_UNIVERSAL_IDENTIFIER, position: 3, isVisible: true },
  ],
  filters: [
    {
      universalIdentifier: 'c9886a58-8f68-49b8-b1e8-aaa85987f005',
      fieldMetadataUniversalIdentifier: STATUS_FIELD_UNIVERSAL_IDENTIFIER,
      operand: ViewFilterOperand.IS,
      value: 'LISTED',
    },
  ],
});

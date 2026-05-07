import { defineField, FieldType, RelationType } from 'twenty-sdk/define';
import { PROPERTY_PRICE_HISTORY_UNIVERSAL_IDENTIFIER } from '../objects/property-price-history.object';
import { PROPERTY_UNIVERSAL_IDENTIFIER } from '../objects/property.object';
import { PROPERTY_ON_PRICE_HISTORY_FIELD_ID, PRICE_HISTORIES_ON_PROPERTY_FIELD_ID } from './property-on-price-history.field';

export default defineField({
  universalIdentifier: PRICE_HISTORIES_ON_PROPERTY_FIELD_ID,
  objectUniversalIdentifier: PROPERTY_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'priceHistories',
  label: 'Price Histories',
  description: 'Price history records for this property',
  icon: 'IconTrendingUp',
  relationTargetObjectMetadataUniversalIdentifier: PROPERTY_PRICE_HISTORY_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: PROPERTY_ON_PRICE_HISTORY_FIELD_ID,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});

import { defineObject, FieldType } from 'twenty-sdk/define';

export const PROPERTY_PRICE_HISTORY_UNIVERSAL_IDENTIFIER = 'c17caf56-4a8d-4818-aff0-9e720f9a3d04';
export const PPH_NAME_FIELD = 'b42755c3-d4dd-41e2-9b7a-e95fe5b0b873';
export const PPH_PRICE_FIELD = '12516772-98bc-40f7-a172-e6c93e25ea4a';
export const PPH_UPDATED_ON_DATE_FIELD = 'd2bde2d9-439a-469b-96b5-e76de072179a';

export default defineObject({
  universalIdentifier: PROPERTY_PRICE_HISTORY_UNIVERSAL_IDENTIFIER,
  nameSingular: 'propertyPriceHistory',
  namePlural: 'propertyPriceHistories',
  labelSingular: 'Property Price History',
  labelPlural: 'Property Price Histories',
  description: 'Structured log of price changes for a property',
  icon: 'IconTrendingUp',
  labelIdentifierFieldMetadataUniversalIdentifier: PPH_NAME_FIELD,
  fields: [
    {
      universalIdentifier: PPH_NAME_FIELD,
      type: FieldType.TEXT,
      label: 'Name',
      description: 'Auto-generated name for this price history entry',
      icon: 'IconText',
      name: 'name',
    },
    {
      universalIdentifier: PPH_PRICE_FIELD,
      type: FieldType.CURRENCY,
      label: 'Price',
      description: 'Price at the time of update',
      icon: 'IconCurrencyRupee',
      name: 'price',
    },
    {
      universalIdentifier: PPH_UPDATED_ON_DATE_FIELD,
      type: FieldType.DATE_TIME,
      label: 'Updated On',
      description: 'When the price was updated',
      icon: 'IconCalendar',
      name: 'updatedOnDate',
    },
  ],
});

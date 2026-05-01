import { defineObject, FieldType } from 'twenty-sdk/define';

export const CLASSIFIED_LISTING_UNIVERSAL_IDENTIFIER = '69901164-6ea2-4a2c-884b-ca78583a9989';
export const CL_LISTING_ID_FIELD = '2a5c90dd-a1e2-4054-bf61-4cb14c7a1bda';
export const CL_PLATFORM_FIELD = '77bb46a8-bf74-4d67-9eac-04913b0d2c6d';
export const CL_LISTED_ON_FIELD = '57cbfb9a-403b-4a14-b00f-ed618d2ffb33';
export const CL_URL_FIELD = 'd7008386-262b-4175-bd41-fce3e4018d7a';
export const CL_VERIFIED_FIELD = '9b27e5ea-dde9-4fcc-941c-99682211e0fa';
export const CL_DELISTED_ON_FIELD = '8deeebef-920a-48f7-a65d-0a74ddd39929';
export const CL_PRICE_QUOTED_FIELD = 'af16bdfd-330e-4236-9220-a69ecd0ae939';
export const CL_ACTUAL_PRICE_FIELD = '0aadef59-8942-4c4c-84f3-24965fb3edf5';

enum ClassifiedPlatform {
  HOUSING = 'HOUSING',
  NINETYNINE_ACRES = 'NINETYNINE_ACRES',
  MAGICBRICKS = 'MAGICBRICKS',
}

export default defineObject({
  universalIdentifier: CLASSIFIED_LISTING_UNIVERSAL_IDENTIFIER,
  nameSingular: 'classifiedListing',
  namePlural: 'classifiedListings',
  labelSingular: 'Classified Listing',
  labelPlural: 'Classified Listings',
  description: 'External platform listing for a property',
  icon: 'IconExternalLink',
  labelIdentifierFieldMetadataUniversalIdentifier: CL_LISTING_ID_FIELD,
  fields: [
    {
      universalIdentifier: CL_LISTING_ID_FIELD,
      type: FieldType.TEXT,
      label: 'Listing ID',
      description: 'Platform listing ID',
      icon: 'IconHash',
      name: 'listingId',
    },
    {
      universalIdentifier: CL_PLATFORM_FIELD,
      type: FieldType.SELECT,
      label: 'Platform',
      icon: 'IconWorld',
      options: [
        { id: '01f0df45-a45b-4bb8-b0b4-fb897c117658', value: ClassifiedPlatform.HOUSING, label: 'Housing.com', position: 0, color: 'blue' },
        { id: 'da57d165-8ba8-4cea-a4f5-5145078b7612', value: ClassifiedPlatform.NINETYNINE_ACRES, label: '99Acres', position: 1, color: 'green' },
        { id: '70a9d0c7-8230-4571-9fa4-b5878a60272f', value: ClassifiedPlatform.MAGICBRICKS, label: 'MagicBricks', position: 2, color: 'orange' },
      ],
      name: 'platform',
    },
    {
      universalIdentifier: CL_LISTED_ON_FIELD,
      type: FieldType.DATE_TIME,
      label: 'Listed On',
      description: 'When the listing was published',
      icon: 'IconCalendar',
      name: 'listedOn',
    },
    {
      universalIdentifier: CL_URL_FIELD,
      type: FieldType.TEXT,
      label: 'URL',
      description: 'Listing URL',
      icon: 'IconLink',
      name: 'url',
    },
    {
      universalIdentifier: CL_VERIFIED_FIELD,
      type: FieldType.BOOLEAN,
      label: 'Verified',
      description: 'Whether the listing has been verified',
      icon: 'IconCheck',
      name: 'verified',
    },
    {
      universalIdentifier: CL_DELISTED_ON_FIELD,
      type: FieldType.DATE_TIME,
      label: 'Delisted On',
      description: 'When the listing was removed',
      icon: 'IconCalendarOff',
      name: 'delistedOn',
    },
    {
      universalIdentifier: CL_PRICE_QUOTED_FIELD,
      type: FieldType.CURRENCY,
      label: 'Price Quoted',
      description: 'Price shown on platform',
      icon: 'IconCurrencyRupee',
      name: 'priceQuoted',
    },
    {
      universalIdentifier: CL_ACTUAL_PRICE_FIELD,
      type: FieldType.CURRENCY,
      label: 'Actual Price',
      description: 'Jumbo price',
      icon: 'IconCurrencyRupee',
      name: 'actualPrice',
    },
  ],
});

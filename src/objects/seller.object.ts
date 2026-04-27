import { defineObject, FieldType } from 'twenty-sdk/define';

enum SellerStage {
  NEW_ENQUIRY = 'NEW_ENQUIRY',
  PROPERTY_EVALUATION = 'PROPERTY_EVALUATION',
  LISTING_AGREEMENT_SIGNED = 'LISTING_AGREEMENT_SIGNED',
  MARKETING_LIVE = 'MARKETING_LIVE',
  UNDER_OFFER = 'UNDER_OFFER',
  SOLD = 'SOLD',
  ON_HOLD = 'ON_HOLD',
  DROPPED = 'DROPPED',
}

enum SellerDropReason {
  PRICE_TOO_HIGH = 'PRICE_TOO_HIGH',
  WENT_WITH_COMPETITOR = 'WENT_WITH_COMPETITOR',
  NOT_SELLING_NOW = 'NOT_SELLING_NOW',
  UNREACHABLE = 'UNREACHABLE',
  DUPLICATE = 'DUPLICATE',
  PAPERWORK_ISSUE = 'PAPERWORK_ISSUE',
}

enum SellerTimeline {
  IMMEDIATE = 'IMMEDIATE',
  ONE_MONTH = 'ONE_MONTH',
  THREE_MONTHS = 'THREE_MONTHS',
  SIX_MONTHS = 'SIX_MONTHS',
  FLEXIBLE = 'FLEXIBLE',
}

export const SELLER_UNIVERSAL_IDENTIFIER = '6ee7ce30-9712-4edc-b49c-6f125ff06e9c';
export const SELLER_NAME_FIELD = 'b17fb3d7-b544-49ca-8a1e-1df01721cee0';
export const SELLER_STAGE_FIELD = '4b596601-61ea-4119-8175-d6bb73310d3e';
export const SELLER_DROP_REASON_FIELD = '601e02de-9ee6-4328-89b6-3464577833ba';
export const SELLER_EXPECTED_PRICE_FIELD = '5a93ecd2-f26e-48a0-9578-fe6b307f1a72';
export const SELLER_TIMELINE_FIELD = '706cfa49-503a-468f-a2fa-c5c2b79db8fd';
export const SELLER_PROPERTY_ADDRESS_FIELD = '6bdf8162-1d95-4995-9619-a94feb638eb4';
export const SELLER_NOTES_FIELD = '1f784d96-986c-486e-83bf-7ce62d6c3abc';

export default defineObject({
  universalIdentifier: SELLER_UNIVERSAL_IDENTIFIER,
  nameSingular: 'seller',
  namePlural: 'sellers',
  labelSingular: 'Seller',
  labelPlural: 'Sellers',
  description: 'Property seller profile and funnel',
  icon: 'IconUserDollar',
  labelIdentifierFieldMetadataUniversalIdentifier: SELLER_NAME_FIELD,
  fields: [
    {
      universalIdentifier: SELLER_NAME_FIELD,
      type: FieldType.TEXT,
      label: 'Seller Name',
      description: 'Display name for the seller',
      icon: 'IconUserDollar',
      name: 'name',
    },
    {
      universalIdentifier: SELLER_STAGE_FIELD,
      type: FieldType.SELECT,
      label: 'Stage',
      icon: 'IconStages',
      defaultValue: `'${SellerStage.NEW_ENQUIRY}'`,
      options: [
        { id: '900cbcb4-93db-4913-be7e-828386a06f75', value: SellerStage.NEW_ENQUIRY, label: 'New Enquiry', position: 0, color: 'blue' },
        { id: '044656c6-c55b-4700-a6a5-763c6ab8c7e2', value: SellerStage.PROPERTY_EVALUATION, label: 'Property Evaluation', position: 1, color: 'yellow' },
        { id: 'aea77b47-e9d9-4bd8-b341-7bc23582b8b1', value: SellerStage.LISTING_AGREEMENT_SIGNED, label: 'Listing Agreement Signed', position: 2, color: 'purple' },
        { id: '393b218a-b818-4f5f-bad0-3a52484a3d29', value: SellerStage.MARKETING_LIVE, label: 'Marketing Live', position: 3, color: 'cyan' },
        { id: '6e658cef-667c-4f5a-a36e-c48aaaaea545', value: SellerStage.UNDER_OFFER, label: 'Under Offer', position: 4, color: 'orange' },
        { id: '8de6467d-03fe-4f71-8517-74b168b7fffa', value: SellerStage.SOLD, label: 'Sold', position: 5, color: 'green' },
        { id: '7f29dab8-1a2c-40a9-b8a2-2193d9389f9e', value: SellerStage.ON_HOLD, label: 'On Hold', position: 6, color: 'gray' },
        { id: 'd26add9a-050c-4a26-88f3-2d4dd53d7a37', value: SellerStage.DROPPED, label: 'Dropped', position: 7, color: 'red' },
      ],
      name: 'stage',
    },
    {
      universalIdentifier: SELLER_DROP_REASON_FIELD,
      type: FieldType.SELECT,
      label: 'Drop Reason',
      icon: 'IconX',
      isNullable: true,
      defaultValue: null,
      options: [
        { id: '57839fb6-e9e8-426e-951c-78dd5169bb7f', value: SellerDropReason.PRICE_TOO_HIGH, label: 'Price Too High', position: 0, color: 'red' },
        { id: 'cfffff36-d125-4880-9bbc-5d415bf1189a', value: SellerDropReason.WENT_WITH_COMPETITOR, label: 'Went With Competitor', position: 1, color: 'orange' },
        { id: '53e8caf5-a8a2-4811-89be-bdb47a2c7b01', value: SellerDropReason.NOT_SELLING_NOW, label: 'Not Selling Now', position: 2, color: 'gray' },
        { id: 'af973fd6-45fc-4b62-9b72-b00412b3edeb', value: SellerDropReason.UNREACHABLE, label: 'Unreachable', position: 3, color: 'gray' },
        { id: '49be127f-b800-444d-8741-7b8f48ef3fb8', value: SellerDropReason.DUPLICATE, label: 'Duplicate', position: 4, color: 'gray' },
        { id: '1b88c4fd-1fdc-42b7-8a13-58caa4450820', value: SellerDropReason.PAPERWORK_ISSUE, label: 'Paperwork Issue', position: 5, color: 'yellow' },
      ],
      name: 'dropReason',
    },
    {
      universalIdentifier: SELLER_EXPECTED_PRICE_FIELD,
      type: FieldType.CURRENCY,
      label: 'Expected Price',
      description: 'Expected selling price in INR',
      icon: 'IconCurrencyRupee',
      name: 'expectedPrice',
    },
    {
      universalIdentifier: SELLER_TIMELINE_FIELD,
      type: FieldType.SELECT,
      label: 'Timeline',
      icon: 'IconCalendar',
      options: [
        { id: '811c0a01-dc03-487a-9d5a-21aca5d73842', value: SellerTimeline.IMMEDIATE, label: 'Immediate', position: 0, color: 'red' },
        { id: '890b8127-28b6-4b32-978b-4852dd3dd8c4', value: SellerTimeline.ONE_MONTH, label: '1 Month', position: 1, color: 'orange' },
        { id: 'e5e33ffa-69f4-43d8-995a-bb474eb4c3c5', value: SellerTimeline.THREE_MONTHS, label: '3 Months', position: 2, color: 'yellow' },
        { id: 'ef735c82-4d84-490b-9e2d-3d62c5713ee6', value: SellerTimeline.SIX_MONTHS, label: '6 Months', position: 3, color: 'blue' },
        { id: 'a7908c8d-b141-4ff0-b7fa-9e89fdd4f0b1', value: SellerTimeline.FLEXIBLE, label: 'Flexible', position: 4, color: 'green' },
      ],
      name: 'timeline',
    },
    {
      universalIdentifier: SELLER_PROPERTY_ADDRESS_FIELD,
      type: FieldType.ADDRESS,
      label: 'Property Address',
      description: 'Address of the property being sold',
      icon: 'IconMapPin',
      name: 'propertyAddress',
    },
    {
      universalIdentifier: SELLER_NOTES_FIELD,
      type: FieldType.RICH_TEXT,
      label: 'Notes',
      description: 'Seller notes and context',
      icon: 'IconNotes',
      name: 'notes',
    },
  ],
});

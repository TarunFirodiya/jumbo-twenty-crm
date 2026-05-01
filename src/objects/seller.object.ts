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

enum OnboardingStatus {
  IDENTIFIED = 'IDENTIFIED',
  CONTACTED = 'CONTACTED',
  ACTIVE = 'ACTIVE',
  DROPPED = 'DROPPED',
  RNR = 'RNR',
}

enum SellerSource {
  NINETYNINE_ACRES = 'NINETYNINE_ACRES',
  HOUSING = 'HOUSING',
  MAGICBRICKS = 'MAGICBRICKS',
  MYGATE = 'MYGATE',
  REFERRAL_BUYER = 'REFERRAL_BUYER',
  REFERRAL_SELLER = 'REFERRAL_SELLER',
  REFERRAL_AP = 'REFERRAL_AP',
  WEBSITE = 'WEBSITE',
  INSTAGRAM = 'INSTAGRAM',
  RESALE_BOARD = 'RESALE_BOARD',
  WA_COMMUNITY = 'WA_COMMUNITY',
  REDDIT = 'REDDIT',
  ON_SITE = 'ON_SITE',
  FRIEND_RELATIVE = 'FRIEND_RELATIVE',
}

enum SellerUrgency {
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
export const SELLER_PROPERTY_FIELD = '1b54e5ce-be1c-4616-8cb5-5a3ce311ebf6';
export const SELLER_MOTIVATION_FIELD = '357f3bb8-f18b-416c-891d-59e609838e8c';
export const SELLER_HOW_HEARD_FIELD = '370f96e3-cc5d-4a8a-bf94-4fe247ee444c';
export const SELLER_IS_OWNER_FIELD = '4e83b3a3-8694-44f5-a12e-761264afb698';
export const SELLER_NOTES_FIELD = '1f784d96-986c-486e-83bf-7ce62d6c3abc';
export const SELLER_PHONE_FIELD = 'fb05cf64-c06b-4eda-9a02-79382d9a36c4';
export const SELLER_EMAIL_FIELD = '1552ac2c-6808-403d-b3db-629d684797c6';
export const SELLER_ONBOARDING_STATUS_FIELD = '881d3524-2ea2-4740-80f7-f23775e1562e';
export const SELLER_ONBOARDING_DATE_FIELD = 'f4d9c312-9d63-4c52-b538-3f7e158387cc';
export const SELLER_SOURCE_FIELD = '8fdc1eaf-02af-4cf3-b1bd-31afb7c3334f';
export const SELLER_FOLLOW_UP_DATE_FIELD = '1e2cf7b5-9dd2-4b82-876c-d3357368a054';
export const SELLER_SELLER_URGENCY_FIELD = 'd24c3a57-fd10-42ac-a894-3ccb6e83ade0';
export const SELLER_RELATIONSHIP_MANAGER_FIELD = '57cb224c-cf0d-4d93-ad04-2f9845a01aa6';
export const SELLER_REFERRAL_SOURCE_FIELD = '73396508-4246-408b-95df-644e031ccc50';

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
        { id: '393b218a-b818-4f5f-bad0-3a52484a3d29', value: SellerStage.MARKETING_LIVE, label: 'Marketing Live', position: 3, color: 'blue' },
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
      description: 'Address of the property being sold (free text for initial capture)',
      icon: 'IconMapPin',
      name: 'propertyAddress',
    },
    {
      universalIdentifier: SELLER_MOTIVATION_FIELD,
      type: FieldType.SELECT,
      label: 'Motivation',
      icon: 'IconHeartHandshake',
      isNullable: true,
      defaultValue: null,
      options: [
        { id: 'c33dc5eb-a844-4718-bcfc-b3a1dc42e408', value: 'UPGRADE', label: 'Upgrade', position: 0, color: 'blue' },
        { id: '61851309-e50e-41d2-8846-9afaf22525f4', value: 'DOWNGRADE', label: 'Downgrade', position: 1, color: 'green' },
        { id: '8285987b-6431-4fdc-8d82-9eef15d5f098', value: 'INVESTMENT', label: 'Investment', position: 2, color: 'orange' },
        { id: 'a1505dc8-4263-4476-aa03-dc58a70ae6e4', value: 'RELOCATION', label: 'Relocation', position: 3, color: 'purple' },
        { id: '4f59a921-84e7-40f2-a706-d6300001fc01', value: 'FINANCIAL', label: 'Financial', position: 4, color: 'red' },
        { id: 'f82b77c3-cdec-472a-b95a-0cc142e7c26f', value: 'INHERITANCE', label: 'Inheritance', position: 5, color: 'gray' },
      ],
      name: 'motivation',
    },
    {
      universalIdentifier: SELLER_HOW_HEARD_FIELD,
      type: FieldType.SELECT,
      label: 'How Did They Hear About Us',
      icon: 'IconVolume',
      isNullable: true,
      defaultValue: null,
      options: [
        { id: '2f738798-854e-488e-93fc-180497e8ebfb', value: 'REFERRAL', label: 'Referral', position: 0, color: 'blue' },
        { id: 'b7e5997f-2c49-410d-b915-177d1d5f200a', value: 'SOCIAL_MEDIA', label: 'Social Media', position: 1, color: 'green' },
        { id: '9ffd9828-e9ad-4ccf-bb28-cb4ce5e775a5', value: 'PORTAL', label: 'Property Portal', position: 2, color: 'orange' },
        { id: '01deeb60-4367-4983-8302-f1d785a71069', value: 'WALK_IN', label: 'Walk In', position: 3, color: 'purple' },
        { id: '6b539a56-2a57-49d4-8795-f55600e6278c', value: 'ADVERTISING', label: 'Advertising', position: 4, color: 'red' },
      ],
      name: 'howHeard',
    },
    {
      universalIdentifier: SELLER_IS_OWNER_FIELD,
      type: FieldType.BOOLEAN,
      label: 'Is Owner',
      description: 'Is this person the legal owner of the property?',
      icon: 'IconUserCheck',
      name: 'isOwner',
    },
    {
      universalIdentifier: SELLER_NOTES_FIELD,
      type: FieldType.RICH_TEXT,
      label: 'Notes',
      description: 'Seller notes and context',
      icon: 'IconNotes',
      name: 'notes',
    },
    {
      universalIdentifier: SELLER_PHONE_FIELD,
      type: FieldType.TEXT,
      label: 'Phone',
      description: 'Seller phone number',
      icon: 'IconPhone',
      name: 'phone',
    },
    {
      universalIdentifier: SELLER_EMAIL_FIELD,
      type: FieldType.TEXT,
      label: 'Email',
      description: 'Seller email address',
      icon: 'IconMail',
      name: 'email',
    },
    {
      universalIdentifier: SELLER_ONBOARDING_STATUS_FIELD,
      type: FieldType.SELECT,
      label: 'Onboarding Status',
      description: 'Current onboarding stage',
      icon: 'IconStatusChange',
      defaultValue: `'${OnboardingStatus.IDENTIFIED}'`,
      options: [
        { id: 'd7916e90-1123-4965-81fc-38675adf67ff', value: OnboardingStatus.IDENTIFIED, label: 'Identified', position: 0, color: 'blue' },
        { id: '842b1ceb-ccae-4567-86b8-0882765195dc', value: OnboardingStatus.CONTACTED, label: 'Contacted', position: 1, color: 'yellow' },
        { id: 'd971cafd-6715-4408-875d-e1aa53674d7d', value: OnboardingStatus.ACTIVE, label: 'Active', position: 2, color: 'green' },
        { id: 'c9892bd3-6007-4ace-bac6-bb1d59f587c3', value: OnboardingStatus.DROPPED, label: 'Dropped', position: 3, color: 'red' },
        { id: '64e08188-95e2-4af3-8eda-48107bd42acb', value: OnboardingStatus.RNR, label: 'RnR', position: 4, color: 'gray' },
      ],
      name: 'onboardingStatus',
    },
    {
      universalIdentifier: SELLER_ONBOARDING_DATE_FIELD,
      type: FieldType.DATE,
      label: 'Onboarding Date',
      description: 'When seller was onboarded',
      icon: 'IconCalendar',
      name: 'onboardingDate',
    },
    {
      universalIdentifier: SELLER_SOURCE_FIELD,
      type: FieldType.SELECT,
      label: 'Source',
      description: 'Where this seller came from',
      icon: 'IconSource',
      options: [
        { id: '662788dc-a76e-4127-a162-84cae4492528', value: SellerSource.NINETYNINE_ACRES, label: '99Acres', position: 0, color: 'blue' },
        { id: 'b07d20a1-6e24-4095-9cfc-a36dc5de2e83', value: SellerSource.HOUSING, label: 'Housing', position: 1, color: 'green' },
        { id: 'f589eaed-efcd-4d66-9d6e-2f537a554a5d', value: SellerSource.MAGICBRICKS, label: 'MagicBricks', position: 2, color: 'orange' },
        { id: '225cb770-bf6f-4ca0-bea1-374067d86952', value: SellerSource.MYGATE, label: 'MyGate', position: 3, color: 'purple' },
        { id: '099f8bc2-3df4-464f-870d-4ec8dd1f9e7f', value: SellerSource.REFERRAL_BUYER, label: 'Referral - Buyer', position: 4, color: 'yellow' },
        { id: 'de9a1119-9861-48f3-a525-f0ea06c3bf0b', value: SellerSource.REFERRAL_SELLER, label: 'Referral - Seller', position: 5, color: 'yellow' },
        { id: '0d647291-7932-47da-a484-dba1b10ae380', value: SellerSource.REFERRAL_AP, label: 'Referral - AP', position: 6, color: 'yellow' },
        { id: 'ce4fa72b-a9d8-49db-b64a-616105ae28d2', value: SellerSource.WEBSITE, label: 'Website', position: 7, color: 'pink' },
        { id: '49374f37-630c-416f-a386-42d3a4f16f60', value: SellerSource.INSTAGRAM, label: 'Instagram', position: 8, color: 'pink' },
        { id: '43b56777-f528-472e-80a8-c3119d9a684a', value: SellerSource.RESALE_BOARD, label: 'Resale Board', position: 9, color: 'gray' },
        { id: 'f0a5bbf9-1ed5-4d86-8649-eeeb855f9b58', value: SellerSource.WA_COMMUNITY, label: 'WA Community', position: 10, color: 'green' },
        { id: '09654ade-f67f-4930-a263-712c174f1805', value: SellerSource.REDDIT, label: 'Reddit', position: 11, color: 'orange' },
        { id: '54f9abc7-92f3-425c-a07a-998fe11f1db1', value: SellerSource.ON_SITE, label: 'On Site', position: 12, color: 'blue' },
        { id: '9ce076f6-a5b4-45e3-bdcd-4aacc751e4e0', value: SellerSource.FRIEND_RELATIVE, label: 'Friend/Relative', position: 13, color: 'purple' },
      ],
      name: 'source',
    },
    {
      universalIdentifier: SELLER_FOLLOW_UP_DATE_FIELD,
      type: FieldType.DATE_TIME,
      label: 'Follow Up Date',
      description: 'Next follow up scheduled',
      icon: 'IconCalendar',
      name: 'followUpDate',
    },
    {
      universalIdentifier: SELLER_SELLER_URGENCY_FIELD,
      type: FieldType.SELECT,
      label: 'Seller Urgency',
      description: 'How urgent is the sale',
      icon: 'IconClock',
      options: [
        { id: '5a92e524-4723-4ef2-9881-ebab9e038edb', value: SellerUrgency.IMMEDIATE, label: 'Immediate', position: 0, color: 'red' },
        { id: '99990add-bea0-48a6-9282-57c7f73f7ff5', value: SellerUrgency.ONE_MONTH, label: '< 1 month', position: 1, color: 'orange' },
        { id: '81a2d205-cae2-4a9b-a73a-ee5be1152281', value: SellerUrgency.THREE_MONTHS, label: '< 3 months', position: 2, color: 'yellow' },
        { id: '0051ce78-8015-4aa1-a3b6-1b29da3ed7a9', value: SellerUrgency.SIX_MONTHS, label: '< 6 months', position: 3, color: 'blue' },
        { id: 'ec9e0e95-d3e5-4338-9706-9bbe7fcb41c4', value: SellerUrgency.FLEXIBLE, label: 'Flexible', position: 4, color: 'green' },
      ],
      name: 'sellerUrgency',
    },
  ],
});

import { defineObject, FieldType } from 'twenty-sdk/define';

enum PropertyStatus {
  NEW = 'NEW',
  LISTED = 'LISTED',
  UNDER_OFFER = 'UNDER_OFFER',
  SOLD = 'SOLD',
  WITHDRAWN = 'WITHDRAWN',
}

enum PropertyType {
  APARTMENT = 'APARTMENT',
  VILLA = 'VILLA',
  PENTHOUSE = 'PENTHOUSE',
  STUDIO = 'STUDIO',
  COMMERCIAL = 'COMMERCIAL',
}

enum HomeView {
  POOL = 'POOL',
  GARDEN = 'GARDEN',
  ROAD = 'ROAD',
  CITY = 'CITY',
  PARK = 'PARK',
  LAKE = 'LAKE',
}

enum Facing {
  NORTH = 'NORTH',
  SOUTH = 'SOUTH',
  EAST = 'EAST',
  WEST = 'WEST',
  NORTH_EAST = 'NORTH_EAST',
  NORTH_WEST = 'NORTH_WEST',
  SOUTH_EAST = 'SOUTH_EAST',
  SOUTH_WEST = 'SOUTH_WEST',
}

enum HomeType {
  RESALE = 'RESALE',
  NEW = 'NEW',
  PLOT = 'PLOT',
}

enum Occupancy {
  SELF = 'SELF',
  TENANT = 'TENANT',
  VACANT = 'VACANT',
}

enum Furnishing {
  UNFURNISHED = 'UNFURNISHED',
  SEMI_FURNISHED = 'SEMI_FURNISHED',
  FULLY_FURNISHED = 'FULLY_FURNISHED',
}

enum KeysWith {
  OWNER = 'OWNER',
  AGENT = 'AGENT',
  SECURITY = 'SECURITY',
}

enum InventoryType {
  EXCLUSIVE = 'EXCLUSIVE',
  OPEN = 'OPEN',
  CO_BROKE = 'CO_BROKE',
}

enum ListingType {
  RESERVE = 'RESERVE',
  CERTIFIED = 'CERTIFIED',
}

enum BalconyView {
  POOL = 'POOL',
  GARDEN = 'GARDEN',
  LAKE = 'LAKE',
  MAIN_ROAD = 'MAIN_ROAD',
  AMENITIES = 'AMENITIES',
  BUILDING = 'BUILDING',
  GREEN_LANDSCAPE = 'GREEN_LANDSCAPE',
}

enum PropertyLifecycleStatus {
  NA = 'NA',
  PROPOSAL_SENT = 'PROPOSAL_SENT',
  INSPECTION_PENDING = 'INSPECTION_PENDING',
  CATALOGUE_PENDING = 'CATALOGUE_PENDING',
  LIVE = 'LIVE',
}

enum OffboardingReason {
  SOLD_BY_OWNER = 'SOLD_BY_OWNER',
  SOLD_BY_BROKER = 'SOLD_BY_BROKER',
  PLAN_CANCELED = 'PLAN_CANCELED',
  SOLD_BY_JUMBO = 'SOLD_BY_JUMBO',
  SOLD_BY_CP = 'SOLD_BY_CP',
  RENTED_OUT = 'RENTED_OUT',
  BROKER_UNIT = 'BROKER_UNIT',
  OWNER_NON_RESPONSIVE = 'OWNER_NON_RESPONSIVE',
}

enum SellerUrgency {
  LESS_THAN_1M = 'LESS_THAN_1M',
  LESS_THAN_3M = 'LESS_THAN_3M',
  LESS_THAN_6M = 'LESS_THAN_6M',
  BEST_PRICE = 'BEST_PRICE',
}

export const PROPERTY_UNIVERSAL_IDENTIFIER = '32e135d0-16b0-4c08-a90f-d4505931bae0';

// Existing field IDs
export const NAME_FIELD_UNIVERSAL_IDENTIFIER = '1ea8237c-d043-4305-a788-ccac4bddd29a';
export const ADDRESS_FIELD_UNIVERSAL_IDENTIFIER = '5d2643e9-ae70-48f4-afe7-b44f741ad44a';
export const PRICE_FIELD_UNIVERSAL_IDENTIFIER = 'd314dd63-0354-4fef-9ce4-afb58e9b93e6';
export const BEDROOMS_FIELD_UNIVERSAL_IDENTIFIER = '17b4e5dd-6ab4-48c4-beb1-7694c6d7e57f';
export const BATHROOMS_FIELD_UNIVERSAL_IDENTIFIER = '26896f45-660d-464e-9378-312639ff4d53';
export const SQFT_FIELD_UNIVERSAL_IDENTIFIER = 'ab92e8a5-ae85-40a7-a982-565d41d50d36';
export const STATUS_FIELD_UNIVERSAL_IDENTIFIER = '79b21e74-9893-4211-a933-c4bff831a03d';
export const TYPE_FIELD_UNIVERSAL_IDENTIFIER = '62dd2bc0-f87a-499f-a2ab-735e7b53c562';
export const AMENITIES_FIELD_UNIVERSAL_IDENTIFIER = '5cdc44ba-9574-4f38-8cc4-f6c1f805fafb';
export const ZONE_FIELD_UNIVERSAL_IDENTIFIER = 'b9746f33-ad4f-44c5-99dc-008ef261d91e';
export const FILES_FIELD_UNIVERSAL_IDENTIFIER = '29d9b019-ac02-45bd-a242-81c5bb459c23';

// New field IDs
export const JUMBO_ID_FIELD = '03d065e1-2305-49d7-9e83-84f1a3aa6515';
export const TOWER_FIELD = '2f3aa740-be27-4acd-ba59-f69a06c0563c';
export const VIEW_FIELD = '278a250e-fb0c-4b86-a878-ff027e1096e5';
export const MSP_FIELD = '53d6aa40-4d13-4374-b1f8-8f7c02b3ac1b';
export const MAINTENANCE_FIELD = '188013eb-82b9-4d0c-bd7e-f99e2b48df70';
export const CARPET_AREA_FIELD = 'b5230be9-208b-41a1-bdfa-9bb7bea1da85';
export const FACING_FIELD = '9f36eb2f-9df7-486f-811a-47cc34ce43dd';
export const FLOOR_FIELD = '651eebfe-8c6d-44bf-bdef-75d07c496316';
export const USP1_FIELD = '91554497-ec79-47b3-98e3-7ff9213df7d1';
export const USP2_FIELD = '779b2899-2ba6-4480-8124-3f33f75b3b33';
export const USP3_FIELD = '1c6278e6-a4d5-4a38-93a1-ce5c945fbfb3';
export const HOME_TYPE_FIELD = 'c80010b4-fd7a-4ad0-b889-a6afcb9901ef';
export const OCCUPANCY_FIELD = '111fd1b2-3014-4818-b8dc-51ffe4dcac6d';
export const FURNISHING_FIELD = 'ce7c655c-7413-4c91-a465-5da2882278b6';
export const SELLER_FEES_FIELD = '194d4c5a-4dc3-473a-a357-ce1ba85ac512';
export const PARKING_FIELD = '2eb0f18d-c0be-4736-9be1-1f649fa7b0bd';
export const BALCONY_FIELD = '8151972e-671a-4bfd-bf7d-5ed8446bb816';
export const KEYS_WITH_FIELD = 'faf7caa8-90bb-40c0-8791-afa177a9fe8e';
export const INVENTORY_TYPE_FIELD = 'be2301b6-bb87-4d6c-bfc3-62f7595a49a9';
export const JUMBO_URL_FIELD = 'ce158b82-f0b9-4955-bb4f-a66729b419c6';
export const HOUSING_URL_FIELD = '5f64c3ff-2378-460a-92b9-6ff4e81e3c93';
export const NINETYNINE_ACRES_URL_FIELD = 'e4ffe10e-0982-4904-bf3a-40934bcf8f43';
export const HOUSING_ID_FIELD = '1f849bc6-6e5d-4821-abe8-53b1f8f091bd';
export const NINETYNINE_ACRES_ID_FIELD = '6a972c94-893e-47d8-9ce9-ba5016299a29';
export const GTM_READY_FIELD = '31dc3f0d-7753-4f88-95e2-6454c7d661eb';
export const WEBSITE_LIVE_DATE_FIELD = 'e27738ae-9839-47c6-b13c-82d6a80e5aa6';
export const HID_FIELD = '81136f11-45f0-4990-b380-e426cb6b8582';
export const LISTING_SLUG_FIELD = '757aff7a-a971-43fb-9a9c-cc58ee456a7c';
export const PROPERTY_ON_HOLD_FIELD = 'eef6156c-5a87-4118-98e5-e3a416e0926d';
export const LISTING_TYPE_FIELD = '8e430749-85d3-4e90-a306-78acb8acba90';
export const PROPERTY_FLAT_NUMBER_FIELD = '70a9d0c7-8230-4571-9fa4-b5878a60272f';
export const PROPERTY_BALCONY_VIEW_1_FIELD = '2ec079e9-9ba8-4fbb-8110-02b1e46f903a';
export const PROPERTY_BALCONY_VIEW_2_FIELD = '0a8f73b9-86a7-4ca5-a120-5e71a5fc6d10';
export const PROPERTY_BALCONY_VIEW_3_FIELD = '453b53df-67a4-4c94-8eaa-887df421e9e4';
export const PROPERTY_BALCONY_VIEW_4_FIELD = 'd0e5d87a-0938-4e92-90eb-c98fa7e0b31c';
export const PROPERTY_ORIGINAL_ASK_PRICE_FIELD = '24ddb3e8-f601-427e-8d9c-c1ee98c79e9c';
export const PROPERTY_SOURCE_PRICE_FIELD = '604e4ba1-e781-4c6c-91f3-de789373d9f7';
export const PROPERTY_LATEST_PRICE_FIELD = '4b8653ab-323c-45df-a1c0-570ec405856b';
export const PROPERTY_PRICE_PER_SQFT_FIELD = '31f49efe-4dc5-4ab7-880b-a765546ecea4';
export const PROPERTY_LPG_FIELD = 'a60dde67-f85c-4a4e-82aa-27d3ed63fc0b';
export const PROPERTY_OC_RECEIVED_FIELD = 'f436500b-cfa8-4fc7-a973-32c87c164a38';
export const PROPERTY_SELLER_URGENCY_FIELD = 'a00eb339-493b-44eb-988c-ab50d2ffe355';
export const PROPERTY_PROPERTY_STATUS_FIELD = '9015d981-17f3-49c6-93bb-4eff52800ed9';
export const PROPERTY_OFFBOARDING_FIELD = 'e0af0693-1c87-43f6-b0dd-af2cebb554b8';
export const PROPERTY_OFFBOARDING_REASON_FIELD = '9a8d074d-0f5a-413a-8aba-30ca5cd90385';
export const PROPERTY_SELLING_PRICE_FIELD = '4f315635-9fa4-4f88-ae3d-b16ca73d30a1';
export const PROPERTY_OFFBOARDING_DATE_FIELD = '91bd0e9a-d80d-48a5-8f7d-4980692ff0d7';

export default defineObject({
  universalIdentifier: PROPERTY_UNIVERSAL_IDENTIFIER,
  nameSingular: 'property',
  namePlural: 'properties',
  labelSingular: 'Property',
  labelPlural: 'Properties',
  description: 'A real estate property listing',
  icon: 'IconHome',
  labelIdentifierFieldMetadataUniversalIdentifier: NAME_FIELD_UNIVERSAL_IDENTIFIER,
  fields: [
    // Core fields
    {
      universalIdentifier: NAME_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.TEXT,
      label: 'Property Name',
      description: 'Display name for the property',
      icon: 'IconHome',
      name: 'name',
    },
    {
      universalIdentifier: ADDRESS_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.ADDRESS,
      label: 'Address',
      description: 'Full property address',
      icon: 'IconMapPin',
      name: 'propertyAddress',
    },
    {
      universalIdentifier: PRICE_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.CURRENCY,
      label: 'Price',
      description: 'Listing price in INR',
      icon: 'IconCurrencyRupee',
      name: 'price',
    },
    {
      universalIdentifier: BEDROOMS_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.NUMBER,
      label: 'Bedrooms',
      description: 'Number of bedrooms',
      icon: 'IconBed',
      name: 'bedrooms',
    },
    {
      universalIdentifier: BATHROOMS_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.NUMBER,
      label: 'Bathrooms',
      description: 'Number of bathrooms',
      icon: 'IconBath',
      name: 'bathrooms',
    },
    {
      universalIdentifier: SQFT_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.NUMBER,
      label: 'Square Feet',
      description: 'Property size in sq ft (super built-up)',
      icon: 'IconRuler',
      name: 'squareFeet',
    },
    {
      universalIdentifier: STATUS_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.SELECT,
      label: 'Status',
      icon: 'IconStatusChange',
      defaultValue: `'${PropertyStatus.NEW}'`,
      options: [
        { id: '8f03367e-8570-4c84-966e-8fd17c37b560', value: PropertyStatus.NEW, label: 'New', position: 0, color: 'blue' },
        { id: '9445fb0c-3579-4603-adfd-1699d994eec6', value: PropertyStatus.LISTED, label: 'Listed', position: 1, color: 'green' },
        { id: 'daf2f8ee-2ff1-4c18-b664-589be06ffcde', value: PropertyStatus.UNDER_OFFER, label: 'Under Offer', position: 2, color: 'orange' },
        { id: '5d6a1d05-edf1-424d-8b24-7f5a2689d796', value: PropertyStatus.SOLD, label: 'Sold', position: 3, color: 'red' },
        { id: '9b01ef5d-a9af-4339-b49e-35323d31d84b', value: PropertyStatus.WITHDRAWN, label: 'Withdrawn', position: 4, color: 'gray' },
      ],
      name: 'status',
    },
    {
      universalIdentifier: TYPE_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.SELECT,
      label: 'Property Type',
      icon: 'IconBuilding',
      defaultValue: `'${PropertyType.APARTMENT}'`,
      options: [
        { id: 'd8ac78d4-b9b7-4681-a05c-a47a8e65d2c6', value: PropertyType.APARTMENT, label: 'Apartment', position: 0, color: 'blue' },
        { id: '084cee12-fa6b-472f-a27d-7b134370ac4b', value: PropertyType.VILLA, label: 'Villa', position: 1, color: 'green' },
        { id: 'e8823bd7-061e-4f41-afef-2ebd59400d1e', value: PropertyType.PENTHOUSE, label: 'Penthouse', position: 2, color: 'purple' },
        { id: 'c6f62750-3694-4611-b1eb-15fba2db6a43', value: PropertyType.STUDIO, label: 'Studio', position: 3, color: 'yellow' },
        { id: '0b890fa3-d4c7-4953-84d9-20a5ad5b5d74', value: PropertyType.COMMERCIAL, label: 'Commercial', position: 4, color: 'gray' },
      ],
      name: 'propertyType',
    },
    {
      universalIdentifier: AMENITIES_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.MULTI_SELECT,
      label: 'Amenities',
      icon: 'IconPool',
      options: [
        { id: 'c6062770-2504-412a-8b90-8f9ae3bc47d0', value: 'POOL', label: 'Swimming Pool', position: 0, color: 'blue' },
        { id: '03d3eee3-a9b7-432d-a561-4f493e75d60f', value: 'GYM', label: 'Gym', position: 1, color: 'green' },
        { id: '8f9c345f-b551-499c-9940-08f0eceda468', value: 'PARKING', label: 'Parking', position: 2, color: 'orange' },
        { id: '8a1384f1-ace0-4bd3-8e8d-2d714f228ef1', value: 'SECURITY', label: '24/7 Security', position: 3, color: 'red' },
        { id: '863d1859-e4fa-4ca6-be2f-9a3cf02dbd5c', value: 'ELEVATOR', label: 'Elevator', position: 4, color: 'gray' },
      ],
      name: 'amenities',
    },
    {
      universalIdentifier: FILES_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.FILES,
      label: 'Photos & Documents',
      description: 'Property photos, floor plans, and KYC documents',
      icon: 'IconPhoto',
      name: 'files',
      universalSettings: {
        maxNumberOfValues: 5,
      },
    },
    {
      universalIdentifier: ZONE_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.SELECT,
      label: 'Zone',
      description: 'Bangalore zone for property',
      icon: 'IconMap',
      name: 'zone',
      options: [
        { id: '051e2e43-e2ec-4c59-a883-23424b29b156', value: 'KORAMANGALA', label: 'Koramangala', position: 0, color: 'blue' },
        { id: '5b13ede6-135e-4245-951a-9ed7631f64de', value: 'INDIRANAGAR', label: 'Indiranagar', position: 1, color: 'green' },
        { id: '23af9438-d712-40ea-b46f-af7bc4df821b', value: 'WHITEFIELD', label: 'Whitefield', position: 2, color: 'orange' },
        { id: '541b8a62-c507-4699-8e5a-ca428c466925', value: 'MG_ROAD', label: 'MG Road', position: 3, color: 'purple' },
        { id: '6a10070e-5ff9-4d60-86ba-19e00fb5a377', value: 'JAYANAGAR', label: 'Jayanagar', position: 4, color: 'red' },
      ],
    },
    // New fields
    {
      universalIdentifier: JUMBO_ID_FIELD,
      type: FieldType.TEXT,
      label: 'Jumbo ID',
      description: 'Auto-generated Jumbo reference ID',
      icon: 'IconHash',
      name: 'jumboId',
    },
    {
      universalIdentifier: TOWER_FIELD,
      type: FieldType.TEXT,
      label: 'Tower',
      description: 'Tower or wing name within the building',
      icon: 'IconBuilding',
      name: 'tower',
    },
    {
      universalIdentifier: VIEW_FIELD,
      type: FieldType.SELECT,
      label: 'View',
      description: 'Primary view from the property',
      icon: 'IconEye',
      options: [
        { id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567891', value: HomeView.POOL, label: 'Pool View', position: 0, color: 'blue' },
        { id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567892', value: HomeView.GARDEN, label: 'Garden View', position: 1, color: 'green' },
        { id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567893', value: HomeView.ROAD, label: 'Road View', position: 2, color: 'orange' },
        { id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567894', value: HomeView.CITY, label: 'City View', position: 3, color: 'purple' },
        { id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567895', value: HomeView.PARK, label: 'Park View', position: 4, color: 'yellow' },
        { id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567896', value: HomeView.LAKE, label: 'Lake View', position: 5, color: 'gray' },
      ],
      name: 'homeView',
    },
    {
      universalIdentifier: MSP_FIELD,
      type: FieldType.CURRENCY,
      label: 'MSP',
      description: 'Minimum selling price in INR',
      icon: 'IconCurrencyRupee',
      name: 'msp',
    },
    {
      universalIdentifier: MAINTENANCE_FIELD,
      type: FieldType.CURRENCY,
      label: 'Maintenance',
      description: 'Monthly maintenance cost in INR',
      icon: 'IconCurrencyRupee',
      name: 'maintenance',
    },
    {
      universalIdentifier: CARPET_AREA_FIELD,
      type: FieldType.NUMBER,
      label: 'Carpet Area',
      description: 'Carpet area in sq ft',
      icon: 'IconRuler',
      name: 'carpetArea',
    },
    {
      universalIdentifier: FACING_FIELD,
      type: FieldType.SELECT,
      label: 'Facing',
      description: 'Direction the property faces',
      icon: 'IconCompass',
      options: [
        { id: 'b1c2d3e4-f5a6-7890-abcd-ef1234567891', value: Facing.NORTH, label: 'North', position: 0, color: 'blue' },
        { id: 'b1c2d3e4-f5a6-7890-abcd-ef1234567892', value: Facing.SOUTH, label: 'South', position: 1, color: 'green' },
        { id: 'b1c2d3e4-f5a6-7890-abcd-ef1234567893', value: Facing.EAST, label: 'East', position: 2, color: 'orange' },
        { id: 'b1c2d3e4-f5a6-7890-abcd-ef1234567894', value: Facing.WEST, label: 'West', position: 3, color: 'purple' },
        { id: 'b1c2d3e4-f5a6-7890-abcd-ef1234567895', value: Facing.NORTH_EAST, label: 'North East', position: 4, color: 'yellow' },
        { id: 'b1c2d3e4-f5a6-7890-abcd-ef1234567896', value: Facing.NORTH_WEST, label: 'North West', position: 5, color: 'red' },
        { id: 'b1c2d3e4-f5a6-7890-abcd-ef1234567897', value: Facing.SOUTH_EAST, label: 'South East', position: 6, color: 'gray' },
        { id: 'b1c2d3e4-f5a6-7890-abcd-ef1234567898', value: Facing.SOUTH_WEST, label: 'South West', position: 7, color: 'pink' },
      ],
      name: 'facing',
    },
    {
      universalIdentifier: FLOOR_FIELD,
      type: FieldType.NUMBER,
      label: 'Floor',
      description: 'Floor number',
      icon: 'IconLayers',
      name: 'floor',
    },
    {
      universalIdentifier: USP1_FIELD,
      type: FieldType.SELECT,
      label: 'USP 1',
      description: 'Key selling point 1',
      icon: 'IconStar',
      options: [
        { id: 'c1d2e3f4-a5b6-7890-abcd-ef1234567891', value: 'CORNER', label: 'Corner Unit', position: 0, color: 'blue' },
        { id: 'c1d2e3f4-a5b6-7890-abcd-ef1234567892', value: 'VASTU', label: 'Vastu Compliant', position: 1, color: 'green' },
        { id: 'c1d2e3f4-a5b6-7890-abcd-ef1234567893', value: 'RENOVATED', label: 'Recently Renovated', position: 2, color: 'orange' },
        { id: 'c1d2e3f4-a5b6-7890-abcd-ef1234567894', value: 'PREMIUM', label: 'Premium Fittings', position: 3, color: 'purple' },
        { id: 'c1d2e3f4-a5b6-7890-abcd-ef1234567895', value: 'GOLF', label: 'Golf Course View', position: 4, color: 'yellow' },
      ],
      name: 'usp1',
    },
    {
      universalIdentifier: USP2_FIELD,
      type: FieldType.SELECT,
      label: 'USP 2',
      description: 'Key selling point 2',
      icon: 'IconStar',
      options: [
        { id: 'd2e3f4a5-b6c7-8901-bcde-f23456789011', value: 'CORNER', label: 'Corner Unit', position: 0, color: 'blue' },
        { id: 'd2e3f4a5-b6c7-8901-bcde-f23456789012', value: 'VASTU', label: 'Vastu Compliant', position: 1, color: 'green' },
        { id: 'd2e3f4a5-b6c7-8901-bcde-f23456789013', value: 'RENOVATED', label: 'Recently Renovated', position: 2, color: 'orange' },
        { id: 'd2e3f4a5-b6c7-8901-bcde-f23456789014', value: 'PREMIUM', label: 'Premium Fittings', position: 3, color: 'purple' },
        { id: 'd2e3f4a5-b6c7-8901-bcde-f23456789015', value: 'GOLF', label: 'Golf Course View', position: 4, color: 'yellow' },
      ],
      name: 'usp2',
    },
    {
      universalIdentifier: USP3_FIELD,
      type: FieldType.SELECT,
      label: 'USP 3',
      description: 'Key selling point 3',
      icon: 'IconStar',
      options: [
        { id: '6c1211f0-b0ec-47ca-b299-a568ed6f11dc', value: 'CORNER', label: 'Corner Unit', position: 0, color: 'blue' },
        { id: 'ead00aa9-0e3c-4aed-ac79-e0ed9afac6a7', value: 'VASTU', label: 'Vastu Compliant', position: 1, color: 'green' },
        { id: 'dd4f29a3-c484-4778-9ab7-51b72caa2dd7', value: 'RENOVATED', label: 'Recently Renovated', position: 2, color: 'orange' },
        { id: '42973afd-0651-4be9-8eaf-6d863fca8af6', value: 'PREMIUM', label: 'Premium Fittings', position: 3, color: 'purple' },
        { id: 'd8a23d1a-8f92-4442-bdf7-2cac02d5763e', value: 'GOLF', label: 'Golf Course View', position: 4, color: 'yellow' },
      ],
      name: 'usp3',
    },
    {
      universalIdentifier: HOME_TYPE_FIELD,
      type: FieldType.SELECT,
      label: 'Home Type',
      description: 'Resale, New, or Plot',
      icon: 'IconHome',
      defaultValue: `'${HomeType.RESALE}'`,
      options: [
        { id: '99862681-fbbc-48d4-bbf8-aaf6490140ae', value: HomeType.RESALE, label: 'Resale', position: 0, color: 'blue' },
        { id: 'b705de10-28a1-4b87-83a8-661d73057922', value: HomeType.NEW, label: 'New', position: 1, color: 'green' },
        { id: '1028b016-617d-4207-9665-f2b491cb5cce', value: HomeType.PLOT, label: 'Plot', position: 2, color: 'orange' },
      ],
      name: 'homeType',
    },
    {
      universalIdentifier: OCCUPANCY_FIELD,
      type: FieldType.SELECT,
      label: 'Occupancy',
      description: 'Current occupancy status',
      icon: 'IconUser',
      options: [
        { id: '8341f53e-a21d-415e-a7c0-4d38ca2eaf0f', value: Occupancy.SELF, label: 'Self Occupied', position: 0, color: 'blue' },
        { id: '5aa8ae8b-9acb-43c3-96c2-ac0742387caa', value: Occupancy.TENANT, label: 'Tenant Occupied', position: 1, color: 'green' },
        { id: '77c85dbb-ccaa-445d-bede-1ebfdc59d1ad', value: Occupancy.VACANT, label: 'Vacant', position: 2, color: 'orange' },
      ],
      name: 'occupancy',
    },
    {
      universalIdentifier: FURNISHING_FIELD,
      type: FieldType.SELECT,
      label: 'Furnishing',
      description: 'Furnishing status',
      icon: 'IconSofa',
      options: [
        { id: '537a984f-3790-47b0-acd2-d441f39ad699', value: Furnishing.UNFURNISHED, label: 'Unfurnished', position: 0, color: 'blue' },
        { id: '823c98bb-674b-44c3-970c-32ee01f906d1', value: Furnishing.SEMI_FURNISHED, label: 'Semi Furnished', position: 1, color: 'green' },
        { id: '8e7a08f4-1f87-4531-91f0-715434924ac1', value: Furnishing.FULLY_FURNISHED, label: 'Fully Furnished', position: 2, color: 'orange' },
      ],
      name: 'furnishing',
    },
    {
      universalIdentifier: SELLER_FEES_FIELD,
      type: FieldType.NUMBER,
      label: 'Seller Fees %',
      description: 'Commission percentage for seller',
      icon: 'IconPercentage',
      name: 'sellerFees',
    },
    {
      universalIdentifier: PARKING_FIELD,
      type: FieldType.NUMBER,
      label: 'Parking',
      description: 'Number of parking spots',
      icon: 'IconCar',
      name: 'parking',
    },
    {
      universalIdentifier: BALCONY_FIELD,
      type: FieldType.NUMBER,
      label: 'Balcony',
      description: 'Number of balconies',
      icon: 'IconWindow',
      name: 'balcony',
    },
    {
      universalIdentifier: KEYS_WITH_FIELD,
      type: FieldType.SELECT,
      label: 'Keys With',
      description: 'Who holds the property keys',
      icon: 'IconKey',
      options: [
        { id: 'c7d8e9f0-a1b2-3456-abcd-789012345611', value: KeysWith.OWNER, label: 'Owner', position: 0, color: 'blue' },
        { id: 'c7d8e9f0-a1b2-3456-abcd-789012345612', value: KeysWith.AGENT, label: 'Agent', position: 1, color: 'green' },
        { id: 'c7d8e9f0-a1b2-3456-abcd-789012345613', value: KeysWith.SECURITY, label: 'Security', position: 2, color: 'orange' },
      ],
      name: 'keysWith',
    },
    {
      universalIdentifier: INVENTORY_TYPE_FIELD,
      type: FieldType.SELECT,
      label: 'Inventory Type',
      description: 'Listing exclusivity type',
      icon: 'IconTag',
      defaultValue: `'${InventoryType.OPEN}'`,
      options: [
        { id: 'd8e9f0a1-b2c3-4567-bcde-890123456711', value: InventoryType.EXCLUSIVE, label: 'Exclusive', position: 0, color: 'blue' },
        { id: 'd8e9f0a1-b2c3-4567-bcde-890123456712', value: InventoryType.OPEN, label: 'Open', position: 1, color: 'green' },
        { id: 'd8e9f0a1-b2c3-4567-bcde-890123456713', value: InventoryType.CO_BROKE, label: 'Co-broke', position: 2, color: 'orange' },
      ],
      name: 'inventoryType',
    },
    {
      universalIdentifier: LISTING_TYPE_FIELD,
      type: FieldType.SELECT,
      label: 'Listing Type',
      description: 'Reserve or Certified listing',
      icon: 'IconBadge',
      defaultValue: `'${ListingType.CERTIFIED}'`,
      options: [
        { id: 'c34a156c-f231-4745-828d-fc01fc712461', value: ListingType.RESERVE, label: 'Reserve', position: 0, color: 'purple' },
        { id: 'a621d8f4-ff8a-49d1-980f-489545ac4a6f', value: ListingType.CERTIFIED, label: 'Certified', position: 1, color: 'green' },
      ],
      name: 'listingType',
    },
    {
      universalIdentifier: JUMBO_URL_FIELD,
      type: FieldType.TEXT,
      label: 'Jumbo Listing URL',
      description: 'Website listing link',
      icon: 'IconLink',
      name: 'jumboUrl',
    },
    {
      universalIdentifier: HOUSING_URL_FIELD,
      type: FieldType.TEXT,
      label: 'Housing.com URL',
      description: 'Housing.com listing URL',
      icon: 'IconLink',
      name: 'housingUrl',
    },
    {
      universalIdentifier: NINETYNINE_ACRES_URL_FIELD,
      type: FieldType.TEXT,
      label: '99Acres URL',
      description: '99Acres listing URL',
      icon: 'IconLink',
      name: 'ninetyNineAcresUrl',
    },
    {
      universalIdentifier: HOUSING_ID_FIELD,
      type: FieldType.TEXT,
      label: 'Housing ID',
      description: 'External Housing.com platform ID',
      icon: 'IconHash',
      name: 'housingId',
    },
    {
      universalIdentifier: NINETYNINE_ACRES_ID_FIELD,
      type: FieldType.TEXT,
      label: '99Acres ID',
      description: 'External 99Acres platform ID',
      icon: 'IconHash',
      name: 'ninetyNineAcresId',
    },
    {
      universalIdentifier: GTM_READY_FIELD,
      type: FieldType.BOOLEAN,
      label: 'GTM Ready',
      description: 'Ready for marketing',
      icon: 'IconCheck',
      name: 'gtmReady',
    },
    {
      universalIdentifier: WEBSITE_LIVE_DATE_FIELD,
      type: FieldType.DATE,
      label: 'Website Live Date',
      description: 'When published on website',
      icon: 'IconCalendar',
      name: 'websiteLiveDate',
    },
    {
      universalIdentifier: HID_FIELD,
      type: FieldType.TEXT,
      label: 'HID',
      description: 'Internal housing ID',
      icon: 'IconHash',
      name: 'hid',
    },
    {
      universalIdentifier: LISTING_SLUG_FIELD,
      type: FieldType.TEXT,
      label: 'Listing Slug',
      description: 'SEO-friendly URL slug',
      icon: 'IconLink',
      name: 'listingSlug',
    },
    {
      universalIdentifier: PROPERTY_ON_HOLD_FIELD,
      type: FieldType.BOOLEAN,
      label: 'On Hold',
      description: 'Temporarily off market',
      icon: 'IconPause',
      name: 'onHold',
    },
    {
      universalIdentifier: PROPERTY_FLAT_NUMBER_FIELD,
      type: FieldType.TEXT,
      label: 'Flat Number',
      description: 'Unit/flat number',
      icon: 'IconHash',
      name: 'flatNumber',
    },
    {
      universalIdentifier: PROPERTY_BALCONY_VIEW_1_FIELD,
      type: FieldType.SELECT,
      label: 'Balcony View 1',
      description: 'Primary balcony view',
      icon: 'IconEye',
      options: [
        { id: 'c020e291-5519-4f8d-8ea7-7392b0f64b63', value: BalconyView.POOL, label: 'Pool', position: 0, color: 'blue' },
        { id: '63753d4a-00ec-465a-a640-8eb0d8fe0c71', value: BalconyView.GARDEN, label: 'Garden', position: 1, color: 'green' },
        { id: 'cf82cb2c-c2ca-488a-a94c-379ba4e6c3b0', value: BalconyView.LAKE, label: 'Lake', position: 2, color: 'blue' },
        { id: '35fce7c0-561b-469e-98c3-49c94aab307a', value: BalconyView.MAIN_ROAD, label: 'Main Road', position: 3, color: 'orange' },
        { id: '00015010-b257-4879-871e-324bcde80517', value: BalconyView.AMENITIES, label: 'Amenities', position: 4, color: 'purple' },
        { id: '2cb7b1b8-8e0f-4f10-a506-dfe12dfdc762', value: BalconyView.BUILDING, label: 'Building', position: 5, color: 'gray' },
        { id: '3a0f3d7f-ab92-4110-acc9-8e065ca644d3', value: BalconyView.GREEN_LANDSCAPE, label: 'Green Landscape', position: 6, color: 'green' },
      ],
      name: 'balconyView1',
    },
    {
      universalIdentifier: PROPERTY_BALCONY_VIEW_2_FIELD,
      type: FieldType.SELECT,
      label: 'Balcony View 2',
      description: 'Secondary balcony view',
      icon: 'IconEye',
      options: [
        { id: '8df163e8-a786-4b03-b04d-353bdd359cc7', value: BalconyView.POOL, label: 'Pool', position: 0, color: 'blue' },
        { id: '472b4ba0-1e97-4c27-8a81-7c10bd74fdb1', value: BalconyView.GARDEN, label: 'Garden', position: 1, color: 'green' },
        { id: '6d336443-f6b9-4bf1-a22f-79b4ea4b3740', value: BalconyView.LAKE, label: 'Lake', position: 2, color: 'blue' },
        { id: '9bb0f670-38f3-4eec-9e35-4726a0dbea6f', value: BalconyView.MAIN_ROAD, label: 'Main Road', position: 3, color: 'orange' },
        { id: '310dc074-0bf6-431a-b162-d14299d84548', value: BalconyView.AMENITIES, label: 'Amenities', position: 4, color: 'purple' },
        { id: '8ce68c60-1fca-44d8-afc8-844b93e2608e', value: BalconyView.BUILDING, label: 'Building', position: 5, color: 'gray' },
        { id: '7bd73b72-c5a1-452a-88a2-d6df0408bf98', value: BalconyView.GREEN_LANDSCAPE, label: 'Green Landscape', position: 6, color: 'green' },
      ],
      name: 'balconyView2',
    },
    {
      universalIdentifier: PROPERTY_BALCONY_VIEW_3_FIELD,
      type: FieldType.SELECT,
      label: 'Balcony View 3',
      description: 'Tertiary balcony view',
      icon: 'IconEye',
      options: [
        { id: 'da60d6f3-936a-4fff-8ace-b789297ca1c1', value: BalconyView.POOL, label: 'Pool', position: 0, color: 'blue' },
        { id: 'd0fc34fe-d021-4c2e-b189-01e276fee645', value: BalconyView.GARDEN, label: 'Garden', position: 1, color: 'green' },
        { id: 'ffa6e486-8c22-4bf1-bb60-5cb9259c36f0', value: BalconyView.LAKE, label: 'Lake', position: 2, color: 'blue' },
        { id: '3274a47b-1518-4cab-bcaf-4a17ca7941cf', value: BalconyView.MAIN_ROAD, label: 'Main Road', position: 3, color: 'orange' },
        { id: '59ae2de2-31f9-4406-b1e4-37de325fc2f2', value: BalconyView.AMENITIES, label: 'Amenities', position: 4, color: 'purple' },
        { id: '2379f574-f9a9-4233-816a-d20c247d6620', value: BalconyView.BUILDING, label: 'Building', position: 5, color: 'gray' },
        { id: '6d2077d7-2e2a-4f31-830d-de1c29176839', value: BalconyView.GREEN_LANDSCAPE, label: 'Green Landscape', position: 6, color: 'green' },
      ],
      name: 'balconyView3',
    },
    {
      universalIdentifier: PROPERTY_BALCONY_VIEW_4_FIELD,
      type: FieldType.SELECT,
      label: 'Balcony View 4',
      description: 'Quaternary balcony view',
      icon: 'IconEye',
      options: [
        { id: '1b44c026-18de-4a52-a430-e973b6fc7928', value: BalconyView.POOL, label: 'Pool', position: 0, color: 'blue' },
        { id: '8e319798-6482-4ac3-9e69-11ef07b4d4b3', value: BalconyView.GARDEN, label: 'Garden', position: 1, color: 'green' },
        { id: '110ff187-5cf4-4e83-bbdb-2f90d809ff63', value: BalconyView.LAKE, label: 'Lake', position: 2, color: 'blue' },
        { id: '22708911-431f-4595-bf57-f5a39c472df0', value: BalconyView.MAIN_ROAD, label: 'Main Road', position: 3, color: 'orange' },
        { id: '691521bf-b864-4765-a869-43b55bb594d6', value: BalconyView.AMENITIES, label: 'Amenities', position: 4, color: 'purple' },
        { id: '716a8d53-9688-4184-a0b3-1d16f2bad235', value: BalconyView.BUILDING, label: 'Building', position: 5, color: 'gray' },
        { id: '53b27ba6-88ac-4f73-9e8a-e30c9955872b', value: BalconyView.GREEN_LANDSCAPE, label: 'Green Landscape', position: 6, color: 'green' },
      ],
      name: 'balconyView4',
    },
    {
      universalIdentifier: PROPERTY_ORIGINAL_ASK_PRICE_FIELD,
      type: FieldType.CURRENCY,
      label: 'Original Ask Price',
      description: 'Initial seller asking price',
      icon: 'IconCurrencyRupee',
      name: 'originalAskPrice',
    },
    {
      universalIdentifier: PROPERTY_SOURCE_PRICE_FIELD,
      type: FieldType.CURRENCY,
      label: 'Source Price',
      description: 'Price from classified/source',
      icon: 'IconCurrencyRupee',
      name: 'sourcePrice',
    },
    {
      universalIdentifier: PROPERTY_LATEST_PRICE_FIELD,
      type: FieldType.CURRENCY,
      label: 'Latest Price',
      description: 'Most recent price (manual for now)',
      icon: 'IconCurrencyRupee',
      name: 'latestPrice',
    },
    {
      universalIdentifier: PROPERTY_PRICE_PER_SQFT_FIELD,
      type: FieldType.CURRENCY,
      label: 'Price Per Sqft',
      description: 'Price per square foot (manual for now)',
      icon: 'IconCurrencyRupee',
      name: 'pricePerSqft',
    },
    {
      universalIdentifier: PROPERTY_LPG_FIELD,
      type: FieldType.BOOLEAN,
      label: 'LPG',
      description: 'LPG connection available',
      icon: 'IconFlame',
      name: 'lpg',
    },
    {
      universalIdentifier: PROPERTY_OC_RECEIVED_FIELD,
      type: FieldType.BOOLEAN,
      label: 'OC Received',
      description: 'Occupancy certificate received',
      icon: 'IconCertificate',
      name: 'ocReceived',
    },
    {
      universalIdentifier: PROPERTY_SELLER_URGENCY_FIELD,
      type: FieldType.SELECT,
      label: 'Seller Urgency',
      description: 'How urgent is the seller',
      icon: 'IconClock',
      options: [
        { id: '3a456d37-9221-4817-92f0-dd183787080a', value: SellerUrgency.LESS_THAN_1M, label: '< 1 month', position: 0, color: 'red' },
        { id: '2faa207e-0e75-4871-ba43-d51a43b1deb0', value: SellerUrgency.LESS_THAN_3M, label: '< 3 months', position: 1, color: 'orange' },
        { id: '59c9a5c7-1754-4ad4-b757-a85919dd3741', value: SellerUrgency.LESS_THAN_6M, label: '< 6 months', position: 2, color: 'yellow' },
        { id: 'cc05cf49-aa5d-496b-a534-7c3d434b8ee2', value: SellerUrgency.BEST_PRICE, label: 'Best Price Awaited', position: 3, color: 'green' },
      ],
      name: 'sellerUrgency',
    },
    {
      universalIdentifier: PROPERTY_PROPERTY_STATUS_FIELD,
      type: FieldType.SELECT,
      label: 'Property Status',
      description: 'Lifecycle status',
      icon: 'IconStatusChange',
      defaultValue: `'${PropertyLifecycleStatus.NA}'`,
      options: [
        { id: '94dc4099-5bfb-4039-8c1c-5e50f7156e5f', value: PropertyLifecycleStatus.NA, label: 'NA', position: 0, color: 'gray' },
        { id: 'd7ebd1bb-ee54-4cc0-8828-eda5e3c3811c', value: PropertyLifecycleStatus.PROPOSAL_SENT, label: 'Proposal Sent', position: 1, color: 'blue' },
        { id: '1c44f418-e660-4b91-ae75-c8808ea49361', value: PropertyLifecycleStatus.INSPECTION_PENDING, label: 'Inspection Pending', position: 2, color: 'yellow' },
        { id: '07c1169e-2401-46d4-9a76-46d41720a878', value: PropertyLifecycleStatus.CATALOGUE_PENDING, label: 'Catalogue Pending', position: 3, color: 'orange' },
        { id: '5f719fc9-30e0-442a-b8f9-eca7b023a8af', value: PropertyLifecycleStatus.LIVE, label: 'Live', position: 4, color: 'green' },
      ],
      name: 'propertyStatus',
    },
    {
      universalIdentifier: PROPERTY_OFFBOARDING_FIELD,
      type: FieldType.BOOLEAN,
      label: 'Offboarding',
      description: 'Property is being offboarded',
      icon: 'IconLogout',
      name: 'offboarding',
    },
    {
      universalIdentifier: PROPERTY_OFFBOARDING_REASON_FIELD,
      type: FieldType.SELECT,
      label: 'Offboarding Reason',
      description: 'Why the property is being offboarded',
      icon: 'IconX',
      options: [
        { id: '145e61a0-833e-4160-ad39-bb7396506c21', value: OffboardingReason.SOLD_BY_OWNER, label: 'Sold by Owner', position: 0, color: 'red' },
        { id: 'b10e7bf0-fd9d-43a2-822c-d1076a6d7aa1', value: OffboardingReason.SOLD_BY_BROKER, label: 'Sold by Broker', position: 1, color: 'orange' },
        { id: '32af2ce3-6302-4c07-849d-9367e6884603', value: OffboardingReason.PLAN_CANCELED, label: 'Plan Canceled', position: 2, color: 'gray' },
        { id: 'fb2396e4-b7b7-485a-b524-28aaa8559929', value: OffboardingReason.SOLD_BY_JUMBO, label: 'Sold by Jumbo', position: 3, color: 'green' },
        { id: '52d56f91-2559-41ea-8d91-53ef574cd1ac', value: OffboardingReason.SOLD_BY_CP, label: 'Sold by CP', position: 4, color: 'blue' },
        { id: '40adbf08-59c0-4f41-acd4-36948fe9a576', value: OffboardingReason.RENTED_OUT, label: 'Rented Out', position: 5, color: 'purple' },
        { id: '83d56f48-30ce-48f4-b0a3-d7e79bf4e9b5', value: OffboardingReason.BROKER_UNIT, label: 'Broker Unit', position: 6, color: 'yellow' },
        { id: 'c7afb3be-ec8e-4f30-ad5d-d3fda865cf97', value: OffboardingReason.OWNER_NON_RESPONSIVE, label: 'Owner Non Responsive', position: 7, color: 'gray' },
      ],
      name: 'offboardingReason',
    },
    {
      universalIdentifier: PROPERTY_SELLING_PRICE_FIELD,
      type: FieldType.CURRENCY,
      label: 'Selling Price',
      description: 'Final selling price',
      icon: 'IconCurrencyRupee',
      name: 'sellingPrice',
    },
    {
      universalIdentifier: PROPERTY_OFFBOARDING_DATE_FIELD,
      type: FieldType.DATE_TIME,
      label: 'Offboarding Date',
      description: 'When property was offboarded',
      icon: 'IconCalendarOff',
      name: 'offboardingDate',
    },
  ],
});

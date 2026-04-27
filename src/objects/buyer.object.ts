import { defineObject, FieldType } from 'twenty-sdk/define';

enum BuyerStage {
  NEW_ENQUIRY = 'NEW_ENQUIRY',
  QUALIFIED = 'QUALIFIED',
  REQUIREMENTS_CAPTURED = 'REQUIREMENTS_CAPTURED',
  PROPERTY_SHORTLISTED = 'PROPERTY_SHORTLISTED',
  VISITS_SCHEDULED = 'VISITS_SCHEDULED',
  NEGOTIATING = 'NEGOTIATING',
  CLOSED_WON = 'CLOSED_WON',
  ON_HOLD = 'ON_HOLD',
  DROPPED = 'DROPPED',
}

enum BuyerDropReason {
  BUDGET_MISMATCH = 'BUDGET_MISMATCH',
  LOCATION_MISMATCH = 'LOCATION_MISMATCH',
  BOUGHT_ELSEWHERE = 'BOUGHT_ELSEWHERE',
  NOT_INTERESTED = 'NOT_INTERESTED',
  UNREACHABLE = 'UNREACHABLE',
  TIMING_ISSUE = 'TIMING_ISSUE',
  WENT_WITH_COMPETITOR = 'WENT_WITH_COMPETITOR',
}

export const BUYER_UNIVERSAL_IDENTIFIER = 'c85672f9-31e2-4f14-a241-e5cc1b4d6289';
export const BUYER_NAME_FIELD = '70a817ae-74b2-433c-85e3-06c930b7bf23';
export const BUYER_STAGE_FIELD = '65a6f278-f8b0-47f0-b88d-282b98407b0d';
export const BUYER_DROP_REASON_FIELD = '7279de78-2126-4f59-9336-623a118c0809';
export const BUYER_BUDGET_MIN_FIELD = 'f1a65305-da5d-43e3-ae05-16517cad582b';
export const BUYER_BUDGET_MAX_FIELD = '89a78544-404a-414e-88a2-5d6a39397c59';
export const BUYER_PREF_ZONES_FIELD = 'ea3291d5-33df-44be-9f9d-20a7e67ef411';
export const BUYER_PREF_TYPES_FIELD = '4d2c4156-0810-4c21-93d1-f4502e307966';
export const BUYER_BEDROOMS_MIN_FIELD = '58b25457-0364-429d-8fde-fd4c297c11c9';
export const BUYER_BATHROOMS_MIN_FIELD = 'cf6e46c7-1a0f-484b-8e40-65b1a8bad72c';
export const BUYER_SQFT_MIN_FIELD = '9ee4eecc-a1b5-43b2-ab63-b1189f813fde';
export const BUYER_FACING_PREF_FIELD = 'eef424a1-5853-4386-8af1-b7a2baed1c3e';
export const BUYER_FURNISHING_PREF_FIELD = '715c02a9-137b-4c58-a910-650ea02ac4e4';
export const BUYER_HOME_TYPE_PREF_FIELD = 'edfdbb7d-0628-4308-a9c3-4039d50675c9';
export const BUYER_FLOOR_PREF_FIELD = 'eede3da9-7c45-452f-aebe-49156a833e73';
export const BUYER_PARKING_REQUIRED_FIELD = 'b77da0d7-0d2b-4580-abf6-b02f8270dfad';
export const BUYER_TIMELINE_FIELD = '1f1f94a6-b100-4073-b05a-fd1b02beb4b0';
export const BUYER_LOAN_REQUIRED_FIELD = '1abd3561-8d5d-4da8-8f38-6d6eb764dc44';
export const BUYER_MOVE_IN_DATE_FIELD = '14f923f5-114e-4fd5-b8f1-d487a73fbf7c';
export const BUYER_MAX_MAINTENANCE_FIELD = '6949cf14-5481-4276-982b-6b654e0d0cc2';
export const BUYER_NOTES_FIELD = '37103533-24ed-4fda-977b-94e8dd24d6bf';

export default defineObject({
  universalIdentifier: BUYER_UNIVERSAL_IDENTIFIER,
  nameSingular: 'buyer',
  namePlural: 'buyers',
  labelSingular: 'Buyer',
  labelPlural: 'Buyers',
  description: 'Property buyer profile and funnel',
  icon: 'IconUser',
  labelIdentifierFieldMetadataUniversalIdentifier: BUYER_NAME_FIELD,
  fields: [
    {
      universalIdentifier: BUYER_NAME_FIELD,
      type: FieldType.TEXT,
      label: 'Buyer Name',
      description: 'Display name for the buyer',
      icon: 'IconUser',
      name: 'name',
    },
    {
      universalIdentifier: BUYER_STAGE_FIELD,
      type: FieldType.SELECT,
      label: 'Stage',
      icon: 'IconStages',
      defaultValue: `'${BuyerStage.NEW_ENQUIRY}'`,
      options: [
        { id: '02e6155c-dacb-4c13-aa2d-1ef84fb01d71', value: BuyerStage.NEW_ENQUIRY, label: 'New Enquiry', position: 0, color: 'blue' },
        { id: 'f3f10aa9-5307-4b02-8dd8-de47f690f53f', value: BuyerStage.QUALIFIED, label: 'Qualified', position: 1, color: 'yellow' },
        { id: '7ed91cd2-2b4c-498f-a756-c8d2e871ad19', value: BuyerStage.REQUIREMENTS_CAPTURED, label: 'Requirements Captured', position: 2, color: 'purple' },
        { id: '47723065-ad9e-407d-9b46-711a6c8f8ca1', value: BuyerStage.PROPERTY_SHORTLISTED, label: 'Property Shortlisted', position: 3, color: 'blue' },
        { id: '87c88b0f-d64b-4de2-9659-d89c41421ee3', value: BuyerStage.VISITS_SCHEDULED, label: 'Visits Scheduled', position: 4, color: 'orange' },
        { id: '925c1a62-b130-4107-8366-e3ba029a0a91', value: BuyerStage.NEGOTIATING, label: 'Negotiating', position: 5, color: 'pink' },
        { id: '0d60718e-2979-4a8a-9c7e-be7b4415003c', value: BuyerStage.CLOSED_WON, label: 'Closed Won', position: 6, color: 'green' },
        { id: '8e3a644f-6c4e-4e70-8e4f-ae75eb48b98d', value: BuyerStage.ON_HOLD, label: 'On Hold', position: 7, color: 'gray' },
        { id: 'c766d03d-e9d8-4ea2-b58b-d3d7a97a9600', value: BuyerStage.DROPPED, label: 'Dropped', position: 8, color: 'red' },
      ],
      name: 'stage',
    },
    {
      universalIdentifier: BUYER_DROP_REASON_FIELD,
      type: FieldType.SELECT,
      label: 'Drop Reason',
      icon: 'IconX',
      isNullable: true,
      defaultValue: null,
      options: [
        { id: '3fdb866e-684a-4c91-b31e-efd393524711', value: BuyerDropReason.BUDGET_MISMATCH, label: 'Budget Mismatch', position: 0, color: 'red' },
        { id: '154a18b2-e0fa-4a90-b3b6-f55f9726e24d', value: BuyerDropReason.LOCATION_MISMATCH, label: 'Location Mismatch', position: 1, color: 'orange' },
        { id: '78de3fc4-a05c-4255-8178-f1001432a61c', value: BuyerDropReason.BOUGHT_ELSEWHERE, label: 'Bought Elsewhere', position: 2, color: 'gray' },
        { id: 'e376deb5-9816-4392-985d-ac50c20adcc7', value: BuyerDropReason.NOT_INTERESTED, label: 'Not Interested', position: 3, color: 'gray' },
        { id: '028c78e8-e5c5-4838-8d8a-2677089a4188', value: BuyerDropReason.UNREACHABLE, label: 'Unreachable', position: 4, color: 'gray' },
        { id: '0a563cbe-fd57-4767-9ec3-7c90e63e6df6', value: BuyerDropReason.TIMING_ISSUE, label: 'Timing Issue', position: 5, color: 'yellow' },
        { id: '42561c92-5430-49f8-a94f-d5c96989e24e', value: BuyerDropReason.WENT_WITH_COMPETITOR, label: 'Went With Competitor', position: 6, color: 'red' },
      ],
      name: 'dropReason',
    },
    {
      universalIdentifier: BUYER_BUDGET_MIN_FIELD,
      type: FieldType.CURRENCY,
      label: 'Budget Min',
      description: 'Minimum budget in INR',
      icon: 'IconCurrencyRupee',
      name: 'budgetMin',
    },
    {
      universalIdentifier: BUYER_BUDGET_MAX_FIELD,
      type: FieldType.CURRENCY,
      label: 'Budget Max',
      description: 'Maximum budget in INR',
      icon: 'IconCurrencyRupee',
      name: 'budgetMax',
    },
    {
      universalIdentifier: BUYER_BEDROOMS_MIN_FIELD,
      type: FieldType.NUMBER,
      label: 'Bedrooms Min',
      description: 'Minimum bedrooms required',
      icon: 'IconBed',
      name: 'bedroomsMin',
    },
    {
      universalIdentifier: BUYER_BATHROOMS_MIN_FIELD,
      type: FieldType.NUMBER,
      label: 'Bathrooms Min',
      description: 'Minimum bathrooms required',
      icon: 'IconBath',
      name: 'bathroomsMin',
    },
    {
      universalIdentifier: BUYER_SQFT_MIN_FIELD,
      type: FieldType.NUMBER,
      label: 'Min Sqft',
      description: 'Minimum square footage required',
      icon: 'IconRuler',
      name: 'sqftMin',
    },
    {
      universalIdentifier: BUYER_FACING_PREF_FIELD,
      type: FieldType.MULTI_SELECT,
      label: 'Facing Preference',
      icon: 'IconCompass',
      options: [
        { id: 'b1c2d3e4-f5a6-7890-abcd-ef1234567891', value: 'NORTH', label: 'North', position: 0, color: 'blue' },
        { id: 'b1c2d3e4-f5a6-7890-abcd-ef1234567892', value: 'SOUTH', label: 'South', position: 1, color: 'green' },
        { id: 'b1c2d3e4-f5a6-7890-abcd-ef1234567893', value: 'EAST', label: 'East', position: 2, color: 'orange' },
        { id: 'b1c2d3e4-f5a6-7890-abcd-ef1234567894', value: 'WEST', label: 'West', position: 3, color: 'purple' },
        { id: 'b1c2d3e4-f5a6-7890-abcd-ef1234567895', value: 'NORTH_EAST', label: 'North East', position: 4, color: 'yellow' },
        { id: 'b1c2d3e4-f5a6-7890-abcd-ef1234567896', value: 'NORTH_WEST', label: 'North West', position: 5, color: 'red' },
        { id: 'b1c2d3e4-f5a6-7890-abcd-ef1234567897', value: 'SOUTH_EAST', label: 'South East', position: 6, color: 'gray' },
        { id: 'b1c2d3e4-f5a6-7890-abcd-ef1234567898', value: 'SOUTH_WEST', label: 'South West', position: 7, color: 'pink' },
      ],
      name: 'facingPreference',
    },
    {
      universalIdentifier: BUYER_FURNISHING_PREF_FIELD,
      type: FieldType.SELECT,
      label: 'Furnishing Preference',
      icon: 'IconSofa',
      options: [
        { id: '537a984f-3790-47b0-acd2-d441f39ad699', value: 'UNFURNISHED', label: 'Unfurnished', position: 0, color: 'blue' },
        { id: '823c98bb-674b-44c3-970c-32ee01f906d1', value: 'SEMI_FURNISHED', label: 'Semi Furnished', position: 1, color: 'green' },
        { id: '8e7a08f4-1f87-4531-91f0-715434924ac1', value: 'FULLY_FURNISHED', label: 'Fully Furnished', position: 2, color: 'orange' },
        { id: '222818ab-a56b-475d-8391-121618d215a0', value: 'ANY', label: 'Any', position: 3, color: 'gray' },
      ],
      name: 'furnishingPreference',
    },
    {
      universalIdentifier: BUYER_HOME_TYPE_PREF_FIELD,
      type: FieldType.SELECT,
      label: 'Home Type Preference',
      icon: 'IconHome',
      options: [
        { id: '99862681-fbbc-48d4-bbf8-aaf6490140ae', value: 'RESALE', label: 'Resale', position: 0, color: 'blue' },
        { id: 'b705de10-28a1-4b87-83a8-661d73057922', value: 'NEW', label: 'New', position: 1, color: 'green' },
        { id: '1028b016-617d-4207-9665-f2b491cb5cce', value: 'PLOT', label: 'Plot', position: 2, color: 'orange' },
        { id: '6a84f415-e01a-41df-806f-2af178ff7dc1', value: 'ANY', label: 'Any', position: 3, color: 'gray' },
      ],
      name: 'homeTypePreference',
    },
    {
      universalIdentifier: BUYER_FLOOR_PREF_FIELD,
      type: FieldType.SELECT,
      label: 'Floor Preference',
      icon: 'IconLayers',
      options: [
        { id: '914a2669-4f52-41e0-bd72-235a1402547b', value: 'LOW', label: 'Low Floor', position: 0, color: 'blue' },
        { id: '816aa700-719d-4609-a93e-7073da1498e4', value: 'MID', label: 'Mid Floor', position: 1, color: 'green' },
        { id: '594e0c09-620c-4c65-8e7d-807e2063d3ca', value: 'HIGH', label: 'High Floor', position: 2, color: 'orange' },
        { id: '7dac7ae5-3851-40da-afe9-5514b7068d53', value: 'ANY', label: 'Any Floor', position: 3, color: 'gray' },
      ],
      name: 'floorPreference',
    },
    {
      universalIdentifier: BUYER_PARKING_REQUIRED_FIELD,
      type: FieldType.BOOLEAN,
      label: 'Parking Required',
      icon: 'IconCar',
      name: 'parkingRequired',
    },
    {
      universalIdentifier: BUYER_TIMELINE_FIELD,
      type: FieldType.SELECT,
      label: 'Timeline',
      icon: 'IconCalendarClock',
      options: [
        { id: '9452147f-34b4-43dc-8bcb-34c1894f79c8', value: 'IMMEDIATE', label: 'Immediate', position: 0, color: 'red' },
        { id: '8e9082bd-4ff5-44b8-9061-d52cfc519c25', value: 'ONE_MONTH', label: '1 Month', position: 1, color: 'orange' },
        { id: 'f7cd0271-1d29-4acf-bd7d-04a5c9e53def', value: 'THREE_MONTHS', label: '3 Months', position: 2, color: 'yellow' },
        { id: 'e21a1df0-3ae6-42a8-90c3-2fd27293edb5', value: 'SIX_MONTHS', label: '6 Months', position: 3, color: 'blue' },
        { id: '4bd10f18-d975-4b0b-a8d9-3ba83d975799', value: 'FLEXIBLE', label: 'Flexible', position: 4, color: 'green' },
      ],
      name: 'timeline',
    },
    {
      universalIdentifier: BUYER_LOAN_REQUIRED_FIELD,
      type: FieldType.BOOLEAN,
      label: 'Loan Required',
      icon: 'IconBuildingBank',
      name: 'loanRequired',
    },
    {
      universalIdentifier: BUYER_MOVE_IN_DATE_FIELD,
      type: FieldType.DATE,
      label: 'Move-in Date',
      icon: 'IconCalendar',
      name: 'moveInDate',
    },
    {
      universalIdentifier: BUYER_MAX_MAINTENANCE_FIELD,
      type: FieldType.CURRENCY,
      label: 'Max Maintenance',
      description: 'Maximum monthly maintenance willing to pay',
      icon: 'IconCurrencyRupee',
      name: 'maxMaintenance',
    },
    {
      universalIdentifier: BUYER_PREF_ZONES_FIELD,
      type: FieldType.MULTI_SELECT,
      label: 'Preferred Zones',
      icon: 'IconMap',
      options: [
        { id: '051e2e43-e2ec-4c59-a883-23424b29b156', value: 'KORAMANGALA', label: 'Koramangala', position: 0, color: 'blue' },
        { id: '5b13ede6-135e-4245-951a-9ed7631f64de', value: 'INDIRANAGAR', label: 'Indiranagar', position: 1, color: 'green' },
        { id: '23af9438-d712-40ea-b46f-af7bc4df821b', value: 'WHITEFIELD', label: 'Whitefield', position: 2, color: 'orange' },
        { id: '541b8a62-c507-4699-8e5a-ca428c466925', value: 'MG_ROAD', label: 'MG Road', position: 3, color: 'purple' },
        { id: '6a10070e-5ff9-4d60-86ba-19e00fb5a377', value: 'JAYANAGAR', label: 'Jayanagar', position: 4, color: 'red' },
      ],
      name: 'preferredZones',
    },
    {
      universalIdentifier: BUYER_PREF_TYPES_FIELD,
      type: FieldType.MULTI_SELECT,
      label: 'Preferred Property Types',
      icon: 'IconBuilding',
      options: [
        { id: 'd8ac78d4-b9b7-4681-a05c-a47a8e65d2c6', value: 'APARTMENT', label: 'Apartment', position: 0, color: 'blue' },
        { id: '084cee12-fa6b-472f-a27d-7b134370ac4b', value: 'VILLA', label: 'Villa', position: 1, color: 'green' },
        { id: 'e8823bd7-061e-4f41-afef-2ebd59400d1e', value: 'PENTHOUSE', label: 'Penthouse', position: 2, color: 'purple' },
        { id: 'c6f62750-3694-4611-b1eb-15fba2db6a43', value: 'STUDIO', label: 'Studio', position: 3, color: 'yellow' },
        { id: '0b890fa3-d4c7-4953-84d9-20a5ad5b5d74', value: 'COMMERCIAL', label: 'Commercial', position: 4, color: 'gray' },
      ],
      name: 'preferredPropertyTypes',
    },
    {
      universalIdentifier: BUYER_NOTES_FIELD,
      type: FieldType.RICH_TEXT,
      label: 'Notes',
      description: 'Buyer notes and requirements',
      icon: 'IconNotes',
      name: 'notes',
    },
  ],
});

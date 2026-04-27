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
        { id: '47723065-ad9e-407d-9b46-711a6c8f8ca1', value: BuyerStage.PROPERTY_SHORTLISTED, label: 'Property Shortlisted', position: 3, color: 'cyan' },
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

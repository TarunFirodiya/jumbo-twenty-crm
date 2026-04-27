import { defineObject, FieldType } from 'twenty-sdk/define';

enum EnquirySource {
  WEBSITE = 'WEBSITE',
  WHATSAPP = 'WHATSAPP',
  PHONE = 'PHONE',
  REFERRAL = 'REFERRAL',
  WALK_IN = 'WALK_IN',
  SOCIAL_MEDIA = 'SOCIAL_MEDIA',
  PORTAL = 'PORTAL',
}

enum EnquiryType {
  BUY = 'BUY',
  SELL = 'SELL',
  RENT = 'RENT',
  VALUATION = 'VALUATION',
}

enum EnquiryStatus {
  NEW = 'NEW',
  ASSIGNED = 'ASSIGNED',
  IN_PROGRESS = 'IN_PROGRESS',
  CONVERTED = 'CONVERTED',
  DROPPED = 'DROPPED',
}

export const ENQUIRY_UNIVERSAL_IDENTIFIER = 'e718ab0c-b6d3-456c-a496-c8d588393820';
export const ENQUIRY_NUMBER_FIELD = '1c50de94-33b1-4076-8864-b38282dc4057';
export const ENQUIRY_SOURCE_FIELD = '3812cdf1-dcc6-48c9-a36d-ea908038f980';
export const ENQUIRY_TYPE_FIELD = 'c881f147-a09e-4296-b76a-6633e2d1b844';
export const ENQUIRY_STATUS_FIELD = 'c8a4a4ac-78e3-46df-9988-01f78fba34d4';
export const ENQUIRY_BUDGET_FIELD = 'cceecd1c-0aaa-4a37-a3d1-25724a862fa0';
export const ENQUIRY_PREF_ZONES_FIELD = 'a08126a2-4686-4d70-b464-74af2cf58684';
export const ENQUIRY_NOTES_FIELD = '21536df2-1145-4205-ac24-62dcd6264216';

export default defineObject({
  universalIdentifier: ENQUIRY_UNIVERSAL_IDENTIFIER,
  nameSingular: 'enquiry',
  namePlural: 'enquiries',
  labelSingular: 'Enquiry',
  labelPlural: 'Enquiries',
  description: 'Incoming buyer or seller enquiry',
  icon: 'IconMessageCircle',
  labelIdentifierFieldMetadataUniversalIdentifier: ENQUIRY_NUMBER_FIELD,
  fields: [
    {
      universalIdentifier: ENQUIRY_NUMBER_FIELD,
      type: FieldType.TEXT,
      label: 'Enquiry Number',
      description: 'Auto-generated enquiry reference',
      icon: 'IconHash',
      name: 'enquiryNumber',
    },
    {
      universalIdentifier: ENQUIRY_SOURCE_FIELD,
      type: FieldType.SELECT,
      label: 'Source',
      icon: 'IconSource',
      options: [
        { id: '49308342-f379-4a9d-873d-ddeec08f63d0', value: EnquirySource.WEBSITE, label: 'Website', position: 0, color: 'blue' },
        { id: '856ff248-fe8c-474b-9715-84b5573abcb6', value: EnquirySource.WHATSAPP, label: 'WhatsApp', position: 1, color: 'green' },
        { id: '9be36ca2-4804-4aeb-8682-82d50a03c889', value: EnquirySource.PHONE, label: 'Phone', position: 2, color: 'orange' },
        { id: '58cea3c0-3437-4139-b6ea-c1d8cba22749', value: EnquirySource.REFERRAL, label: 'Referral', position: 3, color: 'purple' },
        { id: '84af08b7-31c8-4638-90b2-f5f3de351a14', value: EnquirySource.WALK_IN, label: 'Walk In', position: 4, color: 'yellow' },
        { id: 'a0aa8269-8b7a-4d5f-b96b-f9cbfa923b2d', value: EnquirySource.SOCIAL_MEDIA, label: 'Social Media', position: 5, color: 'pink' },
        { id: '2994a97b-f14d-49ee-b45d-edc6bf4adb56', value: EnquirySource.PORTAL, label: 'Portal', position: 6, color: 'cyan' },
      ],
      name: 'source',
    },
    {
      universalIdentifier: ENQUIRY_TYPE_FIELD,
      type: FieldType.SELECT,
      label: 'Enquiry Type',
      icon: 'IconTag',
      options: [
        { id: '23f10175-b6ab-4cd3-a9b7-15dbb7e7d971', value: EnquiryType.BUY, label: 'Buy', position: 0, color: 'blue' },
        { id: '728702ac-73df-4a0d-8ad0-f155135adce4', value: EnquiryType.SELL, label: 'Sell', position: 1, color: 'green' },
        { id: '81829873-8216-4467-b6f7-dd901b71c854', value: EnquiryType.RENT, label: 'Rent', position: 2, color: 'orange' },
        { id: '44f213e5-9cbb-4d1e-a9ce-08f17f716ef8', value: EnquiryType.VALUATION, label: 'Valuation', position: 3, color: 'purple' },
      ],
      name: 'enquiryType',
    },
    {
      universalIdentifier: ENQUIRY_STATUS_FIELD,
      type: FieldType.SELECT,
      label: 'Status',
      icon: 'IconStatusChange',
      defaultValue: `'${EnquiryStatus.NEW}'`,
      options: [
        { id: 'e17a6c61-ccc5-4361-8f7b-04cf3cbac05b', value: EnquiryStatus.NEW, label: 'New', position: 0, color: 'blue' },
        { id: '84b9aeb9-cf8b-4fbf-a369-2e77a1c56957', value: EnquiryStatus.ASSIGNED, label: 'Assigned', position: 1, color: 'yellow' },
        { id: 'eaee9adf-e90e-464f-8f3d-99c60cefe5c6', value: EnquiryStatus.IN_PROGRESS, label: 'In Progress', position: 2, color: 'orange' },
        { id: 'c552b8ef-25d4-4ddb-b445-868a2c93e1a8', value: EnquiryStatus.CONVERTED, label: 'Converted', position: 3, color: 'green' },
        { id: '7baa953e-b9d7-4c36-9a8f-a209a64450a9', value: EnquiryStatus.DROPPED, label: 'Dropped', position: 4, color: 'red' },
      ],
      name: 'status',
    },
    {
      universalIdentifier: ENQUIRY_BUDGET_FIELD,
      type: FieldType.CURRENCY,
      label: 'Budget',
      description: 'Indicative budget in INR',
      icon: 'IconCurrencyRupee',
      name: 'budget',
    },
    {
      universalIdentifier: ENQUIRY_PREF_ZONES_FIELD,
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
      universalIdentifier: ENQUIRY_NOTES_FIELD,
      type: FieldType.RICH_TEXT,
      label: 'Notes',
      description: 'Enquiry details and context',
      icon: 'IconNotes',
      name: 'notes',
    },
  ],
});

import { defineObject, FieldType } from 'twenty-sdk/define';

enum CommunicationType {
  CALL = 'CALL',
  WHATSAPP = 'WHATSAPP',
  EMAIL = 'EMAIL',
  SMS = 'SMS',
  MEETING = 'MEETING',
}

enum CommunicationDirection {
  INBOUND = 'INBOUND',
  OUTBOUND = 'OUTBOUND',
}

export const COMMUNICATION_UNIVERSAL_IDENTIFIER = '972b6961-0e3b-453e-be8a-b645d0939eb2';
export const COMM_TYPE_FIELD = '7799eaff-0173-432e-9f8c-b20108541d03';
export const COMM_DIRECTION_FIELD = '3261b8e5-43bd-4005-b429-103e94047694';
export const COMM_DURATION_FIELD = '952490c0-d89c-43a1-a065-e82affedc067';
export const COMM_TIMESTAMP_FIELD = 'a033607f-f89e-47ee-b2d0-2f1f4cee28e0';
export const COMM_SUMMARY_FIELD = '01f2e52f-19cf-46fa-9734-471249755d56';
export const COMM_RAW_MESSAGE_FIELD = 'db20385d-13f9-4b62-b9f6-bb155f0c09da';
export const COMM_MESSAGE_ID_FIELD = '90f23036-2b28-4fe8-8bcc-7b9b168d1add';
export const COMM_DELIVERY_STATUS_FIELD = 'd03bb3c2-695d-434f-85d1-d712dd7500ac';

export default defineObject({
  universalIdentifier: COMMUNICATION_UNIVERSAL_IDENTIFIER,
  nameSingular: 'communication',
  namePlural: 'communications',
  labelSingular: 'Communication',
  labelPlural: 'Communications',
  description: 'Call, WhatsApp, email or meeting log',
  icon: 'IconPhone',
  labelIdentifierFieldMetadataUniversalIdentifier: COMM_SUMMARY_FIELD,
  fields: [
    {
      universalIdentifier: COMM_TYPE_FIELD,
      type: FieldType.SELECT,
      label: 'Type',
      icon: 'IconPhone',
      options: [
        { id: 'b02309f5-2a0c-42af-9020-03c601cc07e4', value: CommunicationType.CALL, label: 'Call', position: 0, color: 'blue' },
        { id: '3df24c05-7bc1-40c2-90d1-5d693f05708e', value: CommunicationType.WHATSAPP, label: 'WhatsApp', position: 1, color: 'green' },
        { id: '563699a4-faea-4dba-a477-9e9b219871bd', value: CommunicationType.EMAIL, label: 'Email', position: 2, color: 'orange' },
        { id: 'd0c44651-5492-4f2c-be00-969684e02994', value: CommunicationType.SMS, label: 'SMS', position: 3, color: 'purple' },
        { id: 'ea679aec-bbc9-4b20-b3c6-a2a57aec9f97', value: CommunicationType.MEETING, label: 'Meeting', position: 4, color: 'yellow' },
      ],
      name: 'communicationType',
    },
    {
      universalIdentifier: COMM_DIRECTION_FIELD,
      type: FieldType.SELECT,
      label: 'Direction',
      icon: 'IconArrowsExchange',
      options: [
        { id: '63827530-43c4-4ea1-8731-e95b191a181f', value: CommunicationDirection.INBOUND, label: 'Inbound', position: 0, color: 'blue' },
        { id: 'cc463632-a713-46c6-9625-a94b0222cf2f', value: CommunicationDirection.OUTBOUND, label: 'Outbound', position: 1, color: 'green' },
      ],
      name: 'direction',
    },
    {
      universalIdentifier: COMM_DURATION_FIELD,
      type: FieldType.NUMBER,
      label: 'Duration (min)',
      description: 'Duration in minutes',
      icon: 'IconClock',
      name: 'duration',
    },
    {
      universalIdentifier: COMM_TIMESTAMP_FIELD,
      type: FieldType.DATE_TIME,
      label: 'Timestamp',
      icon: 'IconCalendar',
      name: 'timestamp',
    },
    {
      universalIdentifier: COMM_SUMMARY_FIELD,
      type: FieldType.TEXT,
      label: 'Summary',
      description: 'Brief summary of the communication',
      icon: 'IconMessage',
      name: 'summary',
    },
    {
      universalIdentifier: COMM_RAW_MESSAGE_FIELD,
      type: FieldType.TEXT,
      label: 'Raw Message',
      description: 'Full message content from WhatsApp or other channels',
      icon: 'IconMessageDots',
      name: 'rawMessage',
    },
    {
      universalIdentifier: COMM_MESSAGE_ID_FIELD,
      type: FieldType.TEXT,
      label: 'Message ID',
      description: 'External message ID for delivery tracking',
      icon: 'IconHash',
      name: 'messageId',
    },
    {
      universalIdentifier: COMM_DELIVERY_STATUS_FIELD,
      type: FieldType.SELECT,
      label: 'Delivery Status',
      icon: 'IconCheck',
      options: [
        { id: '83f86589-efa3-4076-aaf8-b4397e4ba9ba', value: 'SENT', label: 'Sent', position: 0, color: 'blue' },
        { id: 'f88037d1-162a-4e32-9f7b-57da2c6ff894', value: 'DELIVERED', label: 'Delivered', position: 1, color: 'green' },
        { id: '2d261896-efc6-4365-a863-f0de6c376f91', value: 'READ', label: 'Read', position: 2, color: 'yellow' },
        { id: 'a351badd-e6e1-481c-8ee9-ca942c1eb5d3', value: 'FAILED', label: 'Failed', position: 3, color: 'red' },
      ],
      name: 'deliveryStatus',
    },
  ],
});

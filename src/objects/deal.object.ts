import { defineObject, FieldType } from 'twenty-sdk/define';

enum DealStage {
  LEAD = 'LEAD',
  QUALIFIED = 'QUALIFIED',
  NEGOTIATION = 'NEGOTIATION',
  CLOSED_WON = 'CLOSED_WON',
  CLOSED_LOST = 'CLOSED_LOST',
}

export const DEAL_UNIVERSAL_IDENTIFIER = '1be1c12a-1792-43ac-86ff-c71424ffd276';
export const DEAL_NAME_FIELD_UNIVERSAL_IDENTIFIER = '3885385a-9609-4420-bdbc-812e1063816c';
export const DEAL_VALUE_FIELD_UNIVERSAL_IDENTIFIER = 'ba889b20-d6e9-4a8f-b840-42e69490945f';
export const DEAL_STAGE_FIELD_UNIVERSAL_IDENTIFIER = '70b548d2-ea3a-436d-9528-0a3e8c77e571';
export const DEAL_CLOSE_DATE_FIELD_UNIVERSAL_IDENTIFIER = '0684f54b-4d70-40f8-b11b-c93d97e0bd1c';

export default defineObject({
  universalIdentifier: DEAL_UNIVERSAL_IDENTIFIER,
  nameSingular: 'deal',
  namePlural: 'deals',
  labelSingular: 'Deal',
  labelPlural: 'Deals',
  description: 'A real estate transaction deal',
  icon: 'IconHandCoins',
  labelIdentifierFieldMetadataUniversalIdentifier: DEAL_NAME_FIELD_UNIVERSAL_IDENTIFIER,
  fields: [
    {
      universalIdentifier: DEAL_NAME_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.TEXT,
      label: 'Deal Name',
      description: 'Name of the deal',
      icon: 'IconFileDescription',
      name: 'name',
    },
    {
      universalIdentifier: DEAL_VALUE_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.CURRENCY,
      label: 'Deal Value',
      description: 'Value of the deal in INR',
      icon: 'IconCurrencyRupee',
      name: 'value',
    },
    {
      universalIdentifier: DEAL_STAGE_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.SELECT,
      label: 'Stage',
      icon: 'IconStages',
      defaultValue: `'${DealStage.LEAD}'`,
      options: [
        { id: 'c4a125a4-a3e6-4c71-9a89-6c64e4e52e53', value: DealStage.LEAD, label: 'Lead', position: 0, color: 'blue' },
        { id: 'fb7240ce-62c7-42db-b9fa-76ce3188a08c', value: DealStage.QUALIFIED, label: 'Qualified', position: 1, color: 'yellow' },
        { id: '78ad4e81-b538-4b3d-9408-ff3009b28a05', value: DealStage.NEGOTIATION, label: 'Negotiation', position: 2, color: 'orange' },
        { id: '374b9639-d6a7-4bc0-9bba-a3c4565c80a0', value: DealStage.CLOSED_WON, label: 'Closed Won', position: 3, color: 'green' },
        { id: 'fb4b0e57-b630-4210-add8-c9cb1814db8a', value: DealStage.CLOSED_LOST, label: 'Closed Lost', position: 4, color: 'red' },
      ],
      name: 'stage',
    },
    {
      universalIdentifier: DEAL_CLOSE_DATE_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.DATE_TIME,
      label: 'Close Date',
      icon: 'IconCalendar',
      isNullable: true,
      defaultValue: null,
      name: 'closeDate',
    },
  ],
});

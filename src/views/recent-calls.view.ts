import { defineView, ViewType, ViewFilterOperand } from 'twenty-sdk/define';
import { COMMUNICATION_UNIVERSAL_IDENTIFIER, COMM_TYPE_FIELD, COMM_DIRECTION_FIELD, COMM_DURATION_FIELD, COMM_TIMESTAMP_FIELD, COMM_SUMMARY_FIELD } from '../objects/communication.object';

export const RECENT_CALLS_VIEW_ID = 'b42b0d50-fe06-44a6-b0f3-bb9380bdf64e';

export default defineView({
  universalIdentifier: RECENT_CALLS_VIEW_ID,
  name: 'Recent Calls',
  objectUniversalIdentifier: COMMUNICATION_UNIVERSAL_IDENTIFIER,
  type: ViewType.TABLE,
  icon: 'IconPhone',
  isCompact: false,
  fields: [
    { universalIdentifier: 'faa29d5f-48c0-445d-a254-58836b5cc090', fieldMetadataUniversalIdentifier: COMM_SUMMARY_FIELD, position: 0, isVisible: true },
    { universalIdentifier: 'b8841341-4367-4259-bfb6-54fcf1edfdfe', fieldMetadataUniversalIdentifier: COMM_DIRECTION_FIELD, position: 1, isVisible: true },
    { universalIdentifier: '276afb46-5e3c-45d1-b8e2-f01e7fae61e9', fieldMetadataUniversalIdentifier: COMM_DURATION_FIELD, position: 2, isVisible: true },
    { universalIdentifier: '6183b439-a532-476a-85b5-77b45b01796a', fieldMetadataUniversalIdentifier: COMM_TIMESTAMP_FIELD, position: 3, isVisible: true },
  ],
  filters: [
    {
      universalIdentifier: '5fa58d91-560a-4371-9559-bb7bf99d8804',
      fieldMetadataUniversalIdentifier: COMM_TYPE_FIELD,
      operand: ViewFilterOperand.IS,
      value: 'CALL',
    },
  ],
});

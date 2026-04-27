import { defineView, ViewKey } from 'twenty-sdk/define';
import { COMMUNICATION_UNIVERSAL_IDENTIFIER, COMM_TYPE_FIELD, COMM_DIRECTION_FIELD, COMM_DURATION_FIELD, COMM_TIMESTAMP_FIELD, COMM_SUMMARY_FIELD } from '../objects/communication.object';

export const ALL_COMMUNICATIONS_VIEW_ID = 'ffa449a9-b476-40ad-80b0-40852434903f';

export default defineView({
  universalIdentifier: ALL_COMMUNICATIONS_VIEW_ID,
  name: 'All Communications',
  objectUniversalIdentifier: COMMUNICATION_UNIVERSAL_IDENTIFIER,
  key: ViewKey.INDEX,
  icon: 'IconPhone',
  isCompact: false,
  fields: [
    { universalIdentifier: '55600f62-83d4-4677-8ecd-785a41a59863', fieldMetadataUniversalIdentifier: COMM_SUMMARY_FIELD, position: 0, isVisible: true },
    { universalIdentifier: '12747232-5f54-4838-a47d-0ae592056dfe', fieldMetadataUniversalIdentifier: COMM_TYPE_FIELD, position: 1, isVisible: true },
    { universalIdentifier: '1e4045f7-e68b-4cdb-89c3-47d700845667', fieldMetadataUniversalIdentifier: COMM_DIRECTION_FIELD, position: 2, isVisible: true },
    { universalIdentifier: 'f8d44cac-9d6e-4162-8ff9-cb24182a8958', fieldMetadataUniversalIdentifier: COMM_DURATION_FIELD, position: 3, isVisible: true },
    { universalIdentifier: '582775f1-55c2-4629-8c4b-2e490fdb7b1e', fieldMetadataUniversalIdentifier: COMM_TIMESTAMP_FIELD, position: 4, isVisible: true },
  ],
});

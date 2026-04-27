import { defineView, ViewKey } from 'twenty-sdk/define';
import { ENQUIRY_UNIVERSAL_IDENTIFIER, ENQUIRY_NUMBER_FIELD, ENQUIRY_SOURCE_FIELD, ENQUIRY_TYPE_FIELD, ENQUIRY_STATUS_FIELD, ENQUIRY_BUDGET_FIELD } from '../objects/enquiry.object';

export const ALL_ENQUIRIES_VIEW_ID = 'de12f061-528c-4553-b455-fe36de5e4692';

export default defineView({
  universalIdentifier: ALL_ENQUIRIES_VIEW_ID,
  name: 'All Enquiries',
  objectUniversalIdentifier: ENQUIRY_UNIVERSAL_IDENTIFIER,
  key: ViewKey.INDEX,
  icon: 'IconMessageCircle',
  isCompact: false,
  fields: [
    { universalIdentifier: 'fcfc070d-0252-4d9b-a968-91d903d9304d', fieldMetadataUniversalIdentifier: ENQUIRY_NUMBER_FIELD, position: 0, isVisible: true },
    { universalIdentifier: '0bb31790-fc39-4835-b14f-bc4d20495215', fieldMetadataUniversalIdentifier: ENQUIRY_SOURCE_FIELD, position: 1, isVisible: true },
    { universalIdentifier: '607f4f1d-5635-4e98-b35d-c72e43c37f49', fieldMetadataUniversalIdentifier: ENQUIRY_TYPE_FIELD, position: 2, isVisible: true },
    { universalIdentifier: 'cc901f51-6664-4bee-aa09-1f6dc8788ba4', fieldMetadataUniversalIdentifier: ENQUIRY_STATUS_FIELD, position: 3, isVisible: true },
    { universalIdentifier: '7da852bf-a01b-484c-b811-b6b8e30a72ef', fieldMetadataUniversalIdentifier: ENQUIRY_BUDGET_FIELD, position: 4, isVisible: true },
  ],
});

import { defineView, ViewType, ViewFilterOperand } from 'twenty-sdk/define';
import { ENQUIRY_UNIVERSAL_IDENTIFIER, ENQUIRY_NUMBER_FIELD, ENQUIRY_SOURCE_FIELD, ENQUIRY_TYPE_FIELD, ENQUIRY_STATUS_FIELD } from '../objects/enquiry.object';

export const NEW_ENQUIRIES_VIEW_ID = 'e54b146f-003a-4433-a35d-dd462207d32c';

export default defineView({
  universalIdentifier: NEW_ENQUIRIES_VIEW_ID,
  name: 'New Enquiries',
  objectUniversalIdentifier: ENQUIRY_UNIVERSAL_IDENTIFIER,
  type: ViewType.TABLE,
  icon: 'IconMessageCircle',
  isCompact: false,
  fields: [
    { universalIdentifier: '271beef3-c99d-4f54-8736-fcf51cb4fb36', fieldMetadataUniversalIdentifier: ENQUIRY_NUMBER_FIELD, position: 0, isVisible: true },
    { universalIdentifier: 'a73a4e1b-a12d-451b-9bbe-4e7f8114a15b', fieldMetadataUniversalIdentifier: ENQUIRY_SOURCE_FIELD, position: 1, isVisible: true },
    { universalIdentifier: 'cc7067e7-6778-4e14-83ba-9d893376ae9e', fieldMetadataUniversalIdentifier: ENQUIRY_TYPE_FIELD, position: 2, isVisible: true },
    { universalIdentifier: '970ac24f-4210-45b1-9c41-de9ead671374', fieldMetadataUniversalIdentifier: ENQUIRY_STATUS_FIELD, position: 3, isVisible: true },
  ],
  filters: [
    {
      universalIdentifier: 'f679bd41-8bbb-42fc-8c57-f8a8d03c1742',
      fieldMetadataUniversalIdentifier: ENQUIRY_STATUS_FIELD,
      operand: ViewFilterOperand.IS,
      value: 'NEW',
    },
  ],
});

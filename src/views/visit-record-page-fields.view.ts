import { defineView, ViewType } from 'twenty-sdk/define';
import { VISIT_UNIVERSAL_IDENTIFIER } from '../objects/visit.object';
import {
  VISIT_NAME_FIELD,  VISIT_SCHEDULED_AT_FIELD,  VISIT_STATUS_FIELD,  VISIT_OTP_CODE_FIELD,  VISIT_FEEDBACK_TEXT_FIELD,  VISIT_FEEDBACK_RATING_FIELD,  VISIT_CONFIRMED_AT_FIELD,  VISIT_COMPLETED_AT_FIELD,  VISIT_CANCELLED_AT_FIELD,  VISIT_CANCELLATION_REASON_FIELD,  VISIT_VISIT_OTP_FIELD,  VISIT_OTP_ATTEMPTS_FIELD,  VISIT_PRIMARY_PAIN_POINT_FIELD,  VISIT_BUYER_SCORE_FIELD,  VISIT_RESCHEDULED_TO_FIELD,
} from '../objects/visit.object';

export const VISIT_RECORD_PAGE_FIELDS_VIEW_ID = 'd6b90603-9d79-46bc-88ba-39ac48151fba';

export default defineView({
  universalIdentifier: VISIT_RECORD_PAGE_FIELDS_VIEW_ID,
  name: 'Visit Record Page Fields',
  objectUniversalIdentifier: VISIT_UNIVERSAL_IDENTIFIER,
  type: ViewType.FIELDS_WIDGET,
  icon: 'IconDoorEnter',
  isCompact: false,
  fields: [
    { universalIdentifier: '4b0e1f25-92b9-4f4e-9d02-747acdd3c0a4', fieldMetadataUniversalIdentifier: VISIT_NAME_FIELD, position: 0, isVisible: true },
    { universalIdentifier: '56c58218-4379-4fcc-9a1a-7288d19d99ee', fieldMetadataUniversalIdentifier: VISIT_SCHEDULED_AT_FIELD, position: 1, isVisible: true },
    { universalIdentifier: '5ff18255-e9b2-4bee-9c15-4799b196ed7b', fieldMetadataUniversalIdentifier: VISIT_STATUS_FIELD, position: 2, isVisible: true },
    { universalIdentifier: 'eae4935a-5e72-4305-a72a-66719881dac1', fieldMetadataUniversalIdentifier: VISIT_OTP_CODE_FIELD, position: 3, isVisible: true },
    { universalIdentifier: '7ef22453-2bee-432f-8f9d-74cee317f703', fieldMetadataUniversalIdentifier: VISIT_FEEDBACK_TEXT_FIELD, position: 4, isVisible: true },
    { universalIdentifier: '4168916d-62b2-48fe-b323-856ad4af7146', fieldMetadataUniversalIdentifier: VISIT_FEEDBACK_RATING_FIELD, position: 5, isVisible: true },
    { universalIdentifier: 'd7ba8202-d1a8-47b2-9eea-8f64e08fb3e0', fieldMetadataUniversalIdentifier: VISIT_CONFIRMED_AT_FIELD, position: 6, isVisible: true },
    { universalIdentifier: 'be22e089-dfbb-42a3-ae5b-32a260028a6a', fieldMetadataUniversalIdentifier: VISIT_COMPLETED_AT_FIELD, position: 7, isVisible: true },
    { universalIdentifier: '82f18442-752a-42fe-9040-aba912c4874d', fieldMetadataUniversalIdentifier: VISIT_CANCELLED_AT_FIELD, position: 8, isVisible: true },
    { universalIdentifier: '8761607f-67e1-4c78-9f0c-fcb5f151d5ad', fieldMetadataUniversalIdentifier: VISIT_CANCELLATION_REASON_FIELD, position: 9, isVisible: true },
    { universalIdentifier: '542c9846-bbf3-4d47-a074-b3d8048c53d8', fieldMetadataUniversalIdentifier: VISIT_VISIT_OTP_FIELD, position: 10, isVisible: true },
    { universalIdentifier: 'cf06f13d-3986-4596-aa87-e7fe7ded2696', fieldMetadataUniversalIdentifier: VISIT_OTP_ATTEMPTS_FIELD, position: 11, isVisible: true },
    { universalIdentifier: '8578be7a-4ae1-4f59-9a28-7ca8efcea39f', fieldMetadataUniversalIdentifier: VISIT_PRIMARY_PAIN_POINT_FIELD, position: 12, isVisible: true },
    { universalIdentifier: 'b8d983b0-c55a-4717-9343-0190db3b522e', fieldMetadataUniversalIdentifier: VISIT_BUYER_SCORE_FIELD, position: 13, isVisible: true },
    { universalIdentifier: 'd68fa065-a703-4f9b-a5cb-5586ede0adba', fieldMetadataUniversalIdentifier: VISIT_RESCHEDULED_TO_FIELD, position: 14, isVisible: true },
  ],
});

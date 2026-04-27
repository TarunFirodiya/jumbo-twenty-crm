import { defineObject, FieldType } from 'twenty-sdk/define';

export const VISIT_UNIVERSAL_IDENTIFIER = 'fecfc310-91b3-4262-8423-b28aab3882e2';
export const VISIT_NAME_FIELD = 'b2c90b2a-adae-456f-8728-2a5faedf521f';
export const VISIT_SCHEDULED_AT_FIELD = '6e6a2fb8-7b30-4627-8cfd-59b1697440eb';
export const VISIT_STATUS_FIELD = 'd4b7fdfb-7e9c-4166-81d0-3ff8ee70e533';
export const VISIT_OTP_CODE_FIELD = 'cd4d8934-da14-4b3e-a241-6741499c2c81';
export const VISIT_FEEDBACK_TEXT_FIELD = 'ac4203f4-238e-4dd0-bec7-ac9ae1cf69fa';
export const VISIT_FEEDBACK_RATING_FIELD = '971089a4-e859-4fa1-87ff-ca67cbfaf8ba';

enum VisitStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
  NO_SHOW = 'NO_SHOW',
}

export default defineObject({
  universalIdentifier: VISIT_UNIVERSAL_IDENTIFIER,
  nameSingular: 'visit',
  namePlural: 'visits',
  labelSingular: 'Visit',
  labelPlural: 'Visits',
  description: 'Individual site visit with buyer and agent',
  icon: 'IconDoorEnter',
  labelIdentifierFieldMetadataUniversalIdentifier: VISIT_NAME_FIELD,
  fields: [
    {
      universalIdentifier: VISIT_NAME_FIELD,
      type: FieldType.TEXT,
      label: 'Visit Name',
      description: 'Label for the visit',
      icon: 'IconFileDescription',
      name: 'name',
    },
    {
      universalIdentifier: VISIT_SCHEDULED_AT_FIELD,
      type: FieldType.DATE_TIME,
      label: 'Scheduled At',
      description: 'Scheduled date and time of visit',
      icon: 'IconCalendar',
      name: 'scheduledAt',
    },
    {
      universalIdentifier: VISIT_STATUS_FIELD,
      type: FieldType.SELECT,
      label: 'Status',
      description: 'Current status of the visit',
      icon: 'IconStatusChange',
      defaultValue: `'${VisitStatus.PENDING}'`,
      options: [
        { id: '8f03367e-8570-4c84-966e-8fd17c37b561', value: VisitStatus.PENDING, label: 'Pending', position: 0, color: 'blue' },
        { id: '9445fb0c-3579-4603-adfd-1699d994eec7', value: VisitStatus.CONFIRMED, label: 'Confirmed', position: 1, color: 'yellow' },
        { id: 'daf2f8ee-2ff1-4c18-b664-589be06ffcdf', value: VisitStatus.COMPLETED, label: 'Completed', position: 2, color: 'green' },
        { id: '5d6a1d05-edf1-424d-8b24-7f5a2689d797', value: VisitStatus.CANCELLED, label: 'Cancelled', position: 3, color: 'red' },
        { id: '9b01ef5d-a9af-4339-b49e-35323d31d84c', value: VisitStatus.NO_SHOW, label: 'No Show', position: 4, color: 'gray' },
      ],
      name: 'status',
    },
    {
      universalIdentifier: VISIT_OTP_CODE_FIELD,
      type: FieldType.TEXT,
      label: 'OTP Code',
      description: 'Customer verification code for visit completion',
      icon: 'IconLock',
      name: 'otpCode',
    },
    {
      universalIdentifier: VISIT_FEEDBACK_TEXT_FIELD,
      type: FieldType.RICH_TEXT,
      label: 'Feedback Notes',
      description: 'Post-visit feedback from buyer',
      icon: 'IconMessage',
      name: 'feedbackText',
    },
    {
      universalIdentifier: VISIT_FEEDBACK_RATING_FIELD,
      type: FieldType.NUMBER,
      label: 'Feedback Rating',
      description: 'Buyer rating 1-5 stars',
      icon: 'IconStar',
      name: 'feedbackRating',
    },
  ],
});

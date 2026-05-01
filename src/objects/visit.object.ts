import { defineObject, FieldType } from 'twenty-sdk/define';

export const VISIT_UNIVERSAL_IDENTIFIER = 'fecfc310-91b3-4262-8423-b28aab3882e2';
export const VISIT_NAME_FIELD = 'b2c90b2a-adae-456f-8728-2a5faedf521f';
export const VISIT_SCHEDULED_AT_FIELD = '6e6a2fb8-7b30-4627-8cfd-59b1697440eb';
export const VISIT_STATUS_FIELD = 'd4b7fdfb-7e9c-4166-81d0-3ff8ee70e533';
export const VISIT_OTP_CODE_FIELD = 'cd4d8934-da14-4b3e-a241-6741499c2c81';
export const VISIT_FEEDBACK_TEXT_FIELD = 'ac4203f4-238e-4dd0-bec7-ac9ae1cf69fa';
export const VISIT_FEEDBACK_RATING_FIELD = '971089a4-e859-4fa1-87ff-ca67cbfaf8ba';
export const VISIT_CONFIRMED_AT_FIELD = 'c484ef99-e726-4096-999e-aa11972ef553';
export const VISIT_COMPLETED_AT_FIELD = 'a1384524-2a38-4668-ba8e-a9ede8dd5190';
export const VISIT_CANCELLED_AT_FIELD = '044bff8c-ba77-4174-ac32-a4eba5fd2dea';
export const VISIT_CANCELLATION_REASON_FIELD = '9775396a-d8b0-44b8-9bcc-d94208ab9451';
export const VISIT_VISIT_OTP_FIELD = 'a86ef2df-12f2-4f4f-b181-f8007a838c5e';
export const VISIT_OTP_ATTEMPTS_FIELD = '18b62c22-d979-4f57-80d5-a81af7e68975';
export const VISIT_PRIMARY_PAIN_POINT_FIELD = 'bc5fcce6-d740-47f4-9482-f42dd0bb6be9';
export const VISIT_BUYER_SCORE_FIELD = 'a4135d0d-4172-49f7-bbd7-7ef113561546';
export const VISIT_RESCHEDULED_TO_FIELD = 'bbce9895-599e-4e0b-a383-f6d321554920';

enum VisitStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
  NO_SHOW = 'NO_SHOW',
}

enum CancellationReason {
  SELLER_UNAVAILABLE = 'SELLER_UNAVAILABLE',
  HOUSE_SOLD = 'HOUSE_SOLD',
  BUYER_CANCELED = 'BUYER_CANCELED',
  TENANT_UNAVAILABLE = 'TENANT_UNAVAILABLE',
  AP_UNAVAILABLE = 'AP_UNAVAILABLE',
  KEY_PERSON_UNAVAILABLE = 'KEY_PERSON_UNAVAILABLE',
  BUYER_NON_RESPONSIVE = 'BUYER_NON_RESPONSIVE',
}

enum PrimaryPainPoint {
  BIGGER_DIMENSIONS = 'BIGGER_DIMENSIONS',
  LOCATION = 'LOCATION',
  BUILDER_TRUST = 'BUILDER_TRUST',
  AMENITIES = 'AMENITIES',
  FACING = 'FACING',
  BALCONY_VIEW = 'BALCONY_VIEW',
  HOT_BUYER = 'HOT_BUYER',
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
    {
      universalIdentifier: VISIT_CONFIRMED_AT_FIELD,
      type: FieldType.DATE_TIME,
      label: 'Confirmed At',
      description: 'When visit was confirmed',
      icon: 'IconCalendarCheck',
      name: 'confirmedAt',
    },
    {
      universalIdentifier: VISIT_COMPLETED_AT_FIELD,
      type: FieldType.DATE_TIME,
      label: 'Completed At',
      description: 'When visit was completed',
      icon: 'IconCalendarCheck',
      name: 'completedAt',
    },
    {
      universalIdentifier: VISIT_CANCELLED_AT_FIELD,
      type: FieldType.DATE_TIME,
      label: 'Cancelled At',
      description: 'When visit was cancelled',
      icon: 'IconCalendarOff',
      name: 'cancelledAt',
    },
    {
      universalIdentifier: VISIT_CANCELLATION_REASON_FIELD,
      type: FieldType.SELECT,
      label: 'Cancellation Reason',
      description: 'Why the visit was cancelled',
      icon: 'IconX',
      options: [
        { id: 'db82a15d-8cbe-42e3-9754-076cc68e24a7', value: CancellationReason.SELLER_UNAVAILABLE, label: 'Seller Unavailable', position: 0, color: 'red' },
        { id: '082f29df-8afa-4eaa-be40-8d574fb6aacb', value: CancellationReason.HOUSE_SOLD, label: 'House Sold', position: 1, color: 'orange' },
        { id: '55f47b10-f51f-4307-8df4-cb3d40dd77e8', value: CancellationReason.BUYER_CANCELED, label: 'Buyer Canceled', position: 2, color: 'yellow' },
        { id: '4060b6f2-a6d9-4015-a0a9-4aef1e3dff0c', value: CancellationReason.TENANT_UNAVAILABLE, label: 'Tenant Unavailable', position: 3, color: 'gray' },
        { id: 'ade7ec63-6717-4d24-9038-ac73f8903857', value: CancellationReason.AP_UNAVAILABLE, label: 'AP Unavailable', position: 4, color: 'gray' },
        { id: '7ca5cbe6-5147-409a-9ffe-12c197ac2d04', value: CancellationReason.KEY_PERSON_UNAVAILABLE, label: 'Key Person Unavailable', position: 5, color: 'gray' },
        { id: '519c898c-e94f-4025-9132-e70e48f2fe48', value: CancellationReason.BUYER_NON_RESPONSIVE, label: 'Buyer Non Responsive', position: 6, color: 'gray' },
      ],
      name: 'cancellationReason',
    },
    {
      universalIdentifier: VISIT_VISIT_OTP_FIELD,
      type: FieldType.NUMBER,
      label: 'Visit OTP',
      description: 'Numeric OTP code',
      icon: 'IconLock',
      name: 'visitOtp',
    },
    {
      universalIdentifier: VISIT_OTP_ATTEMPTS_FIELD,
      type: FieldType.NUMBER,
      label: 'OTP Attempts',
      description: 'Failed OTP attempts',
      icon: 'IconLock',
      name: 'otpAttempts',
    },
    {
      universalIdentifier: VISIT_PRIMARY_PAIN_POINT_FIELD,
      type: FieldType.MULTI_SELECT,
      label: 'Primary Pain Point',
      description: 'Buyer pain points identified',
      icon: 'IconAlertCircle',
      options: [
        { id: '16246860-7fed-4c5d-b5ec-27c4f9765759', value: PrimaryPainPoint.BIGGER_DIMENSIONS, label: 'Want Bigger Dimensions', position: 0, color: 'blue' },
        { id: 'e5d00e8f-1ffd-49cc-b682-d4452f1e9708', value: PrimaryPainPoint.LOCATION, label: 'Location', position: 1, color: 'green' },
        { id: 'dda3c380-778d-4a35-a7ec-cd8e72fa7500', value: PrimaryPainPoint.BUILDER_TRUST, label: 'Builder Trust', position: 2, color: 'orange' },
        { id: '178c652f-aef3-4d87-9f8e-e147ad4ac099', value: PrimaryPainPoint.AMENITIES, label: 'Amenities', position: 3, color: 'purple' },
        { id: '26e2218f-8e72-4fc5-8c0b-77fb0aee2920', value: PrimaryPainPoint.FACING, label: 'Facing', position: 4, color: 'yellow' },
        { id: '48e334fc-1015-4b2f-a8ec-f75db9f089f1', value: PrimaryPainPoint.BALCONY_VIEW, label: 'Balcony View', position: 5, color: 'pink' },
        { id: '44128761-cde8-437c-b541-c9bc8dc1acd9', value: PrimaryPainPoint.HOT_BUYER, label: 'Hot Buyer', position: 6, color: 'red' },
      ],
      name: 'primaryPainPoint',
    },
    {
      universalIdentifier: VISIT_BUYER_SCORE_FIELD,
      type: FieldType.NUMBER,
      label: 'Buyer Score',
      description: 'Agent rating 1-10',
      icon: 'IconStar',
      name: 'buyerScore',
    },
    {
      universalIdentifier: VISIT_RESCHEDULED_TO_FIELD,
      type: FieldType.DATE_TIME,
      label: 'Rescheduled To',
      description: 'New scheduled time',
      icon: 'IconCalendar',
      name: 'rescheduledTo',
    },
  ],
});

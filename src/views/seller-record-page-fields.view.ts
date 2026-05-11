import { defineView, ViewType } from 'twenty-sdk/define';
import { SELLER_UNIVERSAL_IDENTIFIER } from '../objects/seller.object';
import {
  SELLER_NAME_FIELD,  SELLER_STAGE_FIELD,  SELLER_DROP_REASON_FIELD,  SELLER_EXPECTED_PRICE_FIELD,  SELLER_MOTIVATION_FIELD,  SELLER_HOW_HEARD_FIELD,  SELLER_ONBOARDING_STATUS_FIELD,  SELLER_SOURCE_FIELD,  SELLER_SELLER_URGENCY_FIELD,
} from '../objects/seller.object';

export const SELLER_RECORD_PAGE_FIELDS_VIEW_ID = '26dbb1ac-e4c9-4f85-8a0e-cd8f412d61a1';

export default defineView({
  universalIdentifier: SELLER_RECORD_PAGE_FIELDS_VIEW_ID,
  name: 'Seller Record Page Fields',
  objectUniversalIdentifier: SELLER_UNIVERSAL_IDENTIFIER,
  type: ViewType.FIELDS_WIDGET,
  icon: 'IconUserDollar',
  isCompact: false,
  fields: [
    { universalIdentifier: '695ff37a-8679-44b5-80a3-0a1c247667df', fieldMetadataUniversalIdentifier: SELLER_NAME_FIELD, position: 0, isVisible: true },
    { universalIdentifier: 'eaccbaa2-a01e-403d-a80e-b17a24edb372', fieldMetadataUniversalIdentifier: SELLER_STAGE_FIELD, position: 1, isVisible: true },
    { universalIdentifier: '28a2f669-fdb5-4564-b21f-87f127d99334', fieldMetadataUniversalIdentifier: SELLER_DROP_REASON_FIELD, position: 2, isVisible: true },
    { universalIdentifier: 'f6e5be75-cb9e-4673-94b1-a19c63003286', fieldMetadataUniversalIdentifier: SELLER_EXPECTED_PRICE_FIELD, position: 3, isVisible: true },
    { universalIdentifier: '9f090008-b6d7-464d-a4d3-a5aa01b1c059', fieldMetadataUniversalIdentifier: SELLER_MOTIVATION_FIELD, position: 4, isVisible: true },
    { universalIdentifier: '2d845963-46e2-4477-81be-5959122637b9', fieldMetadataUniversalIdentifier: SELLER_HOW_HEARD_FIELD, position: 5, isVisible: true },
    { universalIdentifier: '79fb1257-e9c4-4efc-b572-1b5e25959634', fieldMetadataUniversalIdentifier: SELLER_ONBOARDING_STATUS_FIELD, position: 6, isVisible: true },
    { universalIdentifier: '36c8b8e4-213c-4416-9505-db96780444ab', fieldMetadataUniversalIdentifier: SELLER_SOURCE_FIELD, position: 7, isVisible: true },
    { universalIdentifier: '419ea2b7-8244-4e4d-805d-5cf3f55c6ee6', fieldMetadataUniversalIdentifier: SELLER_SELLER_URGENCY_FIELD, position: 8, isVisible: true },
  ],
});
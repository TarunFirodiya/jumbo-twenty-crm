import { defineView, ViewType } from 'twenty-sdk/define';
import { ENQUIRY_UNIVERSAL_IDENTIFIER } from '../objects/enquiry.object';
import {
  ENQUIRY_NUMBER_FIELD,  ENQUIRY_TYPE_FIELD,  ENQUIRY_STATUS_FIELD,  ENQUIRY_BUDGET_FIELD,  ENQUIRY_PREF_ZONES_FIELD,  ENQUIRY_SOURCE_DETAIL_FIELD,  ENQUIRY_STATUS_DETAIL_FIELD,
} from '../objects/enquiry.object';

export const ENQUIRY_RECORD_PAGE_FIELDS_VIEW_ID = '05664366-8c28-49ef-8948-42410425ca59';

export default defineView({
  universalIdentifier: ENQUIRY_RECORD_PAGE_FIELDS_VIEW_ID,
  name: 'Enquiry Record Page Fields',
  objectUniversalIdentifier: ENQUIRY_UNIVERSAL_IDENTIFIER,
  type: ViewType.FIELDS_WIDGET,
  icon: 'IconMessageCircle',
  isCompact: false,
  fields: [
    { universalIdentifier: '4c5e771f-01ad-4271-8275-6a7ded3344da', fieldMetadataUniversalIdentifier: ENQUIRY_NUMBER_FIELD, position: 0, isVisible: true },
    { universalIdentifier: 'd01d5c66-7761-4121-a173-8c67b5a7414c', fieldMetadataUniversalIdentifier: ENQUIRY_TYPE_FIELD, position: 1, isVisible: true },
    { universalIdentifier: '66264ae2-c8d2-4f63-9d2f-02acbc4128c0', fieldMetadataUniversalIdentifier: ENQUIRY_STATUS_FIELD, position: 2, isVisible: true },
    { universalIdentifier: '631f8b5e-9a5d-40f7-b3ee-de1054b579f2', fieldMetadataUniversalIdentifier: ENQUIRY_BUDGET_FIELD, position: 3, isVisible: true },
    { universalIdentifier: '58a4bfb6-0313-40e8-a1ab-5da880642775', fieldMetadataUniversalIdentifier: ENQUIRY_PREF_ZONES_FIELD, position: 4, isVisible: true },
    { universalIdentifier: '6c54bdf6-2297-4761-8bd1-82a2aa8b2835', fieldMetadataUniversalIdentifier: ENQUIRY_SOURCE_DETAIL_FIELD, position: 5, isVisible: true },
    { universalIdentifier: '00a8be3a-0dc8-4822-bd6f-33f8a310d3ea', fieldMetadataUniversalIdentifier: ENQUIRY_STATUS_DETAIL_FIELD, position: 6, isVisible: true },
  ],
});

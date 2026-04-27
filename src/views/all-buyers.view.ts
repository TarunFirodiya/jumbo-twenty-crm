import { defineView, ViewKey } from 'twenty-sdk/define';
import { BUYER_UNIVERSAL_IDENTIFIER, BUYER_NAME_FIELD, BUYER_STAGE_FIELD, BUYER_BUDGET_MIN_FIELD, BUYER_BUDGET_MAX_FIELD, BUYER_PREF_ZONES_FIELD, BUYER_BEDROOMS_MIN_FIELD, BUYER_BATHROOMS_MIN_FIELD, BUYER_SQFT_MIN_FIELD, BUYER_TIMELINE_FIELD } from '../objects/buyer.object';

export const ALL_BUYERS_VIEW_ID = '0f24cb74-5b6d-44c6-918b-efe0c59a2a3f';

export default defineView({
  universalIdentifier: ALL_BUYERS_VIEW_ID,
  name: 'All Buyers',
  objectUniversalIdentifier: BUYER_UNIVERSAL_IDENTIFIER,
  key: ViewKey.INDEX,
  icon: 'IconUser',
  isCompact: false,
  fields: [
    { universalIdentifier: 'a915f275-2275-4a7f-b619-ed4203c1e922', fieldMetadataUniversalIdentifier: BUYER_NAME_FIELD, position: 0, isVisible: true },
    { universalIdentifier: 'ccf2bf83-09fc-45b5-a290-1cf44585659b', fieldMetadataUniversalIdentifier: BUYER_STAGE_FIELD, position: 1, isVisible: true },
    { universalIdentifier: '0be23017-02d7-42b3-a253-b8d58eb9f930', fieldMetadataUniversalIdentifier: BUYER_BUDGET_MIN_FIELD, position: 2, isVisible: true },
    { universalIdentifier: 'b6f52c3e-8291-4ee3-8e45-fdbbe6625304', fieldMetadataUniversalIdentifier: BUYER_BUDGET_MAX_FIELD, position: 3, isVisible: true },
    { universalIdentifier: 'de1e529a-900b-4533-b3d1-a5a473dc0371', fieldMetadataUniversalIdentifier: BUYER_PREF_ZONES_FIELD, position: 4, isVisible: true },
    { universalIdentifier: '522e23e1-b3dd-4bd0-8584-3e839f661d59', fieldMetadataUniversalIdentifier: BUYER_BEDROOMS_MIN_FIELD, position: 5, isVisible: true },
    { universalIdentifier: '6c314692-70a4-428a-8628-4ca497f33c98', fieldMetadataUniversalIdentifier: BUYER_BATHROOMS_MIN_FIELD, position: 6, isVisible: true },
    { universalIdentifier: 'af9cce58-2ad6-42c7-977a-66bb541a53b2', fieldMetadataUniversalIdentifier: BUYER_SQFT_MIN_FIELD, position: 7, isVisible: true },
    { universalIdentifier: 'b9bce582-255e-4435-91cb-d7557cbf590b', fieldMetadataUniversalIdentifier: BUYER_TIMELINE_FIELD, position: 8, isVisible: true },
  ],
});

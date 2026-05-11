import { defineView, ViewType } from 'twenty-sdk/define';
import { CLASSIFIED_LISTING_UNIVERSAL_IDENTIFIER } from '../objects/classified-listing.object';
import {
  CL_LISTING_ID_FIELD,  CL_PLATFORM_FIELD,  CL_LISTED_ON_FIELD,  CL_URL_FIELD,  CL_VERIFIED_FIELD,  CL_DELISTED_ON_FIELD,  CL_PRICE_QUOTED_FIELD,  CL_ACTUAL_PRICE_FIELD,
} from '../objects/classified-listing.object';

export const CLASSIFIEDLISTING_RECORD_PAGE_FIELDS_VIEW_ID = '91bf060e-011a-4c60-a1ab-020df4bf6e22';

export default defineView({
  universalIdentifier: CLASSIFIEDLISTING_RECORD_PAGE_FIELDS_VIEW_ID,
  name: 'classifiedListing Record Page Fields',
  objectUniversalIdentifier: CLASSIFIED_LISTING_UNIVERSAL_IDENTIFIER,
  type: ViewType.FIELDS_WIDGET,
  icon: 'IconExternalLink',
  isCompact: false,
  fields: [
    { universalIdentifier: 'bab91958-0c26-4e91-bfda-1f9f44894f31', fieldMetadataUniversalIdentifier: CL_LISTING_ID_FIELD, position: 0, isVisible: true },
    { universalIdentifier: 'b0236957-2a52-47f2-9ac0-9f845552bad7', fieldMetadataUniversalIdentifier: CL_PLATFORM_FIELD, position: 1, isVisible: true },
    { universalIdentifier: '7b17e23e-aa52-4b41-89fc-9e15115ad427', fieldMetadataUniversalIdentifier: CL_LISTED_ON_FIELD, position: 2, isVisible: true },
    { universalIdentifier: '6ca1180c-480d-4d01-a168-f4581a8898da', fieldMetadataUniversalIdentifier: CL_URL_FIELD, position: 3, isVisible: true },
    { universalIdentifier: '9714e6da-0834-489c-9f82-356a347a4477', fieldMetadataUniversalIdentifier: CL_VERIFIED_FIELD, position: 4, isVisible: true },
    { universalIdentifier: 'fa5c4632-cca2-440e-80d0-4be0ad328f78', fieldMetadataUniversalIdentifier: CL_DELISTED_ON_FIELD, position: 5, isVisible: true },
    { universalIdentifier: 'f8f402f2-fbc0-4ba6-851e-9e0d70a77e92', fieldMetadataUniversalIdentifier: CL_PRICE_QUOTED_FIELD, position: 6, isVisible: true },
    { universalIdentifier: 'efd146c2-9d27-4f11-88bb-1f106a200d93', fieldMetadataUniversalIdentifier: CL_ACTUAL_PRICE_FIELD, position: 7, isVisible: true },
  ],
});

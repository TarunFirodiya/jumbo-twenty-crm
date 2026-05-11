import { defineView, ViewType } from 'twenty-sdk/define';
import { CLASSIFIED_LISTING_UNIVERSAL_IDENTIFIER } from '../objects/classified-listing.object';

export default defineView({
  universalIdentifier: 'b94ce762-e1cd-4e31-b72b-589f845b9ef9',
  name: 'ClassifiedListing Record Page Fields',
  objectUniversalIdentifier: CLASSIFIED_LISTING_UNIVERSAL_IDENTIFIER,
  type: ViewType.FIELDS_WIDGET,
  icon: 'IconList',
  isCompact: false,
  fields: [],
});

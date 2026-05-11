import { definePageLayout, PageLayoutTabLayoutMode } from 'twenty-sdk/define';
import { CLASSIFIED_LISTING_UNIVERSAL_IDENTIFIER } from '../objects/classified-listing.object';

export default definePageLayout({
  universalIdentifier: 'c1d2e3f4-5a6b-7c8d-9e0f-1a2b3c4d5e6f',
  name: 'Default ClassifiedListing Layout',
  type: 'RECORD_PAGE',
  objectUniversalIdentifier: CLASSIFIED_LISTING_UNIVERSAL_IDENTIFIER,
  tabs: [
    {
      universalIdentifier: 'd2e3f4a5-6b7c-8d9e-0f1a-2b3c4d5e6f7a',
      pageLayoutUniversalIdentifier: 'c1d2e3f4-5a6b-7c8d-9e0f-1a2b3c4d5e6f',
      title: 'Home',
      position: 0,
      icon: 'IconHome',
      layoutMode: PageLayoutTabLayoutMode.VERTICAL_LIST,
      widgets: [
        {
          universalIdentifier: 'e3f4a5b6-7c8d-9e0f-1a2b-3c4d5e6f7a8b',
          title: 'Fields',
          type: 'FIELDS',
          configuration: {
            configurationType: 'FIELDS',
            shouldAllowUserToSeeHiddenFields: true,
          },
        },
      ],
    },
  ],
});

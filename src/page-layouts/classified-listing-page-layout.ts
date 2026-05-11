import { definePageLayout, PageLayoutTabLayoutMode } from 'twenty-sdk/define';
import { CLASSIFIED_LISTING_UNIVERSAL_IDENTIFIER } from '../objects/classified-listing.object';

export default definePageLayout({
  universalIdentifier: 'acf17b41-6cae-46a5-8706-63e6260e5bb4',
  name: 'Default ClassifiedListing Layout',
  type: 'RECORD_PAGE',
  objectUniversalIdentifier: CLASSIFIED_LISTING_UNIVERSAL_IDENTIFIER,
  tabs: [
    {
      universalIdentifier: '91d078db-719b-4207-9376-3aeed7821f0b',
      pageLayoutUniversalIdentifier: 'acf17b41-6cae-46a5-8706-63e6260e5bb4',
      title: 'Home',
      position: 0,
      icon: 'IconHome',
      layoutMode: PageLayoutTabLayoutMode.VERTICAL_LIST,
      widgets: [
        {
          universalIdentifier: '080de4e0-1397-4eb9-b7fc-dc8b0e386003',
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

import { definePageLayout, PageLayoutTabLayoutMode } from 'twenty-sdk/define';
import { BUILDING_UNIVERSAL_IDENTIFIER } from '../objects/building.object';

export default definePageLayout({
  universalIdentifier: 'c5d6e7f8-9a0b-1c2d-3e4f-5a6b7c8d9e0f',
  name: 'Default Building Layout',
  type: 'RECORD_PAGE',
  objectUniversalIdentifier: BUILDING_UNIVERSAL_IDENTIFIER,
  tabs: [
    {
      universalIdentifier: 'd6e7f8a9-0b1c-2d3e-4f5a-6b7c8d9e0f1a',
      pageLayoutUniversalIdentifier: 'c5d6e7f8-9a0b-1c2d-3e4f-5a6b7c8d9e0f',
      title: 'Home',
      position: 0,
      icon: 'IconHome',
      layoutMode: PageLayoutTabLayoutMode.VERTICAL_LIST,
      widgets: [
        {
          universalIdentifier: 'e7f8a9b0-1c2d-3e4f-5a6b-7c8d9e0f1a2b',
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

import { definePageLayout, PageLayoutTabLayoutMode } from 'twenty-sdk/define';
import { TOWER_UNIVERSAL_IDENTIFIER } from '../objects/tower.object';

export default definePageLayout({
  universalIdentifier: 'f8a9b0c1-2d3e-4f5a-6b7c-8d9e0f1a2b3c',
  name: 'Default Tower Layout',
  type: 'RECORD_PAGE',
  objectUniversalIdentifier: TOWER_UNIVERSAL_IDENTIFIER,
  tabs: [
    {
      universalIdentifier: 'a9b0c1d2-3e4f-5a6b-7c8d-9e0f1a2b3c4d',
      pageLayoutUniversalIdentifier: 'f8a9b0c1-2d3e-4f5a-6b7c-8d9e0f1a2b3c',
      title: 'Home',
      position: 0,
      icon: 'IconHome',
      layoutMode: PageLayoutTabLayoutMode.VERTICAL_LIST,
      widgets: [
        {
          universalIdentifier: 'b0c1d2e3-4f5a-6b7c-8d9e-0f1a2b3c4d5e',
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

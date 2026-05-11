import { definePageLayout, PageLayoutTabLayoutMode } from 'twenty-sdk/define';
import { VISIT_UNIVERSAL_IDENTIFIER } from '../objects/visit.object';

export default definePageLayout({
  universalIdentifier: 'c9d0e1f2-3a4b-5c6d-7e8f-9a0b1c2d3e4f',
  name: 'Default Visit Layout',
  type: 'RECORD_PAGE',
  objectUniversalIdentifier: VISIT_UNIVERSAL_IDENTIFIER,
  tabs: [
    {
      universalIdentifier: 'd0e1f2a3-4b5c-6d7e-8f9a-0b1c2d3e4f5a',
      pageLayoutUniversalIdentifier: 'c9d0e1f2-3a4b-5c6d-7e8f-9a0b1c2d3e4f',
      title: 'Home',
      position: 0,
      icon: 'IconHome',
      layoutMode: PageLayoutTabLayoutMode.VERTICAL_LIST,
      widgets: [
        {
          universalIdentifier: 'e1f2a3b4-5c6d-7e8f-9a0b-1c2d3e4f5a6b',
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

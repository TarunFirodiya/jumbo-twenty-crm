import { definePageLayout, PageLayoutTabLayoutMode } from 'twenty-sdk/define';
import { BUYER_UNIVERSAL_IDENTIFIER } from '../objects/buyer.object';

export default definePageLayout({
  universalIdentifier: 'f9a3c2b1-1d4e-5f6a-7b8c-9d0e1f2a3b4c',
  name: 'Default Buyer Layout',
  type: 'RECORD_PAGE',
  objectUniversalIdentifier: BUYER_UNIVERSAL_IDENTIFIER,
  tabs: [
    {
      universalIdentifier: 'a1b2c3d4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
      pageLayoutUniversalIdentifier: 'f9a3c2b1-1d4e-5f6a-7b8c-9d0e1f2a3b4c',
      title: 'Home',
      position: 0,
      icon: 'IconHome',
      layoutMode: PageLayoutTabLayoutMode.VERTICAL_LIST,
      widgets: [
        {
          universalIdentifier: 'b2c3d4e5-6f7a-8b9c-0d1e-2f3a4b5c6d7e',
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

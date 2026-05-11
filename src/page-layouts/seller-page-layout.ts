import { definePageLayout, PageLayoutTabLayoutMode } from 'twenty-sdk/define';
import { SELLER_UNIVERSAL_IDENTIFIER } from '../objects/seller.object';

export default definePageLayout({
  universalIdentifier: 'f2a3b4c5-6d7e-8f9a-0b1c-2d3e4f5a6b7c',
  name: 'Default Seller Layout',
  type: 'RECORD_PAGE',
  objectUniversalIdentifier: SELLER_UNIVERSAL_IDENTIFIER,
  tabs: [
    {
      universalIdentifier: 'a3b4c5d6-7e8f-9a0b-1c2d-3e4f5a6b7c8d',
      pageLayoutUniversalIdentifier: 'f2a3b4c5-6d7e-8f9a-0b1c-2d3e4f5a6b7c',
      title: 'Home',
      position: 0,
      icon: 'IconHome',
      layoutMode: PageLayoutTabLayoutMode.VERTICAL_LIST,
      widgets: [
        {
          universalIdentifier: 'b4c5d6e7-8f9a-0b1c-2d3e-4f5a6b7c8d9e',
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

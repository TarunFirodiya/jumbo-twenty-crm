import { definePageLayout, PageLayoutTabLayoutMode } from 'twenty-sdk/define';
import { SELLER_UNIVERSAL_IDENTIFIER } from '../objects/seller.object';

export default definePageLayout({
  universalIdentifier: '1b560372-e823-4d33-9446-b98297e7b64c',
  name: 'Default Seller Layout',
  type: 'RECORD_PAGE',
  objectUniversalIdentifier: SELLER_UNIVERSAL_IDENTIFIER,
  tabs: [
    {
      universalIdentifier: '715eb7b7-06ce-4f56-a6e8-74f9c8a41dbb',
      pageLayoutUniversalIdentifier: '1b560372-e823-4d33-9446-b98297e7b64c',
      title: 'Home',
      position: 0,
      icon: 'IconHome',
      layoutMode: PageLayoutTabLayoutMode.VERTICAL_LIST,
      widgets: [
        {
          universalIdentifier: '8c35cd2b-b9b9-4955-9716-93f34a7f05d9',
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

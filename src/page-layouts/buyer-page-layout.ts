import { definePageLayout, PageLayoutTabLayoutMode } from 'twenty-sdk/define';
import { BUYER_UNIVERSAL_IDENTIFIER } from '../objects/buyer.object';

export default definePageLayout({
  universalIdentifier: 'a8d8ef96-4d4e-4621-8212-70c41b5f7f16',
  name: 'Default Buyer Layout',
  type: 'RECORD_PAGE',
  objectUniversalIdentifier: BUYER_UNIVERSAL_IDENTIFIER,
  tabs: [
    {
      universalIdentifier: '503b5334-c559-4d9b-88ce-246873aa7907',
      pageLayoutUniversalIdentifier: 'a8d8ef96-4d4e-4621-8212-70c41b5f7f16',
      title: 'Home',
      position: 0,
      icon: 'IconHome',
      layoutMode: PageLayoutTabLayoutMode.VERTICAL_LIST,
      widgets: [
        {
          universalIdentifier: 'f642a71c-9ddb-4cfb-bb8e-bb559ca5901a',
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

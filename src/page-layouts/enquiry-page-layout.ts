import { definePageLayout, PageLayoutTabLayoutMode } from 'twenty-sdk/define';
import { ENQUIRY_UNIVERSAL_IDENTIFIER } from '../objects/enquiry.object';

export default definePageLayout({
  universalIdentifier: 'f6a7b8c9-0d1e-2f3a-4b5c-6d7e8f9a0b1c',
  name: 'Default Enquiry Layout',
  type: 'RECORD_PAGE',
  objectUniversalIdentifier: ENQUIRY_UNIVERSAL_IDENTIFIER,
  tabs: [
    {
      universalIdentifier: 'a7b8c9d0-1e2f-3a4b-5c6d-7e8f9a0b1c2d',
      pageLayoutUniversalIdentifier: 'f6a7b8c9-0d1e-2f3a-4b5c-6d7e8f9a0b1c',
      title: 'Home',
      position: 0,
      icon: 'IconHome',
      layoutMode: PageLayoutTabLayoutMode.VERTICAL_LIST,
      widgets: [
        {
          universalIdentifier: 'b8c9d0e1-2f3a-4b5c-6d7e-8f9a0b1c2d3e',
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
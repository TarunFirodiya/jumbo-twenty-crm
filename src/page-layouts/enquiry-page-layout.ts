import { definePageLayout, PageLayoutTabLayoutMode } from 'twenty-sdk/define';
import { ENQUIRY_UNIVERSAL_IDENTIFIER } from '../objects/enquiry.object';

export default definePageLayout({
  universalIdentifier: '8c38fc78-b999-463f-9332-80459a41c5a4',
  name: 'Default Enquiry Layout',
  type: 'RECORD_PAGE',
  objectUniversalIdentifier: ENQUIRY_UNIVERSAL_IDENTIFIER,
  tabs: [
    {
      universalIdentifier: '56420ea6-a6c1-4836-b2a4-8068dbf7a139',
      pageLayoutUniversalIdentifier: '8c38fc78-b999-463f-9332-80459a41c5a4',
      title: 'Home',
      position: 0,
      icon: 'IconHome',
      layoutMode: PageLayoutTabLayoutMode.VERTICAL_LIST,
      widgets: [
        {
          universalIdentifier: 'fa24269e-ae9f-4373-bc21-d7b5a9da9042',
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

import { definePageLayout, PageLayoutTabLayoutMode } from 'twenty-sdk/define';
import { PROPERTY_UNIVERSAL_IDENTIFIER } from '../objects/property.object';

export default definePageLayout({
  universalIdentifier: 'c3d4e5f6-7a8b-9c0d-1e2f-3a4b5c6d7e8f',
  name: 'Default Property Layout',
  type: 'RECORD_PAGE',
  objectUniversalIdentifier: PROPERTY_UNIVERSAL_IDENTIFIER,
  tabs: [
    {
      universalIdentifier: 'd4e5f6a7-8b9c-0d1e-2f3a-4b5c6d7e8f9a',
      pageLayoutUniversalIdentifier: 'c3d4e5f6-7a8b-9c0d-1e2f-3a4b5c6d7e8f',
      title: 'Home',
      position: 0,
      icon: 'IconHome',
      layoutMode: PageLayoutTabLayoutMode.VERTICAL_LIST,
      widgets: [
        {
          universalIdentifier: 'e5f6a7b8-9c0d-1e2f-3a4b-5c6d7e8f9a0b',
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
import { definePageLayout, PageLayoutTabLayoutMode } from 'twenty-sdk/define';
import { BUILDING_UNIVERSAL_IDENTIFIER } from '../objects/building.object';

export default definePageLayout({
  universalIdentifier: 'c881ea0a-972c-4a6a-9f34-f9149386be21',
  name: 'Default Building Layout',
  type: 'RECORD_PAGE',
  objectUniversalIdentifier: BUILDING_UNIVERSAL_IDENTIFIER,
  tabs: [
    {
      universalIdentifier: '0b0ea1bc-27ef-424a-af94-51589e517fa7',
      pageLayoutUniversalIdentifier: 'c881ea0a-972c-4a6a-9f34-f9149386be21',
      title: 'Home',
      position: 0,
      icon: 'IconHome',
      layoutMode: PageLayoutTabLayoutMode.VERTICAL_LIST,
      widgets: [
        {
          universalIdentifier: '9969a648-f945-4b47-be44-1febeea33463',
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

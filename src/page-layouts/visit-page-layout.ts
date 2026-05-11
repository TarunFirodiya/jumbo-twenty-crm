import { definePageLayout, PageLayoutTabLayoutMode } from 'twenty-sdk/define';
import { VISIT_UNIVERSAL_IDENTIFIER } from '../objects/visit.object';

export default definePageLayout({
  universalIdentifier: '81ea5864-2dec-4d81-b3c7-dace7188054a',
  name: 'Default Visit Layout',
  type: 'RECORD_PAGE',
  objectUniversalIdentifier: VISIT_UNIVERSAL_IDENTIFIER,
  tabs: [
    {
      universalIdentifier: 'a7699ff3-5b94-45d2-b449-c3f595470d9c',
      pageLayoutUniversalIdentifier: '81ea5864-2dec-4d81-b3c7-dace7188054a',
      title: 'Home',
      position: 0,
      icon: 'IconHome',
      layoutMode: PageLayoutTabLayoutMode.VERTICAL_LIST,
      widgets: [
        {
          universalIdentifier: 'aef66c6b-0e4c-4c92-a2c0-1e4fc5d6d00b',
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

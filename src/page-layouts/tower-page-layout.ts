import { definePageLayout, PageLayoutTabLayoutMode } from 'twenty-sdk/define';
import { TOWER_UNIVERSAL_IDENTIFIER } from '../objects/tower.object';

export default definePageLayout({
  universalIdentifier: 'b101d8d7-e9f2-4d6b-a725-268778f8fafd',
  name: 'Default Tower Layout',
  type: 'RECORD_PAGE',
  objectUniversalIdentifier: TOWER_UNIVERSAL_IDENTIFIER,
  tabs: [
    {
      universalIdentifier: 'd0e191de-684b-4491-8fd0-0388a37b8d29',
      pageLayoutUniversalIdentifier: 'b101d8d7-e9f2-4d6b-a725-268778f8fafd',
      title: 'Home',
      position: 0,
      icon: 'IconHome',
      layoutMode: PageLayoutTabLayoutMode.VERTICAL_LIST,
      widgets: [
        {
          universalIdentifier: '0828ef51-abce-4d2e-823d-997d99abe8b7',
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

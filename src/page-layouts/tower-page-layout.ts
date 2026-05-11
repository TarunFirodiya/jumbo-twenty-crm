import { definePageLayout, PageLayoutTabLayoutMode } from 'twenty-sdk/define';
import { TOWER_UNIVERSAL_IDENTIFIER } from '../objects/tower.object';

export default definePageLayout({
  universalIdentifier: '7dbc082f-d11f-40a0-b510-5ff7d8dd0df5',
  name: 'Default Tower Layout',
  type: 'RECORD_PAGE',
  objectUniversalIdentifier: TOWER_UNIVERSAL_IDENTIFIER,
  tabs: [
    {
      universalIdentifier: 'd70a3193-979b-4c2f-b999-32910fd77613',
      pageLayoutUniversalIdentifier: '7dbc082f-d11f-40a0-b510-5ff7d8dd0df5',
      title: 'Home',
      position: 0,
      icon: 'IconHome',
      layoutMode: PageLayoutTabLayoutMode.VERTICAL_LIST,
      widgets: [
        {
          universalIdentifier: '0328c5a7-948e-4fd5-866f-37f6ad62bee8',
          title: 'Fields',
          type: 'FIELDS',
          configuration: {
            configurationType: 'FIELDS',
            shouldAllowUserToSeeHiddenFields: true,
          },
        },
      ],
    },
    {
      universalIdentifier: 'd88e9029-8bb1-4864-83c3-20740764adbc',
      pageLayoutUniversalIdentifier: '7dbc082f-d11f-40a0-b510-5ff7d8dd0df5',
      title: 'Timeline',
      position: 1,
      icon: 'IconTimelineEvent',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
    },
    {
      universalIdentifier: 'cbd0cf91-5b83-46a4-af33-404a9e27f650',
      pageLayoutUniversalIdentifier: '7dbc082f-d11f-40a0-b510-5ff7d8dd0df5',
      title: 'Tasks',
      position: 2,
      icon: 'IconCheckbox',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
    },
    {
      universalIdentifier: 'e6bed2fc-2f6c-4de9-b96e-f7e0596e9ad3',
      pageLayoutUniversalIdentifier: '7dbc082f-d11f-40a0-b510-5ff7d8dd0df5',
      title: 'Notes',
      position: 3,
      icon: 'IconNotes',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
    },
    {
      universalIdentifier: 'a1e5c075-116d-46a7-83aa-055fe96d7c7e',
      pageLayoutUniversalIdentifier: '7dbc082f-d11f-40a0-b510-5ff7d8dd0df5',
      title: 'Files',
      position: 4,
      icon: 'IconPaperclip',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
    },
    {
      universalIdentifier: 'f2839d57-eae1-4327-aac0-ad01ea513806',
      pageLayoutUniversalIdentifier: '7dbc082f-d11f-40a0-b510-5ff7d8dd0df5',
      title: 'Emails',
      position: 5,
      icon: 'IconMail',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
    },
    {
      universalIdentifier: 'ff823fa8-ba93-4e95-be29-3c838a32e67b',
      pageLayoutUniversalIdentifier: '7dbc082f-d11f-40a0-b510-5ff7d8dd0df5',
      title: 'Calendar',
      position: 6,
      icon: 'IconCalendarEvent',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
    }
  ],
});

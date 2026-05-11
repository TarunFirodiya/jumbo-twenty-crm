import { definePageLayout, PageLayoutTabLayoutMode } from 'twenty-sdk/define';
import { BUYER_UNIVERSAL_IDENTIFIER } from '../objects/buyer.object';

export default definePageLayout({
  universalIdentifier: 'e58addb4-5dac-43f4-8876-11410634a51a',
  name: 'Default Buyer Layout',
  type: 'RECORD_PAGE',
  objectUniversalIdentifier: BUYER_UNIVERSAL_IDENTIFIER,
  tabs: [
    {
      universalIdentifier: '3ea05f98-a5da-4d94-be64-3ebed0babdeb',
      pageLayoutUniversalIdentifier: 'e58addb4-5dac-43f4-8876-11410634a51a',
      title: 'Home',
      position: 0,
      icon: 'IconHome',
      layoutMode: PageLayoutTabLayoutMode.VERTICAL_LIST,
      widgets: [
        {
          universalIdentifier: '3907158f-713c-452d-a2bd-e60a35dc07c2',
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
      universalIdentifier: '31ba425a-cd04-4575-adf8-2aa21759f911',
      pageLayoutUniversalIdentifier: 'e58addb4-5dac-43f4-8876-11410634a51a',
      title: 'Timeline',
      position: 1,
      icon: 'IconTimelineEvent',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
    },
    {
      universalIdentifier: '5b6e156c-49ba-4c93-b97d-5b57c6bf606a',
      pageLayoutUniversalIdentifier: 'e58addb4-5dac-43f4-8876-11410634a51a',
      title: 'Tasks',
      position: 2,
      icon: 'IconCheckbox',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
    },
    {
      universalIdentifier: 'd851b69d-dc4c-4a8c-a506-c663bdb2726e',
      pageLayoutUniversalIdentifier: 'e58addb4-5dac-43f4-8876-11410634a51a',
      title: 'Notes',
      position: 3,
      icon: 'IconNotes',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
    },
    {
      universalIdentifier: 'b8143bf3-3024-4b8d-b3cb-30dea1ba2f05',
      pageLayoutUniversalIdentifier: 'e58addb4-5dac-43f4-8876-11410634a51a',
      title: 'Files',
      position: 4,
      icon: 'IconPaperclip',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
    },
    {
      universalIdentifier: 'dceedbff-31d5-4ca8-8c73-115c6fb7ccb5',
      pageLayoutUniversalIdentifier: 'e58addb4-5dac-43f4-8876-11410634a51a',
      title: 'Emails',
      position: 5,
      icon: 'IconMail',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
    },
    {
      universalIdentifier: '65658ccc-8a7d-440f-96d1-f860d06ca8ac',
      pageLayoutUniversalIdentifier: 'e58addb4-5dac-43f4-8876-11410634a51a',
      title: 'Calendar',
      position: 6,
      icon: 'IconCalendarEvent',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
    }
  ],
});

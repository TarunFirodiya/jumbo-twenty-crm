import { definePageLayout, PageLayoutTabLayoutMode } from 'twenty-sdk/define';
import { COMMUNICATION_UNIVERSAL_IDENTIFIER } from '../objects/communication.object';

export default definePageLayout({
  universalIdentifier: '98343ca9-0eba-4454-a553-e0bdd64fa5cd',
  name: 'Default Communication Layout',
  type: 'RECORD_PAGE',
  objectUniversalIdentifier: COMMUNICATION_UNIVERSAL_IDENTIFIER,
  tabs: [
    {
      universalIdentifier: '3022c9e9-c986-4330-8294-905f9bc07d96',
      pageLayoutUniversalIdentifier: '98343ca9-0eba-4454-a553-e0bdd64fa5cd',
      title: 'Home',
      position: 0,
      icon: 'IconHome',
      layoutMode: PageLayoutTabLayoutMode.VERTICAL_LIST,
      widgets: [
        {
          universalIdentifier: '8703115d-5236-4f87-8e63-6ccc9ed9c7df',
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
      universalIdentifier: 'a267b932-46f1-46e1-8c20-1d440fb09078',
      pageLayoutUniversalIdentifier: '98343ca9-0eba-4454-a553-e0bdd64fa5cd',
      title: 'Timeline',
      position: 1,
      icon: 'IconTimelineEvent',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
    },
    {
      universalIdentifier: '80656875-1bb4-4aac-a0fa-38d76459a392',
      pageLayoutUniversalIdentifier: '98343ca9-0eba-4454-a553-e0bdd64fa5cd',
      title: 'Tasks',
      position: 2,
      icon: 'IconCheckbox',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
    },
    {
      universalIdentifier: '9e19c6ae-da0f-468c-8f0c-ca9095f69be1',
      pageLayoutUniversalIdentifier: '98343ca9-0eba-4454-a553-e0bdd64fa5cd',
      title: 'Notes',
      position: 3,
      icon: 'IconNotes',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
    },
    {
      universalIdentifier: 'b2bc46ec-d09e-4497-8360-46c3fae2773b',
      pageLayoutUniversalIdentifier: '98343ca9-0eba-4454-a553-e0bdd64fa5cd',
      title: 'Files',
      position: 4,
      icon: 'IconPaperclip',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
    },
    {
      universalIdentifier: 'd13c7477-abeb-4535-8644-5ee42441df78',
      pageLayoutUniversalIdentifier: '98343ca9-0eba-4454-a553-e0bdd64fa5cd',
      title: 'Emails',
      position: 5,
      icon: 'IconMail',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
    },
    {
      universalIdentifier: '1e69707b-3704-4a5e-abb4-5a21605c377e',
      pageLayoutUniversalIdentifier: '98343ca9-0eba-4454-a553-e0bdd64fa5cd',
      title: 'Calendar',
      position: 6,
      icon: 'IconCalendarEvent',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
    },
  ],
});

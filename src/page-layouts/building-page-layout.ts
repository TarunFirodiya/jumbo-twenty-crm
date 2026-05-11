import { definePageLayout, PageLayoutTabLayoutMode } from 'twenty-sdk/define';
import { BUILDING_UNIVERSAL_IDENTIFIER } from '../objects/building.object';

export default definePageLayout({
  universalIdentifier: '26546a92-817a-4dc9-977f-1d4bd525dade',
  name: 'Default Building Layout',
  type: 'RECORD_PAGE',
  objectUniversalIdentifier: BUILDING_UNIVERSAL_IDENTIFIER,
  tabs: [
    {
      universalIdentifier: 'c78b8bc7-ee18-4bf6-a6ac-b4355356c13a',
      pageLayoutUniversalIdentifier: '26546a92-817a-4dc9-977f-1d4bd525dade',
      title: 'Home',
      position: 0,
      icon: 'IconHome',
      layoutMode: PageLayoutTabLayoutMode.VERTICAL_LIST,
      widgets: [
        {
          universalIdentifier: '390cb247-b1ea-495c-92f4-3cdf8f5168b4',
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
      universalIdentifier: 'd8367c2d-d53f-469f-a550-ca1abb736680',
      pageLayoutUniversalIdentifier: '26546a92-817a-4dc9-977f-1d4bd525dade',
      title: 'Timeline',
      position: 1,
      icon: 'IconTimelineEvent',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
    },
    {
      universalIdentifier: '4110649e-3112-42f8-b52d-bdf14a703183',
      pageLayoutUniversalIdentifier: '26546a92-817a-4dc9-977f-1d4bd525dade',
      title: 'Tasks',
      position: 2,
      icon: 'IconCheckbox',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
    },
    {
      universalIdentifier: 'a5ebfcbb-d1b6-4cf1-99ea-23da9917eabe',
      pageLayoutUniversalIdentifier: '26546a92-817a-4dc9-977f-1d4bd525dade',
      title: 'Notes',
      position: 3,
      icon: 'IconNotes',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
    },
    {
      universalIdentifier: 'a0768313-3681-4b81-94cc-e0b52390a5a5',
      pageLayoutUniversalIdentifier: '26546a92-817a-4dc9-977f-1d4bd525dade',
      title: 'Files',
      position: 4,
      icon: 'IconPaperclip',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
    },
    {
      universalIdentifier: 'e6113c4f-0fce-42e7-9329-8e4c5cd50490',
      pageLayoutUniversalIdentifier: '26546a92-817a-4dc9-977f-1d4bd525dade',
      title: 'Emails',
      position: 5,
      icon: 'IconMail',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
    },
    {
      universalIdentifier: '5ca676c6-3875-4e60-b6d5-3574d13c07cf',
      pageLayoutUniversalIdentifier: '26546a92-817a-4dc9-977f-1d4bd525dade',
      title: 'Calendar',
      position: 6,
      icon: 'IconCalendarEvent',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
    }
  ],
});

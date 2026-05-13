import { definePageLayout, PageLayoutTabLayoutMode } from 'twenty-sdk/define';
import { PROPERTY_PRICE_HISTORY_UNIVERSAL_IDENTIFIER } from '../objects/property-price-history.object';

export default definePageLayout({
  universalIdentifier: '88ee9eae-b4cd-4614-a109-045f227483ec',
  name: 'Default Property Price History Layout',
  type: 'RECORD_PAGE',
  objectUniversalIdentifier: PROPERTY_PRICE_HISTORY_UNIVERSAL_IDENTIFIER,
  tabs: [
    {
      universalIdentifier: 'd41ddc94-70dd-4cb1-a074-205a83608115',
      pageLayoutUniversalIdentifier: '88ee9eae-b4cd-4614-a109-045f227483ec',
      title: 'Home',
      position: 0,
      icon: 'IconHome',
      layoutMode: PageLayoutTabLayoutMode.VERTICAL_LIST,
      widgets: [
        {
          universalIdentifier: '77ab3350-f12e-4009-a8b3-7b409660a41e',
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
      universalIdentifier: '53ffb4b3-7d9a-4aa1-a51d-bdf0b3647210',
      pageLayoutUniversalIdentifier: '88ee9eae-b4cd-4614-a109-045f227483ec',
      title: 'Timeline',
      position: 1,
      icon: 'IconTimelineEvent',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
    },
    {
      universalIdentifier: '7bc8e5e6-c2df-47bd-a44e-fb75ca1089ac',
      pageLayoutUniversalIdentifier: '88ee9eae-b4cd-4614-a109-045f227483ec',
      title: 'Tasks',
      position: 2,
      icon: 'IconCheckbox',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
    },
    {
      universalIdentifier: 'e8899b08-60a9-4ca4-bcf3-1fad93a570af',
      pageLayoutUniversalIdentifier: '88ee9eae-b4cd-4614-a109-045f227483ec',
      title: 'Notes',
      position: 3,
      icon: 'IconNotes',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
    },
    {
      universalIdentifier: '8185318f-e4e9-4f54-ba6c-9fc060cf3c6a',
      pageLayoutUniversalIdentifier: '88ee9eae-b4cd-4614-a109-045f227483ec',
      title: 'Files',
      position: 4,
      icon: 'IconPaperclip',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
    },
    {
      universalIdentifier: '3e355125-23a2-4392-bc2e-ed986fe068d1',
      pageLayoutUniversalIdentifier: '88ee9eae-b4cd-4614-a109-045f227483ec',
      title: 'Emails',
      position: 5,
      icon: 'IconMail',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
    },
    {
      universalIdentifier: '4cc2cd87-faac-47c3-b4af-3a51801c181a',
      pageLayoutUniversalIdentifier: '88ee9eae-b4cd-4614-a109-045f227483ec',
      title: 'Calendar',
      position: 6,
      icon: 'IconCalendarEvent',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
    },
  ],
});

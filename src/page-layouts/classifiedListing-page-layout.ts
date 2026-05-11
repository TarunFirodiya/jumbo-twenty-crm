import { definePageLayout, PageLayoutTabLayoutMode } from 'twenty-sdk/define';
import { CLASSIFIED_LISTING_UNIVERSAL_IDENTIFIER } from '../objects/classified-listing.object';

export default definePageLayout({
  universalIdentifier: '38b58133-99b1-4724-9bf0-e2c9e473c27a',
  name: 'Default Classifiedlisting Layout',
  type: 'RECORD_PAGE',
  objectUniversalIdentifier: CLASSIFIED_LISTING_UNIVERSAL_IDENTIFIER,
  tabs: [
    {
      universalIdentifier: '26538aba-c2b7-4448-a97b-3725e34cf421',
      pageLayoutUniversalIdentifier: '38b58133-99b1-4724-9bf0-e2c9e473c27a',
      title: 'Home',
      position: 0,
      icon: 'IconHome',
      layoutMode: PageLayoutTabLayoutMode.VERTICAL_LIST,
      widgets: [
        {
          universalIdentifier: '080276d2-9f87-4e9b-98b3-26609eaeb211',
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
      universalIdentifier: '133613bb-6851-428a-b58a-47ced5f4621f',
      pageLayoutUniversalIdentifier: '38b58133-99b1-4724-9bf0-e2c9e473c27a',
      title: 'Timeline',
      position: 1,
      icon: 'IconTimelineEvent',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
    },
    {
      universalIdentifier: '090f6670-3fc6-47e9-8442-6880dd111cd1',
      pageLayoutUniversalIdentifier: '38b58133-99b1-4724-9bf0-e2c9e473c27a',
      title: 'Tasks',
      position: 2,
      icon: 'IconCheckbox',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
    },
    {
      universalIdentifier: '983a7f28-5368-4fef-9fb8-2bf830745ed9',
      pageLayoutUniversalIdentifier: '38b58133-99b1-4724-9bf0-e2c9e473c27a',
      title: 'Notes',
      position: 3,
      icon: 'IconNotes',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
    },
    {
      universalIdentifier: '84fd3385-81d0-4387-9210-7afa5c12b59b',
      pageLayoutUniversalIdentifier: '38b58133-99b1-4724-9bf0-e2c9e473c27a',
      title: 'Files',
      position: 4,
      icon: 'IconPaperclip',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
    },
    {
      universalIdentifier: 'da121681-b5c3-4ab7-909a-4b837140b70e',
      pageLayoutUniversalIdentifier: '38b58133-99b1-4724-9bf0-e2c9e473c27a',
      title: 'Emails',
      position: 5,
      icon: 'IconMail',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
    },
    {
      universalIdentifier: '70d8ce92-f756-40a6-b69e-4e9a1601231d',
      pageLayoutUniversalIdentifier: '38b58133-99b1-4724-9bf0-e2c9e473c27a',
      title: 'Calendar',
      position: 6,
      icon: 'IconCalendarEvent',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
    }
  ],
});

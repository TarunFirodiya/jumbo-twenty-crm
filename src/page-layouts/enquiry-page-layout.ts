import { definePageLayout, PageLayoutTabLayoutMode } from 'twenty-sdk/define';
import { ENQUIRY_UNIVERSAL_IDENTIFIER } from '../objects/enquiry.object';

export default definePageLayout({
  universalIdentifier: 'b1e551d8-7ec7-48de-91c0-bd03cae5772d',
  name: 'Default Enquiry Layout',
  type: 'RECORD_PAGE',
  objectUniversalIdentifier: ENQUIRY_UNIVERSAL_IDENTIFIER,
  tabs: [
    {
      universalIdentifier: 'f04ea8b3-499d-4647-aaef-f0dab35f2221',
      pageLayoutUniversalIdentifier: 'b1e551d8-7ec7-48de-91c0-bd03cae5772d',
      title: 'Home',
      position: 0,
      icon: 'IconHome',
      layoutMode: PageLayoutTabLayoutMode.VERTICAL_LIST,
      widgets: [
        {
          universalIdentifier: 'c032507c-c220-4055-976e-3a96e129955c',
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
      universalIdentifier: '05878923-3984-4e0b-9e2a-247b90bfc1b1',
      pageLayoutUniversalIdentifier: 'b1e551d8-7ec7-48de-91c0-bd03cae5772d',
      title: 'Timeline',
      position: 1,
      icon: 'IconTimelineEvent',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
    },
    {
      universalIdentifier: '52ba20cd-b418-4670-9192-55209a544195',
      pageLayoutUniversalIdentifier: 'b1e551d8-7ec7-48de-91c0-bd03cae5772d',
      title: 'Tasks',
      position: 2,
      icon: 'IconCheckbox',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
    },
    {
      universalIdentifier: '7116fddf-dbf5-4f61-9619-371b33083bc3',
      pageLayoutUniversalIdentifier: 'b1e551d8-7ec7-48de-91c0-bd03cae5772d',
      title: 'Notes',
      position: 3,
      icon: 'IconNotes',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
    },
    {
      universalIdentifier: '89644d53-e7e7-4a45-9f74-da4699ce15d0',
      pageLayoutUniversalIdentifier: 'b1e551d8-7ec7-48de-91c0-bd03cae5772d',
      title: 'Files',
      position: 4,
      icon: 'IconPaperclip',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
    },
    {
      universalIdentifier: '3431b75c-7729-45c6-88e1-608f423cb098',
      pageLayoutUniversalIdentifier: 'b1e551d8-7ec7-48de-91c0-bd03cae5772d',
      title: 'Emails',
      position: 5,
      icon: 'IconMail',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
    },
    {
      universalIdentifier: '387b25e0-7cec-4e44-862c-5a876a639192',
      pageLayoutUniversalIdentifier: 'b1e551d8-7ec7-48de-91c0-bd03cae5772d',
      title: 'Calendar',
      position: 6,
      icon: 'IconCalendarEvent',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
    }
  ],
});

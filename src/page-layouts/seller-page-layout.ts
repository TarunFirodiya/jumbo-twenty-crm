import { definePageLayout, PageLayoutTabLayoutMode } from 'twenty-sdk/define';
import { SELLER_UNIVERSAL_IDENTIFIER } from '../objects/seller.object';

export default definePageLayout({
  universalIdentifier: 'b68236a9-8e6b-45fa-aff1-8e1c37c625e3',
  name: 'Default Seller Layout',
  type: 'RECORD_PAGE',
  objectUniversalIdentifier: SELLER_UNIVERSAL_IDENTIFIER,
  tabs: [
    {
      universalIdentifier: '00d3fffc-cf38-4288-a58a-ca208faf739c',
      pageLayoutUniversalIdentifier: 'b68236a9-8e6b-45fa-aff1-8e1c37c625e3',
      title: 'Home',
      position: 0,
      icon: 'IconHome',
      layoutMode: PageLayoutTabLayoutMode.VERTICAL_LIST,
      widgets: [
        {
          universalIdentifier: 'a415eb74-cb09-4997-a411-9b31ee976706',
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
      universalIdentifier: '0a25a117-0889-4f4c-9ea0-9c44c480bb6b',
      pageLayoutUniversalIdentifier: 'b68236a9-8e6b-45fa-aff1-8e1c37c625e3',
      title: 'Timeline',
      position: 1,
      icon: 'IconTimelineEvent',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
    },
    {
      universalIdentifier: '222037cd-d6b5-42f3-968e-e8eb66485c8b',
      pageLayoutUniversalIdentifier: 'b68236a9-8e6b-45fa-aff1-8e1c37c625e3',
      title: 'Tasks',
      position: 2,
      icon: 'IconCheckbox',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
    },
    {
      universalIdentifier: '2657bf82-162c-4e8f-bd5f-3dda2a15a288',
      pageLayoutUniversalIdentifier: 'b68236a9-8e6b-45fa-aff1-8e1c37c625e3',
      title: 'Notes',
      position: 3,
      icon: 'IconNotes',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
    },
    {
      universalIdentifier: '77cf7724-9630-4bec-be70-de5a9e248640',
      pageLayoutUniversalIdentifier: 'b68236a9-8e6b-45fa-aff1-8e1c37c625e3',
      title: 'Files',
      position: 4,
      icon: 'IconPaperclip',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
    },
    {
      universalIdentifier: '5d982f1a-6589-4b6a-9216-6d0d81bb90ff',
      pageLayoutUniversalIdentifier: 'b68236a9-8e6b-45fa-aff1-8e1c37c625e3',
      title: 'Emails',
      position: 5,
      icon: 'IconMail',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
    },
    {
      universalIdentifier: '1379c489-7d4c-4f11-873c-d0da1441dfec',
      pageLayoutUniversalIdentifier: 'b68236a9-8e6b-45fa-aff1-8e1c37c625e3',
      title: 'Calendar',
      position: 6,
      icon: 'IconCalendarEvent',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
    }
  ],
});

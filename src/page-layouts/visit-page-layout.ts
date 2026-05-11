import { definePageLayout, PageLayoutTabLayoutMode } from 'twenty-sdk/define';
import { VISIT_UNIVERSAL_IDENTIFIER } from '../objects/visit.object';

export default definePageLayout({
  universalIdentifier: '21aca403-403e-487e-b272-ebba844d8b7b',
  name: 'Default Visit Layout',
  type: 'RECORD_PAGE',
  objectUniversalIdentifier: VISIT_UNIVERSAL_IDENTIFIER,
  tabs: [
    {
      universalIdentifier: '8e085c7e-b91c-4d9c-b653-2b208e793860',
      pageLayoutUniversalIdentifier: '21aca403-403e-487e-b272-ebba844d8b7b',
      title: 'Home',
      position: 0,
      icon: 'IconHome',
      layoutMode: PageLayoutTabLayoutMode.VERTICAL_LIST,
      widgets: [
        {
          universalIdentifier: '4224940d-dd6d-4500-993a-28d06795d839',
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
      universalIdentifier: 'ce29e897-3675-4cbd-b2d0-61cc35851765',
      pageLayoutUniversalIdentifier: '21aca403-403e-487e-b272-ebba844d8b7b',
      title: 'Timeline',
      position: 1,
      icon: 'IconTimelineEvent',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
    },
    {
      universalIdentifier: '038625d3-baf8-47b2-9a3e-01858e66a1ef',
      pageLayoutUniversalIdentifier: '21aca403-403e-487e-b272-ebba844d8b7b',
      title: 'Tasks',
      position: 2,
      icon: 'IconCheckbox',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
    },
    {
      universalIdentifier: 'f97b747c-0da1-4184-85c0-0eec8e9538ce',
      pageLayoutUniversalIdentifier: '21aca403-403e-487e-b272-ebba844d8b7b',
      title: 'Notes',
      position: 3,
      icon: 'IconNotes',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
    },
    {
      universalIdentifier: '78c366d1-2d3f-4075-ba6a-0b09ec7b3b62',
      pageLayoutUniversalIdentifier: '21aca403-403e-487e-b272-ebba844d8b7b',
      title: 'Files',
      position: 4,
      icon: 'IconPaperclip',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
    },
    {
      universalIdentifier: '41cc98c4-d313-4d62-a0a8-92267d183603',
      pageLayoutUniversalIdentifier: '21aca403-403e-487e-b272-ebba844d8b7b',
      title: 'Emails',
      position: 5,
      icon: 'IconMail',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
    },
    {
      universalIdentifier: 'fa9dd2aa-b7eb-423f-af7f-d514300c2e77',
      pageLayoutUniversalIdentifier: '21aca403-403e-487e-b272-ebba844d8b7b',
      title: 'Calendar',
      position: 6,
      icon: 'IconCalendarEvent',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
    }
  ],
});

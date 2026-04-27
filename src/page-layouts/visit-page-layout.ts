import { definePageLayout, PageLayoutTabLayoutMode } from 'twenty-sdk/define';
import { VISIT_UNIVERSAL_IDENTIFIER } from '../objects/visit.object';

export const VISIT_PAGE_LAYOUT_ID = '952d2236-0743-496a-a885-43c0f38bb09f';
export const VISIT_OVERVIEW_TAB_ID = 'db33d791-b0ff-4673-bafd-2a50d214bc94';
export const VISIT_FEEDBACK_TAB_ID = 'ee95b141-83ca-45b6-8adf-a91ca7be880a';
export const VISIT_FIELDS_WIDGET_ID = 'b4031f28-1ff1-4403-8773-5378306b0e59';
export const VISIT_FEEDBACK_WIDGET_ID = '4b7ef2ef-54b7-4f18-affc-ac97b80d49f8';

export default definePageLayout({
  universalIdentifier: VISIT_PAGE_LAYOUT_ID,
  name: 'Visit Detail',
  type: 'RECORD_PAGE',
  objectUniversalIdentifier: VISIT_UNIVERSAL_IDENTIFIER,
  tabs: [
    {
      universalIdentifier: VISIT_OVERVIEW_TAB_ID,
      pageLayoutUniversalIdentifier: VISIT_PAGE_LAYOUT_ID,
      title: 'Overview',
      position: 0,
      icon: 'IconInfoCircle',
      layoutMode: PageLayoutTabLayoutMode.VERTICAL_LIST,
      widgets: [
        {
          universalIdentifier: VISIT_FIELDS_WIDGET_ID,
          title: 'Visit Details',
          type: 'FIELDS',
          configuration: {
            configurationType: 'FIELDS',
            shouldAllowUserToSeeHiddenFields: true,
          },
        },
      ],
    },
    {
      universalIdentifier: VISIT_FEEDBACK_TAB_ID,
      pageLayoutUniversalIdentifier: VISIT_PAGE_LAYOUT_ID,
      title: 'Feedback',
      position: 1,
      icon: 'IconMessage',
      layoutMode: PageLayoutTabLayoutMode.VERTICAL_LIST,
      widgets: [
        {
          universalIdentifier: VISIT_FEEDBACK_WIDGET_ID,
          title: 'Feedback & Rating',
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

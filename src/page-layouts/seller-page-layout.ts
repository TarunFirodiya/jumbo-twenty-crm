import { definePageLayout, PageLayoutTabLayoutMode } from 'twenty-sdk/define';
import { SELLER_UNIVERSAL_IDENTIFIER } from '../objects/seller.object';

export const SELLER_PAGE_LAYOUT_ID = '1c1633ad-c436-4cfc-a260-24a38b7f972f';
export const SELLER_OVERVIEW_TAB_ID = 'f295ebaf-425a-4a0c-b01f-2152331b066b';
export const SELLER_FUNNEL_TAB_ID = 'c139999b-1f03-4334-a3e8-73843d6a9fce';
export const SELLER_ACTIVITY_TAB_ID = '9ac3013a-2725-4438-bbfe-7e559a8a50e8';
export const SELLER_OVERVIEW_WIDGET_ID = 'ae5316e1-b6e0-4de2-9734-5880d93485c2';
export const SELLER_FUNNEL_WIDGET_ID = '2b06f2f1-4685-4498-9639-ed04009b26c3';
export const SELLER_NOTES_WIDGET_ID = 'a1d399d8-8c15-4b27-946a-c28e27cfe6d0';
export const SELLER_TASKS_WIDGET_ID = '3c812b73-36b2-44e0-844a-af30b3e65412';

export default definePageLayout({
  universalIdentifier: SELLER_PAGE_LAYOUT_ID,
  name: 'Seller Detail',
  type: 'RECORD_PAGE',
  objectUniversalIdentifier: SELLER_UNIVERSAL_IDENTIFIER,
  tabs: [
    {
      universalIdentifier: SELLER_OVERVIEW_TAB_ID,
      pageLayoutUniversalIdentifier: SELLER_PAGE_LAYOUT_ID,
      title: 'Overview',
      position: 0,
      icon: 'IconInfoCircle',
      layoutMode: PageLayoutTabLayoutMode.VERTICAL_LIST,
      widgets: [
        {
          universalIdentifier: SELLER_OVERVIEW_WIDGET_ID,
          title: 'Seller Details',
          type: 'FIELDS',
          configuration: {
            configurationType: 'FIELDS',
            shouldAllowUserToSeeHiddenFields: true,
          },
        },
      ],
    },
    {
      universalIdentifier: SELLER_FUNNEL_TAB_ID,
      pageLayoutUniversalIdentifier: SELLER_PAGE_LAYOUT_ID,
      title: 'Funnel',
      position: 1,
      icon: 'IconStages',
      layoutMode: PageLayoutTabLayoutMode.VERTICAL_LIST,
      widgets: [
        {
          universalIdentifier: SELLER_FUNNEL_WIDGET_ID,
          title: 'Funnel & Drop',
          type: 'FIELDS',
          configuration: {
            configurationType: 'FIELDS',
            shouldAllowUserToSeeHiddenFields: true,
          },
        },
      ],
    },
    {
      universalIdentifier: SELLER_ACTIVITY_TAB_ID,
      pageLayoutUniversalIdentifier: SELLER_PAGE_LAYOUT_ID,
      title: 'Activity',
      position: 2,
      icon: 'IconNotes',
      layoutMode: PageLayoutTabLayoutMode.VERTICAL_LIST,
      widgets: [
        {
          universalIdentifier: SELLER_NOTES_WIDGET_ID,
          title: 'Notes',
          type: 'NOTES',
          configuration: {
            configurationType: 'NOTES',
          },
        },
        {
          universalIdentifier: SELLER_TASKS_WIDGET_ID,
          title: 'Tasks',
          type: 'TASKS',
          configuration: {
            configurationType: 'TASKS',
          },
        },
      ],
    },
  ],
});

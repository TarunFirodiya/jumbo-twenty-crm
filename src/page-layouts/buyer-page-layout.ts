import { definePageLayout, PageLayoutTabLayoutMode } from 'twenty-sdk/define';
import { BUYER_UNIVERSAL_IDENTIFIER } from '../objects/buyer.object';

export const BUYER_PAGE_LAYOUT_ID = '43f9c8b5-ffcf-4f37-9770-247f33162dd0';
export const BUYER_OVERVIEW_TAB_ID = '771a3ff1-3b58-4917-9e1d-396d81d4226f';
export const BUYER_FUNNEL_TAB_ID = '1da1aecb-8b43-4655-ab08-6f017ce26b7c';
export const BUYER_ACTIVITY_TAB_ID = '4784c1e2-1ea9-4d73-95d7-35ae050206be';
export const BUYER_OVERVIEW_WIDGET_ID = 'a14846f7-9a4d-4ab1-92c5-bf7121acaa4c';
export const BUYER_FUNNEL_WIDGET_ID = 'dacc0136-b45e-43ae-9595-4e1afaa4d2b1';
export const BUYER_NOTES_WIDGET_ID = '473dafdf-2e9f-491f-9935-2344b58259fe';
export const BUYER_TASKS_WIDGET_ID = '42eb3b26-6d9e-48cc-878f-0b2efbc16445';

export default definePageLayout({
  universalIdentifier: BUYER_PAGE_LAYOUT_ID,
  name: 'Buyer Detail',
  type: 'RECORD_PAGE',
  objectUniversalIdentifier: BUYER_UNIVERSAL_IDENTIFIER,
  tabs: [
    {
      universalIdentifier: BUYER_OVERVIEW_TAB_ID,
      pageLayoutUniversalIdentifier: BUYER_PAGE_LAYOUT_ID,
      title: 'Overview',
      position: 0,
      icon: 'IconInfoCircle',
      layoutMode: PageLayoutTabLayoutMode.VERTICAL_LIST,
      widgets: [
        {
          universalIdentifier: BUYER_OVERVIEW_WIDGET_ID,
          title: 'Buyer Details',
          type: 'FIELDS',
          configuration: {
            configurationType: 'FIELDS',
            shouldAllowUserToSeeHiddenFields: true,
          },
        },
      ],
    },
    {
      universalIdentifier: BUYER_FUNNEL_TAB_ID,
      pageLayoutUniversalIdentifier: BUYER_PAGE_LAYOUT_ID,
      title: 'Funnel',
      position: 1,
      icon: 'IconStages',
      layoutMode: PageLayoutTabLayoutMode.VERTICAL_LIST,
      widgets: [
        {
          universalIdentifier: BUYER_FUNNEL_WIDGET_ID,
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
      universalIdentifier: BUYER_ACTIVITY_TAB_ID,
      pageLayoutUniversalIdentifier: BUYER_PAGE_LAYOUT_ID,
      title: 'Activity',
      position: 2,
      icon: 'IconNotes',
      layoutMode: PageLayoutTabLayoutMode.VERTICAL_LIST,
      widgets: [
        {
          universalIdentifier: BUYER_NOTES_WIDGET_ID,
          title: 'Notes',
          type: 'NOTES',
          configuration: {
            configurationType: 'NOTES',
          },
        },
        {
          universalIdentifier: BUYER_TASKS_WIDGET_ID,
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

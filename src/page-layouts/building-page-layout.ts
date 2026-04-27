import { definePageLayout, PageLayoutTabLayoutMode } from 'twenty-sdk/define';
import { BUILDING_UNIVERSAL_IDENTIFIER } from '../objects/building.object';

export const BUILDING_PAGE_LAYOUT_ID = 'd7ea8e9a-c8b6-4234-a87b-9ef8339f18ed';
export const BUILDING_OVERVIEW_TAB_ID = '053ed97a-38da-4ed0-b45c-5f8733cf58bd';
export const BUILDING_FIELDS_WIDGET_ID = 'd4066e14-a084-4497-a77d-75b218df8063';

export default definePageLayout({
  universalIdentifier: BUILDING_PAGE_LAYOUT_ID,
  name: 'Building Detail',
  type: 'RECORD_PAGE',
  objectUniversalIdentifier: BUILDING_UNIVERSAL_IDENTIFIER,
  tabs: [
    {
      universalIdentifier: BUILDING_OVERVIEW_TAB_ID,
      pageLayoutUniversalIdentifier: BUILDING_PAGE_LAYOUT_ID,
      title: 'Overview',
      position: 0,
      icon: 'IconInfoCircle',
      layoutMode: PageLayoutTabLayoutMode.VERTICAL_LIST,
      widgets: [
        {
          universalIdentifier: BUILDING_FIELDS_WIDGET_ID,
          title: 'Building Details',
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

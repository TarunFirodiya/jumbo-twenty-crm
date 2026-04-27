import { definePageLayout, PageLayoutTabLayoutMode } from 'twenty-sdk/define';
import { COMMUNICATION_UNIVERSAL_IDENTIFIER } from '../objects/communication.object';

export const COMMUNICATION_PAGE_LAYOUT_ID = '4bcb493a-e2e3-4673-b0be-3ef269051631';
export const COMMUNICATION_OVERVIEW_TAB_ID = '8dc69873-a48a-4f6d-b72f-7ddae117b680';
export const COMMUNICATION_NOTES_TAB_ID = '4b7e6701-08f1-45c4-a2da-3087243fbc92';
export const COMMUNICATION_OVERVIEW_WIDGET_ID = '6902536c-53ee-4fc2-b84a-37cbf26ec4ec';
export const COMMUNICATION_NOTES_WIDGET_ID = 'b1641e93-fb47-4adc-8a26-b84bb8f90b6d';

export default definePageLayout({
  universalIdentifier: COMMUNICATION_PAGE_LAYOUT_ID,
  name: 'Communication Detail',
  type: 'RECORD_PAGE',
  objectUniversalIdentifier: COMMUNICATION_UNIVERSAL_IDENTIFIER,
  tabs: [
    {
      universalIdentifier: COMMUNICATION_OVERVIEW_TAB_ID,
      pageLayoutUniversalIdentifier: COMMUNICATION_PAGE_LAYOUT_ID,
      title: 'Overview',
      position: 0,
      icon: 'IconInfoCircle',
      layoutMode: PageLayoutTabLayoutMode.VERTICAL_LIST,
      widgets: [
        {
          universalIdentifier: COMMUNICATION_OVERVIEW_WIDGET_ID,
          title: 'Communication Details',
          type: 'FIELDS',
          configuration: {
            configurationType: 'FIELDS',
            shouldAllowUserToSeeHiddenFields: true,
          },
        },
      ],
    },
    {
      universalIdentifier: COMMUNICATION_NOTES_TAB_ID,
      pageLayoutUniversalIdentifier: COMMUNICATION_PAGE_LAYOUT_ID,
      title: 'Notes',
      position: 1,
      icon: 'IconNotes',
      layoutMode: PageLayoutTabLayoutMode.VERTICAL_LIST,
      widgets: [
        {
          universalIdentifier: COMMUNICATION_NOTES_WIDGET_ID,
          title: 'Notes',
          type: 'NOTES',
          configuration: {
            configurationType: 'NOTES',
          },
        },
      ],
    },
  ],
});

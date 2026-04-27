import { definePageLayout, PageLayoutTabLayoutMode } from 'twenty-sdk/define';
import { ENQUIRY_UNIVERSAL_IDENTIFIER } from '../objects/enquiry.object';

export const ENQUIRY_PAGE_LAYOUT_ID = 'ad09f086-6941-450b-8e03-d46725cfda51';
export const ENQUIRY_OVERVIEW_TAB_ID = '808c3a7a-61fb-4c68-9ca9-1e82e3c79f62';
export const ENQUIRY_NOTES_TAB_ID = '22b626c3-e42a-4616-8bc9-7c51f96632b5';
export const ENQUIRY_OVERVIEW_WIDGET_ID = '07a1feaf-c10d-4222-8d12-bb24dd2b0535';
export const ENQUIRY_NOTES_WIDGET_ID = '8914ed30-38f8-41dd-b6f6-b238d36bbd53';

export default definePageLayout({
  universalIdentifier: ENQUIRY_PAGE_LAYOUT_ID,
  name: 'Enquiry Detail',
  type: 'RECORD_PAGE',
  objectUniversalIdentifier: ENQUIRY_UNIVERSAL_IDENTIFIER,
  tabs: [
    {
      universalIdentifier: ENQUIRY_OVERVIEW_TAB_ID,
      pageLayoutUniversalIdentifier: ENQUIRY_PAGE_LAYOUT_ID,
      title: 'Overview',
      position: 0,
      icon: 'IconInfoCircle',
      layoutMode: PageLayoutTabLayoutMode.VERTICAL_LIST,
      widgets: [
        {
          universalIdentifier: ENQUIRY_OVERVIEW_WIDGET_ID,
          title: 'Enquiry Details',
          type: 'FIELDS',
          configuration: {
            configurationType: 'FIELDS',
            shouldAllowUserToSeeHiddenFields: true,
          },
        },
      ],
    },
    {
      universalIdentifier: ENQUIRY_NOTES_TAB_ID,
      pageLayoutUniversalIdentifier: ENQUIRY_PAGE_LAYOUT_ID,
      title: 'Notes',
      position: 1,
      icon: 'IconNotes',
      layoutMode: PageLayoutTabLayoutMode.VERTICAL_LIST,
      widgets: [
        {
          universalIdentifier: ENQUIRY_NOTES_WIDGET_ID,
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

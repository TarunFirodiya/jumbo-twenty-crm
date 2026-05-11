import { definePageLayout, PageLayoutTabLayoutMode } from 'twenty-sdk/define';
import { CLASSIFIED_LISTING_UNIVERSAL_IDENTIFIER } from '../objects/classified-listing.object';
import { CLASSIFIEDLISTING_RECORD_PAGE_FIELDS_VIEW_ID } from '../views/classified-listing-record-page-fields.view';

export default definePageLayout({
  universalIdentifier: '0d0f3e3f-5e68-4775-bcdc-8620dda3f058',
  name: 'Classified Listing Record Page',
  type: 'RECORD_PAGE',
  objectUniversalIdentifier: CLASSIFIED_LISTING_UNIVERSAL_IDENTIFIER,
  tabs: [
    {
      universalIdentifier: 'fd878324-d16d-42dc-b315-e2fcc7c0f6e1',
      title: 'Profile',
      position: 0,
      icon: 'IconExternalLink',
      layoutMode: PageLayoutTabLayoutMode.VERTICAL_LIST,
      widgets: [{ universalIdentifier: 'd53f2c3c-94b2-4c14-a048-75555b7d975b', title: 'Classified Listing Fields', type: 'FIELDS', configuration: { configurationType: 'FIELDS', viewUniversalIdentifier: CLASSIFIEDLISTING_RECORD_PAGE_FIELDS_VIEW_ID, shouldAllowUserToSeeHiddenFields: true } }],
    },
    { universalIdentifier: '0a9af8c2-5f52-4c6d-98d5-416bbaf1d127', title: 'Timeline', position: 10, icon: 'IconTimelineEvent', layoutMode: PageLayoutTabLayoutMode.CANVAS, widgets: [{ universalIdentifier: 'b0c995e7-9f95-4a42-bc9c-bca48024f44f', title: 'Activity Timeline', type: 'TIMELINE', configuration: { configurationType: 'TIMELINE' } }] },
    { universalIdentifier: '7b73ff81-b9b9-4c3b-b3a1-a7f99b7dc71a', title: 'Tasks', position: 20, icon: 'IconCheckbox', layoutMode: PageLayoutTabLayoutMode.CANVAS, widgets: [{ universalIdentifier: '7155fdc3-7766-46a3-bea1-badf460c13cf', title: 'Classified Listing Tasks', type: 'TASKS', configuration: { configurationType: 'TASKS' } }] },
    { universalIdentifier: '7339cbd6-903b-4f1c-a7f1-68aad603293b', title: 'Notes', position: 30, icon: 'IconNotes', layoutMode: PageLayoutTabLayoutMode.CANVAS, widgets: [{ universalIdentifier: 'd930f435-bfc8-4a67-b07d-051c4de6a225', title: 'Classified Listing Notes', type: 'NOTES', configuration: { configurationType: 'NOTES' } }] },
    { universalIdentifier: '62dd0350-d1aa-4a07-ada2-71ab542bfa8d', title: 'Files', position: 40, icon: 'IconPaperclip', layoutMode: PageLayoutTabLayoutMode.CANVAS, widgets: [{ universalIdentifier: '5ead2cf8-0117-4d2f-a2f6-f3764aad78d8', title: 'Classified Listing Files', type: 'FILES', configuration: { configurationType: 'FILES' } }] },
  ],
});
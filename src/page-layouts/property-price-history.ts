import { definePageLayout, PageLayoutTabLayoutMode } from 'twenty-sdk/define';
import { PROPERTY_PRICE_HISTORY_UNIVERSAL_IDENTIFIER } from '../objects/property-price-history.object';
import { PROPERTYPRICEHISTORY_RECORD_PAGE_FIELDS_VIEW_ID } from '../views/property-price-history-record-page-fields.view';

export default definePageLayout({
  universalIdentifier: 'a745bea5-b24d-4091-91a3-556656363f71',
  name: 'propertyPriceHistory Record Page',
  type: 'RECORD_PAGE',
  objectUniversalIdentifier: PROPERTY_PRICE_HISTORY_UNIVERSAL_IDENTIFIER,
  tabs: [
    {
      universalIdentifier: 'def17af5-636f-45c5-95d7-275a0c916739',
      title: 'Profile',
      position: 0,
      icon: 'IconTrendingUp',
      layoutMode: PageLayoutTabLayoutMode.VERTICAL_LIST,
      widgets: [{ universalIdentifier: '84db8b09-d536-4617-ad28-0a7962eda027', title: 'propertyPriceHistory Fields', type: 'FIELDS', configuration: { configurationType: 'FIELDS', viewUniversalIdentifier: PROPERTYPRICEHISTORY_RECORD_PAGE_FIELDS_VIEW_ID, shouldAllowUserToSeeHiddenFields: true } }],
    },
    { universalIdentifier: 'fdf17ee5-117e-4606-ac26-457b3a048bfe', title: 'Timeline', position: 10, icon: 'IconTimelineEvent', layoutMode: PageLayoutTabLayoutMode.CANVAS, widgets: [{ universalIdentifier: '6d741c0f-eb9a-45d0-b984-8559cc57bcd0', title: 'Activity Timeline', type: 'TIMELINE', configuration: { configurationType: 'TIMELINE' } }] },
    { universalIdentifier: '5a911946-4f78-4da0-bc46-b2e4a38e2cf0', title: 'Tasks', position: 20, icon: 'IconCheckbox', layoutMode: PageLayoutTabLayoutMode.CANVAS, widgets: [{ universalIdentifier: 'dc7d84b5-2672-4e57-a9f5-5a44c0239ce4', title: 'propertyPriceHistory Tasks', type: 'TASKS', configuration: { configurationType: 'TASKS' } }] },
    { universalIdentifier: 'd9eb19cb-2d47-49d3-b81a-db3777d12486', title: 'Notes', position: 30, icon: 'IconNotes', layoutMode: PageLayoutTabLayoutMode.CANVAS, widgets: [{ universalIdentifier: 'fbcdd743-e3d5-49cf-b566-fb32f9c3ba01', title: 'propertyPriceHistory Notes', type: 'NOTES', configuration: { configurationType: 'NOTES' } }] },
    { universalIdentifier: '5edfc2a9-afc0-4001-8d54-d5fc66054ae1', title: 'Files', position: 40, icon: 'IconPaperclip', layoutMode: PageLayoutTabLayoutMode.CANVAS, widgets: [{ universalIdentifier: '90a8ad09-0495-4ef6-82ff-309a37c95af5', title: 'propertyPriceHistory Files', type: 'FILES', configuration: { configurationType: 'FILES' } }] },
  ],
});

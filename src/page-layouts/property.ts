import { definePageLayout, PageLayoutTabLayoutMode } from 'twenty-sdk/define';
import { PROPERTY_UNIVERSAL_IDENTIFIER } from '../objects/property.object';

export const PROPERTY_PAGE_LAYOUT_ID = '8feb1f16-3f47-4da2-a1fe-1c96882f8c06';
export const PROPERTY_OVERVIEW_TAB_ID = '34c9f556-3a94-4157-b2c0-8358f0993a11';
export const PROPERTY_GALLERY_TAB_ID = 'aac00d3e-c179-4c28-842b-c73df07b7da6';
export const PROPERTY_PHOTOS_TAB_ID = '676acf8e-bd54-4e43-a8ea-419c0915a9ec';
export const PROPERTY_FIELDS_WIDGET_ID = '360ca1a5-40ba-404b-af93-073b8fb8447a';
export const PROPERTY_GALLERY_WIDGET_ID = '39b1a0fa-6756-41ea-a905-622544a76432';
export const PROPERTY_FILES_WIDGET_ID = 'bb9a6b0a-2d38-47e8-b68f-7b7a2c089286';

export default definePageLayout({
  universalIdentifier: PROPERTY_PAGE_LAYOUT_ID,
  name: 'Property Detail',
  type: 'RECORD_PAGE',
  objectUniversalIdentifier: PROPERTY_UNIVERSAL_IDENTIFIER,
  tabs: [
    {
      universalIdentifier: PROPERTY_OVERVIEW_TAB_ID,
      pageLayoutUniversalIdentifier: PROPERTY_PAGE_LAYOUT_ID,
      title: 'Overview',
      position: 0,
      icon: 'IconInfoCircle',
      layoutMode: PageLayoutTabLayoutMode.VERTICAL_LIST,
      widgets: [
        {
          universalIdentifier: PROPERTY_FIELDS_WIDGET_ID,
          title: 'Property Details',
          type: 'FIELDS',
          configuration: {
            configurationType: 'FIELDS',
            shouldAllowUserToSeeHiddenFields: true,
          },
        },
      ],
    },
    {
      universalIdentifier: PROPERTY_GALLERY_TAB_ID,
      pageLayoutUniversalIdentifier: PROPERTY_PAGE_LAYOUT_ID,
      title: 'Gallery',
      position: 1,
      icon: 'IconPhoto',
      layoutMode: PageLayoutTabLayoutMode.VERTICAL_LIST,
      widgets: [
        {
          universalIdentifier: PROPERTY_GALLERY_WIDGET_ID,
          title: 'Photos',
          type: 'FILES',
          configuration: {
            configurationType: 'FILES',
          },
        },
      ],
    },
    {
      universalIdentifier: PROPERTY_PHOTOS_TAB_ID,
      pageLayoutUniversalIdentifier: PROPERTY_PAGE_LAYOUT_ID,
      title: 'Files & Docs',
      position: 2,
      icon: 'IconFileUpload',
      layoutMode: PageLayoutTabLayoutMode.VERTICAL_LIST,
      widgets: [
        {
          universalIdentifier: PROPERTY_FILES_WIDGET_ID,
          title: 'Documents',
          type: 'FILES',
          configuration: {
            configurationType: 'FILES',
          },
        },
      ],
    },
  ],
});
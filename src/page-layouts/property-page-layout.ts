import { definePageLayout, PageLayoutTabLayoutMode } from 'twenty-sdk/define';
import { PROPERTY_UNIVERSAL_IDENTIFIER } from '../objects/property.object';

export const PROPERTY_PAGE_LAYOUT_ID = '8feb1f16-3f47-4da2-a1fe-1c96882f8c06';
export const PROPERTY_OVERVIEW_TAB_ID = '34c9f556-3a94-4157-b2c0-8358f0993a11';
export const PROPERTY_GALLERY_TAB_ID = 'aac00d3e-c179-4c28-842b-c73df07b7da6';
export const PROPERTY_PHOTOS_TAB_ID = '676acf8e-bd54-4e43-a8ea-419c0915a9ec';
export const PROPERTY_FIELDS_WIDGET_ID = '360ca1a5-40ba-404b-af93-073b8fb8447a';
export const PROPERTY_FILES_WIDGET_ID = 'bb9a6b0a-2d38-47e8-b68f-7b7a2c089286';
export const PROPERTY_VALUATION_WIDGET_ID = '2a5a5da7-91f4-4ede-b64b-b1578350f6d6';
export const PROPERTY_CAROUSEL_WIDGET_ID = 'b84d1c4a-a117-4f2a-b071-da2e7603562b';

// Front component UUIDs (must match their defineFrontComponent universalIdentifiers)
const PROPERTY_VALUATION_COMPONENT_ID = '47343f27-b398-4040-8758-d0a4d74c1903';
const PROPERTY_PHOTO_CAROUSEL_ID = 'c8c4d5a5-c9a8-4861-bae9-65e3e7363d9e';

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
          universalIdentifier: PROPERTY_VALUATION_WIDGET_ID,
          title: 'Valuation',
          type: 'FRONT_COMPONENT',
          configuration: {
            configurationType: 'FRONT_COMPONENT',
            frontComponentUniversalIdentifier: PROPERTY_VALUATION_COMPONENT_ID,
          },
        },
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
          universalIdentifier: PROPERTY_CAROUSEL_WIDGET_ID,
          title: 'Photo Gallery',
          type: 'FRONT_COMPONENT',
          configuration: {
            configurationType: 'FRONT_COMPONENT',
            frontComponentUniversalIdentifier: PROPERTY_PHOTO_CAROUSEL_ID,
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

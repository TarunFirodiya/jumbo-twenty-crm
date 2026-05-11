import { defineView, ViewType } from 'twenty-sdk/define';
import { BUILDING_UNIVERSAL_IDENTIFIER } from '../objects/building.object';
import {
  BUILDING_NAME_FIELD,  BUILDING_LOCALITY_FIELD,  BUILDING_NEAREST_LANDMARK_FIELD,  BUILDING_POSSESSION_DATE_FIELD,  BUILDING_TOTAL_FLOORS_FIELD,  BUILDING_TOTAL_UNITS_FIELD,  BUILDING_ACRES_FIELD,  BUILDING_MAP_LINK_FIELD,  BUILDING_LATITUDE_FIELD,  BUILDING_LONGITUDE_FIELD,  BUILDING_AMENITIES_FIELD,  BUILDING_WATER_SOURCE_FIELD,  BUILDING_KHATA_FIELD,  BUILDING_RERA_NUMBER_FIELD,  BUILDING_JUMBO_PRICE_ESTIMATE_FIELD,  BUILDING_UNDER_CONSTRUCTION_FIELD,  BUILDING_MODEL_FLAT_AVAILABLE_FIELD,  BUILDING_GOOGLE_RATING_FIELD,  BUILDING_BUILDER_NAME_FIELD,  BUILDING_BUILDER_LEGAL_NAME_FIELD,  BUILDING_BUILDER_OPERATIONAL_SINCE_FIELD,  BUILDING_BUILDER_CATEGORY_FIELD,  BUILDING_PROJECT_ID_FIELD,  BUILDING_PROJECT_ACRES_FIELD,
} from '../objects/building.object';

export const BUILDING_RECORD_PAGE_FIELDS_VIEW_ID = 'f7fbb2d8-806d-4140-a23d-c86dd2269b5e';

export default defineView({
  universalIdentifier: BUILDING_RECORD_PAGE_FIELDS_VIEW_ID,
  name: 'Building Record Page Fields',
  objectUniversalIdentifier: BUILDING_UNIVERSAL_IDENTIFIER,
  type: ViewType.FIELDS_WIDGET,
  icon: 'IconBuildingSkyscraper',
  isCompact: false,
  fields: [
    { universalIdentifier: '4fcff0e1-5dd2-4720-92bf-4b2e4e5d0350', fieldMetadataUniversalIdentifier: BUILDING_NAME_FIELD, position: 0, isVisible: true },
    { universalIdentifier: 'd813f3c8-2a4b-4b3e-9a40-72ed800c7ea9', fieldMetadataUniversalIdentifier: BUILDING_LOCALITY_FIELD, position: 1, isVisible: true },
    { universalIdentifier: '724b1594-2286-43f4-a891-0793a97bacdf', fieldMetadataUniversalIdentifier: BUILDING_NEAREST_LANDMARK_FIELD, position: 2, isVisible: true },
    { universalIdentifier: 'a60518a5-5e45-4fd1-8b63-032b7aefc56a', fieldMetadataUniversalIdentifier: BUILDING_POSSESSION_DATE_FIELD, position: 3, isVisible: true },
    { universalIdentifier: '1909c862-71f0-48dd-be0e-2d052533e51f', fieldMetadataUniversalIdentifier: BUILDING_TOTAL_FLOORS_FIELD, position: 4, isVisible: true },
    { universalIdentifier: '58f04c42-b698-4c1e-ac9a-0d6f5397eb12', fieldMetadataUniversalIdentifier: BUILDING_TOTAL_UNITS_FIELD, position: 5, isVisible: true },
    { universalIdentifier: 'd9139e43-bae6-4459-a766-7eb52a1b4eba', fieldMetadataUniversalIdentifier: BUILDING_ACRES_FIELD, position: 6, isVisible: true },
    { universalIdentifier: '94915050-f188-4f47-9049-51a2979de294', fieldMetadataUniversalIdentifier: BUILDING_MAP_LINK_FIELD, position: 7, isVisible: true },
    { universalIdentifier: '859f3838-6496-4d85-a5d7-aba0ebead50e', fieldMetadataUniversalIdentifier: BUILDING_LATITUDE_FIELD, position: 8, isVisible: true },
    { universalIdentifier: '118486b3-b132-4011-80ed-8c68a3b0b0ce', fieldMetadataUniversalIdentifier: BUILDING_LONGITUDE_FIELD, position: 9, isVisible: true },
    { universalIdentifier: 'e6d78792-5680-45c8-b184-5638819a0d81', fieldMetadataUniversalIdentifier: BUILDING_AMENITIES_FIELD, position: 10, isVisible: true },
    { universalIdentifier: 'e689317f-e72c-42c6-aace-f7068d1ffd7f', fieldMetadataUniversalIdentifier: BUILDING_WATER_SOURCE_FIELD, position: 11, isVisible: true },
    { universalIdentifier: '841652f7-5c23-4cd4-a362-72a8eae831bd', fieldMetadataUniversalIdentifier: BUILDING_KHATA_FIELD, position: 12, isVisible: true },
    { universalIdentifier: '21eb235d-c3c9-457b-9d83-834b7f4ecee7', fieldMetadataUniversalIdentifier: BUILDING_RERA_NUMBER_FIELD, position: 13, isVisible: true },
    { universalIdentifier: '778f7f1c-c39b-4ab9-816a-1d67a972ea0b', fieldMetadataUniversalIdentifier: BUILDING_JUMBO_PRICE_ESTIMATE_FIELD, position: 14, isVisible: true },
    { universalIdentifier: '1f162d70-f5ff-44f5-b4da-6c61cdcbc48a', fieldMetadataUniversalIdentifier: BUILDING_UNDER_CONSTRUCTION_FIELD, position: 15, isVisible: true },
    { universalIdentifier: '86a5184c-2d9b-4075-956b-d81d3f39acf4', fieldMetadataUniversalIdentifier: BUILDING_MODEL_FLAT_AVAILABLE_FIELD, position: 16, isVisible: true },
    { universalIdentifier: 'b6d85ed0-a219-49d7-ad9e-c10aa946b468', fieldMetadataUniversalIdentifier: BUILDING_GOOGLE_RATING_FIELD, position: 17, isVisible: true },
    { universalIdentifier: 'f46ecca5-be1c-43d4-9bc0-f4409e472360', fieldMetadataUniversalIdentifier: BUILDING_BUILDER_NAME_FIELD, position: 18, isVisible: true },
    { universalIdentifier: 'afbaad52-f272-4c77-8ac2-d86fcf914a48', fieldMetadataUniversalIdentifier: BUILDING_BUILDER_LEGAL_NAME_FIELD, position: 19, isVisible: true },
    { universalIdentifier: '703784af-ab3b-4ed5-ba83-2d859f429633', fieldMetadataUniversalIdentifier: BUILDING_BUILDER_OPERATIONAL_SINCE_FIELD, position: 20, isVisible: true },
    { universalIdentifier: 'df6c7c7e-531c-4374-b427-96a037f07804', fieldMetadataUniversalIdentifier: BUILDING_BUILDER_CATEGORY_FIELD, position: 21, isVisible: true },
    { universalIdentifier: '719d7374-a5df-426f-913a-85a0b370f6a0', fieldMetadataUniversalIdentifier: BUILDING_PROJECT_ID_FIELD, position: 22, isVisible: true },
    { universalIdentifier: 'f1aeb915-fba1-4d7b-8d3a-c980c520f9ca', fieldMetadataUniversalIdentifier: BUILDING_PROJECT_ACRES_FIELD, position: 23, isVisible: true },
  ],
});

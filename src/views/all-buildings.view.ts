import { defineView, ViewKey } from 'twenty-sdk/define';
import { BUILDING_UNIVERSAL_IDENTIFIER, BUILDING_NAME_FIELD, BUILDING_LOCALITY_FIELD, BUILDING_TOTAL_FLOORS_FIELD, BUILDING_TOTAL_UNITS_FIELD, BUILDING_UNDER_CONSTRUCTION_FIELD } from '../objects/building.object';

export const ALL_BUILDINGS_VIEW_ID = 'b60402e6-686e-4a4e-935b-3718f74a02f0';

export default defineView({
  universalIdentifier: ALL_BUILDINGS_VIEW_ID,
  name: 'All Buildings',
  objectUniversalIdentifier: BUILDING_UNIVERSAL_IDENTIFIER,
  key: ViewKey.INDEX,
  icon: 'IconBuildingSkyscraper',
  isCompact: false,
  fields: [
    { universalIdentifier: '36849bbe-1701-48cd-b65b-f0270fa30680', fieldMetadataUniversalIdentifier: BUILDING_NAME_FIELD, position: 0, isVisible: true },
    { universalIdentifier: '1248f0c9-6e11-4958-bd72-fb7ab7aaeaf3', fieldMetadataUniversalIdentifier: BUILDING_LOCALITY_FIELD, position: 1, isVisible: true },
    { universalIdentifier: '8bea28af-25dd-4043-999c-e866568fb9bf', fieldMetadataUniversalIdentifier: BUILDING_TOTAL_FLOORS_FIELD, position: 2, isVisible: true },
    { universalIdentifier: 'f2843239-d4eb-4f99-b45c-28efa5900c3b', fieldMetadataUniversalIdentifier: BUILDING_TOTAL_UNITS_FIELD, position: 3, isVisible: true },
    { universalIdentifier: '4d74d2ff-37e4-496b-9e97-a49af4ed335d', fieldMetadataUniversalIdentifier: BUILDING_UNDER_CONSTRUCTION_FIELD, position: 4, isVisible: true },
  ],
});

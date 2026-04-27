import { defineObject, FieldType } from 'twenty-sdk/define';

export const BUILDING_UNIVERSAL_IDENTIFIER = '73412f3f-c96a-42c6-ab1c-d66d5c6942c2';
export const BUILDING_NAME_FIELD = 'eec46cf4-6b68-4f78-a11d-72dbde406405';
export const BUILDING_LOCALITY_FIELD = '30366be4-4e78-4439-ad1b-91b89432bbbb';
export const BUILDING_NEAREST_LANDMARK_FIELD = '7296e46d-82c7-4c15-9c56-29514ee88299';
export const BUILDING_POSSESSION_DATE_FIELD = '8d7f5bb6-f713-40cf-adc1-e1415a212e90';
export const BUILDING_TOTAL_FLOORS_FIELD = '547b2fa9-a0c0-4734-9bf4-e8c06f871b52';
export const BUILDING_TOTAL_UNITS_FIELD = 'ad90d158-e356-4335-aa51-0dfa4e00101b';
export const BUILDING_ACRES_FIELD = 'e7b3ee04-7574-479f-9ff0-07c2e975c7f0';
export const BUILDING_MAP_LINK_FIELD = '4a657b0e-61bc-4446-ae6f-34970ed9aa86';
export const BUILDING_LATITUDE_FIELD = '11455cc3-76e4-4f85-8150-474305890560';
export const BUILDING_LONGITUDE_FIELD = '71248ce7-8a17-494f-8720-ea4cccbeb13b';
export const BUILDING_AMENITIES_FIELD = '2cfbeb33-1cf3-4049-aa5d-ca2c9de26f56';
export const BUILDING_WATER_SOURCE_FIELD = 'c3fc123e-834a-4941-96a0-fb0f2b897b9a';
export const BUILDING_KHATA_FIELD = '46352521-9da3-4a78-92c5-99a795e12b3a';
export const BUILDING_RERA_NUMBER_FIELD = 'af207887-af0e-479b-a5b7-f9efd39fcbe3';
export const BUILDING_JUMBO_PRICE_ESTIMATE_FIELD = '5289b51f-b45f-457f-a536-833271c9c617';
export const BUILDING_UNDER_CONSTRUCTION_FIELD = '4687f6b2-4e99-47b2-bd2d-95f18420bde8';
export const BUILDING_MODEL_FLAT_AVAILABLE_FIELD = 'd6a7e511-60cb-45df-97bc-f7bd35b59e1f';
export const BUILDING_GOOGLE_RATING_FIELD = '66495b63-1234-402d-ae51-cf18940e6173';

enum WaterSource {
  BOREWELL = 'BOREWELL',
  CORPORATION = 'CORPORATION',
  BOTH = 'BOTH',
}

export default defineObject({
  universalIdentifier: BUILDING_UNIVERSAL_IDENTIFIER,
  nameSingular: 'building',
  namePlural: 'buildings',
  labelSingular: 'Building',
  labelPlural: 'Buildings',
  description: 'Real estate project or building metadata',
  icon: 'IconBuildingSkyscraper',
  labelIdentifierFieldMetadataUniversalIdentifier: BUILDING_NAME_FIELD,
  fields: [
    {
      universalIdentifier: BUILDING_NAME_FIELD,
      type: FieldType.TEXT,
      label: 'Building Name',
      description: 'Name of the building or project',
      icon: 'IconBuilding',
      name: 'name',
    },
    {
      universalIdentifier: BUILDING_LOCALITY_FIELD,
      type: FieldType.TEXT,
      label: 'Locality',
      description: 'Area or neighbourhood',
      icon: 'IconMapPin',
      name: 'locality',
    },
    {
      universalIdentifier: BUILDING_NEAREST_LANDMARK_FIELD,
      type: FieldType.TEXT,
      label: 'Nearest Landmark',
      description: 'Prominent nearby landmark',
      icon: 'IconFlag',
      name: 'nearestLandmark',
    },
    {
      universalIdentifier: BUILDING_POSSESSION_DATE_FIELD,
      type: FieldType.DATE,
      label: 'Possession Date',
      description: 'Expected possession or completion date',
      icon: 'IconCalendar',
      name: 'possessionDate',
    },
    {
      universalIdentifier: BUILDING_TOTAL_FLOORS_FIELD,
      type: FieldType.NUMBER,
      label: 'Total Floors',
      description: 'Number of floors in the building',
      icon: 'IconLayers',
      name: 'totalFloors',
    },
    {
      universalIdentifier: BUILDING_TOTAL_UNITS_FIELD,
      type: FieldType.NUMBER,
      label: 'Total Units',
      description: 'Total number of units in the building',
      icon: 'IconHome',
      name: 'totalUnits',
    },
    {
      universalIdentifier: BUILDING_ACRES_FIELD,
      type: FieldType.NUMBER,
      label: 'Acres',
      description: 'Total land area in acres',
      icon: 'IconRuler',
      name: 'acres',
    },
    {
      universalIdentifier: BUILDING_MAP_LINK_FIELD,
      type: FieldType.TEXT,
      label: 'Map Link',
      description: 'Google Maps URL',
      icon: 'IconMap',
      name: 'mapLink',
    },
    {
      universalIdentifier: BUILDING_LATITUDE_FIELD,
      type: FieldType.NUMBER,
      label: 'Latitude',
      description: 'GPS latitude',
      icon: 'IconWorld',
      name: 'latitude',
    },
    {
      universalIdentifier: BUILDING_LONGITUDE_FIELD,
      type: FieldType.NUMBER,
      label: 'Longitude',
      description: 'GPS longitude',
      icon: 'IconWorld',
      name: 'longitude',
    },
    {
      universalIdentifier: BUILDING_AMENITIES_FIELD,
      type: FieldType.MULTI_SELECT,
      label: 'Amenities',
      description: 'Building-level amenities',
      icon: 'IconPool',
      options: [
        { id: 'c6062770-2504-412a-8b90-8f9ae3bc47d0', value: 'POOL', label: 'Swimming Pool', position: 0, color: 'blue' },
        { id: '03d3eee3-a9b7-432d-a561-4f493e75d60f', value: 'GYM', label: 'Gym', position: 1, color: 'green' },
        { id: '8f9c345f-b551-499c-9940-08f0eceda468', value: 'PARKING', label: 'Parking', position: 2, color: 'orange' },
        { id: '8a1384f1-ace0-4bd3-8e8d-2d714f228ef1', value: 'SECURITY', label: '24/7 Security', position: 3, color: 'red' },
        { id: '863d1859-e4fa-4ca6-be2f-9a3cf02dbd5c', value: 'ELEVATOR', label: 'Elevator', position: 4, color: 'gray' },
        { id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890', value: 'CLUBHOUSE', label: 'Clubhouse', position: 5, color: 'purple' },
        { id: 'b2c3d4e5-f6a7-8901-bcde-f23456789012', value: 'PLAY_AREA', label: 'Kids Play Area', position: 6, color: 'yellow' },
      ],
      name: 'amenities',
    },
    {
      universalIdentifier: BUILDING_WATER_SOURCE_FIELD,
      type: FieldType.SELECT,
      label: 'Water Source',
      description: 'Primary water supply source',
      icon: 'IconDroplet',
      options: [
        { id: 'c4a125a4-a3e6-4c71-9a89-6c64e4e52e53', value: WaterSource.BOREWELL, label: 'Borewell', position: 0, color: 'blue' },
        { id: 'fb7240ce-62c7-42db-b9fa-76ce3188a08c', value: WaterSource.CORPORATION, label: 'Corporation', position: 1, color: 'green' },
        { id: '78ad4e81-b538-4b3d-9408-ff3009b28a05', value: WaterSource.BOTH, label: 'Both', position: 2, color: 'orange' },
      ],
      name: 'waterSource',
    },
    {
      universalIdentifier: BUILDING_KHATA_FIELD,
      type: FieldType.TEXT,
      label: 'Khata',
      description: 'Khata certificate number or type',
      icon: 'IconFileCheck',
      name: 'khata',
    },
    {
      universalIdentifier: BUILDING_RERA_NUMBER_FIELD,
      type: FieldType.TEXT,
      label: 'RERA Number',
      description: 'RERA registration number',
      icon: 'IconCertificate',
      name: 'reraNumber',
    },
    {
      universalIdentifier: BUILDING_JUMBO_PRICE_ESTIMATE_FIELD,
      type: FieldType.CURRENCY,
      label: 'Jumbo Price Estimate',
      description: 'Estimated price by Jumbo team',
      icon: 'IconCurrencyRupee',
      name: 'jumboPriceEstimate',
    },
    {
      universalIdentifier: BUILDING_UNDER_CONSTRUCTION_FIELD,
      type: FieldType.BOOLEAN,
      label: 'Under Construction',
      description: 'Is the building still under construction',
      icon: 'IconHammer',
      name: 'underConstruction',
    },
    {
      universalIdentifier: BUILDING_MODEL_FLAT_AVAILABLE_FIELD,
      type: FieldType.BOOLEAN,
      label: 'Model Flat Available',
      description: 'Is a model flat available for viewing',
      icon: 'IconHomeCheck',
      name: 'modelFlatAvailable',
    },
    {
      universalIdentifier: BUILDING_GOOGLE_RATING_FIELD,
      type: FieldType.NUMBER,
      label: 'Google Rating',
      description: 'Google review rating (1-5)',
      icon: 'IconStar',
      name: 'googleRating',
    },
  ],
});

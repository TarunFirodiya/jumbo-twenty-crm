import { defineObject, FieldType, RelationType, OnDeleteAction } from 'twenty-sdk/define';

export const PROPERTY_INSPECTION_UNIVERSAL_IDENTIFIER = 'aeac76f4-07df-46d4-b010-a895f723086d';
export const INSPECTION_ID_FIELD = '7ade81c6-b173-4793-933a-369d03234484';
export const INSPECTION_PROPERTY_FIELD = 'e2290827-4680-41c7-a412-150e17dc7ad0';
export const INSPECTION_LOCATION_FIELD = 'acd2f202-def6-47d2-a671-4ce4cfe7acd4';
export const INSPECTION_INSPECTED_ON_FIELD = 'a5f5a65a-4aee-475e-aea9-907df96de9da';
export const INSPECTION_INSPECTED_BY_FIELD = 'd45f67e5-a9e7-46b7-9eba-4753b7c39b36';
export const INSPECTION_BEDROOMS_FIELD = 'cec9f483-08b0-49e7-b5e2-fa3278a8b5df';
export const INSPECTION_BATHROOMS_FIELD = '7e01fad5-c650-457e-bb94-61bfcf61641f';
export const INSPECTION_BALCONIES_FIELD = '5f0066a6-b08e-4673-a177-65b6a6be96b4';
export const INSPECTION_PARKINGS_FIELD = 'ad1b7dad-a18c-465a-8d63-0ca9025ab05a';
export const INSPECTION_DOOR_FACING_FIELD = '73ea4474-6ac1-488d-8cd1-f66c9497bd8f';
export const INSPECTION_BALCONY_VIEW_1_FIELD = '65470cec-0326-4ca5-aeea-528b79f90e03';
export const INSPECTION_BALCONY_VIEW_2_FIELD = '6c11338f-6256-4fe7-8fdd-7b6b2fa9000a';
export const INSPECTION_BALCONY_VIEW_3_FIELD = 'dff97cf1-c666-43b7-aa48-c44ac8a260a2';
export const INSPECTION_BALCONY_VIEW_4_FIELD = 'f52acedd-8e9e-4802-82c3-48ddeda3914e';
export const INSPECTION_LIVING_ROOM_PHOTOS_FIELD = 'ce507aa3-9a8f-454a-92e2-596f41ed7a66';
export const INSPECTION_BEDROOM_1_PHOTOS_FIELD = '0f6a7e48-dcbe-47bf-bb3f-3783a50ab446';
export const INSPECTION_BEDROOM_2_PHOTOS_FIELD = '3a2d70f0-cd7d-456c-bf8f-77614ad27bef';
export const INSPECTION_BEDROOM_3_PHOTOS_FIELD = '39af8ba9-a85d-4f6f-b59b-c2babdbebc5a';
export const INSPECTION_BEDROOM_4_PHOTOS_FIELD = '71d56f2e-f7cb-440a-9821-f55d62a58fc3';
export const INSPECTION_BEDROOM_5_PHOTOS_FIELD = '324ffd4a-cf71-413b-abf6-67eb947f1f78';
export const INSPECTION_BATHROOM_1_PHOTOS_FIELD = 'ad8113e5-7e1d-4912-b334-3cf8b4ea18f1';
export const INSPECTION_BATHROOM_2_PHOTOS_FIELD = 'c865656b-47e2-4b5a-96a0-6a9c98aaa4fa';
export const INSPECTION_BATHROOM_3_PHOTOS_FIELD = '505190d8-d2b1-4344-b765-ff410093502e';
export const INSPECTION_BATHROOM_4_PHOTOS_FIELD = '5e0e7d3c-0842-4b80-8c18-4fa81f2b60f1';
export const INSPECTION_BATHROOM_5_PHOTOS_FIELD = '1a836c4d-ea2b-490c-981e-ab17bfb55f1a';
export const INSPECTION_BALCONY_1_PHOTOS_FIELD = '3321c51a-d2cb-40f9-9705-9eeecca9d1c2';
export const INSPECTION_BALCONY_2_PHOTOS_FIELD = 'eaf1a98a-7150-44f7-8bfb-27d4d29ebf09';
export const INSPECTION_BALCONY_3_PHOTOS_FIELD = '8731d313-f497-4015-ba8a-5eae805f6bab';
export const INSPECTION_BALCONY_4_PHOTOS_FIELD = 'af2d49d3-1fee-4205-bd13-7f1442a42eb2';
export const INSPECTION_BALCONY_5_PHOTOS_FIELD = '6f102c26-9818-4082-8e84-d4e55129f1e1';
export const INSPECTION_BALCONY_VIEW_1_PHOTOS_FIELD = '0ad12d28-cae8-4497-b9d2-64fd03f584c5';
export const INSPECTION_BALCONY_VIEW_2_PHOTOS_FIELD = '979d263e-ec2e-49fa-b478-12d53f5f1da7';
export const INSPECTION_BALCONY_VIEW_3_PHOTOS_FIELD = 'dacc12c1-50d9-4895-995e-ce9682ec58ab';
export const INSPECTION_BALCONY_VIEW_4_PHOTOS_FIELD = 'e989260a-396d-413e-afa3-e23b3ea5d2a1';
export const INSPECTION_BALCONY_VIEW_5_PHOTOS_FIELD = '25fd7413-dd3d-4161-bc05-8f953716d2fa';
export const INSPECTION_KITCHEN_PHOTOS_FIELD = '06c67ff6-2536-43e3-8789-dbfd147b35fb';
export const INSPECTION_PARKING_PHOTOS_FIELD = 'd6d7d45d-fffa-4d64-9e4a-ed846af54432';
export const INSPECTION_KNOWN_ISSUE_1_FIELD = '3e5fa0d8-a9d9-434f-ad71-5b3d1da9086e';
export const INSPECTION_KNOWN_ISSUE_2_FIELD = '77ac3d44-a3e8-4279-ab04-9e2351f0455d';
export const INSPECTION_KNOWN_ISSUE_3_FIELD = '43b83a23-1838-4966-b6c2-764909230685';
export const INSPECTION_KNOWN_ISSUE_1_IMAGE_FIELD = 'b2623ec7-349d-41d7-a085-4c48d60bc7c7';
export const INSPECTION_KNOWN_ISSUE_2_IMAGE_FIELD = '8984b030-61c9-40d1-bbc0-3ae2ab3b1879';
export const INSPECTION_KNOWN_ISSUE_3_IMAGE_FIELD = 'c5bf8fe4-cf2d-4e02-a456-4209a478fd20';
export const INSPECTION_VIDEO_FIELD = '46f4f50b-5c25-4d1c-a32c-cf7aac8024f9';
export const INSPECTION_ASSIGNED_TO_FIELD = 'd383f842-c493-451c-aee2-3cf80fc94afd';
export const INSPECTION_SCHEDULED_FIELD = '2623aaa1-0a35-4915-a6ec-825fd78c0709';
export const INSPECTION_HOUSING_VERIFICATION_FIELD = 'b8684fad-d1c6-4e78-8fe5-e0d3a7726685';
export const INSPECTION_99ACRES_VERIFICATION_FIELD = 'c1a824a2-7d88-4c78-bde2-86f2656cd6d1';
export const INSPECTION_FLOOR_PLAN_FIELD = '9ce58085-2f28-42d7-8f3b-dbd61e72e651';

// More UUIDs for remaining fields
export const INSPECTION_COMPASS_PHOTO_FIELD = '8a4d7c3e-b12f-4a8e-9c5d-7e3f9a1b2c4d';
export const INSPECTION_WIFI_SPEED_FIELD = '9b5e8d4f-c23e-4b9f-ad6e-8f4e0b2c3d5e';
export const INSPECTION_LUX_METER_FIELD = 'ac6f9e50-d34f-4c0f-be7f-9a5f1c3d4e6f';
export const INSPECTION_NOTES_FIELD = 'aa77fd3a-e9e5-40cb-ae8e-aaef139f2625';

enum DoorFacing {
  EAST = 'EAST',
  WEST = 'WEST',
  NORTH = 'NORTH',
  SOUTH = 'SOUTH',
  NORTH_EAST = 'NORTH_EAST',
  NORTH_WEST = 'NORTH_WEST',
  SOUTH_EAST = 'SOUTH_EAST',
  SOUTH_WEST = 'SOUTH_WEST',
}

enum BalconyView {
  POOL = 'POOL',
  GARDEN = 'GARDEN',
  LAKE = 'LAKE',
  MAIN_ROAD = 'MAIN_ROAD',
  AMENITIES = 'AMENITIES',
  BUILDING = 'BUILDING',
  GREEN_LANDSCAPE = 'GREEN_LANDSCAPE',
}

enum KnownIssue {
  WALL_SEEPAGE = 'WALL_SEEPAGE',
  PAINT_REQUIRED = 'PAINT_REQUIRED',
  DEEP_CLEAN = 'DEEP_CLEAN',
  ACCESS_ROAD = 'ACCESS_ROAD',
  CREMATORIUM_NEARBY = 'CREMATORIUM_NEARBY',
  FACTORY_NEARBY = 'FACTORY_NEARBY',
  COMMON_WALL = 'COMMON_WALL',
}

export default defineObject({
  universalIdentifier: PROPERTY_INSPECTION_UNIVERSAL_IDENTIFIER,
  nameSingular: 'propertyInspection',
  namePlural: 'propertyInspections',
  labelSingular: 'Property Inspection',
  labelPlural: 'Property Inspections',
  description: 'Physical inspection record for a property',
  icon: 'IconClipboardCheck',
  labelIdentifierFieldMetadataUniversalIdentifier: INSPECTION_ID_FIELD,
  fields: [
    {
      universalIdentifier: INSPECTION_ID_FIELD,
      type: FieldType.TEXT,
      label: 'Inspection ID',
      description: 'Unique inspection reference',
      icon: 'IconHash',
      name: 'inspectionId',
    },
    {
      universalIdentifier: INSPECTION_PROPERTY_FIELD,
      type: FieldType.RELATION,
      label: 'Property',
      description: 'Property being inspected',
      icon: 'IconHome',
      name: 'property',
      relationTargetObjectMetadataUniversalIdentifier: '32e135d0-16b0-4c08-a90f-d4505931bae0',
      relationTargetFieldMetadataUniversalIdentifier: '970a31d0-f7f2-49a9-83e6-2def47be9074',
      universalSettings: {
        relationType: RelationType.MANY_TO_ONE,
        onDelete: OnDeleteAction.SET_NULL,
        joinColumnName: 'propertyId',
      },
    },
    {
      universalIdentifier: INSPECTION_LOCATION_FIELD,
      type: FieldType.TEXT,
      label: 'Location',
      description: 'Location notes',
      icon: 'IconMapPin',
      name: 'location',
    },
    {
      universalIdentifier: INSPECTION_INSPECTED_ON_FIELD,
      type: FieldType.DATE_TIME,
      label: 'Inspected On',
      icon: 'IconCalendar',
      name: 'inspectedOn',
    },
    {
      universalIdentifier: INSPECTION_INSPECTED_BY_FIELD,
      type: FieldType.RELATION,
      label: 'Inspected By',
      icon: 'IconUser',
      name: 'inspectedBy',
      relationTargetObjectMetadataUniversalIdentifier: '20202020-3319-4234-a34c-82d5c0e881a6',
      relationTargetFieldMetadataUniversalIdentifier: 'e95f6a0f-2f2b-4540-a086-80b42bfcb3c6',
      universalSettings: {
        relationType: RelationType.MANY_TO_ONE,
        onDelete: OnDeleteAction.SET_NULL,
        joinColumnName: 'inspectedById',
      },
    },
    {
      universalIdentifier: INSPECTION_BEDROOMS_FIELD,
      type: FieldType.NUMBER,
      label: 'Bedrooms',
      icon: 'IconBed',
      name: 'bedrooms',
    },
    {
      universalIdentifier: INSPECTION_BATHROOMS_FIELD,
      type: FieldType.NUMBER,
      label: 'Bathrooms',
      icon: 'IconBath',
      name: 'bathrooms',
    },
    {
      universalIdentifier: INSPECTION_BALCONIES_FIELD,
      type: FieldType.NUMBER,
      label: 'Balconies',
      icon: 'IconWindow',
      name: 'balconies',
    },
    {
      universalIdentifier: INSPECTION_PARKINGS_FIELD,
      type: FieldType.NUMBER,
      label: 'Parkings',
      icon: 'IconCar',
      name: 'parkings',
    },
    {
      universalIdentifier: INSPECTION_DOOR_FACING_FIELD,
      type: FieldType.SELECT,
      label: 'Door Facing',
      icon: 'IconCompass',
      options: [
        { id: '0a17f21d-aaa7-482f-ae07-17d8a68d9e61', value: DoorFacing.EAST, label: 'East', position: 0, color: 'blue' },
        { id: 'fb348a9b-59c9-4f82-864c-6f8f7245577f', value: DoorFacing.WEST, label: 'West', position: 1, color: 'green' },
        { id: '7fe59559-c96f-4d0f-9d94-2ca788121274', value: DoorFacing.NORTH, label: 'North', position: 2, color: 'orange' },
        { id: '5b3e94b2-1275-4d68-9682-c16d21926fbc', value: DoorFacing.SOUTH, label: 'South', position: 3, color: 'purple' },
        { id: 'ad0e73ba-c09c-4ffe-a5a3-aaf3291c0b5f', value: DoorFacing.NORTH_EAST, label: 'North East', position: 4, color: 'yellow' },
        { id: '36857088-cca5-47be-8934-2234ae0143bf', value: DoorFacing.NORTH_WEST, label: 'North West', position: 5, color: 'red' },
        { id: '693dcb75-8ee4-41f0-9b13-cb2b841dc5c9', value: DoorFacing.SOUTH_EAST, label: 'South East', position: 6, color: 'gray' },
        { id: 'bdfdd409-cda6-4e0c-b93b-ac505ab1b1c8', value: DoorFacing.SOUTH_WEST, label: 'South West', position: 7, color: 'pink' },
      ],
      name: 'doorFacing',
    },
    {
      universalIdentifier: INSPECTION_BALCONY_VIEW_1_FIELD,
      type: FieldType.SELECT,
      label: 'Balcony View 1',
      icon: 'IconEye',
      options: [
        { id: '0225f3b3-c61f-48fe-93be-e0285d62a7a0', value: BalconyView.POOL, label: 'Pool', position: 0, color: 'blue' },
        { id: 'a74c1307-d692-4217-b02d-a405e9ee18ae', value: BalconyView.GARDEN, label: 'Garden', position: 1, color: 'green' },
        { id: '33554d48-eb74-4aec-ab60-b072c3449039', value: BalconyView.LAKE, label: 'Lake', position: 2, color: 'orange' },
        { id: 'c2a1875f-b601-4d3d-aae7-dcc626bab902', value: BalconyView.MAIN_ROAD, label: 'Main Road', position: 3, color: 'purple' },
        { id: '14ef0d81-0b65-4623-a1ec-1883278e2303', value: BalconyView.AMENITIES, label: 'Amenities', position: 4, color: 'yellow' },
        { id: '079b9116-4e37-45c3-aded-ec665af14725', value: BalconyView.BUILDING, label: 'Building', position: 5, color: 'red' },
        { id: 'f2c055bd-8781-448f-80a8-c0499725b966', value: BalconyView.GREEN_LANDSCAPE, label: 'Green Landscape', position: 6, color: 'gray' },
      ],
      name: 'balconyView1',
    },
    {
      universalIdentifier: INSPECTION_BALCONY_VIEW_2_FIELD,
      type: FieldType.SELECT,
      label: 'Balcony View 2',
      icon: 'IconEye',
      options: [
        { id: 'a51e20d2-61bf-4c4c-a5a8-ab0a3586e058', value: BalconyView.POOL, label: 'Pool', position: 0, color: 'blue' },
        { id: '0d444dc7-7d9a-4f02-8c74-13ec978568e6', value: BalconyView.GARDEN, label: 'Garden', position: 1, color: 'green' },
        { id: 'a069481d-5f20-493c-9fe0-c2df3d0ef272', value: BalconyView.LAKE, label: 'Lake', position: 2, color: 'orange' },
        { id: 'b8d5f40a-af63-45fa-9888-8a1ab5875c4a', value: BalconyView.MAIN_ROAD, label: 'Main Road', position: 3, color: 'purple' },
        { id: 'd735de46-4ab9-4e1f-bb81-056832107653', value: BalconyView.AMENITIES, label: 'Amenities', position: 4, color: 'yellow' },
        { id: 'd4445917-4e68-4729-944f-135e981a1b94', value: BalconyView.BUILDING, label: 'Building', position: 5, color: 'red' },
        { id: '63e8c4f9-21ce-4564-9192-b1c1720c3300', value: BalconyView.GREEN_LANDSCAPE, label: 'Green Landscape', position: 6, color: 'gray' },
      ],
      name: 'balconyView2',
    },
    {
      universalIdentifier: INSPECTION_BALCONY_VIEW_3_FIELD,
      type: FieldType.SELECT,
      label: 'Balcony View 3',
      icon: 'IconEye',
      options: [
        { id: 'aeafaf6f-b553-4439-82eb-bb79887f3cbc', value: BalconyView.POOL, label: 'Pool', position: 0, color: 'blue' },
        { id: 'c16aebed-a45b-4d68-87db-49c4b49654b0', value: BalconyView.GARDEN, label: 'Garden', position: 1, color: 'green' },
        { id: '944810c9-b870-4c95-8700-b5e635f09cd3', value: BalconyView.LAKE, label: 'Lake', position: 2, color: 'orange' },
        { id: '1ea7a05c-e41d-4b1c-ae18-25089223e950', value: BalconyView.MAIN_ROAD, label: 'Main Road', position: 3, color: 'purple' },
        { id: 'b42afb94-ec9a-43f7-88ad-817749570a2f', value: BalconyView.AMENITIES, label: 'Amenities', position: 4, color: 'yellow' },
        { id: '204dc262-6cb0-4b53-aa66-17d79e1de790', value: BalconyView.BUILDING, label: 'Building', position: 5, color: 'red' },
        { id: '8fc0cae4-841a-42c9-b205-809de9d405f8', value: BalconyView.GREEN_LANDSCAPE, label: 'Green Landscape', position: 6, color: 'gray' },
      ],
      name: 'balconyView3',
    },
    {
      universalIdentifier: INSPECTION_BALCONY_VIEW_4_FIELD,
      type: FieldType.SELECT,
      label: 'Balcony View 4',
      icon: 'IconEye',
      options: [
        { id: 'cd9a4f22-f864-49f5-b569-83f88903c0ce', value: BalconyView.POOL, label: 'Pool', position: 0, color: 'blue' },
        { id: '1a6c515b-17ed-45e9-9b16-1b86f0a16a89', value: BalconyView.GARDEN, label: 'Garden', position: 1, color: 'green' },
        { id: 'bf5a4d0e-622a-4c46-9ea3-255845dd1d5f', value: BalconyView.LAKE, label: 'Lake', position: 2, color: 'orange' },
        { id: '26048ea9-6528-4083-b965-325be4d8e84c', value: BalconyView.MAIN_ROAD, label: 'Main Road', position: 3, color: 'purple' },
        { id: 'cab8939d-0dfd-4e0e-848e-0e27a7609d41', value: BalconyView.AMENITIES, label: 'Amenities', position: 4, color: 'yellow' },
        { id: '9199ecf0-f45b-4cd3-88c8-a2c44fbb17c1', value: BalconyView.BUILDING, label: 'Building', position: 5, color: 'red' },
        { id: 'f20f41ff-9799-4c91-88c3-7eea0500c450', value: BalconyView.GREEN_LANDSCAPE, label: 'Green Landscape', position: 6, color: 'gray' },
      ],
      name: 'balconyView4',
    },
    {
      universalIdentifier: INSPECTION_LIVING_ROOM_PHOTOS_FIELD,
      type: FieldType.FILES,
      label: 'Living Room Photos',
      icon: 'IconPhoto',
      name: 'livingRoomPhotos',
      universalSettings: {
        maxNumberOfValues: 5,
      },
    },
    {
      universalIdentifier: INSPECTION_BEDROOM_1_PHOTOS_FIELD,
      type: FieldType.FILES,
      label: 'Bedroom 1 Photos',
      icon: 'IconPhoto',
      name: 'bedroom1Photos',
      universalSettings: {
        maxNumberOfValues: 5,
      },
    },
    {
      universalIdentifier: INSPECTION_BEDROOM_2_PHOTOS_FIELD,
      type: FieldType.FILES,
      label: 'Bedroom 2 Photos',
      icon: 'IconPhoto',
      name: 'bedroom2Photos',
      universalSettings: {
        maxNumberOfValues: 5,
      },
    },
    {
      universalIdentifier: INSPECTION_BEDROOM_3_PHOTOS_FIELD,
      type: FieldType.FILES,
      label: 'Bedroom 3 Photos',
      icon: 'IconPhoto',
      name: 'bedroom3Photos',
      universalSettings: {
        maxNumberOfValues: 5,
      },
    },
    {
      universalIdentifier: INSPECTION_BEDROOM_4_PHOTOS_FIELD,
      type: FieldType.FILES,
      label: 'Bedroom 4 Photos',
      icon: 'IconPhoto',
      name: 'bedroom4Photos',
      universalSettings: {
        maxNumberOfValues: 5,
      },
    },
    {
      universalIdentifier: INSPECTION_BEDROOM_5_PHOTOS_FIELD,
      type: FieldType.FILES,
      label: 'Bedroom 5 Photos',
      icon: 'IconPhoto',
      name: 'bedroom5Photos',
      universalSettings: {
        maxNumberOfValues: 5,
      },
    },
    {
      universalIdentifier: INSPECTION_BATHROOM_1_PHOTOS_FIELD,
      type: FieldType.FILES,
      label: 'Bathroom 1 Photos',
      icon: 'IconPhoto',
      name: 'bathroom1Photos',
      universalSettings: {
        maxNumberOfValues: 5,
      },
    },
    {
      universalIdentifier: INSPECTION_BATHROOM_2_PHOTOS_FIELD,
      type: FieldType.FILES,
      label: 'Bathroom 2 Photos',
      icon: 'IconPhoto',
      name: 'bathroom2Photos',
      universalSettings: {
        maxNumberOfValues: 5,
      },
    },
    {
      universalIdentifier: INSPECTION_BATHROOM_3_PHOTOS_FIELD,
      type: FieldType.FILES,
      label: 'Bathroom 3 Photos',
      icon: 'IconPhoto',
      name: 'bathroom3Photos',
      universalSettings: {
        maxNumberOfValues: 5,
      },
    },
    {
      universalIdentifier: INSPECTION_BATHROOM_4_PHOTOS_FIELD,
      type: FieldType.FILES,
      label: 'Bathroom 4 Photos',
      icon: 'IconPhoto',
      name: 'bathroom4Photos',
      universalSettings: {
        maxNumberOfValues: 5,
      },
    },
    {
      universalIdentifier: INSPECTION_BATHROOM_5_PHOTOS_FIELD,
      type: FieldType.FILES,
      label: 'Bathroom 5 Photos',
      icon: 'IconPhoto',
      name: 'bathroom5Photos',
      universalSettings: {
        maxNumberOfValues: 5,
      },
    },
    {
      universalIdentifier: INSPECTION_BALCONY_1_PHOTOS_FIELD,
      type: FieldType.FILES,
      label: 'Balcony 1 Photos',
      icon: 'IconPhoto',
      name: 'balcony1Photos',
      universalSettings: {
        maxNumberOfValues: 5,
      },
    },
    {
      universalIdentifier: INSPECTION_BALCONY_2_PHOTOS_FIELD,
      type: FieldType.FILES,
      label: 'Balcony 2 Photos',
      icon: 'IconPhoto',
      name: 'balcony2Photos',
      universalSettings: {
        maxNumberOfValues: 5,
      },
    },
    {
      universalIdentifier: INSPECTION_BALCONY_3_PHOTOS_FIELD,
      type: FieldType.FILES,
      label: 'Balcony 3 Photos',
      icon: 'IconPhoto',
      name: 'balcony3Photos',
      universalSettings: {
        maxNumberOfValues: 5,
      },
    },
    {
      universalIdentifier: INSPECTION_BALCONY_4_PHOTOS_FIELD,
      type: FieldType.FILES,
      label: 'Balcony 4 Photos',
      icon: 'IconPhoto',
      name: 'balcony4Photos',
      universalSettings: {
        maxNumberOfValues: 5,
      },
    },
    {
      universalIdentifier: INSPECTION_BALCONY_5_PHOTOS_FIELD,
      type: FieldType.FILES,
      label: 'Balcony 5 Photos',
      icon: 'IconPhoto',
      name: 'balcony5Photos',
      universalSettings: {
        maxNumberOfValues: 5,
      },
    },
    {
      universalIdentifier: INSPECTION_BALCONY_VIEW_1_PHOTOS_FIELD,
      type: FieldType.FILES,
      label: 'Balcony View 1 Photos',
      icon: 'IconPhoto',
      name: 'balconyView1Photos',
      universalSettings: {
        maxNumberOfValues: 5,
      },
    },
    {
      universalIdentifier: INSPECTION_BALCONY_VIEW_2_PHOTOS_FIELD,
      type: FieldType.FILES,
      label: 'Balcony View 2 Photos',
      icon: 'IconPhoto',
      name: 'balconyView2Photos',
      universalSettings: {
        maxNumberOfValues: 5,
      },
    },
    {
      universalIdentifier: INSPECTION_BALCONY_VIEW_3_PHOTOS_FIELD,
      type: FieldType.FILES,
      label: 'Balcony View 3 Photos',
      icon: 'IconPhoto',
      name: 'balconyView3Photos',
      universalSettings: {
        maxNumberOfValues: 5,
      },
    },
    {
      universalIdentifier: INSPECTION_BALCONY_VIEW_4_PHOTOS_FIELD,
      type: FieldType.FILES,
      label: 'Balcony View 4 Photos',
      icon: 'IconPhoto',
      name: 'balconyView4Photos',
      universalSettings: {
        maxNumberOfValues: 5,
      },
    },
    {
      universalIdentifier: INSPECTION_BALCONY_VIEW_5_PHOTOS_FIELD,
      type: FieldType.FILES,
      label: 'Balcony View 5 Photos',
      icon: 'IconPhoto',
      name: 'balconyView5Photos',
      universalSettings: {
        maxNumberOfValues: 5,
      },
    },
    {
      universalIdentifier: INSPECTION_KITCHEN_PHOTOS_FIELD,
      type: FieldType.FILES,
      label: 'Kitchen Photos',
      icon: 'IconPhoto',
      name: 'kitchenPhotos',
      universalSettings: {
        maxNumberOfValues: 5,
      },
    },
    {
      universalIdentifier: INSPECTION_PARKING_PHOTOS_FIELD,
      type: FieldType.FILES,
      label: 'Parking Photos',
      icon: 'IconPhoto',
      name: 'parkingPhotos',
      universalSettings: {
        maxNumberOfValues: 5,
      },
    },
    {
      universalIdentifier: INSPECTION_KNOWN_ISSUE_1_FIELD,
      type: FieldType.SELECT,
      label: 'Known Issue 1',
      icon: 'IconAlertTriangle',
      options: [
        { id: '90253f0b-fb1e-4920-b29c-7b8764b5632f', value: KnownIssue.WALL_SEEPAGE, label: 'Wall Seepage', position: 0, color: 'red' },
        { id: '573678d1-33dc-4e44-a490-501e44bc6141', value: KnownIssue.PAINT_REQUIRED, label: 'Paint Required', position: 1, color: 'orange' },
        { id: '9fef7d74-3a4e-4746-8035-d29d59f339d6', value: KnownIssue.DEEP_CLEAN, label: 'Deep Clean', position: 2, color: 'yellow' },
        { id: 'c40a69c9-688a-4a4e-aec0-6ed62bb9c372', value: KnownIssue.ACCESS_ROAD, label: 'Access Road', position: 3, color: 'blue' },
        { id: 'fa97db1f-2a6a-4d23-a57b-44ac211e45d8', value: KnownIssue.CREMATORIUM_NEARBY, label: 'Crematorium Nearby', position: 4, color: 'gray' },
        { id: '7a2f1aaa-7883-4891-a485-01a4f9d6ff2a', value: KnownIssue.FACTORY_NEARBY, label: 'Factory Nearby', position: 5, color: 'gray' },
        { id: '67eb9cb5-5dcc-4601-9b87-76dd5a32c0e4', value: KnownIssue.COMMON_WALL, label: 'Common Wall', position: 6, color: 'purple' },
      ],
      name: 'knownIssue1',
    },
    {
      universalIdentifier: INSPECTION_KNOWN_ISSUE_2_FIELD,
      type: FieldType.SELECT,
      label: 'Known Issue 2',
      icon: 'IconAlertTriangle',
      options: [
        { id: '82bdbcf3-fede-4838-985f-d590301ce4a6', value: KnownIssue.WALL_SEEPAGE, label: 'Wall Seepage', position: 0, color: 'red' },
        { id: '78ab524c-bdf8-42da-9af4-37232cb1d2d8', value: KnownIssue.PAINT_REQUIRED, label: 'Paint Required', position: 1, color: 'orange' },
        { id: '59fba846-c296-47db-ad23-88c7280b891f', value: KnownIssue.DEEP_CLEAN, label: 'Deep Clean', position: 2, color: 'yellow' },
        { id: 'de0c5c82-5982-491d-b8e7-06e839a8e715', value: KnownIssue.ACCESS_ROAD, label: 'Access Road', position: 3, color: 'blue' },
        { id: 'ef3e4e70-86a2-4e2d-b56a-0405f1c66a44', value: KnownIssue.CREMATORIUM_NEARBY, label: 'Crematorium Nearby', position: 4, color: 'gray' },
        { id: '59d5757a-e93e-44c8-897c-25e274a658ae', value: KnownIssue.FACTORY_NEARBY, label: 'Factory Nearby', position: 5, color: 'gray' },
        { id: 'a253e552-4656-44cf-8da3-7a024234c1d5', value: KnownIssue.COMMON_WALL, label: 'Common Wall', position: 6, color: 'purple' },
      ],
      name: 'knownIssue2',
    },
    {
      universalIdentifier: INSPECTION_KNOWN_ISSUE_3_FIELD,
      type: FieldType.SELECT,
      label: 'Known Issue 3',
      icon: 'IconAlertTriangle',
      options: [
        { id: 'daad44e0-5b45-4718-aa43-aa25fa8e2b7e', value: KnownIssue.WALL_SEEPAGE, label: 'Wall Seepage', position: 0, color: 'red' },
        { id: 'bab52dac-e18b-48bf-ac01-fa8b2ef0175a', value: KnownIssue.PAINT_REQUIRED, label: 'Paint Required', position: 1, color: 'orange' },
        { id: '737ef5cf-5da4-4571-977a-1cdb8db14aac', value: KnownIssue.DEEP_CLEAN, label: 'Deep Clean', position: 2, color: 'yellow' },
        { id: '07918448-a0d7-4056-bf20-c3e35fe6a937', value: KnownIssue.ACCESS_ROAD, label: 'Access Road', position: 3, color: 'blue' },
        { id: 'd6b1b262-289b-4801-bd3b-6c588be5a48d', value: KnownIssue.CREMATORIUM_NEARBY, label: 'Crematorium Nearby', position: 4, color: 'gray' },
        { id: '94e9e14b-8754-4278-a008-238f6def730d', value: KnownIssue.FACTORY_NEARBY, label: 'Factory Nearby', position: 5, color: 'gray' },
        { id: '92e2da0d-9810-4c27-a595-8b74920e1cf0', value: KnownIssue.COMMON_WALL, label: 'Common Wall', position: 6, color: 'purple' },
      ],
      name: 'knownIssue3',
    },
    {
      universalIdentifier: INSPECTION_KNOWN_ISSUE_1_IMAGE_FIELD,
      type: FieldType.FILES,
      label: 'Known Issue 1 Image',
      icon: 'IconPhoto',
      name: 'knownIssue1Image',
      universalSettings: {
        maxNumberOfValues: 5,
      },
    },
    {
      universalIdentifier: INSPECTION_KNOWN_ISSUE_2_IMAGE_FIELD,
      type: FieldType.FILES,
      label: 'Known Issue 2 Image',
      icon: 'IconPhoto',
      name: 'knownIssue2Image',
      universalSettings: {
        maxNumberOfValues: 5,
      },
    },
    {
      universalIdentifier: INSPECTION_KNOWN_ISSUE_3_IMAGE_FIELD,
      type: FieldType.FILES,
      label: 'Known Issue 3 Image',
      icon: 'IconPhoto',
      name: 'knownIssue3Image',
      universalSettings: {
        maxNumberOfValues: 5,
      },
    },
    {
      universalIdentifier: INSPECTION_VIDEO_FIELD,
      type: FieldType.TEXT,
      label: 'Video URL',
      description: 'Walkthrough video link',
      icon: 'IconVideo',
      name: 'video',
    },
    {
      universalIdentifier: INSPECTION_ASSIGNED_TO_FIELD,
      type: FieldType.RELATION,
      label: 'Assigned To',
      icon: 'IconUser',
      name: 'assignedTo',
      relationTargetObjectMetadataUniversalIdentifier: '20202020-3319-4234-a34c-82d5c0e881a6',
      relationTargetFieldMetadataUniversalIdentifier: '81c8f1dd-3358-4961-bd0c-0172b649c021',
      universalSettings: {
        relationType: RelationType.MANY_TO_ONE,
        onDelete: OnDeleteAction.SET_NULL,
        joinColumnName: 'assignedToId',
      },
    },
    {
      universalIdentifier: INSPECTION_SCHEDULED_FIELD,
      type: FieldType.DATE_TIME,
      label: 'Scheduled',
      icon: 'IconCalendarClock',
      name: 'scheduled',
    },
    {
      universalIdentifier: INSPECTION_HOUSING_VERIFICATION_FIELD,
      type: FieldType.FILES,
      label: 'Housing Verification',
      icon: 'IconFileCheck',
      name: 'housingVerification',
      universalSettings: {
        maxNumberOfValues: 5,
      },
    },
    {
      universalIdentifier: INSPECTION_99ACRES_VERIFICATION_FIELD,
      type: FieldType.FILES,
      label: '99Acres Verification',
      icon: 'IconFileCheck',
      name: 'ninetyNineAcresVerification',
      universalSettings: {
        maxNumberOfValues: 5,
      },
    },
    {
      universalIdentifier: INSPECTION_FLOOR_PLAN_FIELD,
      type: FieldType.FILES,
      label: 'Floor Plan on Graph',
      icon: 'IconRuler',
      name: 'floorPlanOnGraph',
      universalSettings: {
        maxNumberOfValues: 5,
      },
    },
    {
      universalIdentifier: INSPECTION_COMPASS_PHOTO_FIELD,
      type: FieldType.FILES,
      label: 'Compass Photo',
      icon: 'IconCompass',
      name: 'compassPhoto',
      universalSettings: {
        maxNumberOfValues: 5,
      },
    },
    {
      universalIdentifier: INSPECTION_WIFI_SPEED_FIELD,
      type: FieldType.FILES,
      label: 'WiFi Speed Test',
      icon: 'IconWifi',
      name: 'wifiSpeed',
      universalSettings: {
        maxNumberOfValues: 5,
      },
    },
    {
      universalIdentifier: INSPECTION_LUX_METER_FIELD,
      type: FieldType.FILES,
      label: 'Lux Meter Reading',
      icon: 'IconSun',
      name: 'luxMeter',
      universalSettings: {
        maxNumberOfValues: 5,
      },
    },
    {
      universalIdentifier: INSPECTION_NOTES_FIELD,
      type: FieldType.RICH_TEXT,
      label: 'Notes',
      icon: 'IconNotes',
      name: 'notes',
    },
  ],
});

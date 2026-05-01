import { defineObject, FieldType, RelationType, OnDeleteAction } from 'twenty-sdk/define';

export const PROPERTY_CATALOGUE_UNIVERSAL_IDENTIFIER = '553bc4df-4fc8-4d6f-b582-2704c31da9e1';
export const CATALOGUE_ID_FIELD = '4d407c6b-3e45-4770-8eff-a24eb76c9bef';
export const CATALOGUE_PROPERTY_FIELD = '02cd4fb2-4f93-49aa-b797-dae0bf8e8cd1';
export const CATALOGUE_LOCATION_FIELD = '8c6e6e5b-3f1f-4dcb-a6b2-4f8fc5e4539f';
export const CATALOGUE_CATALOGUED_ON_FIELD = 'fc9a2e9d-8e57-4399-a1e1-3a0d3ed2a005';
export const CATALOGUE_CATALOGUED_BY_FIELD = 'aa7568c1-0f57-4edc-806b-77dea43f5ef9';
export const CATALOGUE_BEDROOMS_FIELD = '4dfa275c-d9d2-46ee-97e3-4151ad7dc3f6';
export const CATALOGUE_BATHROOMS_FIELD = '8517c874-60ce-4cd1-ab24-8c40debaacfd';
export const CATALOGUE_BALCONIES_FIELD = 'bbead8ee-41f1-44ab-8638-e277b85291dc';
export const CATALOGUE_PARKINGS_FIELD = '8da8a457-6874-4e9c-9e04-07bc25d5ce39';
export const CATALOGUE_DOOR_FACING_FIELD = '9dcb0a12-9fc1-4426-b7bb-a7ddbc50da05';
export const CATALOGUE_BALCONY_VIEW_1_FIELD = '8790f059-3d55-4c4a-9c90-701ec872e504';
export const CATALOGUE_BALCONY_VIEW_2_FIELD = 'c6646f5f-7e39-4785-bc5e-08f62cc837f9';
export const CATALOGUE_BALCONY_VIEW_3_FIELD = '717fbda7-d64a-4b39-bb8f-1f3e554c8e28';
export const CATALOGUE_BALCONY_VIEW_4_FIELD = '831b486e-6609-4ab4-9de3-d69254606e6c';
export const CATALOGUE_LIVING_ROOM_PHOTOS_FIELD = '0e84ed8e-eb9e-4cf8-8c51-81a1ae902eab';
export const CATALOGUE_BEDROOM_1_PHOTOS_FIELD = 'e8b3e15d-58e4-43fe-9381-53bf3e084e3e';
export const CATALOGUE_BEDROOM_2_PHOTOS_FIELD = '25da21d3-9ed5-4229-8bbf-b595a7b268a9';
export const CATALOGUE_BEDROOM_3_PHOTOS_FIELD = '312c93cf-ae3c-452d-971d-3c217e066cd8';
export const CATALOGUE_BEDROOM_4_PHOTOS_FIELD = '3089da16-e6b5-4d3d-81b5-dba94f4d9ceb';
export const CATALOGUE_BEDROOM_5_PHOTOS_FIELD = '06c29582-0c83-496e-89b3-383ef435beb6';
export const CATALOGUE_BATHROOM_1_PHOTOS_FIELD = '1681d616-404e-4678-a852-8ef64e8b75dd';
export const CATALOGUE_BATHROOM_2_PHOTOS_FIELD = '23e443bf-c715-42f3-ba74-1e00d404c49d';
export const CATALOGUE_BATHROOM_3_PHOTOS_FIELD = '52efa5dd-cd6b-461e-8d3e-76a20a2f0134';
export const CATALOGUE_BATHROOM_4_PHOTOS_FIELD = 'ba60eb51-4f8b-44e5-8dd9-349099481127';
export const CATALOGUE_BATHROOM_5_PHOTOS_FIELD = '63a59a52-a8d4-4184-9a2e-3711c708b2eb';
export const CATALOGUE_BALCONY_1_PHOTOS_FIELD = '52c65d43-9226-46c4-8fb2-39f37a678e65';
export const CATALOGUE_BALCONY_2_PHOTOS_FIELD = '0f872e47-1bfe-4fe4-8cfc-3099425639f1';
export const CATALOGUE_BALCONY_3_PHOTOS_FIELD = '5e6358f8-aeb4-402f-a291-43234972d6fd';
export const CATALOGUE_BALCONY_4_PHOTOS_FIELD = 'c9ce6d9c-6a1c-430d-a7f3-0d2cd7ac1073';
export const CATALOGUE_BALCONY_5_PHOTOS_FIELD = '882a59fc-8ea1-4b65-be2d-30d22863935a';
export const CATALOGUE_BALCONY_VIEW_1_PHOTOS_FIELD = '768daa7c-1b27-423c-84bc-4115335eeeec';
export const CATALOGUE_BALCONY_VIEW_2_PHOTOS_FIELD = '8d6915fc-a373-4d1c-8fe3-47d6072105da';
export const CATALOGUE_BALCONY_VIEW_3_PHOTOS_FIELD = 'c0aa2dee-f795-41c2-b153-d1eff8f5e055';
export const CATALOGUE_BALCONY_VIEW_4_PHOTOS_FIELD = 'b8a4c5d7-88db-4b41-a332-fd822870ee79';
export const CATALOGUE_BALCONY_VIEW_5_PHOTOS_FIELD = 'e85eb184-8eee-403d-86f8-1345ce473f96';
export const CATALOGUE_KITCHEN_PHOTOS_FIELD = '8f9657c5-d8f9-4351-8123-3d79abf0046a';
export const CATALOGUE_PARKING_PHOTOS_FIELD = '5603f615-2917-4839-8abb-31054164764b';
export const CATALOGUE_KNOWN_ISSUE_1_FIELD = '808f3e32-0320-4d1a-ba77-dd7c768b5625';
export const CATALOGUE_KNOWN_ISSUE_2_FIELD = 'f52ffebf-e35c-4c01-858e-2cd2ea832a45';
export const CATALOGUE_KNOWN_ISSUE_3_FIELD = '82581808-16cd-428b-8820-abe87969efd4';
export const CATALOGUE_KNOWN_ISSUE_1_IMAGE_FIELD = '96d0b266-3331-4186-8455-ca186b7dc12b';
export const CATALOGUE_KNOWN_ISSUE_2_IMAGE_FIELD = 'a820b04b-c99a-43be-8f83-18933405a76d';
export const CATALOGUE_KNOWN_ISSUE_3_IMAGE_FIELD = '6e067c22-ef52-493c-ba88-97c07505a057';
export const CATALOGUE_VIDEO_FIELD = 'd1be6fa9-a94c-41ca-ab6b-04989d0865a2';
export const CATALOGUE_ASSIGNED_TO_FIELD = '930cc19f-1f6f-497d-8e13-b5ac5cb4d878';
export const CATALOGUE_SCHEDULED_FIELD = '8e3b94de-ea07-4877-9b85-d7d1027bc777';
export const CATALOGUE_HOUSING_VERIFICATION_FIELD = '8ff65d6c-ec31-4c9c-a792-cee6ae00853f';
export const CATALOGUE_99ACRES_VERIFICATION_FIELD = '3778f51a-d61a-43ef-898a-daf7508a059a';
export const CATALOGUE_FLOOR_PLAN_FIELD = 'cc2fb9a4-4650-4e71-bdd0-81aed15982f8';
export const CATALOGUE_COMPASS_PHOTO_FIELD = 'e76d79e9-c8c9-4a9f-b843-c6ce93e18617';
export const CATALOGUE_WIFI_SPEED_FIELD = 'aea2d6ef-1748-4e87-bf21-69d630b65ae9';
export const CATALOGUE_LUX_METER_FIELD = '8fb9c91d-4087-47f0-b58c-f37034b22785';
export const CATALOGUE_SCORE_FIELD = '0c8d8bf3-2a58-469d-a45a-9f0abaab20c4';
export const CATALOGUE_NOTES_FIELD = '0c2766c4-f1d5-44ec-8f89-f21b219976fe';

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

enum CatalogueScore {
  A_PLUS = 'A_PLUS',
  A = 'A',
  B = 'B',
  C = 'C',
}

export default defineObject({
  universalIdentifier: PROPERTY_CATALOGUE_UNIVERSAL_IDENTIFIER,
  nameSingular: 'propertyCatalogue',
  namePlural: 'propertyCatalogues',
  labelSingular: 'Property Catalogue',
  labelPlural: 'Property Catalogues',
  description: 'Approved catalogue record for a property going live on website',
  icon: 'IconPhotoCheck',
  labelIdentifierFieldMetadataUniversalIdentifier: CATALOGUE_ID_FIELD,
  fields: [
    {
      universalIdentifier: CATALOGUE_ID_FIELD,
      type: FieldType.TEXT,
      label: 'Catalogue ID',
      description: 'Unique catalogue reference',
      icon: 'IconHash',
      name: 'catalogueId',
    },
    {
      universalIdentifier: CATALOGUE_PROPERTY_FIELD,
      type: FieldType.RELATION,
      label: 'Property',
      description: 'Property being catalogued',
      icon: 'IconHome',
      name: 'property',
      relationTargetObjectMetadataUniversalIdentifier: '32e135d0-16b0-4c08-a90f-d4505931bae0',
      relationTargetFieldMetadataUniversalIdentifier: '11a2f792-5e16-4910-898e-1bfa8e91289a',
      universalSettings: {
        relationType: RelationType.MANY_TO_ONE,
        onDelete: OnDeleteAction.SET_NULL,
        joinColumnName: 'propertyId',
      },
    },
    {
      universalIdentifier: CATALOGUE_LOCATION_FIELD,
      type: FieldType.TEXT,
      label: 'Location',
      icon: 'IconMapPin',
      name: 'location',
    },
    {
      universalIdentifier: CATALOGUE_CATALOGUED_ON_FIELD,
      type: FieldType.DATE_TIME,
      label: 'Catalogued On',
      icon: 'IconCalendar',
      name: 'cataloguedOn',
    },
    {
      universalIdentifier: CATALOGUE_CATALOGUED_BY_FIELD,
      type: FieldType.RELATION,
      label: 'Catalogued By',
      icon: 'IconUser',
      name: 'cataloguedBy',
      relationTargetObjectMetadataUniversalIdentifier: '20202020-3319-4234-a34c-82d5c0e881a6',
      relationTargetFieldMetadataUniversalIdentifier: 'a43746a1-1ec2-43a9-85ad-5ec559d09cff',
      universalSettings: {
        relationType: RelationType.MANY_TO_ONE,
        onDelete: OnDeleteAction.SET_NULL,
        joinColumnName: 'cataloguedById',
      },
    },
    {
      universalIdentifier: CATALOGUE_BEDROOMS_FIELD,
      type: FieldType.NUMBER,
      label: 'Bedrooms',
      icon: 'IconBed',
      name: 'bedrooms',
    },
    {
      universalIdentifier: CATALOGUE_BATHROOMS_FIELD,
      type: FieldType.NUMBER,
      label: 'Bathrooms',
      icon: 'IconBath',
      name: 'bathrooms',
    },
    {
      universalIdentifier: CATALOGUE_BALCONIES_FIELD,
      type: FieldType.NUMBER,
      label: 'Balconies',
      icon: 'IconWindow',
      name: 'balconies',
    },
    {
      universalIdentifier: CATALOGUE_PARKINGS_FIELD,
      type: FieldType.NUMBER,
      label: 'Parkings',
      icon: 'IconCar',
      name: 'parkings',
    },
    {
      universalIdentifier: CATALOGUE_DOOR_FACING_FIELD,
      type: FieldType.SELECT,
      label: 'Door Facing',
      icon: 'IconCompass',
      options: [
        { id: '353f3db1-f881-4161-bec6-3ce471b5cdf0', value: DoorFacing.EAST, label: 'East', position: 0, color: 'blue' },
        { id: 'c5750ac2-0e04-4157-9235-770246a15d7b', value: DoorFacing.WEST, label: 'West', position: 1, color: 'green' },
        { id: '3885fa59-d835-4284-97fe-1a9a09cde44b', value: DoorFacing.NORTH, label: 'North', position: 2, color: 'orange' },
        { id: '671cad76-5d8f-4c2a-8557-664144eeca8f', value: DoorFacing.SOUTH, label: 'South', position: 3, color: 'purple' },
        { id: '843ad7c2-31ba-4185-b0f1-a04c49fcfed6', value: DoorFacing.NORTH_EAST, label: 'North East', position: 4, color: 'yellow' },
        { id: '2b5a5542-9c80-442e-b372-2f9b2a78839c', value: DoorFacing.NORTH_WEST, label: 'North West', position: 5, color: 'red' },
        { id: '48290398-23a9-4396-810f-569268817d75', value: DoorFacing.SOUTH_EAST, label: 'South East', position: 6, color: 'gray' },
        { id: 'b07ea6af-6633-4c66-aaec-927f50f7b86a', value: DoorFacing.SOUTH_WEST, label: 'South West', position: 7, color: 'pink' },
      ],
      name: 'doorFacing',
    },
    {
      universalIdentifier: CATALOGUE_BALCONY_VIEW_1_FIELD,
      type: FieldType.SELECT,
      label: 'Balcony View 1',
      icon: 'IconEye',
      options: [
        { id: 'a318fc2f-e414-439f-ba2e-690d2efdfbca', value: BalconyView.POOL, label: 'Pool', position: 0, color: 'blue' },
        { id: '0569a599-e3be-4f21-bab2-7f68bc382646', value: BalconyView.GARDEN, label: 'Garden', position: 1, color: 'green' },
        { id: 'c00fc9dd-1c8e-422a-a441-6e72decb9073', value: BalconyView.LAKE, label: 'Lake', position: 2, color: 'orange' },
        { id: 'ea645c5d-d0a6-40d3-af5c-a0989b7b3db1', value: BalconyView.MAIN_ROAD, label: 'Main Road', position: 3, color: 'purple' },
        { id: '8e1e4ae9-3e50-4fd6-b23b-fd5cb671593c', value: BalconyView.AMENITIES, label: 'Amenities', position: 4, color: 'yellow' },
        { id: '93290da1-495f-4898-a4d8-a4cf61823184', value: BalconyView.BUILDING, label: 'Building', position: 5, color: 'red' },
        { id: '1d75fe70-e92f-4334-a4d2-716c722cd9cc', value: BalconyView.GREEN_LANDSCAPE, label: 'Green Landscape', position: 6, color: 'gray' },
      ],
      name: 'balconyView1',
    },
    {
      universalIdentifier: CATALOGUE_BALCONY_VIEW_2_FIELD,
      type: FieldType.SELECT,
      label: 'Balcony View 2',
      icon: 'IconEye',
      options: [
        { id: 'f2614309-af62-4924-951d-cd0b6e45b62c', value: BalconyView.POOL, label: 'Pool', position: 0, color: 'blue' },
        { id: 'a6f15c46-4f02-45fb-9e01-f03b0383742b', value: BalconyView.GARDEN, label: 'Garden', position: 1, color: 'green' },
        { id: '3b1d7321-9761-4203-a48f-0da3fd635e26', value: BalconyView.LAKE, label: 'Lake', position: 2, color: 'orange' },
        { id: '0ee6ccfc-5cb2-4e65-a149-fafef61960dc', value: BalconyView.MAIN_ROAD, label: 'Main Road', position: 3, color: 'purple' },
        { id: '1ff2806d-a901-4534-aed9-2574fa3f01ab', value: BalconyView.AMENITIES, label: 'Amenities', position: 4, color: 'yellow' },
        { id: '3148810c-0e7a-4d91-a5eb-9a1ba55d8ca1', value: BalconyView.BUILDING, label: 'Building', position: 5, color: 'red' },
        { id: 'ed1d5821-c01f-4a48-8de9-d463b171bf6c', value: BalconyView.GREEN_LANDSCAPE, label: 'Green Landscape', position: 6, color: 'gray' },
      ],
      name: 'balconyView2',
    },
    {
      universalIdentifier: CATALOGUE_BALCONY_VIEW_3_FIELD,
      type: FieldType.SELECT,
      label: 'Balcony View 3',
      icon: 'IconEye',
      options: [
        { id: '150a64b2-5e6e-41da-9972-b4117b046aea', value: BalconyView.POOL, label: 'Pool', position: 0, color: 'blue' },
        { id: 'd2b029ae-5ad4-4497-bbaf-619099362d99', value: BalconyView.GARDEN, label: 'Garden', position: 1, color: 'green' },
        { id: 'a44d011f-4999-44ff-b71a-7619dce55df2', value: BalconyView.LAKE, label: 'Lake', position: 2, color: 'orange' },
        { id: '4834aaf8-9242-41ce-a2a7-1e5b343b1459', value: BalconyView.MAIN_ROAD, label: 'Main Road', position: 3, color: 'purple' },
        { id: 'c4adb37e-4b43-4783-a6a1-d3452dba2136', value: BalconyView.AMENITIES, label: 'Amenities', position: 4, color: 'yellow' },
        { id: '59263feb-a8db-442c-a6f2-fce08572f100', value: BalconyView.BUILDING, label: 'Building', position: 5, color: 'red' },
        { id: '28d70ff7-308a-4441-9edc-1ddd73c60e06', value: BalconyView.GREEN_LANDSCAPE, label: 'Green Landscape', position: 6, color: 'gray' },
      ],
      name: 'balconyView3',
    },
    {
      universalIdentifier: CATALOGUE_BALCONY_VIEW_4_FIELD,
      type: FieldType.SELECT,
      label: 'Balcony View 4',
      icon: 'IconEye',
      options: [
        { id: '3e080034-608e-4975-9dc0-4cb10f8b1989', value: BalconyView.POOL, label: 'Pool', position: 0, color: 'blue' },
        { id: '1ad5bb55-8b44-4043-8b1e-68e249860e57', value: BalconyView.GARDEN, label: 'Garden', position: 1, color: 'green' },
        { id: 'b4cf1932-e239-4758-8672-7a14617ea15c', value: BalconyView.LAKE, label: 'Lake', position: 2, color: 'orange' },
        { id: '765e945f-c816-4169-9fa2-ca1e47bb3c2a', value: BalconyView.MAIN_ROAD, label: 'Main Road', position: 3, color: 'purple' },
        { id: '74d2cedf-154c-4e13-b51e-3e86555edbf8', value: BalconyView.AMENITIES, label: 'Amenities', position: 4, color: 'yellow' },
        { id: '8e517edc-6181-4b2f-9063-d806a0184595', value: BalconyView.BUILDING, label: 'Building', position: 5, color: 'red' },
        { id: '9804798a-c7c3-41bb-a5c9-3db6002069e6', value: BalconyView.GREEN_LANDSCAPE, label: 'Green Landscape', position: 6, color: 'gray' },
      ],
      name: 'balconyView4',
    },
    {
      universalIdentifier: CATALOGUE_LIVING_ROOM_PHOTOS_FIELD,
      type: FieldType.FILES,
      label: 'Living Room Photos',
      icon: 'IconPhoto',
      name: 'livingRoomPhotos',
      universalSettings: {
        maxNumberOfValues: 5,
      },
    },
    {
      universalIdentifier: CATALOGUE_BEDROOM_1_PHOTOS_FIELD,
      type: FieldType.FILES,
      label: 'Bedroom 1 Photos',
      icon: 'IconPhoto',
      name: 'bedroom1Photos',
      universalSettings: {
        maxNumberOfValues: 5,
      },
    },
    {
      universalIdentifier: CATALOGUE_BEDROOM_2_PHOTOS_FIELD,
      type: FieldType.FILES,
      label: 'Bedroom 2 Photos',
      icon: 'IconPhoto',
      name: 'bedroom2Photos',
      universalSettings: {
        maxNumberOfValues: 5,
      },
    },
    {
      universalIdentifier: CATALOGUE_BEDROOM_3_PHOTOS_FIELD,
      type: FieldType.FILES,
      label: 'Bedroom 3 Photos',
      icon: 'IconPhoto',
      name: 'bedroom3Photos',
      universalSettings: {
        maxNumberOfValues: 5,
      },
    },
    {
      universalIdentifier: CATALOGUE_BEDROOM_4_PHOTOS_FIELD,
      type: FieldType.FILES,
      label: 'Bedroom 4 Photos',
      icon: 'IconPhoto',
      name: 'bedroom4Photos',
      universalSettings: {
        maxNumberOfValues: 5,
      },
    },
    {
      universalIdentifier: CATALOGUE_BEDROOM_5_PHOTOS_FIELD,
      type: FieldType.FILES,
      label: 'Bedroom 5 Photos',
      icon: 'IconPhoto',
      name: 'bedroom5Photos',
      universalSettings: {
        maxNumberOfValues: 5,
      },
    },
    {
      universalIdentifier: CATALOGUE_BATHROOM_1_PHOTOS_FIELD,
      type: FieldType.FILES,
      label: 'Bathroom 1 Photos',
      icon: 'IconPhoto',
      name: 'bathroom1Photos',
      universalSettings: {
        maxNumberOfValues: 5,
      },
    },
    {
      universalIdentifier: CATALOGUE_BATHROOM_2_PHOTOS_FIELD,
      type: FieldType.FILES,
      label: 'Bathroom 2 Photos',
      icon: 'IconPhoto',
      name: 'bathroom2Photos',
      universalSettings: {
        maxNumberOfValues: 5,
      },
    },
    {
      universalIdentifier: CATALOGUE_BATHROOM_3_PHOTOS_FIELD,
      type: FieldType.FILES,
      label: 'Bathroom 3 Photos',
      icon: 'IconPhoto',
      name: 'bathroom3Photos',
      universalSettings: {
        maxNumberOfValues: 5,
      },
    },
    {
      universalIdentifier: CATALOGUE_BATHROOM_4_PHOTOS_FIELD,
      type: FieldType.FILES,
      label: 'Bathroom 4 Photos',
      icon: 'IconPhoto',
      name: 'bathroom4Photos',
      universalSettings: {
        maxNumberOfValues: 5,
      },
    },
    {
      universalIdentifier: CATALOGUE_BATHROOM_5_PHOTOS_FIELD,
      type: FieldType.FILES,
      label: 'Bathroom 5 Photos',
      icon: 'IconPhoto',
      name: 'bathroom5Photos',
      universalSettings: {
        maxNumberOfValues: 5,
      },
    },
    {
      universalIdentifier: CATALOGUE_BALCONY_1_PHOTOS_FIELD,
      type: FieldType.FILES,
      label: 'Balcony 1 Photos',
      icon: 'IconPhoto',
      name: 'balcony1Photos',
      universalSettings: {
        maxNumberOfValues: 5,
      },
    },
    {
      universalIdentifier: CATALOGUE_BALCONY_2_PHOTOS_FIELD,
      type: FieldType.FILES,
      label: 'Balcony 2 Photos',
      icon: 'IconPhoto',
      name: 'balcony2Photos',
      universalSettings: {
        maxNumberOfValues: 5,
      },
    },
    {
      universalIdentifier: CATALOGUE_BALCONY_3_PHOTOS_FIELD,
      type: FieldType.FILES,
      label: 'Balcony 3 Photos',
      icon: 'IconPhoto',
      name: 'balcony3Photos',
      universalSettings: {
        maxNumberOfValues: 5,
      },
    },
    {
      universalIdentifier: CATALOGUE_BALCONY_4_PHOTOS_FIELD,
      type: FieldType.FILES,
      label: 'Balcony 4 Photos',
      icon: 'IconPhoto',
      name: 'balcony4Photos',
      universalSettings: {
        maxNumberOfValues: 5,
      },
    },
    {
      universalIdentifier: CATALOGUE_BALCONY_5_PHOTOS_FIELD,
      type: FieldType.FILES,
      label: 'Balcony 5 Photos',
      icon: 'IconPhoto',
      name: 'balcony5Photos',
      universalSettings: {
        maxNumberOfValues: 5,
      },
    },
    {
      universalIdentifier: CATALOGUE_BALCONY_VIEW_1_PHOTOS_FIELD,
      type: FieldType.FILES,
      label: 'Balcony View 1 Photos',
      icon: 'IconPhoto',
      name: 'balconyView1Photos',
      universalSettings: {
        maxNumberOfValues: 5,
      },
    },
    {
      universalIdentifier: CATALOGUE_BALCONY_VIEW_2_PHOTOS_FIELD,
      type: FieldType.FILES,
      label: 'Balcony View 2 Photos',
      icon: 'IconPhoto',
      name: 'balconyView2Photos',
      universalSettings: {
        maxNumberOfValues: 5,
      },
    },
    {
      universalIdentifier: CATALOGUE_BALCONY_VIEW_3_PHOTOS_FIELD,
      type: FieldType.FILES,
      label: 'Balcony View 3 Photos',
      icon: 'IconPhoto',
      name: 'balconyView3Photos',
      universalSettings: {
        maxNumberOfValues: 5,
      },
    },
    {
      universalIdentifier: CATALOGUE_BALCONY_VIEW_4_PHOTOS_FIELD,
      type: FieldType.FILES,
      label: 'Balcony View 4 Photos',
      icon: 'IconPhoto',
      name: 'balconyView4Photos',
      universalSettings: {
        maxNumberOfValues: 5,
      },
    },
    {
      universalIdentifier: CATALOGUE_BALCONY_VIEW_5_PHOTOS_FIELD,
      type: FieldType.FILES,
      label: 'Balcony View 5 Photos',
      icon: 'IconPhoto',
      name: 'balconyView5Photos',
      universalSettings: {
        maxNumberOfValues: 5,
      },
    },
    {
      universalIdentifier: CATALOGUE_KITCHEN_PHOTOS_FIELD,
      type: FieldType.FILES,
      label: 'Kitchen Photos',
      icon: 'IconPhoto',
      name: 'kitchenPhotos',
      universalSettings: {
        maxNumberOfValues: 5,
      },
    },
    {
      universalIdentifier: CATALOGUE_PARKING_PHOTOS_FIELD,
      type: FieldType.FILES,
      label: 'Parking Photos',
      icon: 'IconPhoto',
      name: 'parkingPhotos',
      universalSettings: {
        maxNumberOfValues: 5,
      },
    },
    {
      universalIdentifier: CATALOGUE_KNOWN_ISSUE_1_FIELD,
      type: FieldType.SELECT,
      label: 'Known Issue 1',
      icon: 'IconAlertTriangle',
      options: [
        { id: 'edcb6225-ba8b-4485-a293-f1c02e90dca5', value: KnownIssue.WALL_SEEPAGE, label: 'Wall Seepage', position: 0, color: 'red' },
        { id: '64573c05-6a5d-4430-9f80-3d5056c8a1ff', value: KnownIssue.PAINT_REQUIRED, label: 'Paint Required', position: 1, color: 'orange' },
        { id: 'b7e297ac-842a-467b-a6fa-9b3f53bb44fe', value: KnownIssue.DEEP_CLEAN, label: 'Deep Clean', position: 2, color: 'yellow' },
        { id: '8df7fd86-f2f5-4dea-9936-63875b375b2e', value: KnownIssue.ACCESS_ROAD, label: 'Access Road', position: 3, color: 'blue' },
        { id: '2eba1227-b128-41be-8051-4754d88e8e85', value: KnownIssue.CREMATORIUM_NEARBY, label: 'Crematorium Nearby', position: 4, color: 'gray' },
        { id: '86e6f253-499d-4bdd-b31c-a43f0203859a', value: KnownIssue.FACTORY_NEARBY, label: 'Factory Nearby', position: 5, color: 'gray' },
        { id: '5889aea8-fabe-43b6-bd44-14a1513e0a79', value: KnownIssue.COMMON_WALL, label: 'Common Wall', position: 6, color: 'purple' },
      ],
      name: 'knownIssue1',
    },
    {
      universalIdentifier: CATALOGUE_KNOWN_ISSUE_2_FIELD,
      type: FieldType.SELECT,
      label: 'Known Issue 2',
      icon: 'IconAlertTriangle',
      options: [
        { id: '12cd964c-e1ba-4a55-a4fa-7cbd146a0030', value: KnownIssue.WALL_SEEPAGE, label: 'Wall Seepage', position: 0, color: 'red' },
        { id: '312609b5-e2a6-46d3-9056-5f4bbb3c5c15', value: KnownIssue.PAINT_REQUIRED, label: 'Paint Required', position: 1, color: 'orange' },
        { id: '06b62995-c5c2-41a2-9572-cca73dc846cb', value: KnownIssue.DEEP_CLEAN, label: 'Deep Clean', position: 2, color: 'yellow' },
        { id: '3570c1de-9404-46f8-b85a-a42939a31292', value: KnownIssue.ACCESS_ROAD, label: 'Access Road', position: 3, color: 'blue' },
        { id: 'ad736e35-0611-4b19-889b-a758d667e768', value: KnownIssue.CREMATORIUM_NEARBY, label: 'Crematorium Nearby', position: 4, color: 'gray' },
        { id: '0da3a418-cee2-442e-8f32-8214efc1610b', value: KnownIssue.FACTORY_NEARBY, label: 'Factory Nearby', position: 5, color: 'gray' },
        { id: 'eea09d79-fe15-46f1-ae70-5d12cef4c23d', value: KnownIssue.COMMON_WALL, label: 'Common Wall', position: 6, color: 'purple' },
      ],
      name: 'knownIssue2',
    },
    {
      universalIdentifier: CATALOGUE_KNOWN_ISSUE_3_FIELD,
      type: FieldType.SELECT,
      label: 'Known Issue 3',
      icon: 'IconAlertTriangle',
      options: [
        { id: 'ef767187-8eba-4726-9a25-57e1a57ef228', value: KnownIssue.WALL_SEEPAGE, label: 'Wall Seepage', position: 0, color: 'red' },
        { id: '33c21552-af8a-40df-a504-3febb77ef1f3', value: KnownIssue.PAINT_REQUIRED, label: 'Paint Required', position: 1, color: 'orange' },
        { id: '67543fb5-ecf5-4dcd-9814-c9231e04bd89', value: KnownIssue.DEEP_CLEAN, label: 'Deep Clean', position: 2, color: 'yellow' },
        { id: '173c9d71-3e4e-4fe2-ab58-45af73165c9f', value: KnownIssue.ACCESS_ROAD, label: 'Access Road', position: 3, color: 'blue' },
        { id: '4abd2431-def5-4c91-bd75-637206d8e213', value: KnownIssue.CREMATORIUM_NEARBY, label: 'Crematorium Nearby', position: 4, color: 'gray' },
        { id: 'eb478666-300f-4763-b98e-45cbae4ba34d', value: KnownIssue.FACTORY_NEARBY, label: 'Factory Nearby', position: 5, color: 'gray' },
        { id: 'b9d79dc5-ffa9-4db7-b697-dd469915a0fd', value: KnownIssue.COMMON_WALL, label: 'Common Wall', position: 6, color: 'purple' },
      ],
      name: 'knownIssue3',
    },
    {
      universalIdentifier: CATALOGUE_KNOWN_ISSUE_1_IMAGE_FIELD,
      type: FieldType.FILES,
      label: 'Known Issue 1 Image',
      icon: 'IconPhoto',
      name: 'knownIssue1Image',
      universalSettings: {
        maxNumberOfValues: 5,
      },
    },
    {
      universalIdentifier: CATALOGUE_KNOWN_ISSUE_2_IMAGE_FIELD,
      type: FieldType.FILES,
      label: 'Known Issue 2 Image',
      icon: 'IconPhoto',
      name: 'knownIssue2Image',
      universalSettings: {
        maxNumberOfValues: 5,
      },
    },
    {
      universalIdentifier: CATALOGUE_KNOWN_ISSUE_3_IMAGE_FIELD,
      type: FieldType.FILES,
      label: 'Known Issue 3 Image',
      icon: 'IconPhoto',
      name: 'knownIssue3Image',
      universalSettings: {
        maxNumberOfValues: 5,
      },
    },
    {
      universalIdentifier: CATALOGUE_VIDEO_FIELD,
      type: FieldType.TEXT,
      label: 'Video URL',
      description: 'Walkthrough video link',
      icon: 'IconVideo',
      name: 'video',
    },
    {
      universalIdentifier: CATALOGUE_ASSIGNED_TO_FIELD,
      type: FieldType.RELATION,
      label: 'Assigned To',
      icon: 'IconUser',
      name: 'assignedTo',
      relationTargetObjectMetadataUniversalIdentifier: '20202020-3319-4234-a34c-82d5c0e881a6',
      relationTargetFieldMetadataUniversalIdentifier: 'd0c48a81-a1b6-440a-8fad-4a92342e8df0',
      universalSettings: {
        relationType: RelationType.MANY_TO_ONE,
        onDelete: OnDeleteAction.SET_NULL,
        joinColumnName: 'assignedToId',
      },
    },
    {
      universalIdentifier: CATALOGUE_SCHEDULED_FIELD,
      type: FieldType.DATE_TIME,
      label: 'Scheduled',
      icon: 'IconCalendarClock',
      name: 'scheduled',
    },
    {
      universalIdentifier: CATALOGUE_HOUSING_VERIFICATION_FIELD,
      type: FieldType.FILES,
      label: 'Housing Verification',
      icon: 'IconFileCheck',
      name: 'housingVerification',
      universalSettings: {
        maxNumberOfValues: 5,
      },
    },
    {
      universalIdentifier: CATALOGUE_99ACRES_VERIFICATION_FIELD,
      type: FieldType.FILES,
      label: '99Acres Verification',
      icon: 'IconFileCheck',
      name: 'ninetyNineAcresVerification',
      universalSettings: {
        maxNumberOfValues: 5,
      },
    },
    {
      universalIdentifier: CATALOGUE_FLOOR_PLAN_FIELD,
      type: FieldType.FILES,
      label: 'Floor Plan on Graph',
      icon: 'IconRuler',
      name: 'floorPlanOnGraph',
      universalSettings: {
        maxNumberOfValues: 5,
      },
    },
    {
      universalIdentifier: CATALOGUE_COMPASS_PHOTO_FIELD,
      type: FieldType.FILES,
      label: 'Compass Photo',
      icon: 'IconCompass',
      name: 'compassPhoto',
      universalSettings: {
        maxNumberOfValues: 5,
      },
    },
    {
      universalIdentifier: CATALOGUE_WIFI_SPEED_FIELD,
      type: FieldType.FILES,
      label: 'WiFi Speed Test',
      icon: 'IconWifi',
      name: 'wifiSpeed',
      universalSettings: {
        maxNumberOfValues: 5,
      },
    },
    {
      universalIdentifier: CATALOGUE_LUX_METER_FIELD,
      type: FieldType.FILES,
      label: 'Lux Meter Reading',
      icon: 'IconSun',
      name: 'luxMeter',
      universalSettings: {
        maxNumberOfValues: 5,
      },
    },
    {
      universalIdentifier: CATALOGUE_SCORE_FIELD,
      type: FieldType.SELECT,
      label: 'Catalogue Score',
      icon: 'IconStar',
      options: [
        { id: '35425c7e-0d31-434f-af97-541e95afe01e', value: CatalogueScore.A_PLUS, label: 'A+', position: 0, color: 'green' },
        { id: '58264c83-6efe-461b-a94a-773b15ad2027', value: CatalogueScore.A, label: 'A', position: 1, color: 'blue' },
        { id: '836ea8c9-6e38-49f7-ab90-f9cc05c321c5', value: CatalogueScore.B, label: 'B', position: 2, color: 'yellow' },
        { id: '3b4cc9ca-d435-4af4-9a48-42d12a053928', value: CatalogueScore.C, label: 'C', position: 3, color: 'orange' },
      ],
      name: 'catalogueScore',
    },
    {
      universalIdentifier: CATALOGUE_NOTES_FIELD,
      type: FieldType.RICH_TEXT,
      label: 'Notes',
      icon: 'IconNotes',
      name: 'notes',
    },
  ],
});

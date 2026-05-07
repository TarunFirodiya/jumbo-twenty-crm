import { defineObject, FieldType } from 'twenty-sdk/define';

export const TOWER_UNIVERSAL_IDENTIFIER = 'b5f73e64-6f3f-4ee4-b397-899ec43d487a';
export const TOWER_NAME_FIELD = '30c3814c-3de5-411f-8b44-4bbf9ac37bd8';
export const TOWER_POSSESSION_DATE_FIELD = 'caa40860-5981-42c7-bb86-e4f375e058e8';
export const TOWER_NUMBER_OF_FLOORS_FIELD = '873c6f2d-868f-404a-9944-9e41ec5bc9f9';
export const TOWER_NUMBER_OF_UNITS_FIELD = 'f756356a-6d3f-4284-a7fa-1d658fa1b617';
export const TOWER_FACADE_IMAGES_FIELD = 'da1d9085-f2ea-4c29-9755-44444930b930';
export const TOWER_FLOOR_PLAN_IMAGES_FIELD = 'c4478837-4596-4e7a-8752-64004b4e2860';

export default defineObject({
  universalIdentifier: TOWER_UNIVERSAL_IDENTIFIER,
  nameSingular: 'tower',
  namePlural: 'towers',
  labelSingular: 'Tower',
  labelPlural: 'Towers',
  description: 'A tower or wing within a building project',
  icon: 'IconBuilding',
  labelIdentifierFieldMetadataUniversalIdentifier: TOWER_NAME_FIELD,
  fields: [
    {
      universalIdentifier: TOWER_NAME_FIELD,
      type: FieldType.TEXT,
      label: 'Tower Name',
      description: 'Name of the tower or wing',
      icon: 'IconBuilding',
      name: 'name',
    },
    {
      universalIdentifier: TOWER_POSSESSION_DATE_FIELD,
      type: FieldType.DATE,
      label: 'Possession Date',
      description: 'Expected possession or completion date for this tower',
      icon: 'IconCalendar',
      name: 'possessionDate',
    },
    {
      universalIdentifier: TOWER_NUMBER_OF_FLOORS_FIELD,
      type: FieldType.NUMBER,
      label: 'Number of Floors',
      description: 'Total number of floors in the tower',
      icon: 'IconLayers',
      name: 'numberOfFloors',
    },
    {
      universalIdentifier: TOWER_NUMBER_OF_UNITS_FIELD,
      type: FieldType.NUMBER,
      label: 'Number of Units',
      description: 'Total number of units in the tower',
      icon: 'IconHome',
      name: 'numberOfUnits',
    },
    {
      universalIdentifier: TOWER_FACADE_IMAGES_FIELD,
      type: FieldType.FILES,
      label: 'Facade Images',
      description: 'Exterior facade photos of the tower',
      icon: 'IconPhoto',
      name: 'facadeImages',
      universalSettings: {
        maxNumberOfValues: 10,
      },
    },
    {
      universalIdentifier: TOWER_FLOOR_PLAN_IMAGES_FIELD,
      type: FieldType.FILES,
      label: 'Floor Plan Images',
      description: 'Floor plan images for the tower',
      icon: 'IconPhoto',
      name: 'floorPlanImages',
      universalSettings: {
        maxNumberOfValues: 10,
      },
    },
  ],
});

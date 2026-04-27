import { defineObject, FieldType } from 'twenty-sdk/define';

enum PropertyStatus {
  NEW = 'NEW',
  LISTED = 'LISTED',
  UNDER_OFFER = 'UNDER_OFFER',
  SOLD = 'SOLD',
  WITHDRAWN = 'WITHDRAWN',
}

enum PropertyType {
  APARTMENT = 'APARTMENT',
  VILLA = 'VILLA',
  PENTHOUSE = 'PENTHOUSE',
  STUDIO = 'STUDIO',
  COMMERCIAL = 'COMMERCIAL',
}

export const PROPERTY_UNIVERSAL_IDENTIFIER = '32e135d0-16b0-4c08-a90f-d4505931bae0';
export const NAME_FIELD_UNIVERSAL_IDENTIFIER = '1ea8237c-d043-4305-a788-ccac4bddd29a';
export const ADDRESS_FIELD_UNIVERSAL_IDENTIFIER = '5d2643e9-ae70-48f4-afe7-b44f741ad44a';
export const PRICE_FIELD_UNIVERSAL_IDENTIFIER = 'd314dd63-0354-4fef-9ce4-afb58e9b93e6';
export const BEDROOMS_FIELD_UNIVERSAL_IDENTIFIER = '17b4e5dd-6ab4-48c4-beb1-7694c6d7e57f';
export const BATHROOMS_FIELD_UNIVERSAL_IDENTIFIER = '26896f45-660d-464e-9378-312639ff4d53';
export const SQFT_FIELD_UNIVERSAL_IDENTIFIER = 'ab92e8a5-ae85-40a7-a982-565d41d50d36';
export const STATUS_FIELD_UNIVERSAL_IDENTIFIER = '79b21e74-9893-4211-a933-c4bff831a03d';
export const TYPE_FIELD_UNIVERSAL_IDENTIFIER = '62dd2bc0-f87a-499f-a2ab-735e7b53c562';
export const AMENITIES_FIELD_UNIVERSAL_IDENTIFIER = '5cdc44ba-9574-4f38-8cc4-f6c1f805fafb';
export const ZONE_FIELD_UNIVERSAL_IDENTIFIER = 'b9746f33-ad4f-44c5-99dc-008ef261d91e';

export default defineObject({
  universalIdentifier: PROPERTY_UNIVERSAL_IDENTIFIER,
  nameSingular: 'property',
  namePlural: 'properties',
  labelSingular: 'Property',
  labelPlural: 'Properties',
  description: 'A real estate property listing',
  icon: 'IconHome',
  labelIdentifierFieldMetadataUniversalIdentifier: NAME_FIELD_UNIVERSAL_IDENTIFIER,
  fields: [
    {
      universalIdentifier: NAME_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.TEXT,
      label: 'Property Name',
      description: 'Display name for the property',
      icon: 'IconHome',
      name: 'name',
    },
    {
      universalIdentifier: ADDRESS_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.ADDRESS,
      label: 'Address',
      description: 'Full property address',
      icon: 'IconMapPin',
      name: 'propertyAddress',
    },
    {
      universalIdentifier: PRICE_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.CURRENCY,
      label: 'Price',
      description: 'Listing price in INR',
      icon: 'IconCurrencyRupee',
      name: 'price',
    },
    {
      universalIdentifier: BEDROOMS_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.NUMBER,
      label: 'Bedrooms',
      description: 'Number of bedrooms',
      icon: 'IconBed',
      name: 'bedrooms',
    },
    {
      universalIdentifier: BATHROOMS_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.NUMBER,
      label: 'Bathrooms',
      description: 'Number of bathrooms',
      icon: 'IconBath',
      name: 'bathrooms',
    },
    {
      universalIdentifier: SQFT_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.NUMBER,
      label: 'Square Feet',
      description: 'Property size in sq ft',
      icon: 'IconRuler',
      name: 'squareFeet',
    },
    {
      universalIdentifier: STATUS_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.SELECT,
      label: 'Status',
      icon: 'IconStatusChange',
      defaultValue: `'${PropertyStatus.NEW}'`,
      options: [
        { id: '8f03367e-8570-4c84-966e-8fd17c37b560', value: PropertyStatus.NEW, label: 'New', position: 0, color: 'blue' },
        { id: '9445fb0c-3579-4603-adfd-1699d994eec6', value: PropertyStatus.LISTED, label: 'Listed', position: 1, color: 'green' },
        { id: 'daf2f8ee-2ff1-4c18-b664-589be06ffcde', value: PropertyStatus.UNDER_OFFER, label: 'Under Offer', position: 2, color: 'orange' },
        { id: '5d6a1d05-edf1-424d-8b24-7f5a2689d796', value: PropertyStatus.SOLD, label: 'Sold', position: 3, color: 'red' },
        { id: '9b01ef5d-a9af-4339-b49e-35323d31d84b', value: PropertyStatus.WITHDRAWN, label: 'Withdrawn', position: 4, color: 'gray' },
      ],
      name: 'status',
    },
    {
      universalIdentifier: TYPE_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.SELECT,
      label: 'Property Type',
      icon: 'IconBuilding',
      defaultValue: `'${PropertyType.APARTMENT}'`,
      options: [
        { id: 'd8ac78d4-b9b7-4681-a05c-a47a8e65d2c6', value: PropertyType.APARTMENT, label: 'Apartment', position: 0, color: 'blue' },
        { id: '084cee12-fa6b-472f-a27d-7b134370ac4b', value: PropertyType.VILLA, label: 'Villa', position: 1, color: 'green' },
        { id: 'e8823bd7-061e-4f41-afef-2ebd59400d1e', value: PropertyType.PENTHOUSE, label: 'Penthouse', position: 2, color: 'purple' },
        { id: 'c6f62750-3694-4611-b1eb-15fba2db6a43', value: PropertyType.STUDIO, label: 'Studio', position: 3, color: 'yellow' },
        { id: '0b890fa3-d4c7-4953-84d9-20a5ad5b5d74', value: PropertyType.COMMERCIAL, label: 'Commercial', position: 4, color: 'gray' },
      ],
      name: 'propertyType',
    },
    {
      universalIdentifier: AMENITIES_FIELD_UNIVERSAL_IDENTIFIER,
      type: FieldType.MULTI_SELECT,
      label: 'Amenities',
      icon: 'IconPool',
      options: [
        { id: 'c6062770-2504-412a-8b90-8f9ae3bc47d0', value: 'POOL', label: 'Swimming Pool', position: 0, color: 'blue' },
        { id: '03d3eee3-a9b7-432d-a561-4f493e75d60f', value: 'GYM', label: 'Gym', position: 1, color: 'green' },
        { id: '8f9c345f-b551-499c-9940-08f0eceda468', value: 'PARKING', label: 'Parking', position: 2, color: 'orange' },
        { id: '8a1384f1-ace0-4bd3-8e8d-2d714f228ef1', value: 'SECURITY', label: '24/7 Security', position: 3, color: 'red' },
        { id: '863d1859-e4fa-4ca6-be2f-9a3cf02dbd5c', value: 'ELEVATOR', label: 'Elevator', position: 4, color: 'gray' },
      ],
      name: 'amenities',
    },
    {
      type: FieldType.FILES,
      universalIdentifier: '29d9b019-ac02-45bd-a242-81c5bb459c23',
      label: 'Photos & Documents',
      description: 'Property photos, floor plans, and KYC documents',
      icon: 'IconPhoto',
      name: 'files',
      universalSettings: {
        maxNumberOfValues: 5,
      },
    },
    {
      type: FieldType.SELECT,
      universalIdentifier: 'b9746f33-ad4f-44c5-99dc-008ef261d91e',
      label: 'Zone',
      description: 'Bangalore zone for property',
      icon: 'IconMap',
      name: 'zone',
      options: [
        { id: '051e2e43-e2ec-4c59-a883-23424b29b156', value: 'KORAMANGALA', label: 'Koramangala', position: 0, color: 'blue' },
        { id: '5b13ede6-135e-4245-951a-9ed7631f64de', value: 'INDIRANAGAR', label: 'Indiranagar', position: 1, color: 'green' },
        { id: '23af9438-d712-40ea-b46f-af7bc4df821b', value: 'WHITEFIELD', label: 'Whitefield', position: 2, color: 'orange' },
        { id: '541b8a62-c507-4699-8e5a-ca428c466925', value: 'MG_ROAD', label: 'MG Road', position: 3, color: 'purple' },
        { id: '6a10070e-5ff9-4d60-86ba-19e00fb5a377', value: 'JAYANAGAR', label: 'Jayanagar', position: 4, color: 'red' },
      ],
    },
  ],
});

import { defineField, FieldType, RelationType, OnDeleteAction } from 'twenty-sdk/define';
import { SELLER_UNIVERSAL_IDENTIFIER } from '../objects/seller.object';
import { PROPERTY_UNIVERSAL_IDENTIFIER } from '../objects/property.object';

export const PROPERTY_ON_SELLER_ID = 'e0fd1914-1ee4-4db3-aa8a-c8809cf09582';
export const SELLERS_ON_PROPERTY_ID = 'df2010dd-dafe-4156-ac90-8fbdf9a17a4a';

export default defineField({
  universalIdentifier: PROPERTY_ON_SELLER_ID,
  objectUniversalIdentifier: SELLER_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'property',
  label: 'Property',
  description: 'Linked Property listing record',
  icon: 'IconHome',
  relationTargetObjectMetadataUniversalIdentifier: PROPERTY_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: SELLERS_ON_PROPERTY_ID,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'propertyId',
  },
});

import { defineField, FieldType, RelationType, OnDeleteAction } from 'twenty-sdk/define';
import { PROPERTY_PRICE_HISTORY_UNIVERSAL_IDENTIFIER } from '../objects/property-price-history.object';
import { PROPERTY_UNIVERSAL_IDENTIFIER } from '../objects/property.object';

export const PROPERTY_ON_PRICE_HISTORY_FIELD_ID = '85e478da-87fd-4800-8c4f-ac501265d0de';
export const PRICE_HISTORIES_ON_PROPERTY_FIELD_ID = 'f1cff687-1879-4af9-afaf-c09f5a9a3e57';

export default defineField({
  universalIdentifier: PROPERTY_ON_PRICE_HISTORY_FIELD_ID,
  objectUniversalIdentifier: PROPERTY_PRICE_HISTORY_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'property',
  label: 'Property',
  description: 'Property this price history belongs to',
  icon: 'IconHome',
  relationTargetObjectMetadataUniversalIdentifier: PROPERTY_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: PRICE_HISTORIES_ON_PROPERTY_FIELD_ID,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.CASCADE,
    joinColumnName: 'propertyId',
  },
});

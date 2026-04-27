import { defineField, FieldType, RelationType, OnDeleteAction } from 'twenty-sdk/define';
import { DEAL_UNIVERSAL_IDENTIFIER } from '../objects/deal.object';
import { PROPERTY_UNIVERSAL_IDENTIFIER } from '../objects/property.object';

export const PROPERTY_ON_DEAL_ID = '13350e8c-fafe-4102-8110-c67a750d9247';
export const DEALS_ON_PROPERTY_ID = '2b0b985a-ae2f-4774-8fbf-31e9bbaa755a';

export default defineField({
  universalIdentifier: PROPERTY_ON_DEAL_ID,
  objectUniversalIdentifier: DEAL_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'property',
  label: 'Property',
  icon: 'IconHome',
  relationTargetObjectMetadataUniversalIdentifier: PROPERTY_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: DEALS_ON_PROPERTY_ID,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'propertyId',
  },
});

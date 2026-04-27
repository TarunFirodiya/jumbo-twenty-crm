import { defineField, FieldType, RelationType, OnDeleteAction, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS } from 'twenty-sdk/define';
import { DEAL_UNIVERSAL_IDENTIFIER } from '../objects/deal.object';

export const SELLER_ON_DEAL_ID = '7e256ae8-0437-47d1-b737-0877ff45504c';
export const DEALS_ON_SELLER_ID = '31d70d25-29ea-4983-8e87-504d8a4ee977';

export default defineField({
  universalIdentifier: SELLER_ON_DEAL_ID,
  objectUniversalIdentifier: DEAL_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'seller',
  label: 'Seller',
  description: 'Seller linked to this deal',
  icon: 'IconUser',
  relationTargetObjectMetadataUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.person.universalIdentifier,
  relationTargetFieldMetadataUniversalIdentifier: DEALS_ON_SELLER_ID,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'sellerId',
  },
});

import { defineField, FieldType, RelationType, OnDeleteAction, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS } from 'twenty-sdk/define';
import { DEAL_UNIVERSAL_IDENTIFIER } from '../objects/deal.object';

export const BUYER_ON_DEAL_ID = '2ad8382d-36b9-4c59-b51a-f2b71906e347';
export const DEALS_ON_BUYER_ID = 'b17b2da3-0c75-4231-b3ef-061dfddb0d4e';

export default defineField({
  universalIdentifier: BUYER_ON_DEAL_ID,
  objectUniversalIdentifier: DEAL_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'buyer',
  label: 'Buyer',
  description: 'Buyer linked to this deal',
  icon: 'IconUser',
  relationTargetObjectMetadataUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.person.universalIdentifier,
  relationTargetFieldMetadataUniversalIdentifier: DEALS_ON_BUYER_ID,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'buyerId',
  },
});

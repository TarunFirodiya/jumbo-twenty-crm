import { defineField, FieldType, RelationType, OnDeleteAction, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS } from 'twenty-sdk/define';
import { BUYER_UNIVERSAL_IDENTIFIER } from '../objects/buyer.object';

export const BUYER_ON_ENQUIRY_ID = 'd08ef384-0d3e-4ec7-b74b-9911e0074772';
export const ENQUIRIES_ON_BUYER_ID = 'd7da58d9-b21a-4323-87fc-48de5952f9a0';

const ENQUIRY_UUID = 'e718ab0c-b6d3-456c-a496-c8d588393820';

export default defineField({
  universalIdentifier: BUYER_ON_ENQUIRY_ID,
  objectUniversalIdentifier: ENQUIRY_UUID,
  type: FieldType.RELATION,
  name: 'buyer',
  label: 'Buyer',
  description: 'Buyer who made this enquiry',
  icon: 'IconUser',
  relationTargetObjectMetadataUniversalIdentifier: BUYER_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: ENQUIRIES_ON_BUYER_ID,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'buyerId',
  },
});

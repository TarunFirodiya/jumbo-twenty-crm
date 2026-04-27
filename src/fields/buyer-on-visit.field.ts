import { defineField, FieldType, RelationType, OnDeleteAction, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS } from 'twenty-sdk/define';
import { VISIT_UNIVERSAL_IDENTIFIER } from '../objects/visit.object';

export const BUYER_ON_VISIT_ID = '90d11a90-4f8a-4ae8-a3b6-9dc0d3a743b8';
export const VISITS_ON_PERSON_ID = 'f444ada6-391c-412e-8f84-f039f433bb80';

export default defineField({
  universalIdentifier: BUYER_ON_VISIT_ID,
  objectUniversalIdentifier: VISIT_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'buyer',
  label: 'Buyer',
  description: 'Buyer attending the visit',
  icon: 'IconUser',
  relationTargetObjectMetadataUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.person.universalIdentifier,
  relationTargetFieldMetadataUniversalIdentifier: VISITS_ON_PERSON_ID,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'buyerId',
  },
});

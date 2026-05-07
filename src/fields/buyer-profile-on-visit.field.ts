import { defineField, FieldType, RelationType, OnDeleteAction } from 'twenty-sdk/define';
import { BUYER_UNIVERSAL_IDENTIFIER } from '../objects/buyer.object';

const VISIT_UUID = 'fecfc310-91b3-4262-8423-b28aab3882e2';
export const VISIT_BUYER_PROFILE_ID = '3a279eb9-61e4-4406-be6b-548895105fe3';
export const BUYER_VISITS_ID = 'f441e8fb-8838-400c-8ef6-390862afe521';

export default defineField({
  universalIdentifier: VISIT_BUYER_PROFILE_ID,
  objectUniversalIdentifier: VISIT_UUID,
  type: FieldType.RELATION,
  name: 'buyerProfile',
  label: 'Buyer Profile',
  description: 'Buyer profile for this visit',
  icon: 'IconUser',
  relationTargetObjectMetadataUniversalIdentifier: BUYER_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: BUYER_VISITS_ID,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'buyerProfileId',
  },
});

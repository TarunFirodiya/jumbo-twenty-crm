import { defineField, FieldType, RelationType } from 'twenty-sdk/define';
import { BUYER_UNIVERSAL_IDENTIFIER } from '../objects/buyer.object';
import { VISIT_BUYER_PROFILE_ID, BUYER_VISITS_ID } from './buyer-profile-on-visit.field';

const VISIT_UUID = 'fecfc310-91b3-4262-8423-b28aab3882e2';

export default defineField({
  universalIdentifier: BUYER_VISITS_ID,
  objectUniversalIdentifier: BUYER_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'visits',
  label: 'Visits',
  description: 'Site visits for this buyer',
  icon: 'IconMapPin',
  relationTargetObjectMetadataUniversalIdentifier: VISIT_UUID,
  relationTargetFieldMetadataUniversalIdentifier: VISIT_BUYER_PROFILE_ID,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});

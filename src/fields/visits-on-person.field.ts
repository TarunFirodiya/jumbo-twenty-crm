import { defineField, FieldType, RelationType, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS } from 'twenty-sdk/define';
import { VISIT_UNIVERSAL_IDENTIFIER } from '../objects/visit.object';
import { BUYER_ON_VISIT_ID, VISITS_ON_PERSON_ID } from './buyer-on-visit.field';

export default defineField({
  universalIdentifier: VISITS_ON_PERSON_ID,
  objectUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.person.universalIdentifier,
  type: FieldType.RELATION,
  name: 'buyerVisits',
  label: 'Buyer Visits',
  description: 'Visits where this person is the buyer',
  icon: 'IconDoorEnter',
  relationTargetObjectMetadataUniversalIdentifier: VISIT_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: BUYER_ON_VISIT_ID,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});

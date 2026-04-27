import { defineField, FieldType, RelationType, OnDeleteAction, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS } from 'twenty-sdk/define';
import { COMMUNICATION_UNIVERSAL_IDENTIFIER } from '../objects/communication.object';

export const PERSON_ON_COMMUNICATION_ID = 'c4075763-0a4f-4e53-8713-103f6d893f34';
export const COMMUNICATIONS_ON_PERSON_ID = '285fb728-5b9f-4b57-9495-6c387e508cbd';

export default defineField({
  universalIdentifier: PERSON_ON_COMMUNICATION_ID,
  objectUniversalIdentifier: COMMUNICATION_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'person',
  label: 'Person',
  description: 'Person contacted',
  icon: 'IconUser',
  relationTargetObjectMetadataUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.person.universalIdentifier,
  relationTargetFieldMetadataUniversalIdentifier: COMMUNICATIONS_ON_PERSON_ID,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'personId',
  },
});

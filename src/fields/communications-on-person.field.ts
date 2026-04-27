import { defineField, FieldType, RelationType, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS } from 'twenty-sdk/define';
import { COMMUNICATION_UNIVERSAL_IDENTIFIER } from '../objects/communication.object';
import { PERSON_ON_COMMUNICATION_ID, COMMUNICATIONS_ON_PERSON_ID } from './person-on-communication.field';

export default defineField({
  universalIdentifier: COMMUNICATIONS_ON_PERSON_ID,
  objectUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.person.universalIdentifier,
  type: FieldType.RELATION,
  name: 'communications',
  label: 'Communications',
  description: 'Communications with this person',
  icon: 'IconPhone',
  relationTargetObjectMetadataUniversalIdentifier: COMMUNICATION_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: PERSON_ON_COMMUNICATION_ID,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});

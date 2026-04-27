import { defineField, FieldType, RelationType } from 'twenty-sdk/define';
import { COMMUNICATION_UNIVERSAL_IDENTIFIER } from '../objects/communication.object';
import { DEAL_UNIVERSAL_IDENTIFIER } from '../objects/deal.object';
import { DEAL_ON_COMMUNICATION_ID, COMMUNICATIONS_ON_DEAL_ID } from './deal-on-communication.field';

export default defineField({
  universalIdentifier: COMMUNICATIONS_ON_DEAL_ID,
  objectUniversalIdentifier: DEAL_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'communications',
  label: 'Communications',
  description: 'Communications related to this deal',
  icon: 'IconPhone',
  relationTargetObjectMetadataUniversalIdentifier: COMMUNICATION_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: DEAL_ON_COMMUNICATION_ID,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});

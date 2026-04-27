import { defineField, FieldType, RelationType, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS } from 'twenty-sdk/define';
import { BUYER_UNIVERSAL_IDENTIFIER } from '../objects/buyer.object';
import { ASSIGNED_AGENT_ON_BUYER_ID, BUYERS_ON_ASSIGNED_AGENT_ID } from './assigned-agent-on-buyer.field';

export default defineField({
  universalIdentifier: BUYERS_ON_ASSIGNED_AGENT_ID,
  objectUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.workspaceMember.universalIdentifier,
  type: FieldType.RELATION,
  name: 'assignedBuyers',
  label: 'Assigned Buyers',
  description: 'Buyers assigned to this agent',
  icon: 'IconUser',
  relationTargetObjectMetadataUniversalIdentifier: BUYER_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: ASSIGNED_AGENT_ON_BUYER_ID,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});

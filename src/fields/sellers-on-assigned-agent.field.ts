import { defineField, FieldType, RelationType, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS } from 'twenty-sdk/define';
import { SELLER_UNIVERSAL_IDENTIFIER } from '../objects/seller.object';
import { ASSIGNED_AGENT_ON_SELLER_ID, SELLERS_ON_ASSIGNED_AGENT_ID } from './assigned-agent-on-seller.field';

export default defineField({
  universalIdentifier: SELLERS_ON_ASSIGNED_AGENT_ID,
  objectUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.workspaceMember.universalIdentifier,
  type: FieldType.RELATION,
  name: 'assignedSellers',
  label: 'Assigned Sellers',
  description: 'Sellers assigned to this agent',
  icon: 'IconUserDollar',
  relationTargetObjectMetadataUniversalIdentifier: SELLER_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: ASSIGNED_AGENT_ON_SELLER_ID,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});

import { defineField, FieldType, RelationType, OnDeleteAction, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS } from 'twenty-sdk/define';
import { VISIT_UNIVERSAL_IDENTIFIER } from '../objects/visit.object';

export const VISIT_AGENT_ON_VISIT_ID = '461c1014-a770-4843-9a94-99fca9e7c002';
export const VISITS_ON_VISIT_AGENT_ID = '0a7b2104-5996-4734-9a1d-52b64a581e88';

export default defineField({
  universalIdentifier: VISIT_AGENT_ON_VISIT_ID,
  objectUniversalIdentifier: VISIT_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'visitAgent',
  label: 'Visit Agent',
  description: 'Field agent conducting the visit',
  icon: 'IconUser',
  relationTargetObjectMetadataUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.workspaceMember.universalIdentifier,
  relationTargetFieldMetadataUniversalIdentifier: VISITS_ON_VISIT_AGENT_ID,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'visitAgentId',
  },
});

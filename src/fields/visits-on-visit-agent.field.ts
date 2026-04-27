import { defineField, FieldType, RelationType, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS } from 'twenty-sdk/define';
import { VISIT_UNIVERSAL_IDENTIFIER } from '../objects/visit.object';
import { VISIT_AGENT_ON_VISIT_ID, VISITS_ON_VISIT_AGENT_ID } from './visit-agent-on-visit.field';

export default defineField({
  universalIdentifier: VISITS_ON_VISIT_AGENT_ID,
  objectUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.workspaceMember.universalIdentifier,
  type: FieldType.RELATION,
  name: 'assignedVisits',
  label: 'Assigned Visits',
  description: 'Visits assigned to this agent',
  icon: 'IconDoorEnter',
  relationTargetObjectMetadataUniversalIdentifier: VISIT_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: VISIT_AGENT_ON_VISIT_ID,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});

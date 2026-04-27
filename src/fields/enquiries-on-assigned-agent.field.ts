import { defineField, FieldType, RelationType, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS } from 'twenty-sdk/define';
import { ENQUIRY_UNIVERSAL_IDENTIFIER } from '../objects/enquiry.object';
import { ASSIGNED_AGENT_ON_ENQUIRY_ID, ENQUIRIES_ON_ASSIGNED_AGENT_ID } from './assigned-agent-on-enquiry.field';

export default defineField({
  universalIdentifier: ENQUIRIES_ON_ASSIGNED_AGENT_ID,
  objectUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.workspaceMember.universalIdentifier,
  type: FieldType.RELATION,
  name: 'assignedEnquiries',
  label: 'Assigned Enquiries',
  description: 'Enquiries assigned to this agent',
  icon: 'IconMessageCircle',
  relationTargetObjectMetadataUniversalIdentifier: ENQUIRY_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: ASSIGNED_AGENT_ON_ENQUIRY_ID,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});

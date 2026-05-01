import { defineField, FieldType, RelationType, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS } from 'twenty-sdk/define';
import { VISIT_UNIVERSAL_IDENTIFIER } from '../objects/visit.object';

export default defineField({
  universalIdentifier: 'f3156a41-cc89-425b-bb50-ce021bf94e9c',
  objectUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.workspaceMember.universalIdentifier,
  type: FieldType.RELATION,
  name: 'confirmedByVisits',
  label: 'Confirmed Visits',
  icon: 'IconDoorEnter',
  relationTargetObjectMetadataUniversalIdentifier: VISIT_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: 'a5c02986-5aff-4312-9df9-e1365b108677',
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});

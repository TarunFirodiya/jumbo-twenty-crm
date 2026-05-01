import { defineField, FieldType, RelationType, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS } from 'twenty-sdk/define';
import { VISIT_UNIVERSAL_IDENTIFIER } from '../objects/visit.object';

export default defineField({
  universalIdentifier: 'b8a013bf-f359-4254-b770-7665173db08d',
  objectUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.workspaceMember.universalIdentifier,
  type: FieldType.RELATION,
  name: 'completedByVisits',
  label: 'Completed Visits',
  icon: 'IconDoorEnter',
  relationTargetObjectMetadataUniversalIdentifier: VISIT_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: 'a00f6c67-c403-4bff-9f0e-c47013acaf00',
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});

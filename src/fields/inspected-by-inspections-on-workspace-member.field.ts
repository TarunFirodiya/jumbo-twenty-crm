import { defineField, FieldType, RelationType, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS } from 'twenty-sdk/define';

export default defineField({
  universalIdentifier: 'e95f6a0f-2f2b-4540-a086-80b42bfcb3c6',
  objectUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.workspaceMember.universalIdentifier,
  type: FieldType.RELATION,
  name: 'inspectedByInspections',
  label: 'Inspected By Inspections',
  icon: 'IconClipboardCheck',
  relationTargetObjectMetadataUniversalIdentifier: 'aeac76f4-07df-46d4-b010-a895f723086d',
  relationTargetFieldMetadataUniversalIdentifier: 'd45f67e5-a9e7-46b7-9eba-4753b7c39b36',
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});

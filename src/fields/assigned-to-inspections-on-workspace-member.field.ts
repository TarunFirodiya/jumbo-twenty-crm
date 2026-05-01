import { defineField, FieldType, RelationType, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS } from 'twenty-sdk/define';

export default defineField({
  universalIdentifier: '81c8f1dd-3358-4961-bd0c-0172b649c021',
  objectUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.workspaceMember.universalIdentifier,
  type: FieldType.RELATION,
  name: 'assignedToInspections',
  label: 'Assigned To Inspections',
  icon: 'IconClipboardCheck',
  relationTargetObjectMetadataUniversalIdentifier: 'aeac76f4-07df-46d4-b010-a895f723086d',
  relationTargetFieldMetadataUniversalIdentifier: 'd383f842-c493-451c-aee2-3cf80fc94afd',
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});

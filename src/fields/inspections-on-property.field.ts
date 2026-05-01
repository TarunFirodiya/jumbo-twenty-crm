import { defineField, FieldType, RelationType, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS } from 'twenty-sdk/define';

export default defineField({
  universalIdentifier: '970a31d0-f7f2-49a9-83e6-2def47be9074',
  objectUniversalIdentifier: '32e135d0-16b0-4c08-a90f-d4505931bae0',
  type: FieldType.RELATION,
  name: 'inspections',
  label: 'Inspections',
  icon: 'IconClipboardCheck',
  relationTargetObjectMetadataUniversalIdentifier: 'aeac76f4-07df-46d4-b010-a895f723086d',
  relationTargetFieldMetadataUniversalIdentifier: 'e2290827-4680-41c7-a412-150e17dc7ad0',
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});

import { defineField, FieldType, RelationType, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS } from 'twenty-sdk/define';

export default defineField({
  universalIdentifier: '11a2f792-5e16-4910-898e-1bfa8e91289a',
  objectUniversalIdentifier: '32e135d0-16b0-4c08-a90f-d4505931bae0',
  type: FieldType.RELATION,
  name: 'catalogues',
  label: 'Catalogues',
  icon: 'IconBook',
  relationTargetObjectMetadataUniversalIdentifier: '553bc4df-4fc8-4d6f-b582-2704c31da9e1',
  relationTargetFieldMetadataUniversalIdentifier: '02cd4fb2-4f93-49aa-b797-dae0bf8e8cd1',
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});

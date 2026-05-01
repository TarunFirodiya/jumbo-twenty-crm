import { defineField, FieldType, RelationType, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS } from 'twenty-sdk/define';

export default defineField({
  universalIdentifier: 'd0c48a81-a1b6-440a-8fad-4a92342e8df0',
  objectUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.workspaceMember.universalIdentifier,
  type: FieldType.RELATION,
  name: 'assignedToCatalogues',
  label: 'Assigned To Catalogues',
  icon: 'IconBook',
  relationTargetObjectMetadataUniversalIdentifier: '553bc4df-4fc8-4d6f-b582-2704c31da9e1',
  relationTargetFieldMetadataUniversalIdentifier: '930cc19f-1f6f-497d-8e13-b5ac5cb4d878',
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});

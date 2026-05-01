import { defineField, FieldType, RelationType, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS } from 'twenty-sdk/define';

export default defineField({
  universalIdentifier: 'a43746a1-1ec2-43a9-85ad-5ec559d09cff',
  objectUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.workspaceMember.universalIdentifier,
  type: FieldType.RELATION,
  name: 'cataloguedByCatalogues',
  label: 'Catalogued By Catalogues',
  icon: 'IconBook',
  relationTargetObjectMetadataUniversalIdentifier: '553bc4df-4fc8-4d6f-b582-2704c31da9e1',
  relationTargetFieldMetadataUniversalIdentifier: 'aa7568c1-0f57-4edc-806b-77dea43f5ef9',
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});

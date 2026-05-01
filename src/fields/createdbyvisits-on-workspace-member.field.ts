import { defineField, FieldType, RelationType, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS } from 'twenty-sdk/define';
import { VISIT_UNIVERSAL_IDENTIFIER } from '../objects/visit.object';

export default defineField({
  universalIdentifier: '23d6f138-260b-4f8a-932f-8f2519edbe3a',
  objectUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.workspaceMember.universalIdentifier,
  type: FieldType.RELATION,
  name: 'createdByVisits',
  label: 'Created Visits',
  icon: 'IconDoorEnter',
  relationTargetObjectMetadataUniversalIdentifier: VISIT_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: 'd6884f5a-bfce-4fcb-8935-154c6e19b4a3',
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});

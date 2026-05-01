import { defineField, FieldType, RelationType, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS } from 'twenty-sdk/define';
import { VISIT_UNIVERSAL_IDENTIFIER } from '../objects/visit.object';

export default defineField({
  universalIdentifier: 'a83f8415-f4aa-4397-b146-9db78e375c54',
  objectUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.workspaceMember.universalIdentifier,
  type: FieldType.RELATION,
  name: 'cancelledByVisits',
  label: 'Cancelled Visits',
  icon: 'IconDoorEnter',
  relationTargetObjectMetadataUniversalIdentifier: VISIT_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: 'b40c9fbc-97e5-4549-979d-020f63be29aa',
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});

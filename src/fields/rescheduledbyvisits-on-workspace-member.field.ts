import { defineField, FieldType, RelationType, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS } from 'twenty-sdk/define';
import { VISIT_UNIVERSAL_IDENTIFIER } from '../objects/visit.object';

export default defineField({
  universalIdentifier: '3863cc49-770f-4b71-a794-934092656324',
  objectUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.workspaceMember.universalIdentifier,
  type: FieldType.RELATION,
  name: 'rescheduledByVisits',
  label: 'Rescheduled Visits',
  icon: 'IconDoorEnter',
  relationTargetObjectMetadataUniversalIdentifier: VISIT_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: '7d018e99-1d10-4c48-8984-8151eefdb3e8',
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});

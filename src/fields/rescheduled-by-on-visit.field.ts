import { defineField, FieldType, RelationType, OnDeleteAction, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS } from 'twenty-sdk/define';
import { VISIT_UNIVERSAL_IDENTIFIER } from '../objects/visit.object';

export const RESCHEDULEDBY_ID = '7d018e99-1d10-4c48-8984-8151eefdb3e8';
export const RESCHEDULEDBY_INVERSE_ID = '3863cc49-770f-4b71-a794-934092656324';

export default defineField({
  universalIdentifier: RESCHEDULEDBY_ID,
  objectUniversalIdentifier: VISIT_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'rescheduledBy',
  label: 'Rescheduled By',
  icon: 'IconUser',
  relationTargetObjectMetadataUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.workspaceMember.universalIdentifier,
  relationTargetFieldMetadataUniversalIdentifier: '3863cc49-770f-4b71-a794-934092656324',
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'rescheduledById',
  },
});

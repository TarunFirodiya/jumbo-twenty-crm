import { defineField, FieldType, RelationType, OnDeleteAction, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS } from 'twenty-sdk/define';
import { VISIT_UNIVERSAL_IDENTIFIER } from '../objects/visit.object';

export const CANCELLEDBY_ID = 'b40c9fbc-97e5-4549-979d-020f63be29aa';
export const CANCELLEDBY_INVERSE_ID = 'a83f8415-f4aa-4397-b146-9db78e375c54';

export default defineField({
  universalIdentifier: CANCELLEDBY_ID,
  objectUniversalIdentifier: VISIT_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'cancelledBy',
  label: 'Cancelled By',
  icon: 'IconUser',
  relationTargetObjectMetadataUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.workspaceMember.universalIdentifier,
  relationTargetFieldMetadataUniversalIdentifier: 'a83f8415-f4aa-4397-b146-9db78e375c54',
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'cancelledById',
  },
});

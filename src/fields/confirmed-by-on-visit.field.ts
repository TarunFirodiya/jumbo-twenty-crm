import { defineField, FieldType, RelationType, OnDeleteAction, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS } from 'twenty-sdk/define';
import { VISIT_UNIVERSAL_IDENTIFIER } from '../objects/visit.object';

export const CONFIRMEDBY_ID = 'a5c02986-5aff-4312-9df9-e1365b108677';
export const CONFIRMEDBY_INVERSE_ID = 'f3156a41-cc89-425b-bb50-ce021bf94e9c';

export default defineField({
  universalIdentifier: CONFIRMEDBY_ID,
  objectUniversalIdentifier: VISIT_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'confirmedBy',
  label: 'Confirmed By',
  icon: 'IconUser',
  relationTargetObjectMetadataUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.workspaceMember.universalIdentifier,
  relationTargetFieldMetadataUniversalIdentifier: 'f3156a41-cc89-425b-bb50-ce021bf94e9c',
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'confirmedById',
  },
});

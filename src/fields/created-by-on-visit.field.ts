import { defineField, FieldType, RelationType, OnDeleteAction, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS } from 'twenty-sdk/define';
import { VISIT_UNIVERSAL_IDENTIFIER } from '../objects/visit.object';

export const CREATEDBY_ID = 'd6884f5a-bfce-4fcb-8935-154c6e19b4a3';
export const CREATEDBY_INVERSE_ID = '23d6f138-260b-4f8a-932f-8f2519edbe3a';

export default defineField({
  universalIdentifier: CREATEDBY_ID,
  objectUniversalIdentifier: VISIT_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'visitCreatedBy',
  label: 'Created By',
  icon: 'IconUser',
  relationTargetObjectMetadataUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.workspaceMember.universalIdentifier,
  relationTargetFieldMetadataUniversalIdentifier: '23d6f138-260b-4f8a-932f-8f2519edbe3a',
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'createdById',
  },
});

import { defineField, FieldType, RelationType, OnDeleteAction, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS } from 'twenty-sdk/define';
import { VISIT_UNIVERSAL_IDENTIFIER } from '../objects/visit.object';

export const COMPLETEDBY_ID = 'a00f6c67-c403-4bff-9f0e-c47013acaf00';
export const COMPLETEDBY_INVERSE_ID = 'b8a013bf-f359-4254-b770-7665173db08d';

export default defineField({
  universalIdentifier: COMPLETEDBY_ID,
  objectUniversalIdentifier: VISIT_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'completedBy',
  label: 'Completed By',
  icon: 'IconUser',
  relationTargetObjectMetadataUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.workspaceMember.universalIdentifier,
  relationTargetFieldMetadataUniversalIdentifier: 'b8a013bf-f359-4254-b770-7665173db08d',
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'completedById',
  },
});

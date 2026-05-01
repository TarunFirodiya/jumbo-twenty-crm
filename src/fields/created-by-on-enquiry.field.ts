import { defineField, FieldType, RelationType, OnDeleteAction, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS } from 'twenty-sdk/define';
import { ENQUIRY_UNIVERSAL_IDENTIFIER } from '../objects/enquiry.object';

export const CREATEDBY_ID = '599ee74f-2671-4ed9-81d3-c7ace4b707c4';
export const CREATEDBY_INVERSE_ID = '1accd6da-09a7-4d5e-b8e4-2ec28c873eb2';

export default defineField({
  universalIdentifier: CREATEDBY_ID,
  objectUniversalIdentifier: ENQUIRY_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'enquiryCreatedBy',
  label: 'Created By',
  icon: 'IconUser',
  relationTargetObjectMetadataUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.workspaceMember.universalIdentifier,
  relationTargetFieldMetadataUniversalIdentifier: '1accd6da-09a7-4d5e-b8e4-2ec28c873eb2',
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'createdById',
  },
});

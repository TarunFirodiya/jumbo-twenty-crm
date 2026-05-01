import { defineField, FieldType, RelationType, OnDeleteAction, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS } from 'twenty-sdk/define';
import { SELLER_UNIVERSAL_IDENTIFIER } from '../objects/seller.object';

export const RELATIONSHIPMANAGER_ID = 'de3bae4a-b4b9-4608-8185-a49b5ab6af8d';
export const RELATIONSHIPMANAGER_INVERSE_ID = 'fb7ed512-c093-4eb7-af77-f35f76307d1b';

export default defineField({
  universalIdentifier: RELATIONSHIPMANAGER_ID,
  objectUniversalIdentifier: SELLER_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'relationshipManager',
  label: 'Relationship Manager',
  icon: 'IconUser',
  relationTargetObjectMetadataUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.workspaceMember.universalIdentifier,
  relationTargetFieldMetadataUniversalIdentifier: 'fb7ed512-c093-4eb7-af77-f35f76307d1b',
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'relationshipManagerId',
  },
});

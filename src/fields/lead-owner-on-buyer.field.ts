import { defineField, FieldType, RelationType, OnDeleteAction, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS } from 'twenty-sdk/define';
import { BUYER_UNIVERSAL_IDENTIFIER } from '../objects/buyer.object';

export const LEADOWNER_ID = '212fd99b-3e26-4b2e-90c2-51bbeb8293af';
export const LEADOWNER_INVERSE_ID = 'a24798cd-2b5d-4c21-a28c-72a5a9a43816';

export default defineField({
  universalIdentifier: LEADOWNER_ID,
  objectUniversalIdentifier: BUYER_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'leadOwner',
  label: 'Lead Owner',
  icon: 'IconUser',
  relationTargetObjectMetadataUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.workspaceMember.universalIdentifier,
  relationTargetFieldMetadataUniversalIdentifier: 'a24798cd-2b5d-4c21-a28c-72a5a9a43816',
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'leadOwnerId',
  },
});

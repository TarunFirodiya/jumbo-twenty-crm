import { defineField, FieldType, RelationType, OnDeleteAction, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS } from 'twenty-sdk/define';
import { PROPERTY_UNIVERSAL_IDENTIFIER } from '../objects/property.object';

export const SUPPLYRM_ID = '1706ff2d-545b-4c69-b0fc-84cbc0f89160';
export const SUPPLYRM_INVERSE_ID = '8fbe9cd3-1dcc-4792-bc2b-b2038e4c2708';

export default defineField({
  universalIdentifier: SUPPLYRM_ID,
  objectUniversalIdentifier: PROPERTY_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'supplyRm',
  label: 'Supply RM',
  icon: 'IconUser',
  relationTargetObjectMetadataUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.workspaceMember.universalIdentifier,
  relationTargetFieldMetadataUniversalIdentifier: '8fbe9cd3-1dcc-4792-bc2b-b2038e4c2708',
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'supplyRmId',
  },
});

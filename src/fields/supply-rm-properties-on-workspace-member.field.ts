import { defineField, FieldType, RelationType, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS } from 'twenty-sdk/define';
import { PROPERTY_UNIVERSAL_IDENTIFIER } from '../objects/property.object';

export default defineField({
  universalIdentifier: '8fbe9cd3-1dcc-4792-bc2b-b2038e4c2708',
  objectUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.workspaceMember.universalIdentifier,
  type: FieldType.RELATION,
  name: 'supplyRmProperties',
  label: 'Supply RM Properties',
  icon: 'IconHome',
  relationTargetObjectMetadataUniversalIdentifier: PROPERTY_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: '1706ff2d-545b-4c69-b0fc-84cbc0f89160',
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});

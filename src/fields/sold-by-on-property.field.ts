import { defineField, FieldType, RelationType, OnDeleteAction, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS } from 'twenty-sdk/define';
import { PROPERTY_UNIVERSAL_IDENTIFIER } from '../objects/property.object';

export const SOLD_BY_ON_PROPERTY_ID = '61663784-3165-4046-9bb5-1d8be2104b18';
export const SOLD_PROPERTIES_ON_WM_ID = 'e935f105-752b-4eab-a443-3e5a21e1bb8f';

export default defineField({
  universalIdentifier: SOLD_BY_ON_PROPERTY_ID,
  objectUniversalIdentifier: PROPERTY_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'soldBy',
  label: 'Sold By',
  description: 'Agent who closed the sale',
  icon: 'IconUserStar',
  relationTargetObjectMetadataUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.workspaceMember.universalIdentifier,
  relationTargetFieldMetadataUniversalIdentifier: SOLD_PROPERTIES_ON_WM_ID,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'soldById',
  },
});

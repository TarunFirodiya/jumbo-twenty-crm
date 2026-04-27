import { defineField, FieldType, RelationType, OnDeleteAction, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS } from 'twenty-sdk/define';
import { PROPERTY_UNIVERSAL_IDENTIFIER } from '../objects/property.object';

export const ZONE_LEAD_ON_PROPERTY_ID = 'afeda09f-fcae-4a1e-b10a-dd56c7b1d235';
export const ZONE_LEAD_PROPERTIES_ON_WORKSPACE_MEMBER_ID = 'fda9371d-6dec-4a17-8ae7-cb1bed9028cf';

export default defineField({
  universalIdentifier: ZONE_LEAD_ON_PROPERTY_ID,
  objectUniversalIdentifier: PROPERTY_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'zoneLead',
  label: 'Zone Lead',
  description: 'Zone lead assigned to this property',
  icon: 'IconUser',
  relationTargetObjectMetadataUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.workspaceMember.universalIdentifier,
  relationTargetFieldMetadataUniversalIdentifier: ZONE_LEAD_PROPERTIES_ON_WORKSPACE_MEMBER_ID,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'zoneLeadId',
  },
});

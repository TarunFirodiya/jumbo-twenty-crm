import { defineField, FieldType, RelationType, OnDeleteAction } from 'twenty-sdk/define';
import { PROPERTY_UNIVERSAL_IDENTIFIER } from '../objects/property.object';
import { VISIT_UNIVERSAL_IDENTIFIER } from '../objects/visit.object';

export const PROPERTY_ON_VISIT_ID = 'e5ab50e8-29f2-42d8-b8ed-233900cf4afb';
export const VISITS_ON_PROPERTY_ID = 'c9d6a2b6-6d31-4ac1-a890-ca163e41b602';

export default defineField({
  universalIdentifier: PROPERTY_ON_VISIT_ID,
  objectUniversalIdentifier: VISIT_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'property',
  label: 'Property',
  description: 'Property being visited',
  icon: 'IconHome',
  relationTargetObjectMetadataUniversalIdentifier: PROPERTY_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: VISITS_ON_PROPERTY_ID,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'propertyId',
  },
});

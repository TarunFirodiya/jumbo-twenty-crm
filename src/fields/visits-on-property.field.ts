import { defineField, FieldType, RelationType } from 'twenty-sdk/define';
import { PROPERTY_UNIVERSAL_IDENTIFIER } from '../objects/property.object';
import { VISIT_UNIVERSAL_IDENTIFIER } from '../objects/visit.object';
import { PROPERTY_ON_VISIT_ID, VISITS_ON_PROPERTY_ID } from './property-on-visit.field';

export default defineField({
  universalIdentifier: VISITS_ON_PROPERTY_ID,
  objectUniversalIdentifier: PROPERTY_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'visits',
  label: 'Visits',
  description: 'Site visits for this property',
  icon: 'IconDoorEnter',
  relationTargetObjectMetadataUniversalIdentifier: VISIT_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: PROPERTY_ON_VISIT_ID,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});

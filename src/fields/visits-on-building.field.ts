import { defineField, FieldType, RelationType } from 'twenty-sdk/define';
import { VISIT_UNIVERSAL_IDENTIFIER } from '../objects/visit.object';
import { BUILDING_UNIVERSAL_IDENTIFIER } from '../objects/building.object';
import { BUILDING_ON_VISIT_ID, VISITS_ON_BUILDING_ID } from './building-on-visit.field';

export default defineField({
  universalIdentifier: VISITS_ON_BUILDING_ID,
  objectUniversalIdentifier: BUILDING_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'visits',
  label: 'Visits',
  description: 'Visits scheduled at this building',
  icon: 'IconEye',
  relationTargetObjectMetadataUniversalIdentifier: VISIT_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: BUILDING_ON_VISIT_ID,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
import { defineField, FieldType, RelationType } from 'twenty-sdk/define';
import { TOWER_UNIVERSAL_IDENTIFIER } from '../objects/tower.object';
import { BUILDING_UNIVERSAL_IDENTIFIER } from '../objects/building.object';
import { BUILDING_ON_TOWER_FIELD_ID, TOWERS_ON_BUILDING_FIELD_ID } from './building-on-tower.field';

export default defineField({
  universalIdentifier: TOWERS_ON_BUILDING_FIELD_ID,
  objectUniversalIdentifier: BUILDING_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'towers',
  label: 'Towers',
  description: 'Towers in this building',
  icon: 'IconBuilding',
  relationTargetObjectMetadataUniversalIdentifier: TOWER_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: BUILDING_ON_TOWER_FIELD_ID,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});

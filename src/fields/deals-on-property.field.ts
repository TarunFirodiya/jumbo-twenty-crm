import { defineField, FieldType, RelationType } from 'twenty-sdk/define';
import { PROPERTY_UNIVERSAL_IDENTIFIER } from '../objects/property.object';
import { DEAL_UNIVERSAL_IDENTIFIER } from '../objects/deal.object';
import { PROPERTY_ON_DEAL_ID, DEALS_ON_PROPERTY_ID } from './property-on-deal.field';

export default defineField({
  universalIdentifier: DEALS_ON_PROPERTY_ID,
  objectUniversalIdentifier: PROPERTY_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'deals',
  label: 'Deals',
  icon: 'IconHandCoins',
  relationTargetObjectMetadataUniversalIdentifier: DEAL_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: PROPERTY_ON_DEAL_ID,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});

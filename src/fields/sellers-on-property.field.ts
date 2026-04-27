import { defineField, FieldType, RelationType } from 'twenty-sdk/define';
import { PROPERTY_UNIVERSAL_IDENTIFIER } from '../objects/property.object';
import { SELLER_UNIVERSAL_IDENTIFIER } from '../objects/seller.object';
import { PROPERTY_ON_SELLER_ID, SELLERS_ON_PROPERTY_ID } from './property-on-seller.field';

export default defineField({
  universalIdentifier: SELLERS_ON_PROPERTY_ID,
  objectUniversalIdentifier: PROPERTY_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'sellers',
  label: 'Sellers',
  description: 'Sellers linked to this property',
  icon: 'IconUserDollar',
  relationTargetObjectMetadataUniversalIdentifier: SELLER_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: PROPERTY_ON_SELLER_ID,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});

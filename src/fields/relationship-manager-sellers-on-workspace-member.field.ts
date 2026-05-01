import { defineField, FieldType, RelationType, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS } from 'twenty-sdk/define';
import { SELLER_UNIVERSAL_IDENTIFIER } from '../objects/seller.object';

export default defineField({
  universalIdentifier: 'fb7ed512-c093-4eb7-af77-f35f76307d1b',
  objectUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.workspaceMember.universalIdentifier,
  type: FieldType.RELATION,
  name: 'relationshipManagerSellers',
  label: 'Relationship Manager Sellers',
  icon: 'IconUserDollar',
  relationTargetObjectMetadataUniversalIdentifier: SELLER_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: 'de3bae4a-b4b9-4608-8185-a49b5ab6af8d',
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});

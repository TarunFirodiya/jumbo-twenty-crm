import { defineField, FieldType, RelationType, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS } from 'twenty-sdk/define';
import { PROPERTY_UNIVERSAL_IDENTIFIER } from '../objects/property.object';

export default defineField({
  universalIdentifier: '953e4c2c-6456-4ada-89e9-e0489ab6ec42',
  objectUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.person.universalIdentifier,
  type: FieldType.RELATION,
  name: 'ownedProperties',
  label: 'Owned Properties',
  icon: 'IconHome',
  relationTargetObjectMetadataUniversalIdentifier: PROPERTY_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: 'e6b638fb-46cc-452e-b3bf-e9f87ff1f48a',
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});

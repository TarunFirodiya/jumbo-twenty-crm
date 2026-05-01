import { defineField, FieldType, RelationType } from 'twenty-sdk/define';
import { PROPERTY_UNIVERSAL_IDENTIFIER } from '../objects/property.object';
import { CLASSIFIED_LISTING_UNIVERSAL_IDENTIFIER } from '../objects/classified-listing.object';

export default defineField({
  universalIdentifier: '2a0d4ded-4bda-4ae1-ac48-746248550f8e',
  objectUniversalIdentifier: PROPERTY_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'classifiedListings',
  label: 'Classified Listings',
  icon: 'IconExternalLink',
  relationTargetObjectMetadataUniversalIdentifier: CLASSIFIED_LISTING_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: 'c82e5e05-6d05-4f69-b2fc-a7ea97c676d6',
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});

import { defineField, FieldType, RelationType, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS } from 'twenty-sdk/define';
import { BUYER_UNIVERSAL_IDENTIFIER } from '../objects/buyer.object';

export default defineField({
  universalIdentifier: 'a24798cd-2b5d-4c21-a28c-72a5a9a43816',
  objectUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.workspaceMember.universalIdentifier,
  type: FieldType.RELATION,
  name: 'leadOwnerBuyers',
  label: 'Lead Owner Buyers',
  icon: 'IconUser',
  relationTargetObjectMetadataUniversalIdentifier: BUYER_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: '212fd99b-3e26-4b2e-90c2-51bbeb8293af',
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});

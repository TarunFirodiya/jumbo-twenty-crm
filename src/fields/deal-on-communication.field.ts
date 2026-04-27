import { defineField, FieldType, RelationType, OnDeleteAction } from 'twenty-sdk/define';
import { COMMUNICATION_UNIVERSAL_IDENTIFIER } from '../objects/communication.object';
import { DEAL_UNIVERSAL_IDENTIFIER } from '../objects/deal.object';

export const DEAL_ON_COMMUNICATION_ID = 'ef277231-f45f-48e6-a475-6c35b27a774c';
export const COMMUNICATIONS_ON_DEAL_ID = 'd1c44100-6204-4e97-95ee-de524967566b';

export default defineField({
  universalIdentifier: DEAL_ON_COMMUNICATION_ID,
  objectUniversalIdentifier: COMMUNICATION_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'deal',
  label: 'Deal',
  description: 'Related deal',
  icon: 'IconHandCoins',
  relationTargetObjectMetadataUniversalIdentifier: DEAL_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: COMMUNICATIONS_ON_DEAL_ID,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'dealId',
  },
});

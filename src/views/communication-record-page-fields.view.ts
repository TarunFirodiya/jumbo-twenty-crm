import { defineView, ViewType } from 'twenty-sdk/define';
import { COMMUNICATION_UNIVERSAL_IDENTIFIER } from '../objects/communication.object';

export default defineView({
  universalIdentifier: 'eb205d09-455e-4d75-9db2-4445071b5307',
  name: 'Communication Record Page Fields',
  objectUniversalIdentifier: COMMUNICATION_UNIVERSAL_IDENTIFIER,
  type: ViewType.FIELDS_WIDGET,
  icon: 'IconList',
  isCompact: false,
  fields: [],
});

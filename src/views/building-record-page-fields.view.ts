import { defineView, ViewType } from 'twenty-sdk/define';
import { BUILDING_UNIVERSAL_IDENTIFIER } from '../objects/building.object';

export default defineView({
  universalIdentifier: '21e6c497-78c3-4495-9d6e-7e1ede0a5395',
  name: 'Building Record Page Fields',
  objectUniversalIdentifier: BUILDING_UNIVERSAL_IDENTIFIER,
  type: ViewType.FIELDS_WIDGET,
  icon: 'IconList',
  isCompact: false,
  fields: [],
});

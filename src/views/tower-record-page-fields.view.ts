import { defineView, ViewType } from 'twenty-sdk/define';
import { TOWER_UNIVERSAL_IDENTIFIER } from '../objects/tower.object';

export default defineView({
  universalIdentifier: '966bbdf3-1deb-439b-8e6c-8493526af0a4',
  name: 'Tower Record Page Fields',
  objectUniversalIdentifier: TOWER_UNIVERSAL_IDENTIFIER,
  type: ViewType.FIELDS_WIDGET,
  icon: 'IconList',
  isCompact: false,
  fields: [],
});

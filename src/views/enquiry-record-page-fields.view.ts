import { defineView, ViewType } from 'twenty-sdk/define';
import { ENQUIRY_UNIVERSAL_IDENTIFIER } from '../objects/enquiry.object';

export default defineView({
  universalIdentifier: 'e0d8a2a1-fac2-476c-b8b2-b39097783139',
  name: 'Enquiry Record Page Fields',
  objectUniversalIdentifier: ENQUIRY_UNIVERSAL_IDENTIFIER,
  type: ViewType.FIELDS_WIDGET,
  icon: 'IconList',
  isCompact: false,
  fields: [],
});

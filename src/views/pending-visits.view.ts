import { defineView, ViewType, ViewFilterOperand } from 'twenty-sdk/define';
import { VISIT_UNIVERSAL_IDENTIFIER, VISIT_STATUS_FIELD, VISIT_NAME_FIELD, VISIT_SCHEDULED_AT_FIELD } from '../objects/visit.object';
import { PROPERTY_ON_VISIT_ID } from '../fields/property-on-visit.field';

export const PENDING_VISITS_VIEW_ID = '2b3b167f-0594-43ba-9b14-5b1282785a1a';

export default defineView({
  universalIdentifier: PENDING_VISITS_VIEW_ID,
  name: 'Pending Visits',
  objectUniversalIdentifier: VISIT_UNIVERSAL_IDENTIFIER,
  type: ViewType.TABLE,
  icon: 'IconDoorEnter',
  isCompact: false,
  fields: [
    { universalIdentifier: '4e65bed5-8a5b-4df7-a7e2-1871e597f17e', fieldMetadataUniversalIdentifier: VISIT_NAME_FIELD, position: 0, isVisible: true },
    { universalIdentifier: 'ec58581d-dfd9-45d6-8cd4-ebef32fceb22', fieldMetadataUniversalIdentifier: VISIT_STATUS_FIELD, position: 1, isVisible: true },
    { universalIdentifier: 'dbda7afb-d202-47b7-9e37-736076f6c074', fieldMetadataUniversalIdentifier: VISIT_SCHEDULED_AT_FIELD, position: 2, isVisible: true },
    { universalIdentifier: '224afc83-7516-40fe-9c0d-f18959112a6d', fieldMetadataUniversalIdentifier: PROPERTY_ON_VISIT_ID, position: 3, isVisible: true },
  ],
  filters: [
    {
      universalIdentifier: '4449d120-1521-46e3-9042-ddc6f0655ff7',
      fieldMetadataUniversalIdentifier: VISIT_STATUS_FIELD,
      operand: ViewFilterOperand.IS,
      value: 'PENDING',
    },
  ],
});

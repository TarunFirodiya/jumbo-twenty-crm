import { defineView, ViewKey } from 'twenty-sdk/define';
import { VISIT_UNIVERSAL_IDENTIFIER, VISIT_NAME_FIELD, VISIT_STATUS_FIELD, VISIT_SCHEDULED_AT_FIELD } from '../objects/visit.object';
import { PROPERTY_ON_VISIT_ID } from '../fields/property-on-visit.field';
import { VISIT_AGENT_ON_VISIT_ID } from '../fields/visit-agent-on-visit.field';

export const ALL_VISITS_VIEW_ID = '99bffff7-a919-4452-ad74-c9d0ccbb94d4';

export default defineView({
  universalIdentifier: ALL_VISITS_VIEW_ID,
  name: 'All Visits',
  objectUniversalIdentifier: VISIT_UNIVERSAL_IDENTIFIER,
  key: ViewKey.INDEX,
  icon: 'IconDoorEnter',
  isCompact: false,
  fields: [
    { universalIdentifier: '3a5e6ab6-e136-48e8-957a-cad1155938f5', fieldMetadataUniversalIdentifier: VISIT_NAME_FIELD, position: 0, isVisible: true },
    { universalIdentifier: 'e3e8ee1e-5153-40c1-85ea-710a4e175bd7', fieldMetadataUniversalIdentifier: VISIT_STATUS_FIELD, position: 1, isVisible: true },
    { universalIdentifier: '04d4e64e-d10d-482f-8484-65569846c166', fieldMetadataUniversalIdentifier: VISIT_SCHEDULED_AT_FIELD, position: 2, isVisible: true },
    { universalIdentifier: '690fe2bb-5ead-4c90-9d71-145fd435f044', fieldMetadataUniversalIdentifier: PROPERTY_ON_VISIT_ID, position: 3, isVisible: true },
    { universalIdentifier: 'f58a170a-57aa-4e0e-a076-cdd495e59841', fieldMetadataUniversalIdentifier: VISIT_AGENT_ON_VISIT_ID, position: 4, isVisible: true },
  ],
});

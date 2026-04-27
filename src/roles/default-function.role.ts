import { PermissionFlag, defineRole } from 'twenty-sdk/define';
import { PROPERTY_UNIVERSAL_IDENTIFIER, ADDRESS_FIELD_UNIVERSAL_IDENTIFIER, PRICE_FIELD_UNIVERSAL_IDENTIFIER, MSP_FIELD, CARPET_AREA_FIELD } from '../objects/property.object';
import { DEAL_UNIVERSAL_IDENTIFIER, DEAL_VALUE_FIELD_UNIVERSAL_IDENTIFIER, DEAL_COUNTER_AMOUNT_FIELD, DEAL_OFFER_AMOUNT_FIELD } from '../objects/deal.object';
import { BUILDING_UNIVERSAL_IDENTIFIER } from '../objects/building.object';
import { VISIT_UNIVERSAL_IDENTIFIER } from '../objects/visit.object';

export const DEFAULT_ROLE_UNIVERSAL_IDENTIFIER = 'b648f87b-1d26-4961-b974-0908fd991061';

export default defineRole({
  universalIdentifier: DEFAULT_ROLE_UNIVERSAL_IDENTIFIER,
  label: 'Default function role',
  description: 'Default role for Jumbo Real Estate app',
  canReadAllObjectRecords: false,
  canUpdateAllObjectRecords: false,
  canSoftDeleteAllObjectRecords: false,
  canDestroyAllObjectRecords: false,
  canUpdateAllSettings: false,
  canBeAssignedToAgents: false,
  canBeAssignedToUsers: false,
  canBeAssignedToApiKeys: false,
  objectPermissions: [
    { objectUniversalIdentifier: PROPERTY_UNIVERSAL_IDENTIFIER, canReadObjectRecords: true, canUpdateObjectRecords: true, canSoftDeleteObjectRecords: false, canDestroyObjectRecords: false },
    { objectUniversalIdentifier: DEAL_UNIVERSAL_IDENTIFIER, canReadObjectRecords: true, canUpdateObjectRecords: true, canSoftDeleteObjectRecords: false, canDestroyObjectRecords: false },
    { objectUniversalIdentifier: BUILDING_UNIVERSAL_IDENTIFIER, canReadObjectRecords: true, canUpdateObjectRecords: true, canSoftDeleteObjectRecords: false, canDestroyObjectRecords: false },
    { objectUniversalIdentifier: VISIT_UNIVERSAL_IDENTIFIER, canReadObjectRecords: true, canUpdateObjectRecords: true, canSoftDeleteObjectRecords: false, canDestroyObjectRecords: false },
  ],
  fieldPermissions: [
    { objectUniversalIdentifier: PROPERTY_UNIVERSAL_IDENTIFIER, fieldUniversalIdentifier: PRICE_FIELD_UNIVERSAL_IDENTIFIER, canReadFieldValue: false, canUpdateFieldValue: false },
    { objectUniversalIdentifier: PROPERTY_UNIVERSAL_IDENTIFIER, fieldUniversalIdentifier: ADDRESS_FIELD_UNIVERSAL_IDENTIFIER, canReadFieldValue: false, canUpdateFieldValue: false },
    { objectUniversalIdentifier: PROPERTY_UNIVERSAL_IDENTIFIER, fieldUniversalIdentifier: MSP_FIELD, canReadFieldValue: false, canUpdateFieldValue: false },
    { objectUniversalIdentifier: PROPERTY_UNIVERSAL_IDENTIFIER, fieldUniversalIdentifier: CARPET_AREA_FIELD, canReadFieldValue: false, canUpdateFieldValue: false },
    { objectUniversalIdentifier: DEAL_UNIVERSAL_IDENTIFIER, fieldUniversalIdentifier: DEAL_VALUE_FIELD_UNIVERSAL_IDENTIFIER, canReadFieldValue: false, canUpdateFieldValue: false },
    { objectUniversalIdentifier: DEAL_UNIVERSAL_IDENTIFIER, fieldUniversalIdentifier: DEAL_OFFER_AMOUNT_FIELD, canReadFieldValue: false, canUpdateFieldValue: false },
    { objectUniversalIdentifier: DEAL_UNIVERSAL_IDENTIFIER, fieldUniversalIdentifier: DEAL_COUNTER_AMOUNT_FIELD, canReadFieldValue: false, canUpdateFieldValue: false },
  ],
  permissionFlags: [PermissionFlag.APPLICATIONS],
});

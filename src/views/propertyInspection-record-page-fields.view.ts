import { defineView, ViewType } from 'twenty-sdk/define';
import { PROPERTY_INSPECTION_UNIVERSAL_IDENTIFIER } from '../objects/propertyInspection.object';

export default defineView({
  universalIdentifier: 'a035cf27-29cc-40b4-8561-dbe8b534d5ad',
  name: 'Property Inspection Record Page Fields',
  objectUniversalIdentifier: PROPERTY_INSPECTION_UNIVERSAL_IDENTIFIER,
  type: ViewType.FIELDS_WIDGET,
  icon: 'IconList',
  isCompact: false,
  fields: [],
});

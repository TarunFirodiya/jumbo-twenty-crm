import { defineNavigationMenuItem, NavigationMenuItemType } from 'twenty-sdk/define';
import { PROPERTY_UNIVERSAL_IDENTIFIER } from '../objects/property.object';
import { ALL_PROPERTIES_VIEW_ID } from '../views/all-properties.view';

export const PROPERTY_NAVIGATION_MENU_ITEM_ID =
  '3b8cf983-e8e2-4546-851e-f0ebd85e4103';

export default defineNavigationMenuItem({
  universalIdentifier: PROPERTY_NAVIGATION_MENU_ITEM_ID,
  name: 'Properties',
  type: NavigationMenuItemType.OBJECT,
  position: 0,
  targetViewUniversalIdentifier: ALL_PROPERTIES_VIEW_ID,
  targetObjectUniversalIdentifier: PROPERTY_UNIVERSAL_IDENTIFIER,
  icon: 'IconHome',
});

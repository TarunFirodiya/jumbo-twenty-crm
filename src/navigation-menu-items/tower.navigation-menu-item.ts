import { defineNavigationMenuItem, NavigationMenuItemType } from 'twenty-sdk/define';
import { TOWER_UNIVERSAL_IDENTIFIER } from '../objects/tower.object';

export const TOWER_NAVIGATION_MENU_ITEM_ID = 'bbaef0a1-1cb6-46c9-a47d-ea86d8d98cd1';

export default defineNavigationMenuItem({
  universalIdentifier: TOWER_NAVIGATION_MENU_ITEM_ID,
  name: 'Towers',
  type: NavigationMenuItemType.OBJECT,
  position: 3,
  targetObjectUniversalIdentifier: TOWER_UNIVERSAL_IDENTIFIER,
  icon: 'IconBuilding',
});

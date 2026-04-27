import { defineNavigationMenuItem, NavigationMenuItemType } from 'twenty-sdk/define';
import { BUILDING_UNIVERSAL_IDENTIFIER } from '../objects/building.object';
import { ALL_BUILDINGS_VIEW_ID } from '../views/all-buildings.view';

export const BUILDING_NAVIGATION_MENU_ITEM_ID = 'ee736035-bc6d-4b58-911b-491944f38b41';

export default defineNavigationMenuItem({
  universalIdentifier: BUILDING_NAVIGATION_MENU_ITEM_ID,
  name: 'Buildings',
  type: NavigationMenuItemType.OBJECT,
  position: 2,
  targetViewUniversalIdentifier: ALL_BUILDINGS_VIEW_ID,
  targetObjectUniversalIdentifier: BUILDING_UNIVERSAL_IDENTIFIER,
  icon: 'IconBuildingSkyscraper',
});

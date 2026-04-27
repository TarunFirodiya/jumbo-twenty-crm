import { defineNavigationMenuItem, NavigationMenuItemType } from 'twenty-sdk/define';
import { VISIT_UNIVERSAL_IDENTIFIER } from '../objects/visit.object';
import { ALL_VISITS_VIEW_ID } from '../views/all-visits.view';

export const VISIT_NAVIGATION_MENU_ITEM_ID = '38924c58-ffac-4d5c-b33c-ea232949091b';

export default defineNavigationMenuItem({
  universalIdentifier: VISIT_NAVIGATION_MENU_ITEM_ID,
  name: 'Visits',
  type: NavigationMenuItemType.OBJECT,
  position: 3,
  targetViewUniversalIdentifier: ALL_VISITS_VIEW_ID,
  targetObjectUniversalIdentifier: VISIT_UNIVERSAL_IDENTIFIER,
  icon: 'IconDoorEnter',
});

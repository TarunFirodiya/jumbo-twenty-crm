import { defineNavigationMenuItem, NavigationMenuItemType } from 'twenty-sdk/define';
import { BUYER_UNIVERSAL_IDENTIFIER } from '../objects/buyer.object';
import { ALL_BUYERS_VIEW_ID } from '../views/all-buyers.view';

export const BUYER_NAVIGATION_MENU_ITEM_ID = '2296fce3-3397-40c9-a328-84e1f08aff65';

export default defineNavigationMenuItem({
  universalIdentifier: BUYER_NAVIGATION_MENU_ITEM_ID,
  name: 'Buyers',
  type: NavigationMenuItemType.OBJECT,
  position: 4,
  targetViewUniversalIdentifier: ALL_BUYERS_VIEW_ID,
  targetObjectUniversalIdentifier: BUYER_UNIVERSAL_IDENTIFIER,
  icon: 'IconUser',
});

import { defineNavigationMenuItem, NavigationMenuItemType } from 'twenty-sdk/define';
import { SELLER_UNIVERSAL_IDENTIFIER } from '../objects/seller.object';
import { ALL_SELLERS_VIEW_ID } from '../views/all-sellers.view';

export const SELLER_NAVIGATION_MENU_ITEM_ID = 'ecf0d4eb-3b8a-4bb0-b463-631cf4b69a06';

export default defineNavigationMenuItem({
  universalIdentifier: SELLER_NAVIGATION_MENU_ITEM_ID,
  name: 'Sellers',
  type: NavigationMenuItemType.OBJECT,
  position: 5,
  targetViewUniversalIdentifier: ALL_SELLERS_VIEW_ID,
  targetObjectUniversalIdentifier: SELLER_UNIVERSAL_IDENTIFIER,
  icon: 'IconUserDollar',
});

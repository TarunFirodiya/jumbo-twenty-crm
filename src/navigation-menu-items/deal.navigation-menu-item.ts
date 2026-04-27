import { defineNavigationMenuItem, NavigationMenuItemType } from 'twenty-sdk/define';
import { DEAL_UNIVERSAL_IDENTIFIER } from '../objects/deal.object';
import { ALL_DEALS_VIEW_ID } from '../views/all-deals.view';

export const DEAL_NAVIGATION_MENU_ITEM_ID =
  '6b93187c-910d-4992-b0a6-fb4e4073bde7';

export default defineNavigationMenuItem({
  universalIdentifier: DEAL_NAVIGATION_MENU_ITEM_ID,
  name: 'Deals',
  type: NavigationMenuItemType.OBJECT,
  position: 1,
  targetViewUniversalIdentifier: ALL_DEALS_VIEW_ID,
  targetObjectUniversalIdentifier: DEAL_UNIVERSAL_IDENTIFIER,
  icon: 'IconHandCoins',
});

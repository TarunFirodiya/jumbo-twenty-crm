import { defineNavigationMenuItem, NavigationMenuItemType } from 'twenty-sdk/define';
import { PROPERTY_PRICE_HISTORY_UNIVERSAL_IDENTIFIER } from '../objects/property-price-history.object';

export const PPH_NAVIGATION_MENU_ITEM_ID = '6f290cbc-4daf-4112-8d7e-ba5e10a9bead';

export default defineNavigationMenuItem({
  universalIdentifier: PPH_NAVIGATION_MENU_ITEM_ID,
  name: 'Price Histories',
  type: NavigationMenuItemType.OBJECT,
  position: 4,
  targetObjectUniversalIdentifier: PROPERTY_PRICE_HISTORY_UNIVERSAL_IDENTIFIER,
  icon: 'IconTrendingUp',
});

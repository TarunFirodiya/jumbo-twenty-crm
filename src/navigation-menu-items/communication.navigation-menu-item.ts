import { defineNavigationMenuItem, NavigationMenuItemType } from 'twenty-sdk/define';
import { COMMUNICATION_UNIVERSAL_IDENTIFIER } from '../objects/communication.object';
import { ALL_COMMUNICATIONS_VIEW_ID } from '../views/all-communications.view';

export const COMMUNICATION_NAVIGATION_MENU_ITEM_ID = '57c35a70-f32c-41ab-bb71-1241b5197bdf';

export default defineNavigationMenuItem({
  universalIdentifier: COMMUNICATION_NAVIGATION_MENU_ITEM_ID,
  name: 'Communications',
  type: NavigationMenuItemType.OBJECT,
  position: 7,
  targetViewUniversalIdentifier: ALL_COMMUNICATIONS_VIEW_ID,
  targetObjectUniversalIdentifier: COMMUNICATION_UNIVERSAL_IDENTIFIER,
  icon: 'IconPhone',
});

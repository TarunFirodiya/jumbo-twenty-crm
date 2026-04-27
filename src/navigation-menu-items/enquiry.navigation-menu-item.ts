import { defineNavigationMenuItem, NavigationMenuItemType } from 'twenty-sdk/define';
import { ENQUIRY_UNIVERSAL_IDENTIFIER } from '../objects/enquiry.object';
import { ALL_ENQUIRIES_VIEW_ID } from '../views/all-enquiries.view';

export const ENQUIRY_NAVIGATION_MENU_ITEM_ID = '644fc0de-7911-45d6-9347-60a0fe6ee5f0';

export default defineNavigationMenuItem({
  universalIdentifier: ENQUIRY_NAVIGATION_MENU_ITEM_ID,
  name: 'Enquiries',
  type: NavigationMenuItemType.OBJECT,
  position: 6,
  targetViewUniversalIdentifier: ALL_ENQUIRIES_VIEW_ID,
  targetObjectUniversalIdentifier: ENQUIRY_UNIVERSAL_IDENTIFIER,
  icon: 'IconMessageCircle',
});

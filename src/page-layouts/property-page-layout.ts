import { definePageLayout, PageLayoutTabLayoutMode } from 'twenty-sdk/define';
import { PROPERTY_UNIVERSAL_IDENTIFIER } from '../objects/property.object';

export default definePageLayout({
  universalIdentifier: 'ee966c38-2560-4421-9039-8c785af892c8',
  name: 'Default Property Layout',
  type: 'RECORD_PAGE',
  objectUniversalIdentifier: PROPERTY_UNIVERSAL_IDENTIFIER,
  tabs: [
    {
      universalIdentifier: 'e888c6b6-415f-4a4c-8d9a-64cb26d32303',
      pageLayoutUniversalIdentifier: 'ee966c38-2560-4421-9039-8c785af892c8',
      title: 'Home',
      position: 0,
      icon: 'IconHome',
      layoutMode: PageLayoutTabLayoutMode.VERTICAL_LIST,
      widgets: [
        {
          universalIdentifier: '0627c5b3-d7d6-49f3-9a3f-b1404a674dec',
          title: 'Fields',
          type: 'FIELDS',
          configuration: {
            configurationType: 'FIELDS',
            shouldAllowUserToSeeHiddenFields: true,
          },
        },
      ],
    },
    {
      universalIdentifier: '6794e7fb-767b-478a-a672-62ceda9d05a8',
      pageLayoutUniversalIdentifier: 'ee966c38-2560-4421-9039-8c785af892c8',
      title: 'Timeline',
      position: 1,
      icon: 'IconTimelineEvent',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
    },
    {
      universalIdentifier: '95dae423-0934-44a4-9700-fa3b35e38bcb',
      pageLayoutUniversalIdentifier: 'ee966c38-2560-4421-9039-8c785af892c8',
      title: 'Tasks',
      position: 2,
      icon: 'IconCheckbox',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
    },
    {
      universalIdentifier: 'ef104dc0-922b-4ec5-a48d-0ed323aa38ec',
      pageLayoutUniversalIdentifier: 'ee966c38-2560-4421-9039-8c785af892c8',
      title: 'Notes',
      position: 3,
      icon: 'IconNotes',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
    },
    {
      universalIdentifier: '25c4df2a-3f70-431e-b8f6-79ed28598456',
      pageLayoutUniversalIdentifier: 'ee966c38-2560-4421-9039-8c785af892c8',
      title: 'Files',
      position: 4,
      icon: 'IconPaperclip',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
    },
    {
      universalIdentifier: '387ddd3d-df5a-47f4-8ac3-b0c8ff23ac8e',
      pageLayoutUniversalIdentifier: 'ee966c38-2560-4421-9039-8c785af892c8',
      title: 'Emails',
      position: 5,
      icon: 'IconMail',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
    },
    {
      universalIdentifier: 'ffb5b2bc-ea64-41b3-a2ec-0fea73735837',
      pageLayoutUniversalIdentifier: 'ee966c38-2560-4421-9039-8c785af892c8',
      title: 'Calendar',
      position: 6,
      icon: 'IconCalendarEvent',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
    }
  ],
});

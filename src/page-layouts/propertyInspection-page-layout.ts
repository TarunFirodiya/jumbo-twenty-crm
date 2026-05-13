import { definePageLayout, PageLayoutTabLayoutMode } from 'twenty-sdk/define';
import { PROPERTY_INSPECTION_UNIVERSAL_IDENTIFIER } from '../objects/property-inspection.object';

export default definePageLayout({
  universalIdentifier: 'd8cf22fb-39df-48b7-bb1a-b7e622d9393a',
  name: 'Default Property Inspection Layout',
  type: 'RECORD_PAGE',
  objectUniversalIdentifier: PROPERTY_INSPECTION_UNIVERSAL_IDENTIFIER,
  tabs: [
    {
      universalIdentifier: '1fddf95d-3632-49ca-af1c-eb95d58e38a0',
      pageLayoutUniversalIdentifier: 'd8cf22fb-39df-48b7-bb1a-b7e622d9393a',
      title: 'Home',
      position: 0,
      icon: 'IconHome',
      layoutMode: PageLayoutTabLayoutMode.VERTICAL_LIST,
      widgets: [
        {
          universalIdentifier: '9e5eebd1-392c-4365-9cef-3f596efbc18b',
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
      universalIdentifier: 'd485114c-aa78-44b0-8952-fbf5ba1a8ccc',
      pageLayoutUniversalIdentifier: 'd8cf22fb-39df-48b7-bb1a-b7e622d9393a',
      title: 'Timeline',
      position: 1,
      icon: 'IconTimelineEvent',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
    },
    {
      universalIdentifier: 'af22d6fe-943a-495c-bf7b-c437c6441c4a',
      pageLayoutUniversalIdentifier: 'd8cf22fb-39df-48b7-bb1a-b7e622d9393a',
      title: 'Tasks',
      position: 2,
      icon: 'IconCheckbox',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
    },
    {
      universalIdentifier: '7f6d0097-c4d9-40c9-af50-a8037b3eff68',
      pageLayoutUniversalIdentifier: 'd8cf22fb-39df-48b7-bb1a-b7e622d9393a',
      title: 'Notes',
      position: 3,
      icon: 'IconNotes',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
    },
    {
      universalIdentifier: '9a48fd6a-660a-4cf2-b407-7279c9b06cf2',
      pageLayoutUniversalIdentifier: 'd8cf22fb-39df-48b7-bb1a-b7e622d9393a',
      title: 'Files',
      position: 4,
      icon: 'IconPaperclip',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
    },
    {
      universalIdentifier: '04956eec-e02d-4007-bddc-5d54134ddf0c',
      pageLayoutUniversalIdentifier: 'd8cf22fb-39df-48b7-bb1a-b7e622d9393a',
      title: 'Emails',
      position: 5,
      icon: 'IconMail',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
    },
    {
      universalIdentifier: '59652b9d-d714-4df2-971b-e0313d8e2b06',
      pageLayoutUniversalIdentifier: 'd8cf22fb-39df-48b7-bb1a-b7e622d9393a',
      title: 'Calendar',
      position: 6,
      icon: 'IconCalendarEvent',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
    },
  ],
});

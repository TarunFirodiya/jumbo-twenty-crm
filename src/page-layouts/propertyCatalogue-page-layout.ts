import { definePageLayout, PageLayoutTabLayoutMode } from 'twenty-sdk/define';
import { PROPERTY_CATALOGUE_UNIVERSAL_IDENTIFIER } from '../objects/property-catalogue.object';

export default definePageLayout({
  universalIdentifier: '8385b299-3b64-48ea-ab27-1c55f2fc1bba',
  name: 'Default Property Catalogue Layout',
  type: 'RECORD_PAGE',
  objectUniversalIdentifier: PROPERTY_CATALOGUE_UNIVERSAL_IDENTIFIER,
  tabs: [
    {
      universalIdentifier: '7e0694a3-b3de-4b51-b5f0-dad25b4ea5ca',
      pageLayoutUniversalIdentifier: '8385b299-3b64-48ea-ab27-1c55f2fc1bba',
      title: 'Home',
      position: 0,
      icon: 'IconHome',
      layoutMode: PageLayoutTabLayoutMode.VERTICAL_LIST,
      widgets: [
        {
          universalIdentifier: 'b1b3f332-7950-4c1f-a885-1bbad6219e28',
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
      universalIdentifier: 'f6a7f140-24d5-4dc1-ab87-16792dcca4f2',
      pageLayoutUniversalIdentifier: '8385b299-3b64-48ea-ab27-1c55f2fc1bba',
      title: 'Timeline',
      position: 1,
      icon: 'IconTimelineEvent',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
    },
    {
      universalIdentifier: '6dee000b-af0c-4149-b041-d16342ea00c6',
      pageLayoutUniversalIdentifier: '8385b299-3b64-48ea-ab27-1c55f2fc1bba',
      title: 'Tasks',
      position: 2,
      icon: 'IconCheckbox',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
    },
    {
      universalIdentifier: 'e0981a3a-c232-40c7-ad6b-a2211114744d',
      pageLayoutUniversalIdentifier: '8385b299-3b64-48ea-ab27-1c55f2fc1bba',
      title: 'Notes',
      position: 3,
      icon: 'IconNotes',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
    },
    {
      universalIdentifier: 'b7634259-1216-40da-a2b8-f4072fce579c',
      pageLayoutUniversalIdentifier: '8385b299-3b64-48ea-ab27-1c55f2fc1bba',
      title: 'Files',
      position: 4,
      icon: 'IconPaperclip',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
    },
    {
      universalIdentifier: '5a2eead8-3ddc-4f5e-8a26-93995c163797',
      pageLayoutUniversalIdentifier: '8385b299-3b64-48ea-ab27-1c55f2fc1bba',
      title: 'Emails',
      position: 5,
      icon: 'IconMail',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
    },
    {
      universalIdentifier: '620cb504-0a8f-423a-a56b-d09193dc64f4',
      pageLayoutUniversalIdentifier: '8385b299-3b64-48ea-ab27-1c55f2fc1bba',
      title: 'Calendar',
      position: 6,
      icon: 'IconCalendarEvent',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
    },
  ],
});

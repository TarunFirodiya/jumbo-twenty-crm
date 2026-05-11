import { definePageLayout, PageLayoutTabLayoutMode } from 'twenty-sdk/define';
import { PROPERTY_UNIVERSAL_IDENTIFIER } from '../objects/property.object';

export default definePageLayout({
  universalIdentifier: '5d42b244-b5eb-48ad-a881-f637e56a5de1',
  name: 'Default Property Layout',
  type: 'RECORD_PAGE',
  objectUniversalIdentifier: PROPERTY_UNIVERSAL_IDENTIFIER,
  tabs: [
    {
      universalIdentifier: '6af18e1a-4c2a-415b-8af5-3291d391e851',
      pageLayoutUniversalIdentifier: '5d42b244-b5eb-48ad-a881-f637e56a5de1',
      title: 'Home',
      position: 0,
      icon: 'IconHome',
      layoutMode: PageLayoutTabLayoutMode.VERTICAL_LIST,
      widgets: [
        {
          universalIdentifier: '877efc34-afec-4a33-a2dd-8fea4b50c7a3',
          title: 'Fields',
          type: 'FIELDS',
          configuration: {
            configurationType: 'FIELDS',
            shouldAllowUserToSeeHiddenFields: true,
          },
        },
      ],
    },
  ],
});

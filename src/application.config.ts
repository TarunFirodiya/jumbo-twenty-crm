import { defineApplication } from 'twenty-sdk/define';
import { DEFAULT_ROLE_UNIVERSAL_IDENTIFIER } from './roles/default-function.role';

export const APPLICATION_UNIVERSAL_IDENTIFIER =
  '2b178109-9d3a-4416-8227-d12e1eacf72a';

export default defineApplication({
  universalIdentifier: APPLICATION_UNIVERSAL_IDENTIFIER,
  displayName: 'Jumbo Real Estate',
  description: 'Real estate CRM for Jumbo Homes — properties, deals, and sellers',
  icon: 'IconBuildingSkyscraper',
  applicationVariables: {
    DEFAULT_CURRENCY: {
      universalIdentifier: 'var-001-currency-1234-567890abcdef',
      description: 'Default currency for property prices',
      value: 'INR',
      isSecret: false,
    },
  },
  serverVariables: {
    WEBHOOK_SECRET: {
      description: 'Secret for incoming lead webhooks',
      isSecret: true,
      isRequired: false,
    },
  },
  defaultRoleUniversalIdentifier: DEFAULT_ROLE_UNIVERSAL_IDENTIFIER,
});

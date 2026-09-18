import { PLUGIN_OPERATIONS, DIRECT_PLUGIN } from '@openedx/frontend-plugin-framework';
import { ExtendedProfileFields } from '@edunext/frontend-component-extended-fields';

// Load environment variables from .env file
const config = {
  ...process.env,
  pluginSlots: {
    'org.openedx.frontend.account.additional_profile_fields.v1': {
      plugins: [
        {
          op: PLUGIN_OPERATIONS.Insert,
          widget: {
            id: 'extended_account_fields',
            type: DIRECT_PLUGIN,
        RenderWidget: ExtendedProfileFields,
          },
        },
      ],
    },
  },
};

export default config;

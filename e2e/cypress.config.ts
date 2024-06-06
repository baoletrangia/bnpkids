import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run bpkids:serve:development',
        production: 'nx run bpkids:serve:production',
      },
      ciWebServerCommand: 'nx run bpkids:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});

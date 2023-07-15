import { defineConfig } from "cypress";
import ReportZipper = require("./cypress/ReportZipper");
const fs = require('fs');
const path = require('path');
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Todoist E2E Tests',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      on('before:run', async (details) => {
        console.log('override before:run');
        await beforeRunHook(details);
      });

      on('after:run', async () => {
        console.log('override after:run');
        await afterRunHook();
        await ReportZipper.zipReport(config.env.TEST_REPORT_NAME_PREFIX);
      });
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}'
  },
  watchForFileChanges: false,
  defaultCommandTimeout: 20000,
});

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseURL: 'http://car-hire.test/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports/html',
    overwrite: false,
    html: false,
    json: true
  },
});

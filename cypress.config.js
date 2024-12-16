const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "mjuk27",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // grava vídeos dos testes realizados
    video: true,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: true,
      json: false,
      timestamp: 'mmddyyyy_HHMMss'
    },
  },
});

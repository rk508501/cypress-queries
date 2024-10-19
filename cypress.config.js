const { defineConfig } = require("cypress");
const fs = require('fs');
const path = require('path');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        logAbsolutePaths() {
          const folderToSearch = path.join(config.projectRoot, 'cypress', 'integration');

          const files = fs.readdirSync(folderToSearch);
          const specFiles = files.filter(file => file.endsWith('.spec.js'));
          const absolutePaths = specFiles.map(file => path.resolve(folderToSearch, file));

          // Log to terminal using console.log
          console.log('Absolute Paths:', absolutePaths);

          // Return null to signal task completion
          return null;
        }
      });
    },
  },
});

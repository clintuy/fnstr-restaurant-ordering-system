import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:8100",
    specPattern: "cypress/e2e/**/*.spec.ts", // <-- add this line
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

import { defineConfig } from "cypress";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.cy.js",
    baseUrl: "https://www.saucedemo.com",

    setupNodeEvents(on, config) {
      config.env.username = process.env.STANDARD_USER_NAME;
      config.env.password = process.env.STANDARD_USER_PASS;

      return config;
    },
  },
});
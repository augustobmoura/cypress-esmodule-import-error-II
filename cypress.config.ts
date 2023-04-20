import { defineConfig } from "cypress";

console.log("loaded");

import msg from "./foo.mjs";

console.log("post import");

console.log(msg)

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

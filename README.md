# Restaurant Ordering System

This is a restaurant ordering system built with Ionic and React.  

---

## Prerequisites

- **Node.js**: Use **Node Version Manager (nvm)** to ensure Node.js version **v20.x.x**.  
  Example to use nvm:

```bash
nvm install 20
nvm use 20
```


## Getting Started

- React JS
- Ionic Framework
- Redux Toolkit

First, install the dependecies;

```bash
npm install
```

Run the app:

```bash
ionic serve
```

## Project Structure

- src/ – Application source code
- cypress/ – End-to-end tests
- public/ – Static files
- package.json – Project dependencies and scripts

## Unit testing guide

- Make sure the port you are using matches the one in cypress.config.ts
- Example configuration:
```bash
export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:8100",
    specPattern: "cypress/e2e/**/*.spec.ts",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
```
To run unit test
```bash
npm run test.e2e
```


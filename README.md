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

---
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
---
## Project Structure

- src/ – Application source code
- cypress/ – End-to-end tests
- public/ – Static files
- package.json – Project dependencies and scripts
---
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
Sometimes the testing will fail due to timeout of the – https://world.openfoodfacts.org/data

```bash
npm run test.e2e
```
---
## Limitations

**Data/API**
- No real backend → cannot handle multiple simultaneous users.
- Limited menu dataset -> large-scale menu or dynamic updates are not supported.
- API call delays might cause slight lag in loading menu items; currently handled with simple loading states or timeouts.

**Cart and Add-ons**
- Add-ons are limited to predefined options; cannot dynamically fetch new add-ons from a serve
- Add-ons prices are static; any price changes require code changes.
- Cart data is stored in Redux only, not persisted in local storage or backend, so refreshing the page resets the cart.
- Complex rules like discounts, promotions, or stock tracking are not implemented.

**Checkout**
- Service charge is a fixed 10%; no configurable tax rates or dynamic discounts.
- Receipts are generated locally; no PDF export, printing, or backend storage.
- No integration with payment gateways; checkout is simulated only.

**UI / Responsiveness**
- If Ionic is not used, the UI may be basic and desktop-oriented.
- Mobile responsiveness is limited unless Ionic Grid or CSS media queries are applied.
- Accessibility features (keyboard navigation, screen readers) are minimal or not fully tested.

**Testing**
- Only minimal unit and component tests are included.

**Performance**
- State updates are handled via Redux; for a large menu with many items, rerenders may cause slight performance degradation.

**Security**
- No authentication or user accounts; anyone can add/remove items.


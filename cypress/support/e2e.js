// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

//handles front-end known exceptions on log in page

Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes('Invalid reCAPTCHA client id')) {
    return false; // Ignore reCAPTCHA error
  }
});

Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes("Cannot set properties of null")) {
    return false; // Ignore null property error
  }
});

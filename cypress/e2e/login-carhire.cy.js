Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes('Invalid reCAPTCHA client id')) {
    return false; // Prevent test from failing on reCAPTCHA error
  }
});

Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes("Cannot set properties of null")) {
    return false; // Prevent Cypress from failing the test
  }
});

describe('logs in the admin user and asserts if they landed on the dashboard', () => {
 it('passes', () => {
  //access data from the user_data.json file. 
    cy.fixture('user_data').then((data)=>{
    const admin = data.admin; 
    cy.visit('http://car-hire.test/login') //navigates to the log in page.
    cy.get('#email').type(admin.email)  //navigates to email and types email address.
    cy.get('#password').type(admin.password)   //navigates to password and types password. 
    cy.get('#dashboard-login-form > button').click() //clicks the submit button.
    
    //asserts if the user redirected to the dashboard. 

    cy.url().should("include","/dashboard"); 
    });
  });
});
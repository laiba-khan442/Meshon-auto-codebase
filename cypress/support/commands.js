// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


//---------------------! Actual File starts !-----------------------------

//This command logs the user in as admin "loginAsAdmin"
Cypress.Commands.add('loginAsAdmin', () => {
  cy.fixture('user_data').then((data) => {
    const admin = data.admin;
    cy.visit('http://car-hire.test/login');
    cy.get('#email').type(admin.email);
    cy.get('#password').type(admin.password);
    cy.get('#dashboard-login-form > button').click();
  });
});

//generates a random number. 
Cypress.Commands.add('GenerateRandNum', ()=> {
     function getRandomIntegerUpTo(max) {
        return Math.floor(Math.random() * max);}
    getRandomIntegerUpTo(100); // Generates a random integer between 0 and 100
})


//gets today's date
Cypress.Commands.add('todaysDate', (separator = '-')=>{
  
    const today = new Date(); 
    let dd = today.getDate(); 
    let mm = today.getMonth() + 1; 
    let yyyy = today.getFullYear(); 
    if (dd<10){dd = `0${dd}`; };
    if (mm<10){mm = `0${mm}`; };

    return `${dd}${separator}${mm}${separator}${yyyy}`; 
});
   


//gets tomorrows date 
Cypress.Commands.add('tomorrowsDate',(separator = '-')=>{
    const tomorrow = new Date(); 
    tomorrow.setDate(tomorrow.getDate()+1);
    let dd = tomorrow.getDate(); 
    let mm = tomorrow.getMonth() + 1; 
    let yyyy = tomorrow.getFullYear(); 
    if (dd<10){dd = `0${dd}`; };
     if (mm<10){mm = `0${mm}`; };
     
    return `${dd}${separator}${mm}${separator}${yyyy}`; 
  }
); 
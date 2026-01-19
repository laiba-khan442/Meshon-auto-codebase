//Navigates to the booking module and creates a booking for a single day. 

const {getTodaysDate, getTomorrowsDate,} = require('../utils/helper');

describe('It navigates to booking module and creates a booking', () => {
 it('passes', () => {
    cy.loginAsAdmin(); 
    cy.get('#main-sidebar > div > div.os-padding > div > div > nav > ul > li:nth-child(3) > a').click(); 
    cy.get('#datatable-button').click();
   //to select today's date 
   cy.get('#starting_date').clear();
   const today = getTodaysDate();
   cy.get('#starting_date').type(today); 
   //to select date after 24 hours
   const tomorrow = getTomorrowsDate(); 
   cy.get('#ending_date').clear();
   cy.tomorrowsDate().then(tomorrow => {
      cy.get('#ending_date').type(tomorrow);
   });
   cy.get('#booking-form > div.card-body > div:nth-child(2) > div:nth-child(1) > div > span > span.selection > span', {timeout: 1000})
     .should('be.visible')
     .click("top"); 
   cy.get('#booking-form > div.card-body > div:nth-child(2) > div:nth-child(2) > div > span > span.selection > span > span.select2-selection__arrow', {timeout: 1000})
     .should('be.visible')
     .click('top'); 
     
   cy.get('#amount').type("100");
   cy.get('#comments').type("This is a test booking"); 
   Cy.get("#booking-form > div.card-body > fieldset > div > div:nth-child(1) > div > span > span.selection > span > span.select2-selection__arrow", {timeout: 1000})
     .should("be.visible")
     .click('top'); 

   cy.get('#bond_amount').type("100"); 
   
   });
}); 
//Navigates to settings and creates a new workshop.

describe('It navigates to settings and creates a new workshop', () => {
 it('passes', () => {
    cy.fixture('data').then((data)=>{
    const $phone = data; 
    cy.loginAsAdmin(); 
    cy.visit('http://car-hire.test/dashboard'); //navigates to the dashboard. 
    cy.get("#main-body > div > nav > ul.navbar-nav.ml-auto.nav-item-align > li:nth-child(1) > a").click();
    cy.get("#main-sidebar > div > div.os-padding > div > div > nav > ul > li:nth-child(6) > a").click(); 
    cy.get("#datatable-button").click(); 
    cy.get("#workshop_name").type("Test Workshop");
    cy.get("#workshop_address").type("Test workshop address"); 
    cy.get("#content-wrapper > section.content > div > div > div.col-md-12 > div > form > div.card-body > div:nth-child(2) > div:nth-child(1) > div > span > span.selection > span > ul > li > input").click(); 
    cy.get('select[name="workshop_type[]"]') //gets the workshop type element
    cy.wait(1000);  //waits for 1 second
    cy.get('.select2-results__options', { timeout: 5000 }) //gets the drop down options to render
        .should('be.visible') // Confirm it's visible
        .click("top");  //clicks the topmost option
    cy.get("#organizer_name").type("Test Contact Person"); 
    cy.get("#organizer_email").type("Test.contact@gmail.com"); 
    cy.get("#organizer_contact").type($phone.phone);
    cy.get("#content-wrapper > section.content > div > div > div.col-md-12 > div > form > div.card-footer > button").click(); 
    //basic text assertion
    cy.get("#swal2-content").should("have.text", "Workshop added successfully")

        });
    });  
}); 

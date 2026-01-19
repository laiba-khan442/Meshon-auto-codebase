//Navigates to Settings and adds a Test Service Type.

describe('It navigates to settings and adds a test service type', () => {
 it('passes', () => {
    cy.loginAsAdmin(); 
    cy.visit('http://car-hire.test/dashboard') //navigates to the dashboard.
    cy.get("#main-body > div > nav > ul.navbar-nav.ml-auto.nav-item-align > li:nth-child(1) > a").click(); 
    cy.get("#main-sidebar > div > div.os-padding > div > div > nav > ul > li:nth-child(7) > a").click(); 
    cy.get("#datatable-button").click(); 
    cy.get("#workshop_type_name").type("Test Service Type"); 
    cy.get("#content-wrapper > section.content > div > div > div.col-md-12 > div > form > div.card-footer > button").click();
    //Basic text assertion 
    cy.get("#swal2-content").should('have.text', 'Workshop Type added successfully'); 
    });   
});
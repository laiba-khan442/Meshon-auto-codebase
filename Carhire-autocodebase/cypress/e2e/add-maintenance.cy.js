//logs in as admin, navigates to settings and adds a test maintenance type. 

describe('It navigates to settings and adds a test maintenance type', () => {
 it('passes', () => {
    cy.loginAsAdmin(); 
    cy.visit('http://car-hire.test/dashboard') //navigates to the log in page.
    cy.get("#main-body > div > nav > ul.navbar-nav.ml-auto.nav-item-align > li:nth-child(1) > a").click(); 
    cy.get("#main-sidebar > div > div.os-padding > div > div > nav > ul > li:nth-child(8) > a").click(); 
    cy.get("#datatable-button").click();
    cy.get("#maintenance_type_name").type("Test Maintenance Type"); 
    cy.get("#content-wrapper > section.content > div > div > div.col-md-12 > div > form > div.card-footer > button").click();
//Basic text assertion 
    cy.get("#swal2-content").should('have.text', 'Maintenance Type added successfully')
 });
});

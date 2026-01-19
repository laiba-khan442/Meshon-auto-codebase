//Navigates to settings and registers new insurance company

describe('It navigates to settings and adds a test maintenance type', () => {
 it('passes', () => {
    cy.fixture('data').then((data)=>{
    const $phone = data; 
    cy.loginAsAdmin(); 
    cy.visit('http://car-hire.test/dashboard'); //navigates to the dashboard. 
    cy.get("#main-body > div > nav > ul.navbar-nav.ml-auto.nav-item-align > li:nth-child(1) > a").click();
    cy.get("#main-sidebar > div > div.os-padding > div > div > nav > ul > li:nth-child(2) > a").click(); 
    cy.get("#datatable-button").click(); 
    cy.get("#incompany_name").type("Test Insurance Company") 
    cy.get("#incompany_reg_no").type($phone.phone); 
    cy.get("#incompany_address").type("XYZ Address"); 
    cy.get("#content-wrapper > section.content > div > div > div.col-md-12 > div > form > div.card-footer > button").click(); 
    //Basic text assertion. 
    cy.get("#swal2-content").should("have.text", "Insurance Company added successfully"); 
        });
    });
});
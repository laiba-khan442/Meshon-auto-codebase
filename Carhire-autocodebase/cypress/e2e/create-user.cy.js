//Navigates to settings and creates a New User with Super Admin Permissions.

const { getRandomIntegerUpTo } = require('../utils/helper');

describe('It navigates to settings and creates a new role', () => {
 it('passes', () => {
    cy.loginAsAdmin(); 
    cy.visit('http://car-hire.test/dashboard'); //navigates to the dashboard. 
    cy.get("#main-body > div > nav > ul.navbar-nav.ml-auto.nav-item-align > li:nth-child(1) > a").click(); 
    cy.get("#main-sidebar > div > div.os-padding > div > div > nav > ul > li:nth-child(4) > a").click(); 
    cy.get("#datatable-button").click();
    const rand = getRandomIntegerUpTo(100);  
    cy.get("#name").type("Test User " + rand ); 
    cy.get("#email").type("test.user" + rand + "@gmail.com"); 
    cy.get("#role_id"); //gets role selection field
    cy.wait(1000); 
    cy.get('#role_id', { timeout: 5000 }) //gets the drop down options to render
        .should('be.visible') // Confirm it's visible
        .select("1", {force: true});  //clicks the topmost option
    cy.get("#password").type("123123123"); 
    cy.get("#password_confirmation").type("123123123");
    cy.get("#content-wrapper > section.content > div > div > div.col-md-12 > div > form > div.card-footer > button").click(); 
    }); 
}); 



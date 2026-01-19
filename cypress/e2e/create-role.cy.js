//Navigates to settings and creates a new role.

const { getRandomIntegerUpTo } = require('../utils/helper');

describe('It navigates to settings and creates a new role', () => {
 it('passes', () => {
    cy.loginAsAdmin(); 
    cy.visit('http://car-hire.test/dashboard'); //navigates to the dashboard. 
    cy.get("#main-body > div > nav > ul.navbar-nav.ml-auto.nav-item-align > li:nth-child(1) > a").click(); 
    cy.get("#main-sidebar > div > div.os-padding > div > div > nav > ul > li:nth-child(5) > a").click(); 
    cy.get("#datatable-button").click(); 
    const rand = getRandomIntegerUpTo(100); 
    cy.get("#name").type("Test Role " + rand); 
    cy.get("#toggle-btn").click({force: true}); 
    cy.get("#content-wrapper > section.content > div > div > div > div > form > div > div.card-footer > button").click();
    //Basic text assertion
    cy.get("#swal2-content").should('have.text', "Role created successfully") 
   });
 });

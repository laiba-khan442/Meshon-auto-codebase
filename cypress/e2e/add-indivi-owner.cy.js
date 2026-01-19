//Navigates to settings and creates a individual type owner.

const { getRandomIntegerUpTo } = require('../utils/helper');

describe('It navigates to settings and creates a individual type owner', () => {
 it('passes', () => {
    cy.loginAsAdmin(); 
    cy.visit('http://car-hire.test/dashboard'); //navigates to the dashboard. 
    cy.get("#main-body > div > nav > ul.navbar-nav.ml-auto.nav-item-align > li:nth-child(1) > a").click(); 
    cy.get("#main-sidebar > div > div.os-padding > div > div > nav > ul > li:nth-child(3) > a").click(); 
    cy.get("#datatable-button").click(); 
    cy.get("#entity_type_select", {timeout: 5000})
      .should("be.visible")
      .select("Individual", {force: true}); 
    cy.wait(1000);
    cy.get("#f_name").type("Test"); 
    cy.get("#l_name").type("Individual Owner"); 
    cy.get("#date_of_birth").clear()
      .wait(1000)
      .type("08-07-2005"); 
    const rand = getRandomIntegerUpTo(100); 
    cy.get("#email").type("Test.Ind_comp" + rand + "@gmail.com");
    cy.get("#phone").type("0123456789"); 
    cy.get("#street").type("Test Street"); 
    cy.get("#suburb").type("Test Suburb"); 
    cy.get("#state").type("Test State"); 
    cy.get("#postal_code").type("4072"); 
    cy.get("#crn").type("123456789"); 
    cy.get("#field-container > div > div:nth-child(7) > div > div > div:nth-child(1) > label").click(); //makes the owner eligible for bond. 
    cy.get("#create-form > div.card-footer > button").click(); 
    cy.wait(1000);
    //simple text assertion
    cy.get("#main-body > div.swal2-container.swal2-center.swal2-backdrop-show > div > div.swal2-content").should("have.text", "Owner added successfully"); 
         }); 
    });
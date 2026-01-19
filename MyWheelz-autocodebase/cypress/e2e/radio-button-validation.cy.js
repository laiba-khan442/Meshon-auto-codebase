describe('Validates correct button is clicked in the booking section', () => {
  it('passes', () => {
    //for home page
    cy.visit('/');
    //validates that the short term radio button is checked by default. 
    cy.get('[role="radio"][aria-checked="true"]', { timeout: 10000 })
        .should('exist')
        .should('contain.text', 'Short-term rental');
    //validates that rideshare is not checked by default. 
    cy.get('[role="radio"][aria-checked="false"]', { timeout: 10000 })
        .should('exist')
        .should('contain.text', 'Rideshare (min. 6 weeks)');

    //validates that the rideshare button is clicked on rideshare page. 
    cy.visit('/rideshare');
     cy.get('[role="radio"][aria-checked="false"]', { timeout: 10000 })
        .should('exist')
         .should('contain.text', 'Short-term rental'); 
    cy.get('[role="radio"][aria-checked="true"]', { timeout: 10000 })
        .should('exist')
        .should('contain.text', 'Rideshare (min. 6 weeks)'); 

    //validates that the short term rental button is clicked on short term rental page. 
    cy.visit('/short-term-rental');
     cy.get('[role="radio"][aria-checked="false"]', { timeout: 10000 })
        .should('exist')
        .should('contain.text','Rideshare (min. 6 weeks)');
    cy.get('[role="radio"][aria-checked="true"]', { timeout: 10000 })
        .should('exist')
        .should('contain.text', 'Short-term rental');  
  });
}); 
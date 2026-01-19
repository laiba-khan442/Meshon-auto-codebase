describe('Navigates to different URLs', () => {
  it('passes', () => {
    cy.visit('/');
    //Asserts homepage load and checks if content renders correctly. 
    cy.title().should('eq','MyWheelz'); 
    //Clicks on rideshare page
    cy.visit('/rideshare') 
    cy.get("#root > div > main > main > div.relative.w-full.h-96 > div > div > h1").should('have.text', "Rideshare"); 
    //Asserts short-term rental page
    cy.visit('/short-term-rental'); 
    cy.get("#root > div > main > main > div.relative.w-full.h-96 > div > div > h1").should('have.text', "Flexible daily rentals"); 
    //Asserts about us page
    cy.visit('/about'); 
    cy.get("#root > div > main > main > div > div > h1").should('have.text', "About Us");
    //Asserts contact us page
    cy.visit('/contact'); 
    cy.get("#root > div > main > section > div.w-full.md\\:w-1\\/2.flex.items-center.justify-center.p-8.bg-white > form > h2").should('have.text',"Get in touch");
    //Asserts terms and conditions
    cy.visit("/terms-conditions");
    cy.get("#root > div > main > div > div > div.text-start.mb-12 > h1").should("have.text","Terms & conditions"); 
    
  });
});


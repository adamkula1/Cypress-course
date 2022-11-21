/// <reference types="cypress" />

it('prihlasenie pomocou custom commandu', () => {
  //create command - support/commands
  cy.loginUser('adamCypress@gmail.com', '123456')

  cy
    .visit('/')
  
});
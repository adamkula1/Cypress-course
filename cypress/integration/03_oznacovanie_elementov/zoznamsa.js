/// <reference types="cypress" />

it("oznacovanie elementov", () => {
  cy.visit("/");

  cy.get(".background_title").should("be.visible");
  cy.contains("My Boards");

  cy.get(".board_title").should("be.visible");
  cy.contains("First-Board");

  /* 

  úloha #1: označ nadpis „My boards“ pomocou príkazu .get()
  úloha #2: označ nadpis „My boards“ pomocou príkazu .contains()
  úloha #3: vytvor si board a označ jeho názov pomocou príkazu .get()
  úloha #4: vytvor si board a označ jeho názov pomocou príkazu .contains()
  
  */
});

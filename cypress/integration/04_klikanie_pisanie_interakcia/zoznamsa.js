/// <reference types="cypress" />

/*
  vytvor si nový board a vypracuj nasledujúce úlohy
  pomocou .only si môžeš spustiť jeden test
*/

it("vytvorenie nového boardu", () => {
  //open app and create second board for next tasks
  cy.visit("/");
  cy.getByDataCy("create-board").click();
  cy.get("input").should("be.visible");
  cy.get(".board_addBoard").type("Second-Board");
  cy.get(".board_options .Button").should("be.visible").click();
});

// úloha #1: vytvor si nový zoznam na boarde
it("vytvorenie nového zoznamu", () => {
  cy.get(".CreateList").click();
  cy.get(".CreateList_input").click().type("List first");
  cy.get(".CreateList_options button").should("be.visible").click();
});

// úloha #2: vytvor si nový task v zozname
it("vytvorenie nového tasku", () => {
  cy.get(".List_addTask").click();
  cy.getByData("newTaskTitle").type("Task first yeeah");
  cy.get('.List_newTaskOptions button').should("be.visible").click()

  cy.get(".List_addTask").click();
  cy.getByData("newTaskTitle").type("Task second yeeah");
  cy.get('.List_newTaskOptions button').should("be.visible").click()
});

// úloha #3: zaškrtni task ako vybavený
it("označenie tasku", () => {
  cy.get('.Task').eq(0).find('.checkmark').check().should('be.checked')
  cy.get('.Task').eq(1).find('.checkmark').should('not.be.checked')
});

// úloha #4: odškrtni task ako nevybavený
it("odznačenie tasku", () => {
  cy.get('.Task').eq(0).find('.checkmark').uncheck().should('not.be.checked')
});

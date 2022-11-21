/// <reference types="cypress" />

beforeEach(() => {
  cy.request("DELETE", "/api/tasks");
});

it("vytvorenie noveho tasku", () => {
  cy.visit("/board/18655014692");

  cy.addTask("commnad tasks");
});

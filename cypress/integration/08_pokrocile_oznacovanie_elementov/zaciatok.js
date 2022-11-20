/// <reference types="cypress" />

beforeEach(() => {
  cy.visit("/board/25619573353");
});

it("oznacenie tasku pomocou poradia", () => {
  cy.get(".Task").first();
});

it("vyfiltrovanie názvov tasku", () => {
  cy.get(".Task_title").filter(".completed");
});

it("označenie tasku v zozname", () => {
  cy.get(".List_tasks").children();
});

it("označenie zoznamu tasku", () => {
  cy.get(".Task").parents(".List");
});

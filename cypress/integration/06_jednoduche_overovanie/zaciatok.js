/// <reference types="cypress" />

beforeEach(() => {
  cy.visit("/board/37754080283");
});

it("vytvorenie tasku", () => {
  cy.get(".List_addTask").click();
  cy.getByData("newTaskTitle").type("Task third");
  // .type('Task third{enter}')
  cy.get(".List_newTaskOptions button").should("be.visible").click();
});

it("overenie poctu taskov", () => {
  cy.get(".Task").should("have.length", 3);
});

it("overenie zaskrtnutia", () => {
  cy.get(".Task").eq(0).find(".checkmark").check().should("be.checked");
  cy.get(".Task label").eq(0).should("have.class", "completed");
});

it("overenie názvu listu", () => {
  cy.get(".boardDetail_title").should("have.value", "Second-Board");
});

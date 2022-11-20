/// <reference types="cypress" />

beforeEach(() => {
  //new clean board
  cy.visit("/board/37104747111"); // doplň si adresu svojho boardu
});

it("vytvorenie listu", () => {
  cy.get(".CreateList").click();
  cy.get(".CreateList_input").click().type("List 01");
  cy.get(".CreateList_options button").should("be.visible").click();

  cy.get(".CreateList").click();
  cy.get(".CreateList_input").click().type("List 02");
  cy.get(".CreateList_options button").should("be.visible").click();
});

it("overenie poctu listov", () => {
  cy.get(".List").should("have.length", 2);
});

it("odstranenie listu", () => {
  cy.get(".List").eq(1).find(".dropdown").click();
  cy.get(".List").eq(1).find("#myDropdown").should("be.visible").click();
});

it("vytvorenie tasku", () => {
  cy.get(".List").eq(0).find(".List_addTask").click();
  cy.getByData("newTaskTitle")
    // .type("Task third");
    .type("Task first board{enter}");
  // cy.get(".List_newTaskOptions button").should("be.visible").click();
});

it("overenie odskrtnutia", () => {
  cy.get(".Task").eq(0).find(".checkmark").check().should("be.checked");
  cy.get(".Task label").eq(0).should("have.class", "completed");
});

it("overenie názvu listu", () => {
  cy.get(".List").eq(0).find(".taskTitle").should("have.value", "List 01");
});

it("overenie textu na pridanie tasku (add card)", () => {
  cy.get(".List").eq(0).find(".List_addTask").should("contain.text", "Add a card...");
});

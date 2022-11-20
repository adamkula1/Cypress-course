/// <reference types="cypress" />

beforeEach(() => {
  cy.server();

  cy.route({
    method: "GET",
    url: "/api/boards",
    //fixtures emptyBoardList.json
    // response: 'fx:emptyBoardList',
    response: [],
  }).as("boardList");

  cy.route({
    method: "POST",
    url: "/api/boards",
    response: [],
    status: 500,
  }).as("createBoard");

  cy.visit("/");
});

it("prazdny zoznam boardov", () => {});

it("chybova hlaska pri vytvoreni boardu", () => {
  cy.get("#new-board").click();

  cy.get(".board_addBoard").type("nova zahrada");

  cy.contains("Save").click();

  cy.get("#errorMessage")
    .should("be.visible")
    .should("contain.text", "Oh no! New board could not be created.");
});

/// <reference types="cypress" />

beforeEach(() => {
  cy.request("POST", "/api/reset");

  cy.request("POST", "/api/boards", {
    name: "board create cez api",
  }).then((board) => {
    Cypress.env("board", board.body);
  });
});

it("otvorenie novovytvoreneho boardu", () => {
  cy.visit("/board/" + Cypress.env("board")["id"]);

  cy.get(".boardDetail_info input").should(
    "have.value",
    Cypress.env("board")["name"]
  );
});

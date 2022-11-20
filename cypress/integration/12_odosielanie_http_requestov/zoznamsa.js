/// <reference types="cypress" />

const boardName = "heej novy board";

beforeEach(() => {
  // pred začiatkom testu vymaž všetky boardy
  cy.request("POST", "/api/reset");

  cy.request({
    method: "POST",
    url: "/api/boards",
    body: {
      name: boardName,
    },
  });
});

it("vytvorenie boardu cez api a overenie", () => {
  cy.visit("/");

  // cy.get(".board_item .board_title").should(
  //   "contain.text",
  //   "board vytcoreny cez api zozanam sa"
  // );

  cy.contains(boardName);
});

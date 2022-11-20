/// <reference types="cypress" />

it("vytvorenie boardu", () => {
  // cy.request({
  //   method: "POST",
  //   url: "/api/boards",
  //   body: {
  //     name: "board vytcoreny cez api",
  //   },
  // });

  cy.visit("/");
});

describe("aplikacia v zresetovanom stave", () => {
  beforeEach(() => {
    cy.request("POST", "/api/reset");
  });

  it("vytvorenie noveho boardu", () => {
    cy.visit("/");

    cy.get("#new-board").click();

    cy.get(".board_addBoard").type("novy projekt{enter}");
  });
});

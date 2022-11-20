/// <reference types="cypress" />

beforeEach(() => {
  cy.visit("/board/82501116053");
});

it("v zozname je mlieko", () => {
  cy.contains("mlieko");

  cy.getByData('24588109879').contains("mlieko");
});

it("v druhom zozname je mlieko", () => {
  cy.getByData('12565371934')
    .find(".Task")
    .eq(2)
    .should("contain.text", "mlieko");
});

it("v druhom zozname je len jeden task", () => {
  cy.get('[data-id="12565371934"] .Task').should("have.length", 3);
});

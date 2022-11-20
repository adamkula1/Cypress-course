/// <reference types="cypress" />

beforeEach(() => {
  cy.visit("/board/82501116053"); // doplň si adresu svojho boardu
});

// ⚠️ pred začiatkom testovania si prosím vytvor dva zoznamy
// použi príkaz .contains()
it("pridanie položky do druhého zoznamu", () => {
  cy.get(".List").eq(1).contains("Add a card").click();
  cy.getByData("newTaskTitle").eq(1).click().type("Rožok{enter}");
});

it("nastavenie timeoutu", () => {
  cy.get('[data-id="12565371934"] .Task', { timeout: 3000 }).should(
    "have.length",
    4
  );
});

/// <reference types="cypress" />

beforeEach(() => {
  cy.visit("/board/7115510273");
});

it("overenie textu prveho tasku", () => {
  cy.get(".Task").should("contain.text", "vajce");
});

it("overenie textov vsetkych taskov", () => {
  cy.get(".Task").then((todos) => {
    expect(todos[0]).to.contain.text("vajce");
    expect(todos[1]).to.contain.text("chlieb");
    expect(todos[2]).to.contain.text("voda");
    expect(todos[3]).to.contain.text("pes");
  });
});

it("task s textom „pes“ je na poslednej pozicii (riesenie 1)", () => {
  cy.get(".Task").should("have.length", 4).last().should("contain.text", "pes");
});

it("task s textom „pes“ je na poslednej pozícii (riesenie 2)", () => {
  cy.get(".Task").should((todos) => {
    expect(todos[0]).to.contain.text("vajce");
    expect(todos[2]).to.contain.text("voda");
  });
});

it("otvorenie aplikácie", () => {
  cy.visit("http://localhost:3000/");

  //open app and create first board for next tasks
  cy.getByData("create-board").click();
  cy.get("input").should("be.visible");
  cy.get(".board_addBoard").type("First-Board");
  cy.get(".board_options .Button").should("be.visible").click();
});

/// <reference types="cypress" />

beforeEach(() => {
  cy.server();

  cy.route("POST", "/api/tasks").as("createTask");
  cy.route("DELETE", "/api/lists/*").as("deleteList");

  cy.route({
    method: "PATCH",
    url: "/api/tasks/*",
  }).as("editTask");

  cy.visit("/board/34036722067"); // doplň si adresu svojho boardu
});

it.skip("vytvorenie tasku", () => {
  // vytvor si v teste nový task v zozname a odsleduj si request, ktorý sa udeje pri jeho vytvorení. pomocou príkazov .its() a .should() si otestuj status alebo telo odpovede requestu
  cy.get(".List_addTask").click();
  cy.getByData("newTaskTitle").type("toto je taaask");
  cy.get(".List_newTaskOptions button").should("be.visible").click();

  // cy.wait("@createTask").then((task) => {
  //   expect(task.status).to.eq(201);
  //   expect(task.request.body.title).to.eq("toto je taaask");
  //   expect(task.response.body.title).to.eq("toto je taaask");
  //   expect(task.response.body.completed).to.be.false;
  // });

  cy.wait("@createTask")
    // .its('status')
    // .should('eq', 201)
    .its("response.body.title")
    .should("eq", "toto je taaask");
});

it("odstránenie zoznamu", () => {
  // manuálne si vytvor nový zoznam a pomocou testu tento zoznam odstráň. následne si odsleduj request, ktorý sa volá pri odstránení zoznamu
  cy.get(".CreateList").click();
  cy.get(".CreateList_input").click().type("Zoznam two");
  cy.get(".CreateList_options button").should("be.visible").click();

  cy.get(".List").eq(1).find(".dropdown").click();
  cy.get(".List").eq(1).find("#myDropdown").should("be.visible").click();

  cy.wait("@deleteList").its("status").should("eq", 200);
});

it("zaskrtnutie tasku", () => {
  // pomocou testu si zaškrtni task v zozname a odsleduj si request, ktorý sa pri tejto akcii odpaľuje. skús si vytvoriť aj zopár testov pre tento request. skús na overenie spoužiť príkaz .then() skontroluj napríklad status kód a telo requestu
  cy.get(".Task input").check();

  // cy.wait("@editTask").its("response.body.completed").should("eq", true);
  cy.wait("@editTask").then((task) => {
    expect(task.status).to.eq(200);
    expect(task.request.body.completed).to.be.true;
  });
});

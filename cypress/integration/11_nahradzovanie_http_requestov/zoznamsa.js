/// <reference types="cypress" />

beforeEach(() => {
  cy.server();

  //Solution for tasks 1, 2
  // cy.route("/api/boards", "fx:twoBoards").as("boardList");

  cy.route({
    method: "POST",
    url: "/api/tasks",
    response: [],
    status: 500,
  }).as("createBoard");

  cy.visit("/");
});

it("zoznam dvoch boardov z fixture", () => {
  // použi súbor twoBoards.json z fixtures foldra. do tohto it() bloku nemusíš nič písať. stačí, že zmeníš .route() príkaz v beforeEach bloku
  //Boards sa načitaju z toho JSONU fixtures/twoBoards.json
});

it("zoznam boardov s hviezdickou z fixture", () => {
  // ak sa Ti podarilo splniť predošlú úlohu, stačí si vyfiltrovať tento test a zmeniť dáta v súbore twoBoards.json po uložení testu a súboru twoBoards.json by si mal/a vidieť správny výsledok
});

it("chyba pri vytvoreni tasku", () => {
  // pridaj si ďalší .route() príkaz, ktorým si odchytíš api volanie, ktoré sa robí pri vytvorení tasku. nahraď odpoveď tak, aby zo servra prišiel chybový status kód. dôležitá poznámka: pri nahradzovaní odpovede je parameter „response“ povinný
  cy.get(".board_item").eq(0).click();

  cy.contains("Add a card").click();

  cy.get(".List .TextArea").type("chlieb{enter}");

  cy.get("#errorMessage")
    .should("be.visible")
    .should("contain.text", "There was an error creating task");
});

/// <reference types="cypress" />

//Cypress medzi testami cookies vymazáva
//Pomocou tejto metody nastavíme whitelist všetkých cookies ktoré nechceme aby sa medzi testami vymazávali
//Takéto nastavenia je vhodné vkladať do support/index.js
// Cypress.Cookies.defaults({
//   whitelist: "trello_token",
// });

it("nastavovanie cookies", () => {
  cy.setCookie(
    "trello_token",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkYW1rdWxhOTdAZ21haWwuY29tIiwiaWF0IjoxNjY5MDIxMjMyLCJleHAiOjE2NjkwMjQ4MzIsInN1YiI6IjEifQ.TYBgWKBWDj7dm5lvDe5_w4oNRRxQB3y3jW9Mh3-Q4AE"
  );

  cy.visit("/");
});

/// <reference types="cypress" />

it("overenie user id", () => {
  cy.visit("/");

  cy.request({
    method: "GET",
    url: "/api/boards",
    headers: {
      accept: "application/json, text/plain, */*",
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkYW1rdWxhOTdAZ21haWwuY29tIiwiaWF0IjoxNjY5MDIxOTQyLCJleHAiOjE2NjkwMjU1NDIsInN1YiI6IjEifQ.YXkgXavcM8fVXqBy0AM_q7L9Oc5iNVrnP6rwmskq2p8", // dopln autorizaciu
    },
  }).then((boards) => {
    let privateBoard = Cypress._.find(boards.body, { name: "private board" });
    let publicBoard = Cypress._.find(boards.body, { name: "verejny board" });

    expect(privateBoard.user).to.eq(1);
    expect(publicBoard.user).to.eq(0);
    expect(boards.body).to.have.length(3);
  });

  cy.request({
    method: "GET",
    url: "/api/boards",
    headers: {
      accept: "application/json, text/plain, */*",
    },
  }).then((boards) => {
    let publicBoard = Cypress._.find(boards.body, { name: "verejny board" });
    
    expect(publicBoard.user).to.eq(0);
    expect(boards.body).to.have.length(2);
  });
});

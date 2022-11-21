/// <reference types="cypress" />

it("autorizacia", () => {
  cy.visit("/");

  cy.request({
    method: "GET",
    url: "/api/boards",
    headers: {
      accept: "application/json, text/plain, */*",
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkYW1rdWxhOTdAZ21haWwuY29tIiwiaWF0IjoxNjY5MDIxOTQyLCJleHAiOjE2NjkwMjU1NDIsInN1YiI6IjEifQ.YXkgXavcM8fVXqBy0AM_q7L9Oc5iNVrnP6rwmskq2p8",
    },
  });
});

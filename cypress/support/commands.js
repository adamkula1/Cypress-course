Cypress.Commands.add('addTask', (name) => {

  cy
    .contains('Add a card')
    .click()

  cy
    .get('[data-id="newTaskTitle"]')
    .type(name + '{enter}')

})

Cypress.Commands.add('loginUser', (email, password) => {

  cy
    .request({
      method: 'POST',
      url: '/login',
      body: { email, password }
    }).then( res => {
      cy
        .setCookie('trello_token', res.body.accessToken)
    })

})

Cypress.Commands.add("getByDataCy", (selector) => {
  return cy.get(`[data-cy=${selector}]`)
})

Cypress.Commands.add("getByData", (selector) => {
  return cy.get(`[data-id=${selector}]`)
})
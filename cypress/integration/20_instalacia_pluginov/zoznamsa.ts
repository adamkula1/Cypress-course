const logo = "cypressLogo.png"

it('upload obrazku', () => {

  cy
    .visit('/board/83070376571')

  cy.get('.Task').first()
  .click()

  cy.get('[type="file"]')
  .attachFile(logo)

});
/// <reference types="cypress" />

beforeEach(() => {
  cy.visit("/board/7115510273"); // doplň si adresu svojho boardu
});

it("over vsetky zaskrtnute tasky", () => {
  // cy.get(".Task").eq(0).find(".checkmark").check().should("be.checked");

  // cy.get('.Task').then((todos) => {
  //   expect(todos[0]).to.contain.text('vajce')
  //   expect(todos[1]).to.contain.text('chlieb')
  // })

  // 2. použi príkaz .then() a over obidva tasky v zozname naraz
  // cy.get('.Task input').then((checkboxes) => {
  //   expect(checkboxes[0]).to.be.checked
  //   expect(checkboxes[1]).to.not.be.checked
  // })

  // 4. použi príkaz .should() a task znova zaškrtni, aby Ti test prešiel počas toho ako test beží
  cy.get('.Task input').should((checkboxes) => {
    expect(checkboxes[0]).to.be.checked
    expect(checkboxes[1]).to.not.be.checked
  })

  // 1. zaškrtni si jeden z taskov
  // 2. použi príkaz .then() a over obidva tasky v zozname naraz
  // 3. skús jeden z taskov odškrtnúť tak, aby test neprechádzal
  // 4. použi príkaz .should() a task znova zaškrtni, aby Ti test prešiel počas toho ako test beží
  // poznámka: na vypracovanie tohto testu môžeš kontrolovať checkbox, alebo text tasku (ten má v zaškrtnutom stave classu .completed)
});

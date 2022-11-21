export class BoardList {
    star() {
        cy.get('.star')
        .click({force: true})
        return this
    }

    open(boardName: string) {
        cy.contains(boardName).click()
    }
}
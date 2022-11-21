it('spustenie aplikácie s 0 taskami', () => {

  cy.task('resetTasks')

  cy
    .visit('/board/35080054510')

});
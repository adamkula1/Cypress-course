it('drag and drop', () => {

  cy
    .visit('/board/83070376571')

    cy
    .get('.List_tasks')
    .eq(0)
    .as('todoList')

  cy
    .get('.List_tasks')
    .eq(1)
    .as('inprogressList')

  cy
    .get('.Task')
    .drag('@inprogressList')

});
beforeEach(() => {
  
  cy
    .request('POST', '/api/reset');

});

it('zaciatok testu v cistom stave', () => {

  cy
    .visit('/')
//task spustí plugin (plugins/index.ts)
    cy
    .task('resetDb')
  
});
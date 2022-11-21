import { BoardList } from '../../page_objects/boardList'

const boardList = new BoardList

beforeEach(() => {

  cy
    .request('POST', '/api/reset')
  
  cy
    .request('POST', '/api/boards', { 
      name: 'novy board'
    })

  cy
    .visit('/')

});

it('ohviezdickovanie boardu', () => {

  boardList
    .star()
  
});

it('otvorenie boardu', () => {

  boardList
  // aby funkcia star fungovalo musím pridať return this 
    .star()
    .open('novy board')
  
});
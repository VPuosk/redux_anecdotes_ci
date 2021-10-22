describe('Anecdote app', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:3001')
    cy.contains('Anecdotes')
  })
  it('filter functions', function() {
    cy.visit('http://localhost:3001')
    cy.contains('Anecdotes')
    cy.get('#filterField').type('fool')
    cy.contains('Good programmers write code that humans can understand')
    cy.contains('Adding manpower to a late software project makes it later!').should('not.exist')
  })
})
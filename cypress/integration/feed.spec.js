describe('My First Test', function() {
  it('Should have title', function() {
    cy.visit('http://localhost:8080/feed')
    cy.get('#main-title').should('contain', 'Challenge Accepted')
  })
})

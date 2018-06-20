
beforeEach(function () {
  cy.viewport(419, 800)
})

describe('Checks Title', function() {
  it('Should have title', function() {
    cy.visit('http://localhost:8080/feed')
    cy.get('#main-title').should('contain', 'Challenge Accepted')
  })
})

describe('Open and close modal', function() {
  it('Should open and close', function() {

    cy.get('#showModal-1').click()
    cy.wait(500)
    cy.get('#close-1').click()
    cy.get('#modal-1').should('not.have.class', 'is-active')
  })
})

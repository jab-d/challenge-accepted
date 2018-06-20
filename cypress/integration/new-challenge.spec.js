
beforeEach(function () {
  cy.viewport(419, 800)
  cy.visit('http://localhost:8080/feed')
  cy.get('#fab').click()
})

describe('Checks Challenge Name', function() {
  it('Should input name and hold value', function() {
    cy.get('#challengeName').type('Climb Everest')
    cy.get('#challengeName').should('have.value', 'Climb Everest')
  })
})

describe('Select points', function() {
  it('Should choose 3 points', function() {
    cy.get('option').contains('3').click({force: true})
    cy.get('select').should('have.value', '3')
  })
})

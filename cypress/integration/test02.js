describe('My First Test', function() {
  it('Visit Google', function() {
    cy.visit('https://www.google.co.jp')

    cy.get("input[name='q']")
      .type('cypress.io')

    cy.contains('Google 検索')
      .click()

    cy.title().should('eq', 'cypress.io - Google 検索')
  })
})
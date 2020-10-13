const targetUrl = Cypress.env('target_url')

describe('My First Test', function() {
  it('Visit Google', function() {
    cy.visit(targetUrl)

    cy.get("input[name='q']")
      .type('cypress.io')

    cy.contains('Google 検索')
      .click()

    cy.title().should('eq', 'cypress.io - Google 検索')
  })
})
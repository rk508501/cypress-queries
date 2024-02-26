describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  it("Dummy test", () => {
    cy.log("Dummy test")
  })

  it("Another dummy test", () => {
    cy.log("Another dummy test")
  })

  it("Test mapChain", () => {
    let names = ["Brad", "Smith", "Matt", "Wilmer"]
    //TODO check names and see which ones start with B
  })
})
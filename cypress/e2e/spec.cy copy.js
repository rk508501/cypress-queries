describe("cy-map", () => {
  it("Test mapChain", () => {

      let names = ["Brad", "Smith", "Matt", "Wilmer"]

      cy.wrap(names).mapChain(name => cy.request(`https://api.genderize.io/?name=${name}`)).then(result => cy.log(result.body))
     
  })
})
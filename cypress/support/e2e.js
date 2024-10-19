
import './commands'
import 'cypress-map'

Cypress.on('after:test:run', () => {
    cy.task('logAbsolutePaths').then(()=>{
        console.log("Executed logging task after each test")
    })
  });

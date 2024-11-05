it('' , ()=>{
    cy.visit('https://www.google.com/')
    cy.get('#APjFqb',{timeout:5000}).type('cypress{enter}')
    cy.wait(2000)
    cy.contains('Videos').click()
})
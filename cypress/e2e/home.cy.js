//Assertions Checking

// const { Assertion } = require("chai")


it('Home Page',()=>{
    cy.visit('https://pedigree-manager.vercel.app/')
    cy.wait(2000)
    cy.contains('Get Started').click()
    cy.wait(2000)
    //Implicit Assertions "Should ,And"
    //"should have & Should be" Assertion commands are used here
    cy.get('.inline-flex').should('contain','Log In').should('have.text','Log In').should('be.visible').should('be.enabled') 

   // "and have & and be" assertion command is use here
    cy.get('.inline-flex').should('contain','Log In').and('have.text','Log In').and('be.visible').and('be.enabled') 

    //Explicit Assertion "Expect","Assert"
   //expect assertion command is use here
//    .to.be.true
//    .to.be.false
//    .to.be.null
//    .to.be.undefined
//    .to.be.empty
//    .to.exist
//    .to.be.a('string')
//    .to.be.a('number')
//    .to.be.a('boolean')
//    .to.be.a('array')
//    .to.be.a('function')
//    .to.be.a('object')
//    .to.be.a('symbol')
 expect(true).to.equal(true)

//assertion command is use here
//assert.equal
//assert.notEqual
//assert.strictEqual
//assert.above
//assert.below
//assert.greaterThan
//assert.greaterThanOrEqual
//assert.lessThan
//assert.lessThanOrEqual
//assert.closeTo



assert.equal(5 , '5' , 'true')
})
//Signup Screen of My Pideon Records
//Static Entering data

describe('Signup page',()=>{
    it('signups succesfully',()=>{
        cy.visit('https://pedigree-manager.vercel.app/signUp')
    //Personal Details

    cy.get('input[name = username]').type('test')
    cy.get('input[name = email]').type('test@gmail.com')
    cy.get('input[name = password]').type('12345678')
    cy.get('input[name = confirmPassword]').type('12345678')
    
    //Billing Address

    cy.get('input[name = address1]').type('test line 1')
    cy.get('input[name = address2]').type('test line 2')
    cy.get('input[name = city]').type('Lahore')
    cy.get('input[name = state]').type('Punjab')
    cy.get('input[name = postcode]').type('54900')
    cy.get('.css-19bb58m').click()
    cy.contains('Pakistan').click()
    
    cy.get('.inline-flex').click();

})
})

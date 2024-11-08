//it.only "it.only" is used to run only one test at a time
//it.skip "it.skip" is used to skip one test at a time
//beforeEach "beforeEach" is used to run code before each test
describe('login', () => {

beforeEach(() => {
    cy.visit('https://pedigree-manager.vercel.app/login');
});

    it('successfully login', () => {

        // cy.visit('https://pedigree-manager.vercel.app/login');

        cy.get('input[name=email]').type('yusranoor02@gmail.com')
        cy.get('input[name=password]').type('12345678')
        cy.get('button').contains('Log In').click();
        cy.get('.text-lightGreen > .flex > .ml-2').click()
    })
    it('login with invalid password', () => {

        // cy.visit('https://pedigree-manager.vercel.app/login');

        cy.get('input[name=email]').type('yusranoor02@gmail.com')
        cy.get('input[name=password]').type('1234567890')
        cy.get('button').contains('Log In').click();
        cy.get('.text-lightGreen > .flex > .ml-2').click()
    })
    
});
//Dynamically enter data
//done from page signupPage.js

import { SignupPage } from "./pages/signupPage";

const signupPage = new SignupPage();

it('signups succesfully', () => {
    cy.visit('https://pedigree-manager.vercel.app/signUp');
    const randomEmail = signupPage.generateRandomEmail();
    const randomUsername = signupPage.generateRandomUsername(8); 

    // signupPage.enterEmail(test@gmail.com);
    //signupPage.enterUserName(test);

    signupPage.enterUserName(randomUsername);
    signupPage.enterEmail(randomEmail);
    signupPage.enterPassword('12345678');
    signupPage.enterConfirmPassword('12345678');
    signupPage.enterAddress1('test line 01');
    signupPage.enterAddress2('test line 02');
    signupPage.enterCity('Lahore');
    signupPage.enterState('Punjab');
    signupPage.enterPostcode('54900');
    signupPage.selectCountry(); 
    signupPage.clickSignup();
});
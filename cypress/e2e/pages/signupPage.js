export class SignupPage {
    
username_inputfield = 'input[name = username]';
email_inputfield ='input[name = email]';
password_inputfield ='input[name = password]';
confirmPassword_inputfield ='input[name = confirmPassword]';
address1_inputfield ='input[name = address1]';
address2_inputfield ='input[name = address2]';
city_inputfield ='input[name = city]';
state_inputfield ='input[name = state]';
postcode_inputfield ='input[name = postcode]';
// country_inputfield ='.css-19bb58m'; //country
submit_button ='.inline-flex';


enterUserName(username) {
    cy.get(this.username_inputfield).type(username);
}
enterEmail(email) {
cy.get(this.email_inputfield).type(email);
}
enterPassword(password) {
cy.get(this.password_inputfield).type(password);
}

//Function to generate a random email
generateRandomEmail = () =>{
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let email = '';
    for (let i = 0; i < 10; i++) {
      email += chars[Math.floor(Math.random() * chars.length)];
    }
    return email + '@gmail.com';
  }
  
  //Function to generate a random username
   generateRandomUsername = (length)=> {
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    let username = '';
    for (let i = 0; i < length; i++) {
      username += chars[Math.floor(Math.random() * chars.length)];
    }
    return username;
  }
enterConfirmPassword(confirmpassword) {
cy.get(this.confirmPassword_inputfield).type(confirmpassword);
}
enterAddress1(address1) {
cy.get(this.address1_inputfield).type(address1);
}
enterAddress2(address2) {
cy.get(this.address2_inputfield).type(address2);
}
enterCity(city) {
cy.get(this.city_inputfield).type(city);
}
enterState(state) {
cy.get(this.state_inputfield).type(state);
}
enterPostcode(postcode) {
cy.get(this.postcode_inputfield).type(postcode);
}


// selectCountry () {
//         cy.get(this.country_inputfield).click();
//         cy.contains('India').click();
    
// }

clickSignup() {
cy.get(this.submit_button).click();
}
}
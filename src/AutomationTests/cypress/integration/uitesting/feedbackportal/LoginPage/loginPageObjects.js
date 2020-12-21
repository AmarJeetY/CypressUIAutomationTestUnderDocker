/* eslint-disable no-undef */
class LoginPage 
{
    getUserName(){
        return cy.xpath('//input[@id="username"]');
    }   
    getPassword(){
        return cy.xpath('//input[@id="password"]');
    }
    getSubmitButton(){
        return cy.xpath('//button[@type="submit"]');
    }
    getUserNameHelperText(){
        return  cy.xpath('//p[@id="username-helper-text"]');
    }
    getPasswordHelperText(){
        return cy.xpath('//p[@id="password-helper-text"]');        
    }   
}

export default LoginPage
    
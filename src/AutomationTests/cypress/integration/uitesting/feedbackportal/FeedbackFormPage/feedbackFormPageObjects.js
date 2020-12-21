/* eslint-disable no-undef */
class FeedbackFormPage
{
    getPageDescription(){
        return cy.xpath('//h1[contains(.,"Feedback Form")]');
    }
    getFirstName(){
        return cy.xpath('//input[@name="firstname"]');
    }
    getLastName(){
        return cy.xpath('//input[@name="lastname"]');
    }
    getEmailAddress(){
        return cy.xpath('//input[@name="email"]');
    }
    getPhoneNumber(){
        return cy.xpath('//input[@name="phone"]');
    }
    getCompanyName(){
        return cy.xpath('//input[@name="company"]');
    }
    getPostCode(){
        return cy.xpath('//input[@name="postcode"]');
    }
    getPriority(){
        return cy.xpath('//select[contains(@aria-invalid,"false")]');
    }
    getFeedbackText(){
        return cy.xpath('//textarea[@id="feedback"]');
    }
    getFeedbackSubmitButton(){
        return cy.xpath('//button[@id="submit"]');
    }
}

export default FeedbackFormPage;
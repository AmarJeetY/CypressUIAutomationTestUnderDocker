/* eslint-disable no-undef */
class FeedbackSuccessfulPage{
    getFeedbackSuccesfulMessage(){       
        return cy.xpath('//h2[contains(.,"Thank you for your feedback")]');
    }
}

export default FeedbackSuccessfulPage
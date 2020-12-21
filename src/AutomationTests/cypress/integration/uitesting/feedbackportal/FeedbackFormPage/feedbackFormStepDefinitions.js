/* eslint-disable no-undef */
import {When,Then} from 'cypress-cucumber-preprocessor/steps';
import JsonData from '../../../common/jsonUtilities';
import FeedbackFormPage from './feedbackFormPageObjects'
import FeedbackSuccessfulPage from '../feedbackSuccessfulPage/FeedbackSuccessfulPageObjects'
const feedbackFormInputs = require('./feedbackForm.json')
var FeedbackFormScenario = 'default';
const feedbackPage = new FeedbackFormPage();
const feedbackSuccessfulPage = new FeedbackSuccessfulPage();

When(`I populate all fields in Feedback form as specified in {string} and submit form`,(feedbackformscenario)=>{

    FeedbackFormScenario = feedbackformscenario;
    const feedbackform = new JsonData(feedbackFormInputs,FeedbackFormScenario);   
    
    feedbackPage.getFirstName().type(feedbackform.data.firstname);
    feedbackPage.getLastName().type(feedbackform.data.lastname);
    feedbackPage.getEmailAddress().type(feedbackform.data.emailaddress);
    feedbackPage.getPhoneNumber().type(feedbackform.data.phonenumber);
    feedbackPage.getCompanyName().type(feedbackform.data.companyname);
    feedbackPage.getPostCode().type(feedbackform.data.postcode);
    feedbackPage.getPriority().select(feedbackform.data.priority);
    feedbackPage.getFeedbackText().clear().type(feedbackform.data.feedbacktext);
});

Then(`My feedback submission status is : {string}`, (isFeedbackSubmitSuccessful)=>{
    
    // After successful submission user lands into page saying thank you.
    // Asserting this message on this final page
    var isTrueSet = (isFeedbackSubmitSuccessful === 'true');
    if(isTrueSet)
    {
        feedbackPage.getFeedbackSubmitButton().click();
        feedbackSuccessfulPage.getFeedbackSuccesfulMessage().should('exist');
    }  
    else 
    {
        // If mandatory fields not supplied / wrong values are supplied
        // Submit feeback button is not present in DOM. Checking this for assertion
        feedbackPage.getFeedbackSubmitButton().should('be.disabled');
    }    
});




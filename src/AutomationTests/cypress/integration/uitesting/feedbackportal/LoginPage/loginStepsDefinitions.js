/* eslint-disable no-undef */
import {Given,When,Then} from 'cypress-cucumber-preprocessor/steps';
import JsonData from '../../../common/jsonUtilities';
import LoginPage from './loginPageObjects';
import FeedbackFormPage from '../FeedbackFormPage/feedbackFormPageObjects'
const userCredentials = require('./userCredentials.json');
var LoginScenario = 'default';
const loginPage = new LoginPage();
const feedbackFormPage = new FeedbackFormPage();

 // Default URL for tests when run from local code
 // Change to your desired URL is server is running on other host
let uiTestUrl = "http://localhost:8091/";

// If using containers using docker-compose supplied with project
// Below step will set the url specifed in docker compose
if(process.env.CYPRESS_baseUrl != null)
{
    uiTestUrl = process.env.CYPRESS_baseUrl;    
}
console.log(`url for this test is :${uiTestUrl}`);

Given(`I navigate to feedback portal`, () => {
    cy.reload(true);
    cy.visit(uiTestUrl);
});

When(`I enter credentials specified in {string} on login page and sign in`, (loginscenario) => {    
    LoginScenario = loginscenario;
    const login = new JsonData(userCredentials,LoginScenario);        
    loginPage.getUserName().type(login.data.username);
    loginPage.getPassword().type(login.data.password);
    loginPage.getSubmitButton().click();
});

Then(`After submitting credentials my login status is : {string}`, (isLoginSuccessful) => {
    const login = new JsonData(userCredentials,LoginScenario);
    var isTrueSet = (isLoginSuccessful === 'true');    
    
    if (isTrueSet)
     {
         // After successful login feedback form page opens
         // Assertion by checking existence of following element in feedback form page

         feedbackFormPage.getPageDescription().should('exist');
     }
     else
     {
        // Asserting text for invalid login for respective fields      
        if(login.data.usernameErrorText !== "")
        {
            loginPage.getUserNameHelperText().contains(login.data.usernameErrorText)
        }
        if(login.data.passwordErrorText !== "")
        {
            loginPage.getPasswordHelperText().contains(login.data.passwordErrorText)
        }          
     }   
});
# Automation Tests for testing 'Feedback Portal'

A simple log in page with feedback form behind it.

The feedback form has validation to check that all required items are present, and phone, email and postcodes all look like they should. It doesn't actually do anything with the values, it just takes the user to a 'submitted' page.

## Code fixes applied to test more scenarios

Validation addded for FirstName and LastName field.
 + Firtsname and lastname should be between 3 and 30 characters
 + Can only contain numeric characters ( a to z both cases allowed)

 Fixed minor typos in error messages and fixed order how error messages
 are displayed in login form
## How to run UI Tests on your local machine browser

Please note that below testing was carried out on windows 10 PC
Some of the command may need slight modifications on Linux / MAC

Tests have been run in Chrome and default browser Electron used by Cypress.

If you have downloaded code locally open command prompt in
your root of your project folder and issue following commands
one by one after successfully completion of previous command.

```
npm install
npm run build
npm run serve
```

After issuing above commands you should get message like below.
```
Serving!
    - Local: http://localhost:8091
    - On Your Network: http://{your-public-ip-address}:8091
```

This indicates that web server is started successfully on
your local machine and listening at port 8091

Open a new command prompt and switch current directory to below sub folder :

```
\src\AutomationTests
```

Issue following commands
one by one after successfully completion of previous command

```
npm 
npm install
npx cypress verify
```
After issuing above commands you should get following message

```
√  Verified Cypress! 
C:\Users\{yourusername}\AppData\Local\Cypress\Cache\6.1.0\Cypress
```

Make sure that latest version of Chrome browser is installed on your machine

Run following command which will run tests in your local chrome browser

```
npm run test:ui:headed:chrome
```

If everything is configured correctly you should get report 
of the tests. video and screenshots are generated in cyporess folder
for logging purpose.

Videos and screenshots are useful for debugging tests in case of failure.

For other commands refer package.json in this folder

Once tests are successful browse web server at following address

```
http://localhost:8091
```

To sign in, use the following (hard coded) values:
```
Username: test_user
Password: Password123!
```

## How to run UI Tests inside docker container

Install docker desktop software on your machine

Open command prompt at root of the project and issue following command

```
docker-compose up --force-recreate --exit-code-from cypress
```
This command should create following two containers and set them 
networked together

webserver - Web server will be built and automatically start and listen at port 8091

Cypress - All UI Tests will run inside this container. Log can be seen in command pompt and all log files will be saved in your local folder from where you issued docker compose command.

## About Automation Tests code structure

Automation tests have been created using Cypress UI Testing framework.

All code is written using Javascript using Page Object Model pattern in a node project.

The project can be found in following folder
```
src/AutomationTests/cypress
```

Subfolders under cypress and their usage

* cypress

    + Fixtures - Default foler supplied by Cypress for storing fixtures

    + plugins - any additional plugins you may want to use. For this project additional plugin called cypress-cucumber-preprocessor is used.

    + support 
        - command.js - If you want to add custom commands to cypress
        - index.js - loads global configurations. Cypress-Xpath  +     package is loaded as part of this configuration
    

+ screenshots and videos - Screenshots of the test and recordig of the tests is made available as test artifact for logging / debugging purpose

+ integration 
    + common - For defining test hooks. An file called jsonUtilities contains class called JsonData which is used to convert data from json file into Json object

    + uitesting - 
        - feedbackportal - contains all test javascript and associated json data files
        - feedbackportal.feature - Cucumber feature file for storing all BDD scenarios

        + FeedbackFormPage - Contains three files
            - feedbackform.json - All test data
            - feedbackFormPageObjects.js - Definitions for page objects
            - feedbackFormStepDefinitions - Javascript code to run + cypress tests

        + feedbackSuccessfulPage - Contains one file
            - FeedbackSuccessfulPageObjects.js - Definitions for page objects

        + Login Page - Contains three files
            - loginPageObjects.js - Definitions for page objects
            - loginStepsDefinitions.js - Javascript code to run cypress tests
            - userCredentials.json - All test data


## Node packages used to support this project

```
"cypress": "^6.1.0" - Cypress framework for UI Automation
"cypress-cucumber-preprocessor": "^4.0.0" - Cucumber BDD framework
"cypress-xpath": "^1.6.1" - Mapping page objects by xpath rather than  default cssselector in cypress
```

## Workaround for cypress limitation

In cypress you cant send empty string to an input field. To workaround this issue I am pressing {selectall}{backspace} key in input field to mimic this condition. More info about this at below stackoverflow page 👎

https://stackoverflow.com/questions/55827028/type-will-not-accept-an-empty-string-cypress






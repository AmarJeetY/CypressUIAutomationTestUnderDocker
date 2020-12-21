Feature: Feedback portal

Background: Default step to be called beofore every scenario
   Given I navigate to feedback portal

  @LoginPage
  Scenario Outline: Login to feedback portal - <loginpagescenario>
    When I enter credentials specified in <loginpagescenario> on login page and sign in  
    Then After submitting credentials my login status is : <isLoginSuccesful>
    
  Examples:
    | sr no. | loginpagescenario          | isLoginSuccesful |     
    | 1      | 'validUserNameAndPassword' | 'true'  |
    | 2      | 'wrongUsername'            | 'false' |
    | 3      | 'wrongPassword'            | 'false' |
    | 4      | 'wrongUsernameAndPassword' | 'false' |
    | 4      | 'emptyUserName'            | 'false' |
    | 5      | 'emptyPassword'            | 'false' |
    | 6      | 'emptyUserNameAndPassword' | 'false' |
    | 7      | 'moreThan255CharactersInUsernameAndPassword'| 'false' |
    | 7      | 'specialCharactersInUsername'| 'false' |


  @FeedbackPage
  Scenario Outline: Fill out feedback form - <feedbackformscenario>
    When I enter credentials specified in 'validUserNameAndPassword' on login page and sign in 
    And I populate all fields in Feedback form as specified in <feedbackformscenario> and submit form
    Then My feedback submission status is : <isFeedbackSuccessful>
    
  Examples:
    | sr no. | feedbackformscenario   | isFeedbackSuccessful |
    |  1     | 'allFieldsCorrect'     |  'true'              |  
    |  2     | 'mandatoryFieldsOnly'  |  'true'              |
    |  3     | 'wrongEmailAddress'    |  'false'             |   
    |  4     | 'wrongPhoneNumber'     |  'false'             |   
    |  5     | 'wrongPostCode'        |  'false'             |
    |  6     | 'emptyFeedbackText'    |  'false'             |      
    |  7     | 'priorityHigh'         |  'true'              |      
    |  8     | 'priorityUrgent'       |  'true'              |
    |  9     | 'morethan255CharactersInFirstAndLastName'     | 'false'|
    |  10    | 'numbersinFirstName'                          | 'false'|
    |  11    | 'specialCharactersInLastName'                 | 'false'|
    |  12    | 'lessThanThreeCharactersinFirstAndLastName'   | 'false'|
    |  13    | 'morethan255CharactersInFeedbackText'         | 'true' |

    
    
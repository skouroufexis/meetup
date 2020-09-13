Feature: Specify Number of Events Shown

Scenario: When user hasn’t specified a number 20 is the default number of visible events
Given The user has selected a city and hasn’t specified a number of visible events
When The user has selected a city
Then The default number of visible events is set to 20

Scenario: User can change the number of events they want to see
Given The user decides to change the number of visible events
When The user changes the number of visible events
Then More/less events are visible to the user
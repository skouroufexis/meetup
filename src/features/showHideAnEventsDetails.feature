Feature: Show/Hide an evet's details

Scenario: An event element is collapsed by default
Given The user has selected a city
When The results for the city are loaded and displayed
Then The event elements associated with the selected city will be collapsed by default

Scenario: User can expand an event to see its details
Given The events for the selected city are displayed
When The user clicks on an event’s “show details” button
Then The user should see the details of the selected event

Scenario: User can collapse an event to hide its details
Given The event details of the selected event are being displayed
When The user clicks on an event’s “hide details” button
Then The events details should be hidden
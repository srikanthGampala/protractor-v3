Feature: I am going to validate my website functionalities

Scenario: Calculator Add functionality testing

Given I will navigate to calc site
When I add two numbers "3" and "5"
Then the output displayed should be "8"

Scenario: Calculator Add functionality testing

Given I will navigate to "calc" site
When I add two numbers "2" and "7"
Then the output displayed should be "9"

Scenario Outline: Calculator Add functionality testing

Given I will navigate to "AngularJS" site
When I clicked on header link
And you will navigate to angular page
Then you will enter "<key>" in search box

Example: 
| key |
| hello |
| hey |

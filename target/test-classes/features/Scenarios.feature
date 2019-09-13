#Author: Akash Rastogi
#Date  : 12-Sep-2019
#Feature: List of users scenario.
Feature: List of users scenario
         Here it should list the user and we verify it by verifying te status code and also that one of the user 
         exists from the list of users.
        
   @Demo
    Scenario: Verify one user from the List the users - Get request
		Given I have the base URL
		When I send the GET request for "/users"
		Then I should receive the correct response code "200"
		And  I should receive the correct response with one userName as "Antonette"
		
		@Demo
    Scenario: Make a new Post - Post request
		Given I have the base URL
		When I send the POST request for "/posts" with payload "PostRequest"
		Then I should receive the correct response code "201"
		
		@Demo
    Scenario: Comment on a Post - Put Request
		Given I have the base URL
		When I send the PUT request for "/posts/1" with payload "PutRequest"
		Then I should receive the correct response code "200"
		
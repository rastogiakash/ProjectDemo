$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/Scenarios.feature");
formatter.feature({
  "name": "List of users scenario",
  "description": "         Here it should list the user and we verify it by verifying te status code and also that one of the user \n         exists from the list of users.",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify one user from the List the users - Get request",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Demo"
    }
  ]
});
formatter.step({
  "name": "I have the base URL",
  "keyword": "Given "
});
formatter.match({
  "location": "Scenarios.i_have_the_base_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send the GET request for \"/users\"",
  "keyword": "When "
});
formatter.match({
  "location": "Scenarios.i_send_the_get_request_for_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should receive the correct response code \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Scenarios.i_should_receive_the_correct_response_code_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should receive the correct response with one userName as \"Antonette\"",
  "keyword": "And "
});
formatter.match({
  "location": "Scenarios.i_should_receive_the_correct_response_with_one_userName_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Make a new Post - Post request",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Demo"
    }
  ]
});
formatter.step({
  "name": "I have the base URL",
  "keyword": "Given "
});
formatter.match({
  "location": "Scenarios.i_have_the_base_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send the POST request for \"/posts\" with payload \"PostRequest\"",
  "keyword": "When "
});
formatter.match({
  "location": "Scenarios.i_send_the_POST_request_for_with_payload(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should receive the correct response code \"201\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Scenarios.i_should_receive_the_correct_response_code_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Comment on a Post - Put Request",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Demo"
    }
  ]
});
formatter.step({
  "name": "I have the base URL",
  "keyword": "Given "
});
formatter.match({
  "location": "Scenarios.i_have_the_base_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send the PUT request for \"/posts/1\" with payload \"PutRequest\"",
  "keyword": "When "
});
formatter.match({
  "location": "Scenarios.i_send_the_PUT_request_for_with_payload(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should receive the correct response code \"200\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Scenarios.i_should_receive_the_correct_response_code_something(String)"
});
formatter.result({
  "status": "passed"
});
});
Feature: API Testing

  Scenario: Verify login API
    Given the API is available
    When I send a GET request to "/users"
    Then the response code should be 200

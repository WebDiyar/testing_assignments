package bdd.stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;
import io.cucumber.java.en.Then;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import org.junit.jupiter.api.Assertions;

public class ApiStepDefinitions {

    private static final String BASE_URL = "https://jsonplaceholder.typicode.com";
    private Response response;

    @Given("the API is available")
    public void apiIsAvailable() {
        Assertions.assertNotNull(BASE_URL);
    }

    @When("I send a GET request to {string}")
    public void sendGetRequest(String endpoint) {
        response = RestAssured.get(BASE_URL + endpoint);
    }

    @Then("the response code should be {int}")
    public void verifyResponseCode(int statusCode) {
        Assertions.assertEquals(statusCode, response.getStatusCode());
    }
}

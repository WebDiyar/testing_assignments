package api;

import io.restassured.RestAssured;
import io.restassured.response.Response;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import java.nio.file.Files;
import java.nio.file.Paths;
import org.json.JSONArray;
import org.json.JSONObject;

public class ApiTest {

    private static final String BASE_URL = "https://jsonplaceholder.typicode.com";

    @Test
    public void testLoginAPI() throws Exception {
        String testData = new String(Files.readAllBytes(Paths.get("resources/testdata.json")));
        JSONArray testCases = new JSONObject(testData).getJSONArray("testCases");

        for (int i = 0; i < testCases.length(); i++) {
            JSONObject testCase = testCases.getJSONObject(i);
            if (testCase.getString("id").equals("TC_01")) {
                String endpoint = testCase.getString("endpoint");
                String method = testCase.getString("method");
                JSONObject data = testCase.getJSONObject("data");

                Response response;
                if (method.equalsIgnoreCase("POST")) {
                    response = RestAssured.given()
                            .header("Content-Type", "application/json")
                            .body(data.toString())
                            .post(BASE_URL + endpoint);
                } else {
                    response = RestAssured.get(BASE_URL + endpoint);
                }

                Assertions.assertEquals(200, response.getStatusCode());
            }
        }
    }
}

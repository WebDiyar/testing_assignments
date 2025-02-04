package tests;

import org.junit.jupiter.api.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import utils.ExcelUtils;
import java.net.URL;

public class SauceLabTest {

    public static final String USERNAME = "your_sauce_username";
    public static final String ACCESS_KEY = "your_sauce_access_key";
    public static final String URL = "https://" + USERNAME + ":" + ACCESS_KEY + "@ondemand.saucelabs.com:443/wd/hub";

    @Test
    public void testLogin() throws Exception {
        DesiredCapabilities caps = new DesiredCapabilities();
        caps.setCapability("browserName", "Chrome");
        caps.setCapability("browserVersion", "latest");
        caps.setCapability("platformName", "Windows 10");

        WebDriver driver = new RemoteWebDriver(new URL(URL), caps);
        driver.get("https://example.com/login");

        String username = ExcelUtils.getCellData(2, 1);
        String password = ExcelUtils.getCellData(2, 2);

        System.out.println("Testing with username: " + username + " and password: " + password);
        driver.quit();
    }
}

package tests;

import org.junit.jupiter.api.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import utils.ExcelUtils;
import java.net.URL;

public class BrowserStackTest {

    public static final String USERNAME = "your_browserstack_username";
    public static final String AUTOMATE_KEY = "your_browserstack_access_key";
    public static final String URL = "https://" + USERNAME + ":" + AUTOMATE_KEY + "@hub-cloud.browserstack.com/wd/hub";

    @Test
    public void testLogin() throws Exception {
        DesiredCapabilities caps = new DesiredCapabilities();
        caps.setCapability("browser", "Chrome");
        caps.setCapability("browser_version", "latest");
        caps.setCapability("os", "Windows");
        caps.setCapability("os_version", "10");

        WebDriver driver = new RemoteWebDriver(new URL(URL), caps);
        driver.get("https://example.com/login");

        String username = ExcelUtils.getCellData(1, 1);
        String password = ExcelUtils.getCellData(1, 2);

        System.out.println("Testing with username: " + username + " and password: " + password);
        driver.quit();
    }
}

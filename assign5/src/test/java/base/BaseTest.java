package base;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;

import io.github.bonigarcia.wdm.WebDriverManager;

public class BaseTest {
    protected WebDriver driver;
    protected Logger logger = LogManager.getLogger(this.getClass());

@BeforeMethod
public void setup() {
    logger.info("Initializing WebDriver");

    // WebDriverManager автоматически найдёт драйвер
    WebDriverManager.chromedriver().driverVersion("132.0.6834.84").setup();

    ChromeOptions options = new ChromeOptions();
    options.addArguments("--disable-dev-shm-usage");
    options.addArguments("--no-sandbox");
    options.addArguments("--remote-allow-origins=*");

    driver = new ChromeDriver(options);
    driver.manage().window().maximize();
    logger.info("WebDriver initialized");
}


    @AfterMethod
    public void teardown() {
        if (driver != null) {
            driver.quit();
            logger.info("WebDriver terminated");
        }
    }
}

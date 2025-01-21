package tests;

import org.openqa.selenium.By;
import org.testng.Assert;
import org.testng.annotations.Test;

import base.BaseTest;
import utils.ExtentReportManager;
import utils.ScreenshotUtils;

public class YouTubeSearchTest extends BaseTest {

    @Test
    public void testYouTubeSearch() {
        ExtentReportManager.startTest("YouTube Search Test");

        driver.get("https://www.youtube.com");
        logger.info("Navigated to YouTube");

        driver.findElement(By.name("search_query")).sendKeys("TestNG tutorial");
        driver.findElement(By.id("search-icon-legacy")).click();
        logger.info("Search executed");

        Assert.assertTrue(driver.getTitle().contains("TestNG tutorial"), "Title does not contain expected text.");
        logger.info("Title verification passed");

        ScreenshotUtils.captureScreenshot(driver, "YouTubeSearchTest");
        ExtentReportManager.endTest();
    }
}

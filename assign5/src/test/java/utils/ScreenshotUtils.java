package utils;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

public class ScreenshotUtils {
    private static final Logger logger = LogManager.getLogger(ScreenshotUtils.class);

    public static void captureScreenshot(WebDriver driver, String fileName) {
        File screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
        File destFile = new File("screenshots/" + fileName + ".png");
        try {
            Files.createDirectories(destFile.getParentFile().toPath());
            Files.copy(screenshot.toPath(), destFile.toPath());
            logger.info("Screenshot captured: " + destFile.getAbsolutePath());
        } catch (IOException e) {
            logger.error("Failed to capture screenshot", e);
        }
    }
}

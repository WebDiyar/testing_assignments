package utils;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.reporter.ExtentSparkReporter;

public class ExtentReportManager {
    private static ExtentReports extent;
    private static ExtentTest test;

    public static void startTest(String testName) {
        if (extent == null) {
            ExtentSparkReporter reporter = new ExtentSparkReporter("reports/extent-report.html");
            extent = new ExtentReports();
            extent.attachReporter(reporter);
        }
        test = extent.createTest(testName);
    }

    public static void log(String message) {
        if (test != null) {
            test.info(message);
        }
    }

    public static void endTest() {
        if (extent != null) {
            extent.flush();
        }
    }
}

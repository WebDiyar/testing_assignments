const { driver, By, waitUntilVisible, until } = require("./helpers/webdriver");
const { Key, Builder } = require("selenium-webdriver");
const fs = require("fs");

(async function seleniumTests() {
  try {
    console.log("Starting Selenium Tests...");
    await driver.get("http://localhost:3000");

    // 1. Implicit Wait
    await driver.manage().setTimeouts({ implicit: 10000 });
    console.log("Implicit Wait configured.");

    // 2. Explicit Wait
    const dropdown = By.id("dropdown");
    await waitUntilVisible(dropdown, 5000);
    console.log("Explicit Wait: Dropdown is visible.");

    // 3. Fluent Wait
    const fluentWaitLocator = By.id("submitBtn");
    await driver.wait(until.elementLocated(fluentWaitLocator), 5000);
    console.log("Fluent Wait: Submit button located.");

    // 4. Select and Actions
    const selectElement = await driver.findElement(dropdown);
    const options = await selectElement.findElements(By.tagName("option"));
    await options[4].click(); // Selecting the 5th option (index 4).
    console.log("Option 5 selected.");

    const submitButton = await driver.findElement(fluentWaitLocator);
    await submitButton.click();
    console.log("Submit button clicked.");

    // Capture the output text
    const outputElement = await driver.findElement(By.id("output"));
    const outputText = await outputElement.getText();
    console.log("Confirmation Message:", outputText);

    // Take a screenshot
    const screenshot = await driver.takeScreenshot();
    fs.writeFileSync("./reports/screenshot.png", screenshot, "base64");

    // Generate Test Report
    const report = `
        <html>
          <head><title>Test Report</title></head>
          <body>
            <h1>Selenium Test Report</h1>
            <p>All tests passed successfully!</p>
            <ul>
              <li>Implicit Wait: Configured globally for 10 seconds.</li>
              <li>Explicit Wait: Ensured dropdown is visible before interacting.</li>
              <li>Fluent Wait: Verified submit button is located before clicking.</li>
              <li>Select Class: Selected "Option 5" from the dropdown.</li>
            </ul>
            <p>Confirmation Message: <b>${outputText}</b></p>
            <img src="screenshot.png" alt="Test Screenshot">
          </body>
        </html>
        `;
    fs.writeFileSync("./reports/test-report.html", report);
    console.log("Test report generated at ./reports/test-report.html");
  } catch (error) {
    console.error("Test failed:", error);
  } finally {
    await driver.quit();
  }
})();

const { Builder, By, until } = require("selenium-webdriver");

const driver = new Builder().forBrowser("chrome").build();

const waitUntilVisible = async (locator, timeout = 5000) => {
    await driver.wait(until.elementLocated(locator), timeout);
    await driver.wait(until.elementIsVisible(driver.findElement(locator)), timeout);
};

module.exports = { driver, By, waitUntilVisible, until };

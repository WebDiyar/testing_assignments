const { Builder, By, Key, until } = require('selenium-webdriver');

describe('Web Application Tests', () => {
    let driver;

    beforeAll(async () => {
        driver = await new Builder().forBrowser('chrome').build();
    });

    afterAll(async () => {
        await driver.quit();
    });

    // Test: Search functionality
    test('Search functionality should return results', async () => {
        await driver.get('http://localhost:3000/search'); // Update as needed
        await driver.findElement(By.css('#search-box')).sendKeys('test query', Key.RETURN); // CSS Selector
        const result = await driver.wait(until.elementLocated(By.css('.result-title')), 5000);
        const text = await result.getText();
        expect(text).toContain('test query');
    });

    // Test: Login functionality
    test('Login should succeed with valid credentials', async () => {
        await driver.get('http://localhost:3000/login'); // Update as needed
        await driver.findElement(By.css('#email')).sendKeys('1@mail.ru'); // CSS Selector
        await driver.findElement(By.css('#password')).sendKeys('123456'); // CSS Selector
        await driver.findElement(By.xpath('//button[@type="submit"]')).click(); // XPath
        const welcomeMessage = await driver.wait(until.elementLocated(By.css('.welcome-message')), 5000);
        const text = await welcomeMessage.getText();
        expect(text).toBe('Welcome, 1@mail.ru');
    });

    // Test: Logout functionality
    test('Logout should succeed', async () => {
        await driver.findElement(By.css('#logout')).click(); // CSS Selector
        const loginButton = await driver.wait(until.elementLocated(By.xpath('//button[text()="Login"]')), 5000);
        expect(await loginButton.isDisplayed()).toBeTruthy();
    });

    // Test: Flight booking functionality
    test('Booking a flight should succeed and display confirmation', async () => {
        await driver.get('http://localhost:3000/booking'); // Update as needed
        await driver.findElement(By.css('#from-city')).sendKeys('NYC'); // CSS Selector
        await driver.findElement(By.css('#to-city')).sendKeys('LAX'); // CSS Selector
        await driver.findElement(By.css('#departure-date')).sendKeys('2025-01-15'); // CSS Selector
        await driver.findElement(By.xpath('//button[text()="Search Flights"]')).click(); // XPath
        await driver.findElement(By.xpath('//button[text()="Book Now"]')).click(); // XPath
        const confirmation = await driver.wait(until.elementLocated(By.css('h1.confirmation-title')), 5000);
        const text = await confirmation.getText();
        expect(text).toBe('Booking Confirmation');
    });
});

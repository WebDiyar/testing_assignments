import { strict as assert } from 'assert';
import createDriver from '../utils/webdriver.js';
import LoginPage from '../pages/LoginPage.js';
import BookingPage from '../pages/BookingPage.js';

describe('PHP Travels Booking Test', function () {
    this.timeout(60000); // 60-second timeout
    let driver;

    before(async () => {
        driver = await createDriver(); // Initialize WebDriver
    });

    after(async () => {
        if (driver) {
            await driver.quit(); // Quit WebDriver after tests
        }
    });

    it('should book a flight successfully', async () => {
        const loginPage = new LoginPage(driver);
        const bookingPage = new BookingPage(driver);
        const baseURL = 'https://phptravels.com/login';

        // Navigate to the demo site
        await loginPage.navigateTo(baseURL);

        // Login to the application
        await loginPage.login('diyar.atashka@mail.ru', 'Asd_200205');

        // Search for a flight
        await bookingPage.searchFlight('Dubai', 'New York', '2025-01-15');

        // Validate the booking page title
        const title = await driver.getTitle();
        assert.ok(title.includes('Flights'), 'Booking page title is incorrect!');
    });
});

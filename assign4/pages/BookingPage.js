import { By } from 'selenium-webdriver';
import BasePage from './BasePage.js';

export default class BookingPage extends BasePage {
    constructor(driver) {
        super(driver);
        this.bookingMenu = By.xpath("//a[contains(text(),'Flights')]");
        this.originInput = By.id('autocomplete');
        this.destinationInput = By.id('autocomplete2'); 
        this.dateInput = By.id('departure');
        this.searchButton = By.id('flights-search');
    }

    async searchFlight(origin, destination, date) {
        await this.clickElement(this.bookingMenu);
        await this.typeText(this.originInput, origin);
        await this.typeText(this.destinationInput, destination);
        await this.typeText(this.dateInput, date);
        await this.clickElement(this.searchButton);
    }
}

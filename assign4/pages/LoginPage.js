import { By } from 'selenium-webdriver';
import BasePage from './BasePage.js';

export default class LoginPage extends BasePage {
    constructor(driver) {
        super(driver);
        this.emailInput = By.name('email'); 
        this.passwordInput = By.name('password'); 
        this.loginButton = By.css("button[type='submit']");
    }

    async login(email, password) {
        await this.typeText(this.emailInput, email);
        await this.typeText(this.passwordInput, password);
        await this.clickElement(this.loginButton);
    }
}

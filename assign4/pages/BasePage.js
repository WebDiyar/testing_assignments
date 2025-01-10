export default class BasePage {
    constructor(driver) {
        this.driver = driver;
    }

    async navigateTo(url) {
        await this.driver.get(url);
    }

    async findElement(locator) {
        return await this.driver.findElement(locator);
    }

    async clickElement(locator) {
        const element = await this.findElement(locator);
        await element.click();
    }

    async typeText(locator, text) {
        const element = await this.findElement(locator);
        await element.sendKeys(text);
    }

    async getTitle() {
        return await this.driver.getTitle();
    }
}

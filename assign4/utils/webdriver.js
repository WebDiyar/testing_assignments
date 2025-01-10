import { Builder } from 'selenium-webdriver';

export default async function createDriver() {
    return new Builder().forBrowser('chrome').build();
}

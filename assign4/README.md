# Booking Test with POM Model

This project implements the Page Object Model (POM) design pattern for automating the "Book a Flight" test case of a flight reservation system. The POM design pattern is used to create an object repository for web elements. It reduces code duplication and improves test maintenance.

## Project Structure

The project uses **Node.js** with **Advanced Selenium WebDriver**. Below is the project structure:

```
project-folder/
|-- pages/
|   |-- BasePage.js
|   |-- BookingPage.js
|   |-- LoginPage.js
|-- test/
|   |-- bookingTest.js
|-- utils/
|   |-- webdriver.js
|-- package.json
|-- README.md
```

### Files and Their Purpose

1. **pages/BasePage.js**:
   - Contains reusable methods for interacting with web elements, such as clicking, typing text, and retrieving titles.

2. **pages/BookingPage.js**:
   - Contains specific locators and methods for booking flights.

3. **pages/LoginPage.js**:
   - Contains locators and methods for logging into the system.

4. **test/bookingTest.js**:
   - Contains the main test case for booking a flight.

5. **utils/webdriver.js**:
   - Provides a utility function to initialize a Selenium WebDriver instance.

6. **package.json**:
   - Manages project dependencies and scripts.

7. **README.md**:
   - Documentation for the project.

## Dependencies

- **Node.js**
- **Selenium WebDriver**
- **Mocha**
- **Chai**
- **ChromeDriver**

## How to Run the Project

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd project-folder
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the test:
   ```bash
   npm test
   ```

## Page Object Model (POM) Explanation

The POM model separates the UI and test logic. Each page of the web application is represented by a corresponding class.

### POM Implementation in Code

- **BasePage.js**:
  - Provides generic methods (e.g., `findElement`, `clickElement`) for interacting with elements.
- **BookingPage.js**:
  - Represents the flight booking page, with specific locators and actions for searching flights.

### Example:

To search for a flight:
```javascript
await bookingPage.searchFlight('Dubai', 'New York', '2025-01-15');
```

## Code Highlights

### Booking Page Locators and Methods

```javascript
this.bookingMenu = By.xpath("//a[contains(text(),'Flights')]");
this.originInput = By.id('autocomplete');
this.destinationInput = By.id('autocomplete2');
this.dateInput = By.id('departure');
this.searchButton = By.id('flights-search');
```

### Test Validation

The booking test ensures the page title contains the word "Flights":
```javascript
const title = await driver.getTitle();
assert.ok(title.includes('Flights'), 'Booking page title is incorrect!');
```

### Locator Techniques

- **CSS Selectors** (e.g., for login button):
  ```javascript
  this.loginButton = By.css("button[type='submit']");
  ```
- **XPath** (e.g., for booking menu):
  ```javascript
  this.bookingMenu = By.xpath("//a[contains(text(),'Flights')]");
  ```

## Scoring Criteria

- **Locator Techniques**:
  - XPath: Used in `BookingPage.js`.
  - CSS Selector: Used in `LoginPage.js`.
- **Title Checkpoint**:
  - The test validates the title after booking a flight.

## Expected Output

When the test is run, it should:
1. Navigate to the login page.
2. Log in with valid credentials.
3. Navigate to the flight booking page.
4. Enter flight details and search for flights.
5. Validate the booking page title.

If successful, the test will pass without errors. If the title validation fails, the test will display an error message.

---

This project demonstrates the implementation of a robust, maintainable, and scalable test automation framework using the POM design pattern.


# Selenium Test Report

https://www.youtube.com/watch?v=RP8xxk-v1Bs

## Overview
This project implements advanced Selenium WebDriver features including:
- Implicit Wait
- Explicit Wait
- Fluent Wait
- Action Class
- Select Class

A web application was created to test these features, and results were documented.

---

## Test Details

### 1. Implicit Wait
- Configured globally for 10 seconds.
- Ensures elements are available before interacting.

### 2. Explicit Wait
- Explicitly waits for the dropdown to be visible.
- Ensures smooth operation without relying on global wait.

### 3. Fluent Wait
- Locates the submit button with retries before timeout.
- Useful for elements that load dynamically.

### 4. Action Class
- Hovered over and clicked the submit button.
- Simulated real user interaction.

### 5. Select Class
- Selected "Option 5" from the dropdown.
- Demonstrates interaction with dropdown menus.

---

## Confirmation Message
**Output**: "You selected: Option 5"

---

### Features
- **Implicit Wait**: Configures a global timeout for element searches.
- **Explicit Wait**: Waits for a specific element condition to be met.
- **Fluent Wait**: Polls for an element with custom timeout and frequency.
- **Action Class**: Simulates complex user interactions like hovering and clicking.
- **Select Class**: Allows interaction with dropdowns.
  
 ---

## Report and Screenshot
The test report is generated as `reports/test-report.html`, with a screenshot of the application.
- Test Report: [test-report.html](./reports/test-report.html)
- Screenshot: [screenshot.png](./reports/screenshot.png)

---

## Running the Project

1. Start the server:
   ```bash
   npm start

2. Start the testing:
   ```bash
   npm test


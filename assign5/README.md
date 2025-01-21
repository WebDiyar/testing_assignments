# Project Report: Java Testing Project

This project is a demonstration of setting up and using **TestNG**, **Log4j**, **Extent Reports**, and **Selenium WebDriver** for automated testing in Java. It includes a single test case that navigates to YouTube, performs a search, and verifies the page title. The project is built using Maven for dependency management.

---

## Table of Contents
1. [Overview of Technologies](#overview-of-technologies)
2. [Project Features and Scoring](#project-features-and-scoring)
3. [How to Run the Project](#how-to-run-the-project)
4. [Project Structure](#project-structure)

---

## Overview of Technologies

### **1. TestNG**
TestNG is a powerful testing framework inspired by JUnit and NUnit. It is designed for unit, functional, and end-to-end testing with advanced features like:
- Annotations for controlling test execution.
- Parallel test execution.
- Flexible test configuration and dependency handling.

In this project, TestNG is used to write and execute test cases, including setup and teardown using annotations like `@BeforeMethod`, `@Test`, and `@AfterMethod`.

### **2. Log4j**
Apache Log4j is a logging framework used to log application events. It allows for flexible configuration and outputs logs to the console, files, or other destinations.
- Configured using `log4j2.xml` in the project.
- Logs important events, such as WebDriver initialization and test execution progress.

### **3. Extent Reports**
Extent Reports is a reporting library for creating interactive and visually rich test execution reports. In this project:
- Test results are recorded in `extent-report.html`.
- Screenshots of test failures or key moments are captured and included in the reports.

### **4. Selenium WebDriver**
Selenium is a browser automation tool used for web application testing. It interacts with web elements and validates application functionality.

---

## Project Features and Scoring

### **1. Implement TestNG Annotations (30 pts)**
- **Annotations Used**:
  - `@BeforeMethod`: Initializes WebDriver before each test.
  - `@Test`: Contains test logic.
  - `@AfterMethod`: Cleans up and closes the WebDriver instance.

### **2. Configure and Implement Logging (Log4j) (30 pts)**
- Configured via `log4j2.xml`.
- Logs events such as:
  - WebDriver initialization and termination.
  - Test execution steps.
  - Errors and exceptions during execution.
- Outputs logs to both the console and a file (`logs/test.log`).

### **3. Implement Extent Report and Screenshots (40 pts)**
- Integrated Extent Reports for generating HTML test execution reports.
- Screenshots are captured and saved in the `screenshots/` directory.
- Screenshots are included in the Extent Reports for test documentation.

---

## How to Run the Project

### **Prerequisites**
1. Install [Java JDK](https://www.oracle.com/java/technologies/javase-downloads.html).
2. Install [Maven](https://maven.apache.org/download.cgi) and set it up in your system's PATH.
3. Install a modern web browser (Google Chrome).
4. Ensure the ChromeDriver version matches your Chrome browser version.

### **Steps to Run**
1. Clone the repository or download the project files.
2. Navigate to the project root directory.
3. Run the following command to download dependencies:
   ```
   mvn clean install
   ```
4. Execute the TestNG suite:
   ```
   mvn test
   ```
5. Check the outputs:
   - Logs: Located in `logs/test.log`.
   - Test Report: Located in `reports/extent-report.html`.
   - Screenshots: Saved in `screenshots/`.

---

## Project Structure
```
Project Root (java-testing-project)
├── logs/
│   └── test.log                  # Log file created dynamically
├── reports/
│   └── extent-report.html        # ExtentReports HTML output (created dynamically)
├── screenshots/
│   └── (Screenshots saved here)  # Screenshots folder (created dynamically)
├── src/
│   ├── main/
│   │   └── resources/
│   │       └── log4j2.xml        # Log4j2 configuration file
│   └── test/
│       ├── java/
│       │   ├── base/
│       │   │   └── BaseTest.java # Base Test class for WebDriver setup/teardown
│       │   ├── tests/
│       │   │   └── YouTubeSearchTest.java # Test class for YouTube functionality
│       │   └── utils/
│       │       ├── ExtentReportManager.java # ExtentReports management
│       │       └── ScreenshotUtils.java    # Screenshot utility
│       └── resources/
│           └── testng.xml        # TestNG suite XML file
├── pom.xml                        # Maven dependencies and project configuration
└── README.md                      # Project report/documentation
```

---

## Outputs
1. **Log File**:
   - Location: `logs/test.log`
   - Contains detailed logs of test execution.

2. **Extent Report**:
   - Location: `reports/extent-report.html`
   - Interactive report containing test case details and screenshots.

3. **Screenshots**:
   - Location: `screenshots/`
   - Captures screenshots of important test moments.

---

## Conclusion
This project demonstrates a complete automation testing setup using TestNG, Log4j, Extent Reports, and Selenium WebDriver. It highlights the use of proper annotations, logging, and reporting mechanisms to create maintainable and reliable tests.

---


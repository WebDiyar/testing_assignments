# Assignment 6 - Selenium Testing with Apache POI & Cloud Testing

## **Project Overview**
This project implements Selenium WebDriver tests using Apache POI for reading test data from an Excel file and runs them on BrowserStack and Sauce Labs.

## **Technologies Used**
- Java
- Selenium WebDriver
- Apache POI (Excel Handling)
- JUnit 5
- Maven
- BrowserStack / Sauce Labs

## **Project Structure**
```
Assignment6/
│── src/main/java/
│   ├── utils/ExcelUtils.java
│   ├── tests/BrowserStackTest.java
│   ├── tests/SauceLabTest.java
│── resources/testdata.xlsx
│── pom.xml
│── README.md
```

## **Installation & Setup**
1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-repo/Assignment6.git
   cd Assignment6
   ```
2. **Install dependencies:**
   ```sh
   mvn clean install
   ```
3. **Configure your `USERNAME` and `ACCESS_KEY` in `BrowserStackTest.java` and `SauceLabTest.java`** before running the tests.

## **Running the Tests**
- **Run BrowserStack Tests:**
  ```sh
  mvn test -Dtest=tests.BrowserStackTest
  ```
- **Run Sauce Labs Tests:**
  ```sh
  mvn test -Dtest=tests.SauceLabTest
  ```

## **Test Data**
Test data is stored in `resources/testdata.xlsx` in the following format:

| TestCase | Username  | Password  |
|----------|----------|----------|
| TC_01    | testuser | password123 |
| TC_02    | user2    | pass456     |

## **Project Details**
### **1. ExcelUtils.java**
This utility class reads test data from an Excel file using Apache POI.
- **File:** `resources/testdata.xlsx`
- **Functionality:** Fetches username and password for test cases.

### **2. BrowserStackTest.java**
This test runs Selenium WebDriver tests on BrowserStack using the provided credentials.
- **Platform:** Windows 10
- **Browser:** Chrome (latest version)
- **Tests:** Opens login page and verifies data from Excel

### **3. SauceLabTest.java**
Similar to the BrowserStack test but runs on Sauce Labs.
- **Platform:** Windows 10
- **Browser:** Chrome (latest version)
- **Tests:** Uses Excel data to perform login tests

## **Requirements**
- Java (JDK 8+)
- Maven
- BrowserStack / Sauce Labs account
- Internet connection

## **Troubleshooting**
- If `mvn clean install` fails, ensure you have Java and Maven installed correctly.
- If tests fail to connect, verify your **BrowserStack/Sauce Labs credentials** in the test files.
- Check `resources/testdata.xlsx` to ensure test data is correct.

## **License**
This project is for educational purposes only. Feel free to modify and use as needed.

---

Happy Testing! 🚀


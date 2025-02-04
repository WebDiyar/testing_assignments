# Assignment 7 and 8 - API Testing & BDD Implementation

## **Project Overview**
This project implements API testing and behavior-driven development (BDD) using Java, RestAssured, and Cucumber.

## **Technologies Used**
- Java
- RestAssured (API Testing)
- Cucumber (BDD)
- JUnit 5
- Maven

## **Project Structure**
```
Assignment7_8/
│── src/
│   ├── main/
│   │   ├── java/
│   │   │   ├── api/
│   │   │   │   ├── ApiTest.java
│   │   │   ├── bdd/
│   │   │   │   ├── stepdefinitions/
│   │   │   │   │   ├── ApiStepDefinitions.java
│   │   │   │   ├── features/
│   │   │   │   │   ├── api.feature
│── resources/
│   ├── testdata.json
│── pom.xml
│── README.md
```

## **Installation & Running the Project**
### **1. Clone the Project**
```sh
git clone https://github.com/your-repo/Assignment7_8.git
cd Assignment7_8
```

### **2. Install Dependencies**
```sh
mvn clean install
```

### **3. Run API Tests**
```sh
mvn test -Dtest=api.ApiTest
```

### **4. Run BDD Tests**
```sh
mvn test -Dcucumber.features=src/main/java/bdd/features
```

## **Project Details**
- **API Tests:** Defined in `ApiTest.java` using RestAssured
- **BDD Tests:** Implemented with Cucumber in `api.feature`
- **Test Data:** Stored in `testdata.json`

## **License**
This project is for educational purposes. Modify and use as needed.


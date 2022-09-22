# Demoblaze Automation using Cypress

This file contains details to import the project, steps to execute it and view the reports

**Approach**: I decided to follow POM design pattern approach as:  
 1. It would be more scalable if more web pages gets added to the application
 2. Maintainence could be easy

**Prerequisites:**
1. Latest Node.js installed
2. Visual studio code installed
3. Live Server plugin for vscode to view allure reports (cypress has some issues while viewing the reports hence this plugin is used to view reports)


**Technology Used**  
1. Programming language - JavaScript
2. Automation tool - Cypress
3. IDE - Visual Studio Code
4. Reporting - Allure reports 

**This project contains multiple scenarios to validate Demoblaze homepage UI and APIs**

 1. All the test cases are written in GWT format in feature files under features folder
 
**Framework overview** 

 1. cypress/e2e - It contains two folders - API and UI
    a. API - It contains two folders - features which contains the feature file for API test cases and stepDefinitions folder which the step definition file for the feature file
    b. UI - It contains two folders - features which contains the feature file for UI test cases and stepDefinitions folder which the step definition file for the feature file
 2. cypress/fixtures - It contains the json file with login credentials
 3. cypress/pages - It contains the page classes for our webpage to hold properties of the webpage. Eg: CartPage.js contains all the webelements and methods for cart page
 4. cypress/util - It contains multiple utility files containing resuable methods like PageAction.js which has all web page related resuable methods like click, enter text, etc. or APICalls.js which contains code to perform various API calls like POST, GET,etc
 5. cypress.config.js - It is used to used to store any configuration values like baseUrl, report properties, etc
 5. package.json - it has all the dependencies and scripts required for project.

 
**Steps to Import and Run the project using terminal**

 1. Import project in VS Code
 2. Open Terminal -> New Terminal
 3. Run command -> npm install cypress (This will install all node modules) 
 4. Run command -> npm run tests
 5. Run command -> npm run allure:report (Note: Cypress cucumber has some issue with the generation of the allure reports, hence requesting you to run command "npm run allure:report" after the execution of all tests are completed via commandline)
 6. Reports gets generated and can be seen under allure-report directory with name **index.html**

**Run the project using cypress test runner** 
 1. Open Terminal -> New Terminal
 2. Run command -> npx cypress open
 3. Once runner window is opened, select the feature file to run( E.g. APITest.feature to run API cases or UITest.feature to run UI cases) 
 4. The execution of test cases can be seen on browser

**To view execution reports**
 1. To view allure reports, Live server for vs code needs to be installed.
 2. Go to root folder -> allure-report -> index.html
 3. Right click index.html -> Open with Live server
 4. Video can also be viewed under videos directory when test cases are executed through terminal using command mentioned above (npm run test)

**Potential for future work**
 1. Assertions could be better
 2. Exception handling could be added
 3. Reporting could be enhanced
 4. Hardcoded waits can be replaced
 5. code resuabilty could be improved


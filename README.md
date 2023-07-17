# Todoist Automation Testing
## _Web and Mobile Automation Framework for Todoist_

Todoist Automation Testing is a project aimed at providing an automated testing suite for both web and mobile applications of Todoist. We are using Cypress for web testing and WebdriverIO with Appium for mobile testing.

- Clone the repo
- Install the dependencies
- Run the tests
- ✨Magic ✨

## Features
- Web and mobile testing
- Validating Todoist application functionalities
- Ability to run tests in GUI or command line
- Easy setup and execution
- Detailed reporting

## Tech
This project uses a number of open-source packages:
- Typescript - A superset of Javascript!
- Cypress - Fast, easy and reliable testing for anything that runs in a browser.
- WebdriverIO - Next-gen browser and mobile automation test framework for Node.js
- Appium - An open-source tool for automating native, mobile web, and hybrid applications on iOS and Android platforms
- Node.js - Event-driven I/O server-side JavaScript environment based on V8
- Visual Studio Code - Free source-code editor made by Microsoft
- Real device testing
- And of course, Todoist Automation Testing is open source with a public repository on GitHub.

## Installation
To get started with the project, you need to have Node.js (LTS version) and npm installed.

Install the dependencies.

```sh
git clone https://github.com/harisjasar/todoist-automation-tests.git
cd web_tests (or mobile_tests for mobile testing)
npm install
```

Replace cypress.env.example.json with cypress.env.json
```sh
cypress.env.example.json --> cypress.env.json
```

Replace dummy data in .env file with real data (e.g. Make an account on Todoist and get an API)
```sh
TODOIST_USERNAME={TODOIST_USERNAME}
TODOIST_PASSWORD={TODOIST_PASSWORD}
TODOIST_API_TOKEN={TODOIST_API_TOKEN}
```


To run tests in the command line...

```sh
npx cypress run (for web_tests)
npm run wdio (for mobile_tests)
```

For GUI...

```sh
npx cypress open (for web_tests)
```

## Development
Want to contribute? Great! You can fork the project, make your changes, and submit a pull request. We're always looking for ways to improve.

## P.S.
- Coming Soom: More detailed instructions to start and run web_tests & mobile_test (with screenshots and videos)
- Expanded suite of test cases for both Cypress and WebdriverIO frameworks
  
## Until then, have fun with this one!



https://github.com/harisjasar/todoist-automation-tests/assets/37262783/481ea290-286b-47ef-b59e-c0da69a6042f


https://github.com/harisjasar/todoist-automation-tests/assets/37262783/d9832e02-943b-4582-b4a6-568ccf163deb


https://github.com/harisjasar/todoist-automation-tests/assets/37262783/8d5101fa-e746-4890-aa6d-6c0f50156438




# Playwright Automation Tests

This folder contains automated tests written with Playwright for the Photo Gallery demo application.

The goal of these tests is to cover the most important parts of the application such as navigation, authentication flows, gallery loading and search functionality.

The tests were created with the help of Gemini CLI as part of the AI-assisted testing assignment.

---

## Project Structure

automation/

playwright/tests/
- auth/ – login, registration and password recovery tests  
- gallery/ – gallery loading test  
- navigation/ – menu and navigation tests  
- search/ – search modal and search flow  
- smoke/ – basic application health check  

Other important files:

- `playwright.config.js` – Playwright configuration  
- `package.json` – project dependencies  
- `.gemini/` – Gemini CLI project context  
- `AI_AUTOMATION_LOG.md` – notes about the AI-assisted automation process  

---

## Installation

Before running the tests install the dependencies:

```bash
npm install
npx playwright install
```

## Running the Tests

Run all tests:

```
node node_modules/@playwright/test/cli.js test
```

Run tests in headed mode (visible browser):

```
node node_modules/@playwright/test/cli.js test --headed
```

Run a specific test file:

```
node node_modules/@playwright/test/cli.js test playwright/tests/auth/login.spec.js
```

Show the Playwright HTML report:

```
node node_modules/@playwright/test/cli.js show-report
```

------

## Test Coverage

The current automation suite includes tests for:

- navigation and menu behavior
- login validation scenarios
- registration validation
- password recovery flow
- search modal interaction
- gallery loading
- basic application health check

Each test corresponds to the test IDs defined in the test plan.

------

## Skipped Tests

Some tests are marked with `test.skip()` because they require things that are not available in this demo environment, such as:

- a stable test account
- known registered email addresses
- dynamic test data (unique usernames/emails)

Those tests are left in the code to show the intended test coverage.

------

## Notes

The tests are intentionally kept simple and easy to read.

Page Object Model or additional framework abstraction was not used because the focus of this assignment is on writing clear automation tests rather than building a full automation framework.

Gemini CLI was used to help generate and refine parts of the test suite during development.

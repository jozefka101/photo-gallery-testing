# AI-Assisted Testing Project

This repository contains a testing project for the Photo Gallery demo web application.

The goal of the project was to combine manual testing and AI-assisted automation using modern testing tools.

The project includes manual exploratory testing, an AI-assisted test plan, and an automated test suite implemented with Playwright.

---

## Manual Testing

The `manual-testing` folder contains the results of exploratory testing performed on the Photo Gallery application.

It includes:

- a detailed bug report
- screenshots showing reproduced issues

---

## AI-Assisted Testing

The `ai-assisted-testing` folder documents the use of AI tools during the testing process.

It contains:

- the generated test plan
- analysis of which tests should be automated
- additional issues discovered during analysis
- a log describing how AI tools were used

---

## Test Automation

Automation tests are implemented using Playwright and can be found in the `automation` folder.

The tests cover:

- navigation and menu interactions  
- login and authentication validation  
- registration validation  
- password recovery flow  
- search functionality  
- gallery loading  
- basic application health checks  

More details and instructions for running the tests are available in:

`automation/README.md`

---

## Tools Used

This project used Gemini CLI as an AI coding assistant.

The AI was used to assist with:

- generating parts of the test suite
- identifying DOM selectors
- improving test coverage
- debugging failing tests

The full interaction with the AI tools is documented in:

- `ai-assisted-testing/AI_PROCESS_LOG.md`
- `automation/AI_AUTOMATION_LOG.md`

---

## Notes

The goal of this project was to demonstrate a clear testing workflow that combines:

- manual testing
- AI-assisted analysis
- automated testing
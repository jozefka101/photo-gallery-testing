# AI Automation Log

This document briefly describes how AI tools were used during the development of the Playwright automation tests.

## Tool Used

Gemini CLI

## Purpose

Gemini CLI was used as an AI coding assistant while implementing the Playwright test suite for the Photo Gallery demo application.

The goal was to speed up test development, help generate test structures and assist with identifying reliable selectors for DOM elements.

## How AI Was Used

AI assistance was used for:

- generating initial Playwright test structures
- creating test files grouped by functionality (navigation, authentication, search, gallery)
- suggesting selectors for DOM elements
- helping interpret test failures and error messages
- suggesting improvements to selectors, waits and navigation logic
- generating validation scenarios for authentication related tests

The AI was used interactively during development. Prompts were used to guide the tool step-by-step instead of generating the entire test suite at once.

## Manual Adjustments

The generated code was reviewed and slightly adjusted manually to ensure it works correctly with the real application behavior.

In some cases selectors, navigation steps or assertions needed to be modified so the tests match the actual structure of the application.

The test files were also organized and cleaned up manually to keep the project readable and suitable for a student assignment.

## Notes

Some tests were marked with `test.skip()` because the demo application does not provide stable credentials or predictable test data required for full authentication flows.

In those cases the test structure was kept in the suite but disabled to avoid unstable automated runs.
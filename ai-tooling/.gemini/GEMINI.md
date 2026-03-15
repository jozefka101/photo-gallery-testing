# Gemini Project Context: Playwright Automation Assignment

This project is a Playwright-based automated testing suite for a Photo Gallery Web Application, designed as a student assignment.

## Standards & Conventions
- **Language:** JavaScript (CommonJS).
- **Framework:** Playwright (test/expect).
- **Complexity:** Keep code simple, readable, and linear.
- **Architecture:** Do NOT use Page Object Models (POM) or additional abstraction layers.
- **Naming:** Align test titles with the provided Test IDs (e.g., `NAV-001`, `AUTH-L-001`).
- **Data:** For flows requiring credentials or dynamic data not available, use `test.skip()` with a clear reason.

## Environment & Tooling
- **Base URL:** Defined in `playwright.config.js`. Use relative paths (`./`) in `page.goto()` to ensure correct resolution.
- **Execution:** Due to system restrictions on `npx`, execute tests using:
  `node node_modules/@playwright/test/cli.js test <path_to_spec>`
- **Browsers:** Primary target is Chromium.

## Test IDs & Coverage
- **Navigation (NAV):** Menu and site navigation.
- **Authentication (AUTH):** Login (L), Registration (R), Password Recovery (PR).
- **Gallery (GAL):** Content loading and display.
- **Search (SEA):** Search modal and results.
- **Smoke (PERF):** Application health and basic performance.

## Workflow
- Always verify changes by running the specific test file using the `node` command.
- Keep all tests within their respective pre-existing spec files in `playwright/tests/`.
- Maintain the `AI_AUTOMATION_LOG.md` as a record of progress (do not modify unless asked).

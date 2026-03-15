# AI Tooling Session Notes

Gemini CLI was used as an assistant while developing the Playwright automation tests.

The AI was mainly used to help generate the initial test structures, suggest selectors, and assist with debugging when tests did not run as expected. Since this project was developed as part of a learning assignment, AI assistance helped speed up parts of the implementation process.

## Workflow

1. Before starting the automation part, the test scope was defined using `TEST_PLAN.md` and `AUTOMATION_ANALYSIS.md`. Only the tests marked as recommended for automation were considered.

2. An initial prompt describing the assignment requirements and repository structure was prepared and used with Gemini CLI to generate the initial Playwright project scaffolding.

3. Gemini CLI was then used to help generate the basic structure of the test files and organize them by application functionality (navigation, authentication, search, gallery, etc.).

4. Instead of generating the entire test suite at once, the tests were implemented gradually. Prompts were used to generate or adjust tests for specific features one step at a time.

5. The generated code was reviewed and sometimes slightly modified manually to better match the behavior of the application or to fix small issues that appeared when running the tests.

6. When tests failed, Gemini CLI was used to help interpret error messages and suggest possible improvements to selectors or navigation steps.

7. Some scenarios turned out to be difficult to automate reliably because the demo application does not provide stable test credentials or predictable test data. In those cases the tests were left as `test.skip()`.

8. The process was iterative: prompts were adjusted, tests were re-run, and the generated code was refined until the tests worked consistently with the application.

## Notes

Because this was a learning project and not a production automation framework, the focus was on keeping the test suite simple and understandable rather than building a complex testing architecture.

Selectors, navigation logic and assertions were reviewed manually to make sure the tests interact correctly with the actual application behavior.

# Prompts Used During AI-Assisted Automation

This file contains examples of prompts used with Gemini CLI during the development of the Playwright automation tests.

The prompts were used to generate initial test structures, improve selectors, and debug failing tests.

---

### ChatGPT 5.4 Extended Thinking 

**prompt:**

Act as my QA automation mentor and implementation guide.

 I am completing an assignment about AI-assisted test automation. Important: I do NOT want you to generate one giant final solution or tell me to copy-paste code directly from ChatGPT into my project. 

Instead, I want you to guide me step by step through the process of solving the assignment using:

Gemini CLI as the actual AI coding tool inside my development environment. 



**My role:**

-  I will create and manage the repository locally
-  I will use Gemini CLI to generate/edit the actual Playwright code inside the project
-  I will come back to you for planning, next steps, troubleshooting, and prompt-writing help



**Your role:** 

- Help me understand what to do next at each step

- Tell me exactly what I should ask Gemini CLI to do

- Help me structure the repository and files correctly

- Help me decide the implementation order

- Help me debug errors after I run the tests

- Help me document the AI-assisted process properly for submission

  

**Application under test:** https://demo.baasic.com/angular/starterkit-photo-gallery/main

 I will provide these materials: 1. TEST_PLAN.md, 2. AUTOMATION_ANALYSIS.md, 3. optionally BUG_REPORT.md and other related files. 

**Important rules:**

Treat TEST_PLAN.md as the source of truth for actual test definitions, steps, and expected results.

Treat AUTOMATION_ANALYSIS.md as the source of truth for which tests should be automated

Only the tests marked "Recommendation: Automate" should be implemented in Playwright for now

Do not tell me to automate tests marked "Partially Automate" or "Manual" unless I explicitly ask later

Do not give me a giant dump of final code unless I explicitly request a specific file

Focus on guiding me through the implementation process in small, realistic steps

Keep the project suitable for a student assignment: clean, practical, readable, not overengineered

Help me comply with the assignment requirement that the actual coding should be done with an AI coding tool such as Gemini CLI, not by copy-pasting large code blocks from ChatGPT. 

**How I want you to help me:** 

1. First, help me break the assignment into phases.
2. Then tell me exactly what I should do manually in my local repo. 
3. Then tell me exactly what prompt I should send to Gemini CLI for the current phase. 
4. Then wait for my result. 
5. After I return with the output, guide me to the next step. 
6. If something fails, help me interpret the error and decide what to fix. 
7. Help me keep the process aligned with the assignment requirements and deliverables. 



**Your workflow must always be:** 

- Step objective
- What I should do manually
- What I should ask Gemini CLI
- What output I should expect
- What to check before moving on
- Common pitfalls
- What to do next

Do not skip ahead unless I ask. Do not generate final implementation for everything at once. Do not act like the AI coding tool itself. Act as my guide for using Gemini CLI correctly



Start by doing only this:

1. summarize the assignment into practical implementation phases
2. tell me what I should prepare in the repository before opening Gemini CLI, 
3. tell me what exact first prompt I should send into Gemini CLI.



**response:**

I’m grounding this in your uploaded test plan and automation analysis so the phases and first Gemini prompt match the assignment instead of drifting into generic Playwright advice.

Thought for 39s

Perfect. Here’s the clean way to start this so you stay aligned with the assignment and don’t let Gemini run off into overengineered territory.

Your scope should come from the uploaded docs, not from guesswork. Based on your `AUTOMATION_ANALYSIS.md`, the tests currently marked **Recommendation: Automate** are Navigation & Menu, Login, Registration, Password Recovery, Search & Filtering, Home Gallery Load, and `PERF-001`. The analysis explicitly keeps some things only manual or partially automated, so those should stay out for now unless you decide otherwise later. 

## Step objective

Break the assignment into practical implementation phases and start with a repo/bootstrap phase only.

## Assignment phases

Use these phases in this order:

**Phase 1 — Scope lock and repo bootstrap**
 Set up the local repository, initialize Playwright, place the docs in the repo, and scaffold the automation structure. No real test implementation yet.

**Phase 2 — Automation architecture**
 Create the basic folder/file structure inside `automation/playwright`, decide naming conventions, test grouping, config, test-data strategy, and minimal helper utilities.

**Phase 3 — First smoke coverage**
 Implement the simplest and highest-value stable checks first:

- `GAL-001`
- `PERF-001`
- `NAV-001`, `NAV-002`, `NAV-003`, `NAV-004`
   These are high-value and low-complexity, and the test plan also suggests starting with navigation first.

**Phase 4 — Login flow**

- `AUTH-L-001`
- `AUTH-L-002`
- `AUTH-L-003`
- `AUTH-L-004`
- `AUTH-L-005`
   These are core, deterministic flows and explicitly marked for automation.

**Phase 5 — Registration**

- `AUTH-R-002`
- `AUTH-R-003`
- `AUTH-R-004`
- `AUTH-R-005`
   This area already has known validation/account-state issues, so it deserves careful handling and unique test data.

**Phase 6 — Password recovery**

- `AUTH-PR-001`
- `AUTH-PR-002`
- `AUTH-PR-003`
- `AUTH-PR-004`
   Also a high-priority automation area, with known validation defects already observed manually.

**Phase 7 — Search and filtering**

- `SEA-001`
- `SEA-002`
- `SEA-003`
- `SEA-004`
- `SEA-005`
   Search is one of the main app functions and already has known instability/defect signals, so it comes after the base app and auth flows are in place.

**Phase 8 — Stabilization**
 Refine selectors, remove duplication, add minimal helpers, make tests readable, and keep the suite student-friendly rather than “framework-y.”

**Phase 9 — Submission docs**
 Finish `README.md` and `AI_AUTOMATION_LOG.md`, documenting what you asked Gemini to do, what you reviewed manually, what you changed, and which tests were intentionally not automated because the analysis marked them as partial/manual. 

## What you should do manually before opening Gemini CLI

Create this repo shape first:

automation/
├── playwright/
├── package.json
├── README.md
└── AI_AUTOMATION_LOG.md

Inside `automation/playwright`, also place copies of:

- `TEST_PLAN.md`
- `AUTOMATION_ANALYSIS.md`
- optionally `BUG_REPORT.md` or your additional bugs file

Then do this manually:

1. Create the `automation` folder.
2. Open a terminal in `automation`.
3. Run `npm init -y`.
4. Create empty `README.md`.
5. Create empty `AI_AUTOMATION_LOG.md`.
6. Create `playwright/` folder.
7. Copy your uploaded docs into `automation/playwright/` so Gemini can reference them locally.
8. Initialize git if you have not already.
9. Make an initial commit before Gemini starts changing files.

I’d also strongly recommend you add one tiny note into `AI_AUTOMATION_LOG.md` manually before Gemini does anything, for example:

# AI Automation Log

## Session 1
- Tool used: Gemini CLI
- Purpose: bootstrap Playwright project structure based on TEST_PLAN.md and AUTOMATION_ANALYSIS.md
- Human decisions:
  - Only tests marked "Recommendation: Automate" will be implemented at this stage.
  - Project should remain simple and suitable for a student assignment.

## What you should ask Gemini CLI

Your **first prompt** should be for scaffolding only. Not test implementation yet.

Use this exact prompt:

You are helping me scaffold a Playwright automation project for a student assignment.

Context:
- Application under test: https://demo.baasic.com/angular/starterkit-photo-gallery/main
- The repository root is already prepared.
- The key source documents are in ./playwright/TEST_PLAN.md and ./playwright/AUTOMATION_ANALYSIS.md
- Treat TEST_PLAN.md as the source of truth for test definitions, steps, and expected results.
- Treat AUTOMATION_ANALYSIS.md as the source of truth for what should be automated.
- Only tests marked "Recommendation: Automate" should be included in the implementation scope for now.
- Do not include tests marked "Partially Automate" or "Manual".
- Keep the project simple, readable, and appropriate for a student submission.
- Do not overengineer the framework.

Your task right now is ONLY project scaffolding and planning, not full test implementation.

Please do the following:
1. Read ./playwright/TEST_PLAN.md and ./playwright/AUTOMATION_ANALYSIS.md
2. Create a simple Playwright project structure inside ./playwright suitable for this assignment
3. Add a minimal Playwright config
4. Add package scripts in package.json for running tests, headed mode, and report viewing
5. Create placeholder spec files grouped by feature for ONLY the tests that are recommended for automation
6. Create a small, sensible folder structure for:
   - tests/specs
   - page objects or reusable helpers only if truly needed
   - test data
   - utilities
7. Add comments or TODO notes inside placeholder files showing which test IDs belong in each file
8. Create or update README.md with a short section describing the planned structure and scope
9. Do not implement the actual test bodies yet
10. Do not invent extra coverage outside the approved automation scope

Important constraints:
- Keep naming clean and obvious
- Prefer clarity over abstraction
- Avoid advanced patterns unless necessary
- The final structure must be easy for a reviewer to understand

After making changes, give me:
- a summary of files created/updated
- the proposed folder structure
- the list of test IDs that are in scope for automation
- any assumptions that need my review before we start implementing tests

## What output you should expect

Gemini should give you:

- a proposed Playwright folder structure
- updated `package.json`
- a basic Playwright config
- empty or placeholder spec files
- a clear list of in-scope automated test IDs only

The in-scope list should match this approved automation scope:

- `NAV-001` to `NAV-004`
- `AUTH-L-001` to `AUTH-L-005`
- `AUTH-R-002` to `AUTH-R-005`
- `AUTH-PR-001` to `AUTH-PR-004`
- `SEA-001` to `SEA-005`
- `GAL-001`
- `PERF-001`

## What to check before moving on

Before you accept Gemini’s changes, verify these things:

- It did **not** include partial/manual items like `GAL-002`, `GAL-003`, `PERF-002`, `PERF-003`, accessibility checks, footer checks, or social login flows. Those are not in current implementation scope. 
- It did **not** generate a giant full suite already.
- The structure is readable and not bloated.
- Test files are grouped sensibly by feature.
- The README and AI log stay assignment-friendly.

## Common pitfalls

- Gemini may try to automate too much because the test plan has many “Automation candidate” items, but your rule is stricter: only what `AUTOMATION_ANALYSIS.md` says to automate.
- It may add fancy abstractions too early.
- It may include unstable flows immediately, especially registration/search edge cases that already showed defects in manual testing. Those flows belong later, not in the bootstrap step. 
- It may assume stable test credentials or pre-created users before you’ve decided the test-data strategy.

## What to do next

Run that prompt in Gemini CLI, then send me:

- the folder tree Gemini created
- the files it changed
- any assumptions Gemini listed
- any code/config output you want me to review

Then I’ll guide you into the next phase only.



### **Gemini CLI prompt:**

You are helping me scaffold a Playwright automation project for a student assignment.

Context:
- Application under test: https://demo.baasic.com/angular/starterkit-photo-gallery/main
- The repository root is already prepared.
- The key source documents are in ./playwright/TEST_PLAN.md and ./playwright/AUTOMATION_ANALYSIS.md
- Treat TEST_PLAN.md as the source of truth for test definitions, steps, and expected results.
- Treat AUTOMATION_ANALYSIS.md as the source of truth for what should be automated.
- Only tests marked "Recommendation: Automate" should be included in the implementation scope for now.
- Do not include tests marked "Partially Automate" or "Manual".
- Keep the project simple, readable, and appropriate for a student submission.
- Do not overengineer the framework.

Your task right now is ONLY project scaffolding and planning, not full test implementation.

Please do the following:
1. Read ./playwright/TEST_PLAN.md and ./playwright/AUTOMATION_ANALYSIS.md
2. Create a simple Playwright project structure inside ./playwright suitable for this assignment
3. Add a minimal Playwright config
4. Add package scripts in package.json for running tests, headed mode, and report viewing
5. Create placeholder spec files grouped by feature for ONLY the tests that are recommended for automation
6. Create a small, sensible folder structure for:
   - tests/specs
   - page objects or reusable helpers only if truly needed
   - test data
   - utilities
7. Add comments or TODO notes inside placeholder files showing which test IDs belong in each file
8. Create or update README.md with a short section describing the planned structure and scope
9. Do not implement the actual test bodies yet
10. Do not invent extra coverage outside the approved automation scope

Important constraints:
- Keep naming clean and obvious
- Prefer clarity over abstraction
- Avoid advanced patterns unless necessary
- The final structure must be easy for a reviewer to understand

After making changes, give me:
- a summary of files created/updated
- the proposed folder structure
- the list of test IDs that are in scope for automation
- any assumptions that need my review before we start implementing tests
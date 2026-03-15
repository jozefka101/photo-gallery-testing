## 1. Navigation & Menu

**Test IDs:** NAV-001, NAV-002, NAV-003, NAV-004
 **Recommendation:** Automate
 **Automation Priority:** High

**Reasoning:** These tests are automation candidates because they cover the main navigation paths of the application. If navigation breaks, users may not be able to access any of the other functionalities so the priority is high. The ROI is high because these are low-complexity checks that protect a large part of the application. Manual testing also showed that navigation is a sensitive area because the menu is hidden behind a hover interaction, which shows that there might be more issues.



## 2. Login

**Test IDs:** AUTH-L-001, AUTH-L-002, AUTH-L-003, AUTH-L-004, AUTH-L-005
 **Recommendation:** Automate
 **Automation Priority:** High

**Reasoning:** Login tests are automation candidates because login is a critical feature and the expected outcomes are clear and easy to verify and executed often. Successful login, invalid login, empty field validation, session persistence after refresh, and logout are all deterministic checks with clear results. The risk is high because a broken login directly affects access to the application. The implementation complexity is low to medium, depending on whether a stable test account is available. The ROI is high because a small automation can cover a core business flow. 



## 3. Registration

**Test IDs:** AUTH-R-002, AUTH-R-003, AUTH-R-004, AUTH-R-005
 **Recommendation:** Automate
 **Automation Priority:** High

**Reasoning:** Registration is one of the strongest automation candidates because defects were found during manual testing. The registration form showed inconsistent validation behavior, and validation errors remained visible even after entering correct input. These tests are good for automation because they follow simple logic and have very clear expected outcomes: valid input should be accepted, empty required fields should be rejected, invalid email formats should be rejected, and duplicate account data should not be accepted. The risk is high because registration affects user onboarding, and the ROI is high because these checks are easy to repeat. 



## 4. Password Recovery

**Test IDs:** AUTH-PR-001, AUTH-PR-002, AUTH-PR-003, AUTH-PR-004
 **Recommendation:** Automate
 **Automation Priority:** High

**Reasoning:** I selected password recovery for automation because I found a concrete validation issue during manual testing. The form accepted an invalid email format such as “a@b” while rejecting another invalid format such as “a@gmail.”, which shows inconsistent validation behavior. This is a strong automation candidate because the rules are simple and predictable: valid email input should be accepted, invalid formats should be rejected, and empty submissions should be blocked. The risk is high enough because password recovery affects account access, and the ROI is high since these are validation checks that can be executed often.



## 5. Search & Filtering

**Test IDs:** SEA-001, SEA-002, SEA-003, SEA-004, SEA-005
 **Recommendation:** Automate
 **Automation Priority:** High

**Reasoning:** Search is one of the main functions in the application, and manual testing already uncovered a major issue in this area. Search results were partially displayed, but the loading indicator continued spinning indefinitely. The tests are good candidates because they are highly repeatable and have clear expected results: the search modal should open and close correctly, no-result searches should display the correct empty state, pagination should work, and back navigation should return the user without errors. The risk is high because broken search directly affects the main purpose of the gallery, and the ROI is high because these checks can be automated in a stable way if consistent test data is used. 



## 6. Home Gallery Load

**Test IDs:** GAL-001
 **Recommendation:** Automate
 **Automation Priority:** High

**Reasoning:** I would automate this test because it is simple. If the main gallery does not load correctly, the rest of the tests become much less meaningful so the ROI is strong. The check is simple, stable, and fast to run, so it provides good value with very little maintenance effort. The risk is high because this is the main landing area of the application, while the complexity is low. 



## 7. Gallery Open/Close Flow

**Test IDs:** GAL-002, GAL-003
 **Recommendation:** Partially Automate
 **Automation Priority:** Medium

**Reasoning:** I recommend partial automation here because I found a real defect in this flow where closing a photo redirected the user to the homepage instead of returning them to the previous gallery position. However, exact gallery state restoration and scroll position are more fragile to verify in UI automation and can become inconsistent across environments. Because of that, I would automate the basic path of opening a photo, closing it, and verifying the user remains in the gallery flow, but I would still keep finer checks such as exact scroll restoration for manual testing.



## 8. Performance & Stability

**Test IDs:** PERF-001
 **Recommendation:** Automate
 **Automation Priority:** High

**Reasoning:** I selected this test because it is easy to run and gives fast feedback on whether the application is usable at all and loading-state problems already appeared in my manual testing. The complexity is low, the risk is high, and the ROI is good because this test can quickly catch major problems early.

**Test IDs:** PERF-002, PERF-003
 **Recommendation:** Partially Automate
 **Automation Priority:** Medium

**Reasoning:** These tests target stability-related regressions, especially around repeated navigation and repeated search usage. I think they are worth some automated coverage because manual results already showed issues in search and gallery flows. I would keep them as lighter automation. They are useful, but not the first priority compared to core authentication and search scenarios.



## 9. Footer

**Test IDs:** FTR-002
 **Recommendation:** Partially Automate
 **Automation Priority:** Low

**Reasoning:** I found an issue during manual testing: the footer displayed placeholder text (“Blog name”) and the link was not functional. However, the business risk is much lower than for search or authentication, so I would not prioritize it highly. The check is easy to automate, but the overall impact on the product is limited.  

**Test IDs:** FTR-001
 **Recommendation:** Manual
 **Automation Priority:** Low

**Reasoning:** I would keep this test manual because “visible and readable” is partly subjective. Automation can check whether the footer exists, but readability and visual clarity are better judged by a human tester.



## 10. Accessibility & Interaction Clarity

**Test IDs:** A11Y-001, A11Y-003
 **Recommendation:** Partially Automate
 **Automation Priority:** Medium

**Reasoning:** I would partially automate these tests because they can be validated in a structured way. This is especially relevant because manual testing already identified problems with hidden navigation and interaction clarity. At the same time, accessibility cannot be fully covered by automation alone. I would still rely on manual testing for the broader quality of the experience. 

**Test IDs:** A11Y-002, A11Y-004, A11Y-005
 **Recommendation:** Manual
 **Automation Priority:** Low

**Reasoning:** I would keep these tests manual because they depend heavily on visual judgment and usability interpretation. In manual testing, I found issues such as weak focus indication in Firefox, clickable-looking elements that do nothing, and unclear interaction cues. These are important issues, but they are better detected through human observation than through automation. 



## 11. Social Login

**Related Manual Finding:** F01
 **Recommendation:** Partially Automate
 **Automation Priority:** Medium

**Reasoning:** Bug report clearly showed that all social login buttons were non-functional and displayed a configuration error. Because of that, I would recommend partial automation here. I would only automate the verification that the buttons are present, clickable, and correctly initiate the expected redirect or configuration behavior. I would not fully automate the external OAuth provider flow because that adds complexity, instability, and maintenance cost, which lowers ROI. 
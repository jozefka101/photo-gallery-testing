# **Test Plan — Photo Gallery Web Application**

**Application URL:** https://demo.baasic.com/angular/starterkit-photo-gallery/main

# **1. Navigation & Menu**

### **NAV-001 — Open the main menu**

- **Preconditions:** Application home page is open.

- **Test Steps:**

  1. Load the application.
  2. Hover over or click the visible menu trigger in the header.

- **Expected Result:** The navigation menu becomes visible and available for interaction.

- **Priority:** High

- **Type:** Automation candidate

  

### **NAV-002 — Navigate to Home from the menu**

- **Preconditions:** Main menu is open; user is on a non-home screen if possible.

- **Test Steps:**

  1. Open the main menu.
  2. Click **Home**.

- **Expected Result:** The application returns to the gallery home view without error.

- **Priority:** High

- **Type:** Automation candidate

  

### **NAV-003 — Navigate to Login from the menu**

- **Preconditions:** Main menu is open.

- **Test Steps:**

  1. Open the main menu.
  2. Click **Login**.

- **Expected Result:** The login view opens.

- **Priority:** High

- **Type:** Automation candidate

  

### **NAV-004 — Navigate back to gallery from an auth-related view**

- **Preconditions:** User is on Login, Registration, or Password Recovery.

- **Test Steps:**

  1. Open an authentication-related screen.
  2. Use any visible **Home** navigation link/button.

- **Expected Result:** The user returns to the main gallery view.

- **Priority:** Medium

- **Type:** Automation candidate

  

# **2.User Authentication**

## **2.1 Login**

### **AUTH-L-001 — Successful login with valid credentials**

- **Preconditions:** Valid user account exists.

- **Test Steps:**

  1. Open **Login**.
  2. Enter valid credentials.
  3. Submit the form.

- **Expected Result:** The user is authenticated and the UI reflects signed-in state.

- **Priority:** High

- **Type:** Automation candidate

  

### **AUTH-L-002 — Login with invalid credentials**

- **Preconditions:** Login page is open.

- **Test Steps:**

  1. Enter an invalid email/username and/or password.
  2. Submit the form.

- **Expected Result:** Login is rejected and an error message or validation feedback is shown.

- **Priority:** High

- **Type:** Automation candidate

  

### **AUTH-L-003 — Login with empty required fields**

- **Preconditions:** Login page is open.

- **Test Steps:**

  1. Leave all required fields empty.
  2. Submit the form.

- **Expected Result:** Submission is blocked or field-level/global validation feedback is shown.

- **Priority:** High

- **Type:** Automation candidate

  

### **AUTH-L-004 — Login state persists after page refresh**

- **Preconditions:** User is logged in.

- **Test Steps:**

  1. Refresh the page.

- **Expected Result:** The application remains in authenticated state if session persistence is implemented; it must not break or show inconsistent UI.

- **Priority:** Medium

- **Type:** Automation candidate

  

### **AUTH-L-005 — Logout from authenticated state**

- **Preconditions:** User is logged in.

- **Test Steps:**

  1. Click **Logout**.

- **Expected Result:** User is signed out and authenticated-only actions are no longer available.

- **Priority:** High

- **Type:** Automation candidate

  

## **2.2 Registration**

### **AUTH-R-001 — Open registration flow**

- **Preconditions:** Authentication area is accessible.

- **Test Steps:**

  1. Open the authentication area.
  2. Navigate to **Registration**.

- **Expected Result:** Registration form/view opens successfully.

- **Priority:** High

- **Type:** Manual

  

### **AUTH-R-002 — Submit registration with all required visible fields completed**

- **Preconditions:** Registration form is open; unique test data is available.

- **Test Steps:**

  1. Fill all mandatory visible fields with valid data.
  2. Submit the form.

- **Expected Result:** Registration request is accepted or the user receives the system’s defined success/next-step feedback.

- **Priority:** High

- **Type:** Automation candidate

  

### **AUTH-R-003 — Submit registration with empty required fields**

- **Preconditions:** Registration form is open.

- **Test Steps:***

  1. Leave required fields empty.
  2. Submit the form.

- **Expected Result:** Submission is blocked or validation feedback appears on the relevant fields.

- **Priority:** High

- **Type:** Automation candidate

  

### **AUTH-R-004 — Submit registration with invalid email format**

- **Preconditions:** Registration form is open.

- **Test Steps:**

  1. Enter an obviously invalid email format.
  2. Complete other required fields with valid data.
  3. Submit the form.

- **Expected Result:** Invalid email is rejected and clear feedback is shown.

- **Priority:** High

- **Type:** Automation candidate

  

### **AUTH-R-005 — Register with data already used by an existing account**

- **Preconditions:** Existing registered account is available.

- **Test Steps:**

  1. Open registration.
  2. Enter existing account data where uniqueness is required.
  3. Submit.

- **Expected Result:** Registration is rejected with an appropriate message; duplicate account is not created.

- **Priority:** Medium

- **Type:** Automation candidate

  

## **2.3 Password Recovery**

### **AUTH-PR-001 — Open Password Recovery from Login**

- **Preconditions:** Login page is open.

- **Test Steps:**

  1. Click **Forgot password?**

- **Expected Result:** Password recovery view opens.

- **Priority:** High

- **Type:** Automation candidate

  

### **AUTH-PR-002 — Submit Password Recovery with valid registered email**

- **Preconditions:** Registered email is available.

- **Test Steps:**

  1. Open Password Recovery.
  2. Enter a valid registered email.
  3. Submit.

- **Expected Result:** Recovery request is accepted and success feedback is shown.

- **Priority:** High

- **Type:** Automation candidate

  

### **AUTH-PR-003 — Submit Password Recovery with invalid email format**

- **Preconditions:** Password Recovery form is open.

- **Test Steps:**

  1. Enter an obviously invalid email format.
  2. Submit.

- **Expected Result:** Invalid input is rejected and clear feedback is shown.

- **Priority:** High

- **Type:** Automation candidate

  

### **AUTH-PR-004 — Submit Password Recovery with empty field**

- **Preconditions:** Password Recovery form is open.

- **Test Steps:**

  1. Leave required field empty.
  2. Submit.

- **Expected Result:** Submission is blocked or validation feedback is shown.

- **Priority:** High

- **Type:** Automation candidate

  

------



# **3. Photo Gallery & Viewer**

### **GAL-001 — Home gallery loads successfully**

- **Preconditions:** Application home page is open.
- **Test Steps:**
  1. Load the application.
- **Expected Result:** Main gallery content loads without broken-state UI.
- **Priority:** High
- **Type:** Automation candidate

### **GAL-002 — Open a photo from the gallery**

- **Preconditions:** At least one photo is visible in the gallery.

- **Test Steps:**

  1. Click any visible photo thumbnail/card.

- **Expected Result:** The selected photo opens in the application’s implemented viewer/detail state.

- **Priority:** High

- **Type:** Manual

  

### **GAL-003 — Return from opened photo to gallery**

- **Preconditions:** A photo viewer/detail state is open.

- **Test Steps:**

  1. Use the application’s visible back/close navigation.

- **Expected Result:** User returns to the previous gallery/search-results context without application error.

- **Priority:** Medium

- **Type:** Manual

  

------



# **4. Search & Filtering**

### **SEA-001 — Open search modal from header**

- **Preconditions:** Home page is open.

- **Test Steps:**

  1. Click **Search** in the header.

- **Expected Result:** Search modal opens.

- **Priority:** High

- **Type:** Automation candidate

  

### **SEA-002 — Close search modal without searching**

- **Preconditions:** Search modal is open.

- **Test Steps:**

  1. Click the visible close button.

- **Expected Result:** Search modal closes and user stays on current page.

- **Priority:** Medium

- **Type:** Automation candidate

  

### **SEA-003 — Search with a term that returns no results**

- **Preconditions:** Search modal is open.

- **Test Steps:**

  1. Enter a unique nonsense string.

  2. Submit search.

     

- **Expected Result:** Empty state is shown as **Nothing found.**

- **Priority:** High

- **Type:** Automation candidate

  

### **SEA-004 — Navigating search result pages**

- **Preconditions:** Search results contain more than one page.

- **Test Steps:**

  1. Run a search that produces multiple pages.
  2. Click **Next**.
  3. Click **Prev**.

- **Expected Result:** Results page changes correctly and navigation state remains consistent.

- **Priority:** Medium

- **Type:** Automation candidate

  

### **SEA-005 — Back navigation from search results**

- **Preconditions:** Search results page is open.

- **Test Steps:**

  1. Click **Back**.

- **Expected Result:** User returns to the previous gallery/search entry context without error.

- **Priority:** Medium

- **Type:** Automation candidate

  

------



# **5. Footer**

### **FTR-001 — Footer is visible and readable**

- **Preconditions:** Any main page view is open.

- **Test Steps:**

  1. Scroll to the bottom of the page.

- **Expected Result:** Footer is rendered cleanly, readable, and does not overlap page content.

- **Priority:** Medium

- **Type:** Manual

  

### **FTR-002 — Each visible footer link/icon is functional**

- **Preconditions:** Footer contains clickable links/icons.

- **Test Steps:**

  1. Click each visible footer link/icon one by one.

- **Expected Result:** Each item opens its expected destination or behavior; no broken navigation or dead links are present.

- **Priority:** Medium

- **Type:** Manual

  

------



# **6. Performance & Stability**

### **PERF-001 — Initial page load completes without permanent loading state**

- **Preconditions:** None.

- **Test Steps:**

  1. Open the application from a clean browser session.

- **Expected Result:** The app transitions from any loading state into usable content; it does not remain stuck.

- **Priority:** High

- **Type:** Automation candidate

  

### **PERF-002 — Repeated open/close of search modal does not degrade UI**

- **Preconditions:** Home page is open.

- **Test Steps:**

  1. Open and close the search modal 10 times.

- **Expected Result:** No visual corruption, duplicate overlays, or obvious slowdown occurs.

- **Priority:** Medium

- **Type:** Automation candidate

  

### **PERF-003 — Repeated navigation between Home, Login, and Search Results is stable**

- **Preconditions:** App is open.

- **Test Steps:**

  1. Alternate between Home, Login, and Search-related navigation several times.

- **Expected Result:** No broken layout, blank screen, or navigation failure occurs.

- **Priority:** Medium

- **Type:** Automation candidate

  

------



# **7. Accessibility & Interaction Clarity**

### **A11Y-001 — Keyboard-only access to main navigation**

- **Preconditions:** App is open.

- **Test Steps:**

  1. Use only keyboard navigation.
  2. Reach the menu trigger, Home, Login, and Search controls.

- **Expected Result:** Interactive controls are reachable, focusable, and operable by keyboard.

- **Priority:** High

- **Type:** Manual

  

### **A11Y-002 — Visible focus indication on interactive elements**

- **Preconditions:** App is open.

- **Test Steps:**

  1. Tab through menu, login inputs, search inputs, buttons, and footer links.

- **Expected Result:** Focus state is clearly visible on each interactive element.

- **Priority:** High

- **Type:** Manual

  

### **A11Y-003 — Search modal can be completed and closed using keyboard**

- **Preconditions:** Search modal is open.

- **Test Steps:**

  1. Navigate inside the modal with keyboard only.
  2. Submit a search.
  3. Reopen and close the modal with keyboard.

- **Expected Result:** Modal interaction is possible without a mouse and focus does not get lost.

- **Priority:** High

- **Type:** Manual

  

### **A11Y-004 — Form fields have understandable labels and feedback**

- **Preconditions:** Login, Registration, Password Recovery, or Upload Photo form is open.

- **Test Steps:**

  1. Review visible labels, placeholders, and validation messages.

  2. Trigger validation.

     

- **Expected Result:** Labels and feedback are understandable and clearly associated with the relevant action/field.

- **Priority:** Medium

- **Type:** Manual

  

### **A11Y-005 — Gallery/search result items are distinguishable and clickable**

- **Preconditions:** Gallery or search results contain at least one item.

- **Test Steps:**

  1. Review result cards/thumbnails.
  2. Try to identify which parts are interactive.

- **Expected Result:** Clickable items are visually distinguishable and interaction intent is clear.

- **Priority:** Medium

- **Type:** Manual

  

------



# **8. UI / UX Improvement Observations**

These are **not functional defects**. They are usability-focused observations to track separately from execution failures.

| **Observation ID** | **Observation**                                              | **Impact**              | **Priority** | **Suggested Improvement**                                    |
| ------------------ | ------------------------------------------------------------ | ----------------------- | ------------ | ------------------------------------------------------------ |
| UIX-001            | If the menu trigger/icon looks animated or strongly clickable, but only part of that area is actually interactive, users may misread the target. | Interaction ambiguity   | Medium       | Make the clickable area and visual affordance match exactly. |
| UIX-002            | If the authentication area contains large unused whitespace, the primary actions can feel visually distant and less obvious. | Reduced scan efficiency | Medium       | Reduce empty space and visually group related auth actions.  |
| UIX-003            | If multiple auth options are present, their visual hierarchy may not clearly signal the primary path. | Decision friction       | Medium       | Establish clearer visual priority between available sign-in methods. |
| UIX-004            | If search categories are split across multiple nearly identical forms, users may not immediately understand the difference between them. | Discoverability issue   | Low          | Add short helper text or stronger category framing.          |
| UIX-005            | Long upload forms can become tiring on smaller screens if sectioning is weak. | Mobile usability        | Medium       | Group metadata into clearer sections and strengthen visual separation. |
| UIX-006            | Footer content can feel secondary to the point of being overlooked if contrast, spacing, or hierarchy is weak. | Reduced discoverability | Low          | Improve footer spacing and visual clarity without overpowering main content. |



------



## **Suggested execution order**

1. Navigation & Menu
2. Login / Password Recovery / Registration
3. Search & Filtering
4. Gallery & Viewer
5. Footer
6. Accessibility
7. Performance & Stability
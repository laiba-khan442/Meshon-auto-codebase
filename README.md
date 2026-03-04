# Meshon QA Automation Repository

This repository contains automated test scripts and supporting resources for two vehicle management applications: **CarHire** and **MyWheelz**. It serves as a baseline framework for validating core functionality, performing regression checks, and maintaining test coverage for both projects.  

---

## Projects Covered

### CarHire
- Vehicle booking, driver, and owner management
- Fine management
- License and legal documentation workflows
- Vehicle maintenance
- Roles and permissions
- Date-dependent logic and flags

### MyWheelz
- Booking management
- User and vehicle CRUD operations
- Validation of existing core functionality

> Current focus: CRUD operations and validation of existing features for both applications.

---

## Repository Structure

## Car Hire
/carhire
/cypress
/e2e
create-booking.cy.js
update-vehicle.cy.js
/cypress/support
commands.js # Custom Cypress commands
index.js # Support hooks and utilities
/cypress/fixtures /data.json & user_data.json #for structured test data


## MyWheelz
/mywheelz
/cypress
/e2e
create-booking.cy.js
manage-user.cy.js
/cypress/support
commands.js # Custom Cypress commands
index.js # Support hooks and utilities
/cypress/fixtures

/package.json # Node dependencies including Mochawesome


---

## Reporting

- **Mochawesome** is integrated for automated test reporting.
- Reports are generated after every test run and saved in the `/cypress/reports` folder.
- Provides detailed pass/fail statistics, screenshots, and execution logs for debugging and verification.

---

## Test Coverage

- Focused on **basic CRUD operations** for both applications.
- Validating **existing functionality** to ensure stability during regression.
- Includes both **manual and automated test coordination**, with manual test cases tracked in the TCMS.
- Test cases include representative data and boundary scenarios, with legacy data considerations where applicable.

---

## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/laiba-khan442/Meshon-auto-codebase.git
   cd Meshon-auto-codebase

2. Install dependencies:

    npm install

3. Open Cypress:

    npx cypress open

4. Run tests in headless mode:

    npx cypress run

5. View Mochawesome reports:

    open cypress/reports/mochawesome.html

## Notes

Each spec file is organized by project and feature for clarity.

Test data is maintained in /cypress/fixtures/sampleData.json for consistency.

Automation is designed to complement ongoing manual testing, not replace it.

Legacy data and production-specific scenarios are documented separately in the TCMS to prevent blind spots.

Ongoing work includes expanding coverage, improving modularity, and integrating additional reporting metrics.

## Contact & Collaboration

Repository Owner: Laiba Khan

Access to manual test cases (TCMS) has been shared with project leads.

Automation framework is actively under development; contributions or suggestions are welcome from team leads for alignment.

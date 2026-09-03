# User Story

**Title:** User Registration

**As a** new user,
**I want** to register an account,
**So that** I can save and manage my gift list.

## Details and Assumptions
- User must provide a valid email address and password.
- Email must be unique in the system.
- Password must be at least 8 characters long.
- Assumption: User has internet access and a valid email account.

## Acceptance Criteria

```gherkin
Given a user is on the registration page
When the user enters a valid email and password
Then the user account should be created successfully

Given a user is on the registration page
When the user enters an email that already exists
Then the system should display an error message

Given a user is on the registration page
When the user leaves required fields empty
Then the system should prevent submission and show validation errors
```

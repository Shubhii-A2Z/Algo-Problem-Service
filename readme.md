# Controller Layer Unit Tests (Jest)

This file contains **unit tests for the Controller layer**, written using **Jest**. The goal is to test controller logic in isolation, without relying on real service implementations.

---

## 🎯 Purpose of These Tests

* Verify controller behavior independently of the service layer
* Ensure correct HTTP status codes are returned
* Ensure errors are properly forwarded using `next()`
* Prevent regressions in request–response handling

---

## 🧩 Testing Strategy

### Service Layer Mocking

The controller depends on the service layer, so the service is **mocked** using Jest:

```js
jest.mock('../src/services/problem.service');
```

This allows:

* Full isolation of controller logic
* Controlled success and failure scenarios
* Faster and deterministic tests

---

## 🔁 Test Setup (`beforeEach`)

Before every test:

* A mock `req` object is created
* A mock `resp` object is created with chained `status()` and `json()` methods
* A mock `next()` function is created to capture errors

This mimics Express.js behavior without starting a server.

---

## ✅ Test Cases Covered

### 1️⃣ Get All Problems (Success Case)

* Mocks `getAllProblems()` to return an empty array
* Verifies:

  * HTTP status `200 OK` is sent
  * Service method is called exactly once
  * `next()` is NOT called

This confirms correct handling of successful responses.

---

### 2️⃣ Get Problem (Error Case)

* Mocks `getProblem()` to throw an error
* Verifies:

  * Error is passed to `next()`
  * No response (`status` / `json`) is sent

This ensures proper error propagation to Express error-handling middleware.

---

## 🧠 Key Takeaways

* Controllers are tested **independently** of services
* Jest mocks are used to simulate service behavior
* Express request–response cycle is mocked manually
* Errors are validated via `next()` instead of responses

---

## ▶ Running the Tests

```bash
npm run jest
```

These tests are also executed automatically via a **Husky pre-commit hook**, preventing commits when tests fail.

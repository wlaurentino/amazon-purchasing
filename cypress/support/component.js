// now any cookie with the name 'session_id' or 'remember_token'
// will not be cleared before each test runs
/* Cypress.Cookies.defaults({
    preserve: ['session-id', '131-2329599-0471963'],
  }) */

  /* Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  }) */
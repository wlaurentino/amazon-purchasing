// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import loginPage from './pages/login'

/* Cypress.Commands.add('loginUser', function(user){

    loginPage.go()
    loginPage.form(user)

}) */

Cypress.Commands.add('loginUser2', (user) => {
    cy.session([user], () => {
        loginPage.go()
        loginPage.form(user)
    })
  })

require("cypress-xpath");
require('cypress-iframe');


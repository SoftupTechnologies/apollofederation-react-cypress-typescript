// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
}

Cypress.Commands.add('login', () => {
  cy.visit('/');
  cy.get(':nth-child(1) > .bp3-form-content > .bp3-input-group > .bp3-input').type('demo.user1@example.com');
  cy.get(':nth-child(2) > .bp3-form-content > .bp3-input-group > .bp3-input').type('12345678');
  cy.get('.bp3-form-content > .bp3-button').click();
})
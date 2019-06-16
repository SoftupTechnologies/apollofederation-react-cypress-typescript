/// <reference types="Cypress"/>
describe('Should test the login', () => {
  it('Heads to login screen and fills the from', () => {
    cy.visit('/');
    cy.get(':nth-child(1) > .bp3-form-content > .bp3-input-group > .bp3-input').type('shpetim.selaci@softup.co');
    cy.get(':nth-child(2) > .bp3-form-content > .bp3-input-group > .bp3-input').type('12345678');
    cy.get('.bp3-form-content > .bp3-button').click();
  })
  it('should check if we\'re in the timelogs route', () => {
    cy.location('pathname').should('be.equal', '/timelogs');
  })
})
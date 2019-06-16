describe('creates a timelog and checks if it has been added succesfully to our time logs', () => {
  it('logs in and checks if is on the timelogs route', () => {
    cy.login();
    cy.location('pathname').should('be.equal', '/timelogs');
    cy.get('.bp3-spinner').should('exist');
  });
  it('creates a timelog', () => {
    cy.get('.author > .bp3-button').click();
    cy.get('.bp3-input-group > .bp3-input').type(8);
    cy.get('.bp3-fill').type('This is a test log!!');
    cy.get('.bp3-dialog-footer-actions > .bp3-button').click();
    cy.get('.bp3-card:last-child > div').should('have.text', 'This is a test log!!');
    cy.get('.bp3-card:last-child > p').should('have.text', 'Total: 8h');
    cy.get('.bp3-card:last-child').scrollIntoView({
      easing: "linear",
    })
  })
})
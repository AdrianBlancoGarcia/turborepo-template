describe('Tests sobre el Home', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('heroButton', () => {
    cy.get('[data-cy="heroButton"]').should('have.class', 'cta_estudiantes2').scrollIntoView().click();
    cy.url().should('include', '/openmarketers');
  });

  it('eventButton', () => {
    cy.get('[data-cy="eventButton"]').should('have.class', 'cta_estudiantes3').scrollIntoView().click();
    cy.url().should('include', '/openmarketers');
  });

  it('bannerButton', () => {
    cy.get('[data-cy="bannerButton"]').should('have.class', 'cta_estudiantes4').scrollIntoView().click();
    cy.url().should('include', '/openmarketers');
  });

  it('navbarButton', () => {
    cy.get('[data-cy="navbarButton"]').should('have.class', 'cta_estudiantes1').scrollIntoView().click();
    cy.url().should('include', '/openmarketers');
  });
});

export {};

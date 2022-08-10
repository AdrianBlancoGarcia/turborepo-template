describe('Tests sobre curso-backend page', () => {
  beforeEach(() => {
    cy.visit('/back-end');

    cy.viewport(1920, 1080);
  });

  describe('CTA', () => {
    it('CTA del Navbar', () => {
      cy.get('[data-cy="cta_navbar"]').should('have.class', 'cta_estudiantes').scrollIntoView().click();
      cy.url().should('include', Cypress.env('CYPRESS_NEXT_PUBLIC_REGISTER_USERS'));
    });

    it('CTA del Drawer correcto', () => {
      cy.viewport(550, 750);
      cy.get('[data-cy="open_drawer"]').scrollIntoView().click();

      cy.get('[data-cy="cta_drawer"]').should('have.class', 'cta_estudiantes').scrollIntoView().click();
      cy.url().should('include', Cypress.env('CYPRESS_NEXT_PUBLIC_REGISTER_USERS'));
    });

    it('CTA de Hero', () => {
      cy.get('[data-cy="cta_hero"]').should('have.class', 'cta_estudiantes').scrollIntoView().click();
      cy.url().should('include', Cypress.env('CYPRESS_NEXT_PUBLIC_REGISTER_USERS'));
    });

    it('CTA Java RoadMap', () => {
      cy.get('[data-cy="cta_java"]').scrollIntoView().click();
      cy.get('[data-cy="cta_desarrollador"]').scrollIntoView().click();
      cy.url().should('include', Cypress.env('CYPRESS_NEXT_PUBLIC_REGISTER_USERS'));
    });

    it('CTA Python RoadMap', () => {
      cy.get('[data-cy="cta_python"]').scrollIntoView().click();
      cy.get('[data-cy="cta_desarrollador"]').scrollIntoView().click();
      cy.url().should('include', Cypress.env('CYPRESS_NEXT_PUBLIC_REGISTER_USERS'));
    });

    it('CTA Php RoadMap', () => {
      cy.get('[data-cy="cta_php"]').scrollIntoView().click();
      cy.get('[data-cy="cta_desarrollador"]').scrollIntoView().click();
      cy.url().should('include', Cypress.env('CYPRESS_NEXT_PUBLIC_REGISTER_USERS'));
    });

    it('CTA Csharp RoadMap', () => {
      cy.get('[data-cy="cta_csharp"]').scrollIntoView().click();
      cy.get('[data-cy="cta_desarrollador"]').scrollIntoView().click();
      cy.url().should('include', Cypress.env('CYPRESS_NEXT_PUBLIC_REGISTER_USERS'));
    });

    it('CTA Node RoadMap', () => {
      cy.get('[data-cy="cta_node"]').scrollIntoView().click();
      cy.get('[data-cy="cta_desarrollador"]').scrollIntoView().click();
      cy.url().should('include', Cypress.env('CYPRESS_NEXT_PUBLIC_REGISTER_USERS'));
    });
  });
});

export {};

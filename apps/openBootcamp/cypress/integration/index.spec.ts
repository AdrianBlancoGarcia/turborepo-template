describe('Tests sobre el Home', () => {
  beforeEach(() => {
    cy.visit('/');

    cy.viewport(1920, 1080);
  });

  describe('CTAs con la className "cta_estudiantes"', () => {
    it('CTA Ir al Campus', () => {
      cy.get('[data-cy="cta_campus__navbar"]').should('have.class', 'cta_login').scrollIntoView().click();
      cy.url().should('include', Cypress.env('CYPRESS_NEXT_PUBLIC_LOGIN_USERS'));
    });

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

    it('CTA de Testimonios', () => {
      cy.get('[data-cy="cta_button5"]').should('have.class', 'cta_estudiantes').scrollIntoView().click();
      cy.url().should('include', Cypress.env('CYPRESS_NEXT_PUBLIC_REGISTER_USERS'));
    });

    it('CTA de Comunidad', () => {
      cy.get('[data-cy="cta_comunity"]').should('have.class', 'cta_estudiantes').scrollIntoView().click();
      cy.url().should('include', Cypress.env('CYPRESS_NEXT_PUBLIC_REGISTER_USERS'));
    });

    it('CTA de Plataforma', () => {
      cy.get('[data-cy="cta_platform"]').should('have.class', 'cta_estudiantes').scrollIntoView().click();
      cy.url().should('include', Cypress.env('CYPRESS_NEXT_PUBLIC_REGISTER_USERS'));
    });

    it('CTA de Aprendizaje', () => {
      cy.get('[data-cy="cta_trainers"]').should('have.class', 'cta_estudiantes').scrollIntoView().click();
      cy.url().should('include', Cypress.env('CYPRESS_NEXT_PUBLIC_REGISTER_USERS'));
    });

    it('CTA de Ofertas', () => {
      cy.get('[data-cy="cta_offers"]').should('have.class', 'cta_estudiantes').scrollIntoView().click();
      cy.url().should('include', Cypress.env('CYPRESS_NEXT_PUBLIC_REGISTER_USERS'));
    });

    it('CTA del Hero', () => {
      cy.get('[data-cy="cta_hero"]').should('have.class', 'cta_estudiantes').scrollIntoView().click();
      cy.url().should('include', Cypress.env('CYPRESS_NEXT_PUBLIC_REGISTER_USERS'));
    });

    it('CTA de Empresas', () => {
      cy.get('[data-cy="cta_empresas"]').should('have.class', 'cta_empresas').scrollIntoView().click();
      cy.url().should('include', '/empresas');
    });
  });
});

export {};
describe('Tests sobre Empresas Page', () => {
  beforeEach(() => {
    cy.visit('/empresas');

    cy.viewport(1920, 1080);
  });

  describe('CTAs con la className "cta_empresas"', () => {
    it('CTA de Hero', () => {
      cy.get('[data-cy="cta_hero"]').should('have.class', 'cta_empresas').scrollIntoView().click();
      cy.url().should('include', Cypress.env('CYPRESS_NEXT_PUBLIC_TYPEFORM_EMPRESAS'));
    });

    it('CTA de Clients', () => {
      cy.get('[data-cy="cta_clients"]').should('have.class', 'cta_empresas').scrollIntoView().click();
      cy.url().should('include', Cypress.env('CYPRESS_NEXT_PUBLIC_TYPEFORM_EMPRESAS'));
    });

    it('CTA de Features', () => {
      cy.get('[data-cy="cta_features"]').should('have.class', 'cta_empresas').scrollIntoView().click();
      cy.url().should('include', Cypress.env('CYPRESS_NEXT_PUBLIC_TYPEFORM_EMPRESAS'));
    });

    it('CTA de Platform', () => {
      cy.get('[data-cy="cta_platform"]').should('have.class', 'cta_empresas').scrollIntoView().click();
      cy.url().should('include', Cypress.env('CYPRESS_NEXT_PUBLIC_TYPEFORM_EMPRESAS'));
    });

    it('CTA de Contacta con nosotros', () => {
      cy.get('[data-cy="cta_nosotros"]').should('have.class', 'cta_empresas').scrollIntoView().click();
      cy.url().should('include', Cypress.env('CYPRESS_NEXT_PUBLIC_TYPEFORM_EMPRESAS'));
    });

    it('CTA de Software', () => {
      cy.get('[data-cy="cta_software"]').should('have.class', 'cta_empresas').scrollIntoView().click();
      cy.url().should('include', Cypress.env('CYPRESS_NEXT_PUBLIC_TYPEFORM_EMPRESAS'));
    });

    it('CTA del Navbar', () => {
      cy.get('[data-cy="cta_navbar"]').should('have.class', 'cta_empresas').scrollIntoView().click();
      cy.url().should('include', Cypress.env('CYPRESS_NEXT_PUBLIC_TYPEFORM_EMPRESAS'));
    });

    it('CTA del Drawer correcto', () => {
      cy.viewport(550, 750);
      cy.get('[data-cy="open_drawer"]').scrollIntoView().click();

      cy.get('[data-cy="cta_drawer"]').should('have.class', 'cta_empresas').scrollIntoView().click();
      cy.url().should('include', Cypress.env('CYPRESS_NEXT_PUBLIC_TYPEFORM_EMPRESAS'));
    });
  });
});

export {};

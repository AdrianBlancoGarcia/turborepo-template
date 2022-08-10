describe('Tests sobre el Home', () => {
    beforeEach(() => {
      cy.visit('/profesor-informatica');
  
      cy.viewport(1920, 1080);
    });

    const TYPEFORM = 'https://imagina-formacion.typeform.com/to/pV3ESsAC'
  
    describe('CTAs con la className "cta_estudiantes"', () => {
      it('CTA Solicita información', () => {
        cy.get('[data-cy="cta_campus__navbar"]').should('have.class', 'cta_login').scrollIntoView().click();
        cy.url().should('include', TYPEFORM);
      });
  
      it('CTA del Drawer correcto', () => {
        cy.viewport(550, 750);

        cy.get('[data-cy="open_drawer"]').scrollIntoView().click();
  
        cy.get('[data-cy="cta_navbar__drawer"]').should('have.class', 'cta_info').scrollIntoView().click();
        cy.url().should('include', TYPEFORM);
      });
  
      it('CTA de Hero', () => {
        cy.get('[data-cy="cta_hero"]').should('have.class', 'cta_info').scrollIntoView().click();
        cy.url().should('include', TYPEFORM);
      });
  
      it('CTA de Lead', () => {
        cy.get('[data-cy="cta_lead"]').should('have.class', 'cta_info').scrollIntoView().click();
        cy.url().should('include', TYPEFORM);
      });
    });
  });
  
  export {};
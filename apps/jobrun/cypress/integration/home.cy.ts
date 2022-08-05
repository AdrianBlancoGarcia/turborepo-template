describe('🏠 Test en Home 🏠', () => {
  beforeEach('', () => {
    cy.visit('/');
    cy.reload();
  });

  it('Probando CTA del Hero', () => {
    cy.get('[data-cy="cta_hero"]').scrollIntoView().click();
    cy.url().should('include', Cypress.env('NEXT_PUBLIC_TYPEFORM_CANDIDATOS'));
  });

  it('Probando CTA de Publicar una oferta', () => {
    cy.get('[data-cy="cta_publicar"]').scrollIntoView().click();
    cy.url().should('include', Cypress.env('NEXT_PUBLIC_TYPEFORM_EMPRESAS'));
  });

  it('Probando CTA de ir a ofertas', () => {
    cy.get('[data-cy="cta_ofertas"]').scrollIntoView().click();
    cy.url().should('include', '/ofertas');
  });

  it('Probando CTA de Formación', () => {
    cy.get('[data-cy="cta_formacion"]').scrollIntoView().click();
    cy.url().should('include', Cypress.env('NEXT_PUBLIC_CAMPUS_URL') + 'login');
  });

  it('Probando CTA de Recomendación', () => {
    cy.get('[data-cy="cta_recomendacion"]').scrollIntoView().click();
    cy.url().should('include', Cypress.env('NEXT_PUBLIC_TYPEFORM_RECOMENDADOS'));
  });

  it('Probando CTA de Talento', () => {
    cy.get('[data-cy="cta_talento_mobile"]').scrollIntoView().click();
    cy.url().should('include', Cypress.env('NEXT_PUBLIC_TYPEFORM_EMPRESAS'));
  });

  describe('Probando drawer', () => {
    beforeEach(() => {
      cy.get('[data-cy="button_drawer"]').click();
    });

    it('Probando CTA Soy empresa', () => {
      cy.get('[data-cy="cta_soy_empresa_drawer"]').scrollIntoView().click();
      cy.url().should('include', Cypress.env('NEXT_PUBLIC_TYPEFORM_EMPRESAS'));
    });

    it('Probando CTA Unete', () => {
      cy.get('[data-cy="cta_unete_drawer"]').scrollIntoView().click();
      cy.url().should('include', Cypress.env('NEXT_PUBLIC_TYPEFORM_CANDIDATOS'));
    });

    it('Probando CTA ofertas', () => {
      cy.get('[data-cy="link_ofertas_drawer"]').scrollIntoView().click();
      cy.url().should('include', '/ofertas');
    });

    it('Probando CTA OB', () => {
      cy.get('[data-cy="link_ob_drawer"]').scrollIntoView().click();
      cy.url().should('include', Cypress.env('NEXT_PUBLIC_WEB_URL'));
    });
  });

  describe('Probando footer', () => {

    it('Probando CTA Linkedin', () => {
      cy.get('[data-cy="cta_linkedin"]').scrollIntoView().click();
      cy.url().should('include', Cypress.env('LINKEDIN'));
    });

    it('Probando CTA Twitter', () => {
      cy.get('[data-cy="cta_twitter"]').scrollIntoView().click();
      cy.url().should('include', Cypress.env('TWITTER'));
    });

    it('Probando CTA Instagram', () => {
      cy.get('[data-cy="cta_instagram"]').scrollIntoView().click();
      cy.url().should('include', Cypress.env('INSTAGRAM'));
    });

    it('Probando CTA Cookies', () => {
      cy.get('[data-cy="cta_cookies"]').scrollIntoView().click();
      cy.url().should('include', '/politica-de-cookies');
    });

    it('Probando CTA Privacidad', () => {
      cy.get('[data-cy="cta_privacidad"]').scrollIntoView().click();
      cy.url().should('include', '/politica-de-privacidad');
    });

    it('Probando CTA Términos', () => {
      cy.get('[data-cy="cta_terminos"]').scrollIntoView().click();
      cy.url().should('include', '/terminos-y-condiciones');
    });

    it('Probando CTA Empresas Footer', () => {
      cy.get('[data-cy="cta_empresas_footer"]').scrollIntoView().click();
      cy.url().should('include', '/empresas');
    });

    it('Probando CTA Campus Virtual', () => {
      cy.get('[data-cy="cta_campus_footer"]').scrollIntoView().click();
      cy.url().should('include', Cypress.env('NEXT_PUBLIC_CAMPUS_URL'));
    });
  });
});

export {};

describe('👥 Test en Ofertas 👥', () => {
  before('', () => {
    cy.visit('/ofertas');
    cy.reload();
    cy.get('[data-cy="filter_button"]').click();
  });

  it('Filtro Region', () => {
    cy.get('[data-cy="filtro_region"]').select('europa');
    cy.url().should('include', 'europa')
  });

  it('Filtro Especialidad', () => {
    cy.get('[data-cy="filtro_especialidad"]').select('3');
    cy.url().should('include', 'fullstack')
  });

  it('Filtro Experiencia', () => {
    cy.get('[data-cy="filtro_experiencia"]').select('junior');
    cy.url().should('include', 'junior')
  });


  it('Filtro Tecnologia', () => {
    cy.get('[data-cy="filtro_tecnologia"]').select('7');
    cy.url().should('include', 'adonis-js')
  });

  describe('Probando drawer', () => {
    beforeEach(() => {
      cy.visit('/ofertas');
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
    beforeEach(() => {
      cy.visit('/ofertas');
    });

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

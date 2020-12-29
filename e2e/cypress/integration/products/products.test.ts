/// <reference types="Cypress" />

import { NavigationMenu } from '../../pages/Navigation';

context( 'Products/Home Page should', () => {
  beforeEach(() => {
    cy.visit(Cypress.env().baseUrl);
  });

  it('Displays products page', () => {
    cy.clearSession();
    cy.location().should(loc => {
      expect(loc.href).to.eq(NavigationMenu.homeLink);
    });
    cy.contains('join.tsh.io');
  });

  it( 'Should open pop-up on "show details" button click and close it on close button click', () => {
    cy.get('[data-cy=show-details]').first().click();

    cy.get('[data-cy=product-details-popUp]').should('exist');
  } );

  it( 'Should close "show details" pop-up on close button click', () => {
    cy.get('[data-cy=show-details]').first().click();

    cy.get('[data-cy=popUp-close-button]').click();
    cy.get('[data-cy=product-details-popUp]').should( 'not.exist' );
  } );

  it( 'Should close "show details" pop-up on close button click', () => {
    cy.get('[data-cy=show-details]').first().click();

    cy.get('[data-cy=popUp-close-button]').click();
    cy.get('[data-cy=product-details-popUp]').should( 'not.exist' );
  } );

  it( 'Should render products list on promo filter checkbox click', () => {
    cy.get('input[name=promo]').click();

    cy.get('[data-cy=show-details]').should( 'exist' );
  } );

  it( 'Should render products list on active filter checkbox click', () => {
    cy.get('input[name=active]').click();

    cy.get('[data-cy=show-details]').should( 'exist' );
  } );

  it( 'Should show menu after clicking on user avatar', () => {
    cy.get('[data-testid=logged-in-login-button]').click();

    cy.get('[data-cy=logged-in-user-menu]').should( 'exist' );
  } );

  it( 'Should show only promo products when promo filter is set', () => {
    cy.get('input[name=promo]').click();

    cy.get('[data-cy=product-wrapper]')
      .then( wrappers => {
        const wrappersLength = Cypress.$( wrappers ).length;
        cy.get('[data-cy=info-label]').should( 'have.length', wrappersLength );
      } );
  } );

  it( 'Should show only active products when active filter is set', () => {
    cy.get('input[name=active]').click();

    cy.get('[data-cy=product-wrapper]')
      .then( wrappers => {
        const wrappersLength = Cypress.$( wrappers ).length;
        cy.get('[data-cy=show-details]:contains("Show details")').should( 'have.length', wrappersLength );
      } );
  } );

  it( 'Should show only active and promo products when active and promo filters are set', () => {
    cy.get('input[name=promo]').click();
    cy.get('input[name=active]').click();

    cy.get('[data-cy=product-wrapper]')
      .then( wrappers => {
        const wrappersLength = Cypress.$( wrappers ).length;
        cy.get('[data-cy=show-details]:contains("Show details")').should( 'have.length', wrappersLength );
        cy.get('[data-cy=info-label]').should( 'have.length', wrappersLength );
      } );
  } );

  it( 'Should show products after click on pagination button', () => {
    cy.get('[data-cy=pagination-button]').contains( '2' ).click();

    cy.get('[data-cy=show-details]').should( 'exist' );
  } );

  it( 'Should style correct button on corresponding products page', () => {
    cy.get('[data-cy=pagination-button]').contains( '2' ).click();

    cy.get('[data-cy=pagination-button]').contains( '2' ).should( 'have.css', 'color', 'rgb(33, 64, 232)' );
  } );

  it( 'Should have "First" pagination button disabled when on first page', () => {

    cy.get('[data-cy=pagination-button]').contains( 'First' ).should( 'be.disabled' );
  } );

  it( 'Should have "First" pagination button not disabled when switching from first page', () => {
    cy.get('[data-cy=pagination-button]').contains( '2' ).click();

    cy.get('[data-cy=pagination-button]').contains( 'First' ).should( 'not.be.disabled' );
  } );
  
  it( 'Should have "Last" pagination button not disabled when on first page', () => {

    cy.get('[data-cy=pagination-button]').contains( 'Last' ).should( 'not.be.disabled' );
  } );

  it( 'Should have "Last" pagination button disabled when on last page', () => {
    cy.get('[data-cy=pagination-button]').contains( 'Last' ).click();

    cy.get('[data-cy=pagination-button]').contains( 'Last' ).should( 'be.disabled' );
  } );

  it( 'Should go to first products page on clicking "First" pagination button', () => {
    cy.get('[data-cy=pagination-button]').contains( '2' ).click();
    cy.get('[data-cy=pagination-button]').contains( 'First' ).click();

    cy.get('[data-cy=pagination-button]').contains( '1' ).should( 'have.css', 'color', 'rgb(33, 64, 232)' );
  } );

  it( 'Should go to last products page on clicking "Last" pagination button', () => {
    cy.get('[data-cy=pagination-button]').contains( 'Last' ).click();

    cy.get('[data-cy=pagination-button]')
      .then( buttons => {
        const buttonsLength = Cypress.$( buttons ).length;
        cy.get('[data-cy=pagination-button]').eq( buttonsLength - 2 ).should( 'have.css', 'color', 'rgb(33, 64, 232)' );
      } );
  } );
});

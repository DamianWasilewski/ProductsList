/// <reference types="Cypress" />

import { NavigationMenu } from '../../pages/Navigation';

context( 'Products/Home Page should', () => {
  beforeEach(() => {
    cy.visit(Cypress.env().baseUrl);
  });

  it('Display products page', () => {
    cy.clearSession();
    cy.location().should(loc => {
      expect(loc.href).to.eq(NavigationMenu.homeLink);
    });
    cy.contains('join.tsh.io');
  });

  it( 'open pop-up on "show details" button click and close it on close button click', () => {
    cy.get('[data-cy=show-details]').first().click();

    cy.get('[data-cy=product-details-popUp]').should('exist');
  } );

  it( 'close "show details" pop-up on close button click', () => {
    cy.get('[data-cy=show-details]').first().click();

    cy.get('[data-cy=popUp-close-button]').click();
    cy.get('[data-cy=product-details-popUp]').should( 'not.exist' );
  } );

  it( 'close "show details" pop-up on esc keyboard button press', () => {
    cy.get('[data-cy=show-details]').first().click();

    cy.get('body').type('{esc}').trigger('keydown', { force: true });
    cy.get('[data-cy=product-details-popUp]').should( 'not.exist' );
  } );

  it( 'close "show details" pop-up on modal backdrop click', () => {
    cy.get('[data-cy=show-details]').first().click();

    cy.get('[data-cy=modal-backdrop]').click( { force: true } );
    cy.get('[data-cy=product-details-popUp]').should( 'not.exist' );
  } );

  it( 'close "show details" pop-up on close button click', () => {
    cy.get('[data-cy=show-details]').first().click();

    cy.get('[data-cy=popUp-close-button]').click();
    cy.get('[data-cy=product-details-popUp]').should( 'not.exist' );
  } );

  it( 'render products list on promo filter checkbox click', () => {
    cy.get('input[name=promo]').click();

    cy.get('[data-cy=show-details]').should( 'exist' );
  } );

  it( 'render products containing search phrase after button click', () => {
    cy.get('[data-testid=searchField]').type( 'pizza' );
    cy.get('[data-testid=search-button]').click();

    cy.get('[data-cy=product-name]').eq( 1 ).contains( 'Pizza' );
  } );

  it( 'render products containing search phrase after enter press', () => {
    cy.get('[data-testid=searchField]').type( 'pizza' );
    cy.get('body').type('{enter}').trigger('keydown', { force: true });

    cy.get('[data-cy=product-name]').eq( 1 ).contains( 'Pizza' );
  } );

  it( 'render products list on active filter checkbox click', () => {
    cy.get('input[name=active]').click();

    cy.get('[data-cy=show-details]').should( 'exist' );
  } );
  // This one is going to work only for logged in case
  it.skip( 'show menu after clicking on user avatar', () => {
  
    cy.get('[data-testid=logged-in-login-button]').click();

    cy.get('[data-cy=logged-in-user-menu]').should( 'exist' );
  } );

  it( 'show only promo products when promo filter is set', () => {
    cy.get('input[name=promo]').click();

    cy.get('[data-cy=product-wrapper]')
      .then( wrappers => {
        const wrappersLength = Cypress.$( wrappers ).length;
        cy.get('[data-cy=info-label]').should( 'have.length', wrappersLength );
      } );
  } );

  it( 'show only active products when active filter is set', () => {
    cy.get('input[name=active]').click();

    cy.get('[data-cy=product-wrapper]')
      .then( wrappers => {
        const wrappersLength = Cypress.$( wrappers ).length;
        cy.get('[data-cy=show-details]:contains("Show details")').should( 'have.length', wrappersLength );
      } );
  } );

  it( 'show only active and promo products when active and promo filters are set', () => {
    cy.get('input[name=promo]').click();
    cy.get('input[name=active]').click();

    cy.get('[data-cy=product-wrapper]')
      .then( wrappers => {
        const wrappersLength = Cypress.$( wrappers ).length;
        cy.get('[data-cy=show-details]:contains("Show details")').should( 'have.length', wrappersLength );
        cy.get('[data-cy=info-label]').should( 'have.length', wrappersLength );
      } );
  } );

  it( 'show products after click on pagination button', () => {
    cy.get('[data-cy=pagination-button]').contains( '2' ).click();

    cy.get('[data-cy=show-details]').should( 'exist' );
  } );

  it( 'style correct button on corresponding products page', () => {
    cy.get('[data-cy=pagination-button]').contains( '2' ).click();

    cy.get('[data-cy=pagination-button]').contains( '2' ).should( 'have.css', 'color', 'rgb(33, 64, 232)' );
  } );

  it( 'have "First" pagination button disabled when on first page', () => {

    cy.get('[data-cy=pagination-button]').contains( 'First' ).should( 'be.disabled' );
  } );

  it( 'have "First" pagination button not disabled when switching from first page', () => {
    cy.get('[data-cy=pagination-button]').contains( '2' ).click();

    cy.get('[data-cy=pagination-button]').contains( 'First' ).should( 'not.be.disabled' );
  } );
  
  it( 'have "Last" pagination button not disabled when on first page', () => {

    cy.get('[data-cy=pagination-button]').contains( 'Last' ).should( 'not.be.disabled' );
  } );

  it( 'have "Last" pagination button disabled when on last page', () => {
    cy.get('[data-cy=pagination-button]').contains( 'Last' ).click();

    cy.get('[data-cy=pagination-button]').contains( 'Last' ).should( 'be.disabled' );
  } );

  it( 'go to first products page on clicking "First" pagination button', () => {
    cy.get('[data-cy=pagination-button]').contains( '2' ).click();
    cy.get('[data-cy=pagination-button]').contains( 'First' ).click();

    cy.get('[data-cy=pagination-button]').contains( '1' ).should( 'have.css', 'color', 'rgb(33, 64, 232)' );
  } );

  it( 'go to last products page on clicking "Last" pagination button', () => {
    cy.get('[data-cy=pagination-button]').contains( 'Last' ).click();

    cy.get('[data-cy=pagination-button]')
      .then( buttons => {
        const buttonsLength = Cypress.$( buttons ).length;
        cy.get('[data-cy=pagination-button]').eq( buttonsLength - 2 ).should( 'have.css', 'color', 'rgb(33, 64, 232)' );
      } );
  } );

  it( 'render proper number of products after selecting option from limits per page select input', () => {
    cy.get('[data-testid=ProductsPerPageSelect]')
      .select( '24' )

    cy.get('[data-cy=product-wrapper]').should( 'have.length', '24' ); 
  } );

  it( 'render proper number of products after selecting option from limits per page select input 2 times', () => {
    cy.get('[data-testid=ProductsPerPageSelect]')
      .select( '24' )

    cy.get('[data-testid=ProductsPerPageSelect]')
      .select( '12' )

    cy.get('[data-cy=product-wrapper]').should( 'have.length', '12' ); 
  } );
});

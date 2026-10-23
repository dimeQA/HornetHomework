
import LoginPage from '../../pages/LoginPage.js';

describe('Error user log in', () => {
  const loginPage = new LoginPage();

   beforeEach('Log in as problem user', () => {

    cy.visit('/');

    cy.get('[data-test="username"]', { timeout: 10000 })
      .type('error_user'); //username for this user

    cy.get('[data-test="password"]', { timeout: 10000 })
      .type('secret_sauce'); //pass for this user

    cy.get('[data-test="login-button"]', { timeout: 10000 })
      .click();
  });

  it('Error user Add fleece jacked to cart and confirm (this should fail)', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
    cy.get('.shopping_cart_badge').should('have.text', '1');

  });
});
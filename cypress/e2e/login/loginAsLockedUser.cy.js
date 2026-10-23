
import LoginPage from '../../pages/LoginPage.js';

describe('Locked user', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    cy.visit('/');

    loginPage.usernameInput;
    loginPage.passwordInput;
    loginPage.loginButton;
  });

  it('Check notification', () => {
    cy.get('[data-test="error"]', { timeout: 10000 })
      .should('be.visible')
      .and(
        'contain.text',
        'Epic sadface: Sorry, this user has been locked out.'
      );
  });
});

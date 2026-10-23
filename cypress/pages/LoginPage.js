
class LoginPage {

  get usernameInput() {
    return cy.get('[data-test="username"]', { timeout: 10000 }).type(''); //username for this user
  }

  get passwordInput() {
    return cy.get('[data-test="password"]', { timeout: 10000 }).type(''); //pass for this user
  }

  get loginButton() {
    return cy.get('[data-test="login-button"]', { timeout: 10000 }).click();
  }
}

export default LoginPage;

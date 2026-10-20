import { urls } from '../config/urls';

describe('Login page', () => {
  it('should open the login page', () => {
    cy.visit(`${urls.baseUrl}${urls.login}`);
  });
});
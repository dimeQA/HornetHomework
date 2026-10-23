
describe('Verify log in with problem user', () => {

  //basic but faster aproach
  beforeEach('Log in as problem user', () => {

    cy.visit('https://www.saucedemo.com');

    cy.get('[data-test="username"]', { timeout: 10000 })
      .type(''); //username for this user

    cy.get('[data-test="password"]', { timeout: 10000 })
      .type(''); //pass for this user

    cy.get('[data-test="login-button"]', { timeout: 10000 })
      .click();

  });

  it('Check URL', () => {

   cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');;

  });

  it('Check if onesie image is corect', () => {

  cy.get('[data-test="inventory-item-sauce-labs-onesie-img"]')
  .first()
  .should('have.attr', 'src', '/assets/red-onesie-1200x1500-BrSuq0ic.jpg');

  });

});


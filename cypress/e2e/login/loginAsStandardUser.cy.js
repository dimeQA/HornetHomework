describe('Verify log in with standard user', () => {
 

  beforeEach('Log in as standard user', () => {

    cy.visit("/");

      cy.env(["username", "password"]).then((env) => {
      cy.get('[data-test="username"]').type(env.username, {log : false});

      cy.get('[data-test="password"]').type(env.password, {log: false,});

      cy.get('[data-test="login-button"]', { timeout: 10000 })
      .click();
  });
  });

  it('Check URL', () => {

    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');;

  });

  it('Add item to cart, open cart and check remove button', () => {

    cy.contains('button', 'Add to cart')
      .first()
      .click();

    cy.get('[data-test="shopping-cart-link"]').click();
    cy.get('[data-test="remove-sauce-labs-backpack"]')
    .should('be.visible')
    .and('not.be.disabled')
    .click();

  });

});
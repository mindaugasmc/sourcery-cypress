const credentials = require('../helpers/credentials');

class LoginPage {
  visit() {
    cy.visit('/login-password');
  }

  getUrl() {
    return cy.url();
  }

  getUserEmail() {
    return cy.get('[aria-label="Email"]').type(credentials.email);
  }

  getUserPassword() {
    return cy.get('[aria-label="Password"]').type(credentials.password);
  }

  getLoginButton() {
    return cy.get('.v-btn__content');
  }
}

export default LoginPage;

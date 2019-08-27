import LoginPage from '../objects/loginPage';

const credentials = require('../helpers/credentials');
const loginPage = new LoginPage();

describe('Lunch app login', function() {
  it('Should test login with empty user data', function() {
    loginPage.visit();
    loginPage.getLoginButton().click();
    // loginPage.getLoginButton().contains('.v-btn--loader');
  });

  it('Should be able to login with User', function() {
    loginPage.visit();
    loginPage.getUrl().should('include', '/login-password');
    loginPage.getUserEmail();
    loginPage.getUserPassword();
    loginPage.getLoginButton().click();
  });
});

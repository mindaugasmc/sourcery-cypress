import LoginPage from '../objects/loginPage';
import MainPage from '../objects/mainPage';

const loginPage = new LoginPage();
const mainPage = new MainPage();
const date = '2019-08-28';

describe('User workflow', function() {
  //   beforeEach(function() {
  //     cy.loginAs('Admin');
  //     // loginPage.visit();
  //   });

  it('Should be able to login with User', function() {
    loginPage.visit();
    loginPage.getUrl().should('include', '/login-password');
    loginPage.getUserEmail();
    loginPage.getUserPassword();
    loginPage.getLoginButton().click();
  });

  it('Should be able to create order', function() {
    // mainPage.getUrl().should('include', '/dishes/tuesday/Rudas%20tiek%C4%97jas');
    mainPage.getUrl().should('include', '/dishes/tuesday/Rudas%20teikejas');

    mainPage.visitMenuItem('/dishes/wednesday');
    mainPage
      .getUrl()
      .should('include', '/dishes/wednesday/Raudonas%20tiek%C4%97jas');
    mainPage
      .getDishItem()
      .first()
      .click();
    // if (!mainPage.getOrderListButton().contains('disabled')) {
    //   mainPage.getOrderListButton().click();
    // }
    mainPage.visitMenuItem(`/ordersList/${date}`);
    mainPage.getUrl().should('include', `/ordersList/${date}`);
    mainPage.getSearchField();
    mainPage
      .getTableDataItem()
      .contains('Sriuba')
      .should('have.length', 1);
  });
});

class MainPage {
  visitMenuItem(url) {
    cy.visit(url);
  }

  getUrl() {
    return cy.url();
  }

  getDishItem() {
    return cy.get('.v-card__text');
  }

  getOrderListButton() {
    return cy.get('.orders-list-button');
  }

  getSearchField() {
    return cy.get('[aria-label="Paieška"]').type('admin');
  }

  getTableDataItem() {
    return cy.get('.v-datatable').find('span');
  }
}

export default MainPage;

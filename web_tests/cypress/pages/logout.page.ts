import BasePage from "./base.page";

class LogoutPage extends BasePage {
  get settingsButton() {
    return cy.get('button[aria-label="Settings"]');
  }

  get logoutButton() {
    return cy.get('span:contains("Log out")');
    
  }

}

export default new LogoutPage();
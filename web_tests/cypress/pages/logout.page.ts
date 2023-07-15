import BasePage from "./base.page";

class LogoutPage extends BasePage {
  get settingsButton() {
    return cy.get('button[aria-label="Settings"]');
  }

  get logoutButton() {
    //return cy.get('button[role="menuitem"]').contains('Log out');
    return cy.get('span').filter((index, el) => {
      return el.textContent.trim() === 'Log out';
    });
  }

}

export default new LogoutPage();
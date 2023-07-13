import BasePage from "./base.page";

class LoginPage extends BasePage {
  get emailInput() {
    return cy.get('#element-0');
  }

  get passwordInput() {
    return cy.get('#element-3');
  }

  get loginButton() {
    return cy.get('button[data-gtm-id="start-email-login"]');
  }

  get errorMessage() {
    return cy.get('._8f5b5f2b');
  }
}

export default new LoginPage();

import loginPage from "../../pages/login.page";
import BaseActions from "./base.actions";

class LoginActions extends BaseActions<typeof loginPage> {
    enterUsername(username: string): this {
        this.page.emailInput
            .should('exist')
            .should('be.visible')
            .should('be.enabled')
            .type(username)
            .should('have.value', username);

        return this;
    }

    enterPassword(password: string): this {
        this.page.passwordInput
            .should('exist')
            .should('be.visible')
            .should('be.enabled')
            .type(password)
            .should('have.value', password);

        return this;
    }

    clickLoginButton(): this {
        this.page.loginButton
            .should('exist')
            .should('be.visible')
            .should('be.enabled')
            .click();

        return this;
    }

    login(username: string = Cypress.env('TODOIST_USERNAME'), password: string = Cypress.env('TODOIST_PASSWORD')): this {
        this.navigateTo(Cypress.env('LOGIN_PATH')).enterUsername(username).enterPassword(password).clickLoginButton();
        return this;
    }
}

export default new LoginActions(loginPage);
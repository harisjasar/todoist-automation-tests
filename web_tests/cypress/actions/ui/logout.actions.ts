import logoutPage from "../../pages/logout.page";
import BaseActions from "./base.actions";

class LogoutActions extends BaseActions<typeof logoutPage> {
    clickSettingsButton(): this {
        this.page.settingsButton
            .should('exist')
            .should('be.visible')
            .click();

        return this;
    }

    clickLogoutButton(): this {
        this.page.logoutButton
            .should('exist')
            .should('be.visible')
            .click();

        return this;
    }

    logout(): this {
        this.clickSettingsButton().clickLogoutButton();
        return this;
    }
}

export default new LogoutActions(logoutPage);
import Page from "./page";

class DashboardPage extends Page {
    get hamburgerMenu() {
        return $('//android.widget.ImageButton[@content-desc="Menu"]');
    }

    async openHamburgerMenu() {
        await this.hamburgerMenu.waitForExist();
        await this.hamburgerMenu.waitForDisplayed();
        await this.hamburgerMenu.click();
    }
}

export default new DashboardPage();

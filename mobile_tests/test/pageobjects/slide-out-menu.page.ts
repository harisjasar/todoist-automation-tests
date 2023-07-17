import Page from "./page";

class SlideOutMenuPage extends Page {
    async getProject(projectName: string) {
        return await $(`//androidx.recyclerview.widget.RecyclerView//android.widget.TextView[contains(@text,"${projectName}")]`);
    }

    async clickOnTheProject(projectName: string) {
        const menuOptionElement = await this.getProject(projectName);
        await menuOptionElement.waitForExist();
        await menuOptionElement.waitForDisplayed();
        await menuOptionElement.click();
    }
}

export default new SlideOutMenuPage();

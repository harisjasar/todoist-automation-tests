import LoginPage from '../test/pageobjects/login.page';
import DashboardPage from "../test/pageobjects/dashboard.page";
import SlideOutMenuPage from "../test/pageobjects/slide-out-menu.page";
import apiActions from "../actions/api/api.actions";
import { CreateTask } from "../interfaces/create-task.interface";
import { Project } from "../interfaces/project.interface";
import { CreateTaskResponse } from "../interfaces/create-task-response.interface";
const testData = require('../test/test-data/sampleData.json');

class Helper {
    private projectId: string;
    private createTaskData: CreateTask;
    private taskId: string;

    constructor() {
    }

    async setupTaskAndProject() {
        await apiActions.deleteAllProjects();
        const projectResponse: Project = await apiActions.addProject(testData.projectName);
        this.projectId = projectResponse.id;
        this.createTaskData = { "content": testData.taskContent, "project_id": this.projectId };
        const response: CreateTaskResponse = await apiActions.createTask(this.createTaskData);
        this.taskId = response.id;
    }

    async performLogin() {
        await LoginPage.login(process.env.TODOIST_USERNAME, process.env.TODOIST_PASSWORD);
        await DashboardPage.openHamburgerMenu();
        await SlideOutMenuPage.clickOnTheProject(testData.projectName);
    }

    async verifyTaskManagement() {
        await this.verifyElementWithTextAndClick(this.createTaskData.content);
        await this.verifyElementDoesNotExist(this.createTaskData.content);
        await apiActions.reopenTask(this.taskId);
        await this.verifyElementIsDisplayed(this.createTaskData.content);
    }

    async verifyElementWithTextAndClick(text: string) {
        let elementDetails = await this.findElementWithText(text, true, 10000);
        if (!elementDetails) throw new Error('Element not found');
        await elementDetails.checkmarkElement.click();
    }

    async verifyElementDoesNotExist(text: string) {
        let elementDetails = await this.findElementWithText(text);
        if (elementDetails) throw new Error('Element still exists');
    }

    async verifyElementIsDisplayed(text: string) {
        let elementDetails = await this.findElementWithText(text, true, 10000);
        if (!elementDetails) throw new Error("No root element found with the desired text.");
        if (!(await elementDetails.checkmarkElement.isDisplayed())) throw new Error("The element is not displayed on the page.");
    }

    async findElementWithText(text, enablePolling = false, pollingTime = 5000) {
        if (enablePolling) {
            const endTime = Date.now() + pollingTime;
            while (Date.now() < endTime) {
                const result = await this.attemptToFindElementWithText(text);
                if (result) return result;
                await browser.pause(1000);
            }
        } else {
            return await this.attemptToFindElementWithText(text);
        }
        return null;
    }
    
    async attemptToFindElementWithText(text) {
        const rootElements = await $$('android=new UiSelector().resourceId("com.todoist:id/root")');
        for (let rootElement of rootElements) {
            const textElement = await rootElement.$('android=new UiSelector().resourceId("com.todoist:id/text")');
            if (await textElement.getText() === text) {
                const checkmarkElement = await rootElement.$('android=new UiSelector().resourceId("com.todoist:id/checkmark")');
                return { rootElement, checkmarkElement };
            }
        }
        return null;
    }
}

export default new Helper();

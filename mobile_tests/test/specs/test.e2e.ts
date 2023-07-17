import Helper from "../Helper";
describe('Todoist Task Management', () => {
    before(async () => {
        await Helper.setupTaskAndProject();
        await driver.launchApp();
    });

    it('Close Task via automation, reopen task via API', async () => {
        await Helper.performLogin();
        await Helper.verifyTaskManagement();
    });
});
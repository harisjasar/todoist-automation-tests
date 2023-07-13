import { TodoistApi } from "@doist/todoist-api-typescript";

class ApiActions {
    private api: TodoistApi;

    constructor() {
        this.api = new TodoistApi(Cypress.env('TODOIST_API_TOKEN'))
    }

    public async addProject(projectName: string) {
        try {
            const project = await this.api.addProject({ name: projectName })
            return project;
        } catch (error) {
            throw error;
        }
    }

    public async deleteProject(projectId: string) {
        try {
            await this.api.deleteProject(projectId)
        } catch (error) {
            cy.log(error)
            throw error;
        }
    }
}

export default new ApiActions();
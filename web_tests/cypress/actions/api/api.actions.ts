import { TodoistApi } from "@doist/todoist-api-typescript";
import { Project } from "../../interfaces/project.interface";
import { CreateTask } from "../../interfaces/create-task.interface";
import { CreateTaskResponse } from "../../interfaces/create-task-response.interface";
import { TaskFilterParameters } from "../../interfaces/task-filter-parameters.interface";

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

    public async updateProject(projectId: string, project: Project) {
        try {
            this.api.updateProject(projectId, project)
        } catch (error) {
            cy.log(error)
            throw error;
        }
    }

    public async getTasks(filterParameter: TaskFilterParameters) {
        try {
            const tasks = await this.api.getTasks(filterParameter)
            return tasks;
        } catch (error) {
            cy.log(error)
            throw error;
        }
    }

    public async createTask(task: CreateTask) {
        try {
            console.log("Task to be sent to API: ", task);
            let taskCreated: CreateTaskResponse = await this.api.addTask(task)
            return taskCreated;
        } catch (error) {
            cy.log(error)
            throw error;
        }
    }

    public async deleteAllProjects() {
        try {
            const projects = await this.api.getProjects();
            projects.forEach(async (project) => {
                await this.deleteProject(project.id);
            });
        } catch (error) {
            cy.log(error)
            throw error;
        }
    }
}

export default new ApiActions();
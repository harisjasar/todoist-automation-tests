import apiActions from "../../actions/api/api.actions";
import loginActions from "../../actions/ui/login.actions";
import logoutActions from "../../actions/ui/logout.actions";
import taskCreationActions from "../../actions/ui/task-creation.actions";
import projectHelper from "../../helpers/project.helper";
import taskHelper from "../../helpers/task.helper";
import { CreateTaskResponse } from "../../interfaces/create-task-response.interface";
import { CreateTask } from "../../interfaces/create-task.interface";
import { Project } from "../../interfaces/project.interface";
import { Task } from "../../interfaces/task.interface";

describe("Todoist Task - Web UI tests", () => {
    let projectName: string;
    let projectId: string;
    let taskData: Task;
    let createTaskData: CreateTask;

    beforeEach(() => {
        cy.fixture('projectData').then((data) => {
            projectName = data.projectName;

            cy.wrap(apiActions.addProject(projectName))
                .then((response: Project) => {
                    projectId = response.id;
                }).then(() => {
                    loginActions.login();

                    cy.fixture('taskData').then((data) => {
                        taskData = data as Task;
                    });

                    cy.fixture('createTaskData').then((data) => {
                        createTaskData = data as CreateTask;
                    });
                });
        });
    })

    afterEach(() => {
        cy.wrap(logoutActions.logout()).then(() => {
            apiActions.deleteProject(projectId);
        });
    });

    it("Validate Create Task functionality", () => {
        cy.wrap(taskCreationActions.createTask(taskData, projectName)).then(() => {
            taskHelper.verifyTaskExistsViaApi(projectId, taskData.content)
        })
    })

    it("Create Task via API", () => {
        createTaskData.project_id = projectId as string;

        cy.wrap(apiActions.createTask(createTaskData)).then((createdTask: CreateTaskResponse) => {
            projectHelper.selectProject(projectId);
            taskHelper.verifyTaskExistsOnUI(createdTask.id, createTaskData.content);
        });
    })
});
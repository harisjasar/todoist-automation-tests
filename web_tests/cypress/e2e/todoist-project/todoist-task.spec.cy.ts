import apiActions from "../../actions/api/api.actions";
import loginActions from "../../actions/ui/login.actions";
import taskCreationActions from "../../actions/ui/task-creation.actions";
import taskHelper from "../../helpers/task.helper";
import { Project } from "../../interfaces/project.interface";
import { Task } from "../../interfaces/task.interface";

describe("Todoist Task - Web UI tests", () => {
    let projectName: string;
    let projectId: string;
    let taskData: Task;

    beforeEach(() => {

        cy.fixture('projectData').then((data) => {
            projectName = data.projectName;

            cy.wrap(apiActions.addProject(projectName))
                .then((response: Project) => {
                    projectId = response.id;
                }).then(() => {
                    loginActions.login()
                });

        })

        cy.fixture('taskData').then((data) => { taskData = data as Task; })
    })

    afterEach(() => {
        apiActions.deleteProject(projectId);
    });

    it("Validate Create Task functionality", () => {
        taskCreationActions.createTask(taskData, projectName)
        taskHelper.verifyTaskExists(projectId, taskData.content)
    })
});

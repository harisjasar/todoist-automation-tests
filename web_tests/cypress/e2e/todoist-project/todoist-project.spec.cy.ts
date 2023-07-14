import apiActions from "../../actions/api/api.actions";
import loginActions from "../../actions/ui/login.actions";
import projectHelper from "../../helpers/project.helper";
import { Project } from "../../interfaces/project.interface";

describe("Todoist Project - Web UI tests", () => {
    let projectName: string;
    let projectId: string;
    let updatedProjectName: string;

    beforeEach(() => {
        cy.fixture('projectData').then((data) => {
            projectName = data.projectName;
            updatedProjectName = data.updatedProjectName;
            cy.wrap(apiActions.addProject(projectName))
                .then((response: Project) => {
                    projectId = response.id;
                }).then(() => {
                    loginActions.login()
                });
        })
    })

    afterEach(() => {
        apiActions.deleteProject(projectId)
    })

    it("Verify on web application project is created", () => {
        projectHelper.verifyProjectName(projectId, projectName)
    })

    it("Verify project name is updated", () => {
        const project: Project = { name: updatedProjectName }
        apiActions.updateProject(projectId, project)
        projectHelper.verifyProjectName(projectId, updatedProjectName)
    })
});
import apiActions from "../../actions/api/api.actions";
import loginActions from "../../actions/ui/login.actions";
import logoutActions from "../../actions/ui/logout.actions";
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
        cy.wrap(logoutActions.logout()).then(() => {
            apiActions.deleteProject(projectId);
        });
    })

    it("Verify on web application project is created", () => {
        projectHelper.verifyProjectName(projectId, projectName)
    })

    it("Verify project name is updated", () => {
        const project: Project = { name: updatedProjectName }
        cy.wrap(apiActions.updateProject(projectId, project)).then(() => {
            projectHelper.verifyProjectName(projectId, updatedProjectName)
        })
    })
});
import apiActions from "../../actions/api/api.actions";
import loginActions from "../../actions/ui/login.actions";
import { Project } from "../../interfaces/project.interface";

describe("Validate Create Project functionality", () => {
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
        verifyProjectName(projectId, projectName)
    })

    it("Verify project name is updated", () => {
        const project: Project = { name: updatedProjectName }
        apiActions.updateProject(projectId, project)
        verifyProjectName(projectId, updatedProjectName)
    })
});

function verifyProjectName(projectId: string, expectedName: string) {
    cy.get(`li[data-id="${projectId}"]`)
        .find('span')
        .should('have.text', expectedName);
}
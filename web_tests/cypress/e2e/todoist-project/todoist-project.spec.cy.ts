import apiActions from "../../actions/api/api.actions";
import loginActions from "../../actions/ui/login.actions";
import { Project } from "../../interfaces/project.interface";

describe("Validate Create Project functionality", () => {
    let projectName: string;
    let projectId: string;

    before(() => {
        cy.fixture('projectData').then((data) => {
            projectName = data.projectName;

            cy.wrap(apiActions.addProject(projectName)).then((response: Project) => {
                projectId = response.id;
            });
        })
    })

    after(() => {
        apiActions.deleteProject(projectId)
    })

    it("Verify on web application project is created", () => {
        loginActions.login()
        cy.get(`li[data-id="${projectId}"]`)
            .find('span')
            .should('have.text', projectName)
    })
});


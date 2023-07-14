class ProjectHelper {
    /**
     * Verifies the project name in the UI using Cypress.
     * 
     * @param projectId - The ID of the project to verify.
     * @param expectedName - The expected name of the project.
     */
    verifyProjectName(projectId: string, expectedName: string) {
        cy.get(`li[data-id="${projectId}"]`)
            .find('span')
            .should('have.text', expectedName);
    }
}

export default new ProjectHelper();
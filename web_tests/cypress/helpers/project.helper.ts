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
            .should('exist')
            .should('be.visible')
            .should('have.text', expectedName);
    }

    /**
     * Selects the project in the UI using Cypress.
     * 
     * @param projectId - The ID of the project to select.
     */
    selectProject(projectId: string) {
        cy.get(`li[data-id="${projectId}"]`)
            .should('exist')
            .should('be.visible')
            .click();
    }

}

export default new ProjectHelper();
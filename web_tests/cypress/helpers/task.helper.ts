import apiActions from "../actions/api/api.actions";
class TaskHelper {
    /**
     * Verifies if a task with given content exists in the project.
     * If the task exists, it validates its content.
     * If the task does not exist, it logs an informative message.
     *
     * @param projectId - The ID of the project to look for the task in.
     * @param content - The content to look for in the task.
     */
    verifyTaskExists(projectId: string, content: string) {
        apiActions.getTasks({ project_id: projectId }).then((tasks) => {
            const task = tasks.find((task) => task.content === content)
            if (task) {
                cy.wrap(task).its('content').should('eq', content + "dsadsa")
            }
        }).catch(() => {
            cy.log(`Task with content: ${content} not found`)
        });
    }
}

export default new TaskHelper();

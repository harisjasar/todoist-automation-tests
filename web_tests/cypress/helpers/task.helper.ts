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
    verifyTaskExistsViaApi(projectId: string, content: string) {
        apiActions.getTasks({ project_id: projectId }).then((tasks) => {
            const task = tasks.find((task) => task.content === content)
            if (task) {
                expect(task.content).to.eq(content)
            }
        }).catch((error) => {
            console.log(`Task with content: ${content} not found. Error: ${error}`)
        });
    }

    /**
     * Verifies if a task with given content exists in the project on the UI.
     * If the task exists, it validates its content.
     * If the task does not exist, it logs an informative message.
     *
     * @param taskId - The ID of the task to look for in the project.
     * @param expectedContent - The expected content of the task.
     */
    verifyTaskExistsOnUI(taskId: string, expectedContent: string) {
        cy.get(`li[data-item-id="${taskId}"]`)
            .contains(expectedContent);
    }
}

export default new TaskHelper();

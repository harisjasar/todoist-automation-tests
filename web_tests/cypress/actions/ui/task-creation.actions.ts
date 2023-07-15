import Priority from "../../enums/priority.enum";
import { Due } from "../../interfaces/due.interface";
import { Task } from "../../interfaces/task.interface";
import taskCreationPage from "../../pages/task-creation.page";
import BaseActions from "./base.actions";

class TaskCreationActions extends BaseActions<typeof taskCreationPage> {
    clickAddButton(): this {
        this.page.addButton
            .should('exist')
            .should('be.visible')
            .click();

        return this;
    }

    enterTaskName(taskName: string): this {
        this.page.taskNameInput
            .should('exist')
            .should('be.visible')
            .type(taskName)
            .find('p')
            .should('have.text', taskName);

        return this;
    }

    enterTaskDescription(taskDescription: string): this {
        this.page.taskDescriptionInput
            .should('exist')
            .should('be.visible')
            .type(taskDescription)
            .find('p')
            .should('have.text', taskDescription);

        return this;
    }

    setDueDate(due: Due): this {
        this.page.dueDateButton
            .should('exist')
            .should('be.visible')
            .click();

        this.page.dueDateInput
            .should('exist')
            .should('be.visible')
            .type(due.date)
            .type('{enter}');

        return this;
    }

    clickAddTaskButton(): this {
        this.page.addTaskButton
            .should('exist')
            .should('be.visible')
            .should('be.enabled')
            .click();

        return this;
    }

    selectProject(projectName: string): this {
        this.page.selectProjectButton
            .should('exist')
            .should('be.visible')
            .click();

        this.page.selectProjectInput
            .should('exist')
            .should('be.visible')
            .type(projectName)
            .type('{enter}');

        return this;
    }

    selectPriority(priority: Priority): this {
        this.page.selectPriorityButton
            .should('exist')
            .should('be.visible')
            .click();

        this.page.priorityList
            .should('exist')
            .should('be.visible')
            .contains(priority)
            .click();

        return this;
    }

    createTask(task: Task, projectName: string): this {
        this.clickAddButton()
            .enterTaskName(task.content)
            .enterTaskDescription(task.description)
            .setDueDate(task.due)
            .selectProject(projectName)
            .selectPriority(task.priority)
            .clickAddTaskButton();

        return this;
    }
}

export default new TaskCreationActions(taskCreationPage);

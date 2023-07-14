import Priority from "../../enums/priority.enum";
import { Due } from "../../interfaces/due.interface";
import { Task } from "../../interfaces/task.interface";
import taskCreationPage from "../../pages/task-creation.page";
import BaseActions from "./base.actions";

class TaskCreationActions extends BaseActions<typeof taskCreationPage> {
    clickAddButton(): this {
        cy.get(this.page.addButton).click();
        return this;
    }

    enterTaskName(taskName: string): this {
        cy.get(this.page.taskNameInput).type(taskName).find('p').should('have.text', taskName);
        return this;
    }

    enterTaskDescription(taskDescription: string): this {
        cy.get(this.page.taskDescriptionInput).type(taskDescription).find('p').should('have.text', taskDescription);
        return this;
    }

    setDueDate(due: Due): this {
        cy.get(this.page.dueDateButton).click();
        cy.get(this.page.dueDateInput).type(due.date).type('{enter}');
        return this;
    }

    clickAddTaskButton(): this {
        cy.get(this.page.addTaskButton).click();
        return this;
    }

    selectProject(projectName: string): this {
        cy.get(this.page.selectProjectButton).click();
        cy.get(this.page.selectProjectInput).type(projectName).type('{enter}');
        return this;
    }

    selectPriority(priority: Priority): this {
        cy.get(this.page.selectPriorityButton).click();
        cy.get(this.page.priorityList).contains(priority).click();
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

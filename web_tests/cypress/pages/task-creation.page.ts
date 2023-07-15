import BasePage from "./base.page";

class TaskCreationPage extends BasePage {
    get addButton() {
        return cy.get('.plus_add_button');
    }

    get taskNameInput() {
        return cy.get('div[aria-label="Task name"]');
    }

    get taskDescriptionInput() {
        return cy.get('div[aria-label="Description"]');
    }

    get dueDateButton() {
        return cy.get('div[aria-label="Set due date"]');
    }

    get dueDateInput() {
        return cy.get('input[aria-label="Type a due date"]');
    }

    get addTaskButton() {
        return cy.get('button[aria-label="Add task"]');
    }

    get selectProjectButton() {
        return cy.get('button[aria-label="Select a project"]');
    }

    get selectProjectInput() {
        return cy.get('input[aria-label="Type a project"]');
    }

    get selectPriorityButton() {
        return cy.get('div[aria-label="Set priority"]');
    }

    get priorityList() {
        return cy.get('ul[aria-label="Select a priority"]');
    }
}

export default new TaskCreationPage();

import BasePage from "./base.page";

class TaskCreationPage extends BasePage {
    get addButton() {
        return '.plus_add_button';
    }

    get taskNameInput() {
        return 'div[aria-label="Task name"]';
    }

    get taskDescriptionInput() {
        return 'div[aria-label="Description"]'
    }

    get dueDateButton() {
        return 'div[aria-label="Set due date"]';
    }

    get dueDateInput() {
        return 'input[aria-label="Type a due date"]'
    }

    get addTaskButton() {
        return 'button[aria-label="Add task"]'
    }

    get selectProjectButton() {
        return 'button[aria-label="Select a project"]'
    }

    get selectProjectInput() {
        return 'input[aria-label="Type a project"]'
    }

    get selectPriorityButton() {
        return 'div[aria-label="Set priority"]'
    }

    get priorityList() {
        return 'ul[aria-label="Select a priority"]'
    }
}

export default new TaskCreationPage();

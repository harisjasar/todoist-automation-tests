export default class BaseActions<T>{
    page: T;

    constructor(page: T) {
        this.page = page;
    }

    navigateTo(path: string): this {
        cy.visit(Cypress.env('BASE_URL') + path)
        return this;
    }

}
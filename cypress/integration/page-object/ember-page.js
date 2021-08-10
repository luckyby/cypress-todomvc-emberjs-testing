export class Todomvc {
    constructor(url) {
        this.url = url;
      }

    open (){
        cy.visit(this.url)
        return this
    }

    element(selector){

        return cy.get(selector)
    }

    element_from(selector, index){
        return cy.get(selector).eq(index)
    }

    all(selector){
        return cy.get(selector)
    }

    allTodo(){
        return this.all('#todo-list label')
    }

    toggleTodo(number){
        this.all('.toggle').withIndex(number-1).click()
    }

    completedTodo(){
        return this.element('.completed label')
    }

    deleteTodo(number){
        // return this.all('button').withIndex(ind)
        //     .should('be.hidden').invoke('show')
        //     .click()

        return this.all('.destroy').withIndex(number-1)
            .invoke('show').click()
    }

    newTodoField(){
        return this.element('#new-todo')
    }

    todo(number) {
        return this.allTodo().withIndex(number-1)
    }

    todoContains(text) {
        return cy.get('#todo-list label').contains(text)
    }
}

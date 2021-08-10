import { Todomvc } from "./page-object/ember-page"

describe.only('For todomvc on emberjs', ()=>{
    const todoMVC = new Todomvc('https://todomvc.com/examples/emberjs/')
    beforeEach(()=>{
        todoMVC.open()
    })
    it('testing user workflow', ()=>{
        todoMVC.newTodoField().shouldBeBlanc()
        todoMVC.newTodoField().add('a').add('b').add('c')
        todoMVC.todo(1).should('have.text', 'a')
        todoMVC.todo(2).should('have.text', 'b')
        todoMVC.todo(3).should('have.text', 'c')
        todoMVC.allTodo().should('have.length', '3')

        todoMVC.todoContains('b').edit('b', 'b*')
        todoMVC.todo(2).should('have.text', 'b*')
        todoMVC.allTodo().should('have.length', '3')

        todoMVC.toggleTodo(2)
        todoMVC.completedTodo().should('have.text', 'b*')
        todoMVC.deleteTodo(2)
        todoMVC.todo(1).should('have.text', 'a')
        todoMVC.todo(2).should('have.text', 'c')
        todoMVC.allTodo().should('have.length', '2')

        todoMVC.todoContains('a').editAndEscape('a', 'a*')
        todoMVC.todo(1).should('have.text', 'a')
        todoMVC.allTodo().should('have.length', '2')

        todoMVC.deleteTodo(2)
        todoMVC.todo(1).should('have.text', 'a')
        todoMVC.allTodo().should('have.length', '1')
    })
})

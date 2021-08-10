describe('For todomvc on emberjs', ()=>{
    beforeEach(()=>{
        cy.visit('https://todomvc.com/examples/emberjs/')
    })
    it('create first todo', ()=>{
        const newtodo = cy.get('#new-todo')

        newtodo.should('have.text','').should('have.value', '')
        newtodo.type('a{enter}').type('b{enter}').type('c{enter}')
        cy.get('#todo-list li')
            .first().should('contain', 'a')
            .next().should('contain', 'b')
            .next().should('contain', 'c')
        cy.get('.toggle').eq(1).click()
        cy.get('.completed').should('contain', 'b')
        cy.get('button').eq(1).should('be.hidden').invoke('show').click()
        cy.get('#todo-list li')
            .first().should('contain', 'a')
            .next().should('contain', 'c')

    })
})
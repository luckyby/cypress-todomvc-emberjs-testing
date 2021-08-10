// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add(
    'add',
    {prevSubject: true},
    ($element, text) =>{
        // if($element){
            cy.wrap($element).type(text).type('{enter}')

        // }else{
        //     cy.get('#new-todo').type(text).type('{enter}')
        // }
    }
)

Cypress.Commands.add(
    'edit',
    {prevSubject: true},
    ($element, textOld, textNew) =>{
        // if($element){
        cy.wrap($element).dblclick()
        cy.get('.editing ').type('{selectall}{backspace}'+textNew).press_enter()
        }
)

Cypress.Commands.add(
    'editAndEscape',
    {prevSubject: true},
    ($element, textOld, textNew) =>{
        // if($element){
        cy.wrap($element).dblclick()
        cy.get('.editing ').type('{selectall}{backspace}'+textNew).press_escape()
    }
)

Cypress.Commands.add(
    'press_escape',
    {prevSubject: true},
    ($element) => {
        cy.wrap($element).type('{esc}')
    }
)

Cypress.Commands.add(
    'press_enter',
    {prevSubject: true},
    ($element) => {
        cy.wrap($element).type('{enter}')
    }
)

Cypress.Commands.add(
    'withIndex',
    {prevSubject: true},
    (subject, index) => {
        cy.wrap(subject).eq(index)
    }
)

Cypress.Commands.add(
    'shouldBeBlanc',
    {prevSubject: true},
    (subject) =>{
        cy.wrap(subject).should('have.text', '').should('have.value', '')
    }
)

Cypress.Commands.add(
    'should_have_text',
    {prevSubject: true},
    (subject, ...args) => {
        cy.wrap(subject).each((element) => {
            
              
                
           
        })
    }
)

Cypress.Commands.add(
    'addTodo',
    {prevSubject: 'optional'},
    ($element, text) =>{
        if($element){
            cy.wrap($element).type(text).type('{enter}')
            
        }else{
            cy.get('#new-todo').type(text).type('{enter}')
        }
    }
)

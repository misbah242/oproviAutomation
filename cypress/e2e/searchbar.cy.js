describe('second tab', ()=>{
    it('try', () => {
        cy.visit('https://www.google.com/')

        cy.get('.gLFyf').click().type('cypress')
        cy.get('.erkvQe').contains('cypress interview questions').click()

    })

})
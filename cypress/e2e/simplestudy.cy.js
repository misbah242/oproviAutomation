describe('second tab', ()=>{
    it('try', () => {
        cy.visit('https://test.simplestudying.com/login')
        cy.wait(4000)
        cy.get('#om-k3lphcmdqbzvzw4zejfj-optin > div > button > svg > path').click()
        //cy.get('')
    })
})
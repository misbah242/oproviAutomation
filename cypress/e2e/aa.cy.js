import 'cypress-file-upload';


describe('second tab', ()=>{
    it('try', () => {
        cy.visit('https://test.oprovi.com/')

        cy.get('.p-button > img').click()
        cy.contains('Log In').click()

        cy.get('body > app-root > app-base > app-auth > app-login > div > div.left > div > div.signBox > form > div:nth-child(2) > input').type('rameen')
        cy.get('body > app-root > app-base > app-auth > app-login > div > div.left > div > div.signBox > form > div:nth-child(4) > input').type('Qwerty.1')
        cy.get('.heightBtn').click()

        cy.get('.p-button > img').click()
        //cy.get('[data-toggle="collapse"]').click()
        cy.get('.sbAfterNotfSec > .button > .ng-star-inserted').click()
        cy.get('.right > .heightBtn').click()


        // Select the dropdown container
        cy.get('.ng-select-container').click();
        
        // Select an option by its text
        cy.get('.ng-option').contains('Writing').click();

        cy.get('.tooltipInputWrap.ng-star-inserted > .inputWrap > .ngSelect > .ng-select-container').click()

        cy.get('.ng-option').contains('Synopsis').click();

        cy.get('#cdk-step-content-0-0 > app-upload-work-step1 > div > div > div > form > div:nth-child(6) > div.inputWrap > input').type('Testing in cypress')
        cy.get('#cdk-step-content-0-0 > app-upload-work-step1 > div > div > div > form > div:nth-child(8) > div.inputWrap > textarea').type('testing in cypress')

        //cy.get('.content-upload').click()
        //cy.get('.image-upload-wrap').click()
        cy.get('#cdk-step-content-0-0 > app-upload-work-step1 > div > div > div > form > div.tooltipInputWrap.uploadInputWrap > div > div.file-upload > div > input').click()

    
        //const imagefile = 'criminal-law.pdf'
        //cy.attachFile('criminal-law.pdf');
        //cy.get('[class="content-upload"]').attachFile(imagefile)

        //upload content
        cy.get('.content-upload').attachFile('criminal-law.pdf')
        cy.get('.content-upload').attachFile('important.jpeg')
        cy.get('.content-upload').attachFile('download.jpg')
        cy.get('form.ng-touched > .uploadBtnGroup > .greenBtn').click()

        //cy.get('.content-upload').attachFile('download.jpg', {subjectType: 'drag-n-drop'})
        //cy.get('form.ng-touched > .uploadBtnGroup > .greenBtn').click()

    
        
    })
})
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

        cy.get('#cdk-step-content-0-0 > app-upload-work-step1 > div > div > div > form > div.tooltipInputWrap.uploadInputWrap > div > div.file-upload > div > input').click()
        //cy.get('.content-upload').click()
        //const imagefile = 'important.jpeg'
        //cy.get('[class="image-upload-wrap"]').attachFile(imagefile)
        //cy.contains('Next').click()


          
              // Read the image from fixtures
              cy.fixture('download.jpg').then((fileContent) => {
                // Create a blob of the file content
                const blob = Cypress.Blob.base64StringToBlob(fileContent, 'image/jpeg');
          
                // Use Cypress File API to create a file from the blob
                const file = new File([blob], 'example.jpg', { type: 'image/jpeg' });
          
                // Perform an action with the file (e.g., display on the webpage)
                cy.get('.content-upload').attachFile({ file, encoding: 'base64' }); // Replace with your target image upload input selector
              });
          
              // Add assertions or further actions as needed
              // For instance, you can assert that the image has loaded successfully
              cy.get('#image-element').should('be.visible'); // Replace with your image element selector
           
          

    })
})

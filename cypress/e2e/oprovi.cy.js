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

        const imagefile = 'download.jpg'
        cy.get('[class="content-upload"]').attachFile(imagefile)
        cy.contains('Next').click()
        //cy.get('#cdk-step-content-0-0 > app-upload-work-step1 > div > div > div > form > div.inputWrap.uploadBtnGroup > button.button.heightBtn.greenBtn.stepOneNextBtn').click()

        //step-2
        cy.get('.dicoverAdFlex > :nth-child(4)').contains('Add ..').click()
        //cy.get('#recommended > app-advsor-card > div > div:nth-child(3)').contains('Add').click()
        cy.get('[id="radio512"]').click()
        //cy.get('#radio513').click()
        cy.contains('Confirm').click()

        cy.contains('Continue to checkout').click()

        //coupon
        cy.get('.card_form_input > .inputWrap > .form-control').type('automate')
        cy.contains('apply').click()
        cy.contains('Confirm order').click()

        //logout
        cy.get('.p-button > img').click()
        cy.get('.sbAfterNotfSec > .dropdown > .dropdown-menu > :nth-child(5)').click()
        cy.get('body > ngb-modal-window > div > div > app-logout-modal > div > div > button.button.heightBtn.greenBtn').click()
        

        //login with misbah account as advisor
        //burger menu
        //cy.get('.p-button > img').click()
        //cy.get('.p-sidebar-content > .headAuth > .heightBtn').click()

        cy.get('body > app-root > app-base > app-auth > app-login > div > div.left > div > div.signBox > form > div:nth-child(2) > input').type('misbah')
        cy.get('body > app-root > app-base > app-auth > app-login > div > div.left > div > div.signBox > form > div:nth-child(4) > input').type('Qwerty.1')
        cy.get('.heightBtn').click()

        //myworks
        cy.get('.p-button > img').click()
        cy.get('[data-toggle="collapse"]').click()
        cy.get('app-advisor-new-works.ng-star-inserted > .tabContentWrap > :nth-child(2) > .bottomWorkFlex > :nth-child(2) > .reviewContBtn').click()
        cy.get('.btnGroup > .button').click()

        //after apply
        
              //cy.get('#mainContent > div:nth-child(2) > svg').trigger('mousedown', { which: 1, pageX: 100, pageY: 100 }).click()
              //cy.get('#mainContent > div:nth-child(2) > svg').trigger('mousemove', { pageX: 200, pageY: 200 }).click()
              //cy.get('#mainContent > div:nth-child(2) > svg').trigger('mouseup', { pageX: 200, pageY: 200 }).click()
          
              /*
        cy.get('#mainContent > div:nth-child(2) > svg')
        .then(($svg) => {
            const stage = new Konva.Stage({
                container: $svg[0], // Convert the SVG element to a Konva container
                width: $svg.width(),
                height: $svg.height(),
    });

    const layer = new Konva.Layer();
    stage.add(layer);

    // Define the circle shape
    const circle = new Konva.Circle({
      x: 100, // X-coordinate of the circle
      y: 100, // Y-coordinate of the circle
      radius: 50, // Radius of the circle
      fill: 'red', // Fill color
    });

    layer.add(circle);
    stage.draw();
  });
*/
              
                    
          cy.get('#mainContent > div:nth-child(2) > svg')
          cy.get('#mainContent > div:nth-child(2) > svg > g > g > g > g:nth-child(1) > rect.a9s-inner') // Select the Konva canvas element
  //.trigger('mousedown', { which: 1, pageX: 100, pageY: 100 }) // Simulate a mouse click
  //.trigger('mousemove', { pageX: 200, pageY: 200 }) // Simulate mouse movement
  //.trigger('mouseup', { pageX: 200, pageY: 200 }); // Simulate mouse release
  
              
    
          


        //cy.get('#buttons-container > div > div.paypal-button-row.paypal-button-number-2.paypal-button-layout-vertical.paypal-button-shape-rect.paypal-button-number-multiple.paypal-button-env-production.paypal-button-color-black.paypal-button-text-color-white.paypal-logo-color-white > div').click()

        // Example: Switch to an iframe with a specific ID
        //cy.iframe('#paypal-iframe').find('#email').type('paypal_email');
        //cy.iframe('#paypal-iframe').find('#password').type('paypal_password');

        //cy.get('iframe').its('contentDocument.body').find('#frameinput').click()
        //cy.get('iframe').its('contentDocument.body').should('exist').then((iframeBody) => {
            //cy.wrap(iframeBody).find('#frameinput').should('exist').click();
            //cy.wrap({ foo: 'bar' }).its('quux').should('not.exist').click()
        
        //cy.get('.paypal-button paypal-button-number-2 paypal-button-layout-vertical paypal-button-shape-rect paypal-button-number-multiple paypal-button-env-production paypal-button-color-black paypal-button-text-color-white paypal-logo-color-white').its('contentDocument.body').find('frameinput')



        

    })

})
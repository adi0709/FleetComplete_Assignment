/// <reference types= "cypress" />
/// <reference types= "cypress-xpath" />

describe('first test', function () {



    it('Automation Part 2', function () {


        //Landing page
        cy.visit('https://appshell.fleetcomplete.dev/')

        //Enter the credentials and login 
        cy.get('#username').type('testimineyks@email.com')
        cy.get('#password').type('trialWork$2!')
        cy.get('#kc-login').click()

        //wait for the page to get fully loaded
        cy.wait(15000)

        cy.get(':nth-child(5) > .menu-item > .icon-container > shared-icon > span > svg').click()
        cy.wait(5000)
        cy.url().should('eq', 'https://appshell.qa.fleetcomplete.dev/settings/assets/11449')


        cy.get('[href="/settings/roles"]').click()
        cy.wait(5000)
        cy.url().should('eq', 'https://appshell.qa.fleetcomplete.dev/settings/roles')

        cy.get('.shared-loading-indicator > .btn').click()
        cy.get('#name').type('QA Engineer')

        cy.get(':nth-child(2) > settings-roles-detail-track > .custom-control > .custom-control-input').click({ force: true })

        //cy.get('#report_enable input[type="checkbox"]').check()

        //cy.get('input[type="chekbox"]').check(['Trips report'])
        //cy.get(':checkbox').uncheck({force: true})

                //clicking the save button

        cy.contains('Save').click()

        cy.wait(1000)


        cy.get('.profile-circle').click({ force: true })
        cy.get('.footer > .btn-inline-block > .btn').click()

    })






    it('Automation Part 1', function () {

        //Landing page
        cy.visit('https://appshell.fleetcomplete.dev/')

        //Enter the credentials and login 
        cy.get('#username').type('testimineyks@email.com')
        cy.get('#password').type('trialWork$2!')
        cy.get('#kc-login').click()

        //wait for the page to get fully loaded
        cy.wait(10000)


        //Asserting that the correct page is loaded on login or the login was sucessful
        cy.url().should('eq', 'https://appshell.qa.fleetcomplete.dev/track/asset/list')

        //Opening the Geofences tab
        cy.get('track-common-tabset.ng-tns-c198-0 > .header > shared-tabset > .tabset-wrapper > :nth-child(2) > a').click()

        //Asserting that the correct tab was navigated
        cy.url().should('eq', 'https://appshell.qa.fleetcomplete.dev/track/poi/list')

        //Adding the new Geofence
        cy.get('*[class^="btn-add-poi"]').click()

        //Addind the credentials and Selecting the values 
        cy.get('#nameInput').type('Test')

        cy.get('.close-icon > span > svg > path').click()
        cy.get('.global-search > shared-search-input > .w-100 > .form-control').type('New Delhi')

        //Wait for the predictions to appear
        cy.wait(2000)

        cy.get('.category-items-container > :nth-child(1)').click()


        //Used force:true since the checkbox's parents property was set to "display: none" 
        cy.get('.poi-name-checkbox-container > :nth-child(1) > .custom-control-input').uncheck({ force: true })

        //Selecting from the dropdown
        cy.get('.input-icon > span > svg').click()
        cy.get(':nth-child(4) > .shared-dropdown-component').click()

        cy.get('#descriptionInput').type('Test Descreption')

        //clicking the save button
        cy.contains('Save').click()

        //wait for the page to load
        cy.wait(2000)

        cy.get('.profile-circle').click({ force: true })
        cy.get('.footer > .btn-inline-block > .btn').click()

    })










})






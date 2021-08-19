/// <reference types= "cypress" />
/// <reference types= "cypress-xpath" />

import Login from '../PageObjects/Login'
import Logout from '../PageObjects/Logout'
import LoggedInPage from '../PageObjects/LoggedInPage'
import NewGeoFence from '../PageObjects/NewGeoFence'
import NewRole from '../PageObjects/NewRole'

describe('Automation Task', function () {

    it('Task 1', function () { 
        
        cy.visit('https://appshell.fleetcomplete.dev/')
        Login.typeUsername('testimineyks@email.com');
        Login.typePassword('trialWork$2!');
        Login.ClickLogin();
        //wait for the page to get fully loaded
        cy.wait(15000)
        
        cy.title().should('be.equal','QA Fleet Complete')
        cy.url().should('eq', 'https://appshell.qa.fleetcomplete.dev/track/asset/list')
    
        LoggedInPage.ClickGeoFence();

        cy.url().should('be.equal','https://appshell.qa.fleetcomplete.dev/track/poi/list')

        cy.get('*[class^="btn-add-poi"]').click()

        NewGeoFence.AddName('Test Geofence');
        NewGeoFence.EnterLocation();
        NewGeoFence.SelectCheckbox();
        NewGeoFence.SelectDropbox();
        NewGeoFence.AddDescription("Test Description");
        NewGeoFence.ClickSave();
        cy.wait(2000)

        cy.url().should('be.equal','https://appshell.qa.fleetcomplete.dev/track/poi/list')
        cy.reload()
    })
    
    it ('Task 2', function(){

        LoggedInPage.ClickSettingTab();

        cy.wait(5000)
        cy.url().should('eq', 'https://appshell.qa.fleetcomplete.dev/settings/assets/11449')

        cy.get('[href="/settings/roles"]').click()
        cy.wait(5000)
        cy.url().should('eq', 'https://appshell.qa.fleetcomplete.dev/settings/roles')

        cy.get('.settings-list-container-body-header > .shared-loading-indicator').click()

        NewRole.AddRoleName('Test Role');
        NewRole.UncheckMap();
        NewRole.UncheckRulesBox();

        //cy.get('.profile-circle').click({ force: true })
        //cy.get('.footer > .btn-inline-block > .btn').click()

        



    })

    

 })
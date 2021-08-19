class NewRole{
    elements = {
        addRoleName: () => cy.get('#name').should('exist'),
        uncheckMap: () => cy.get(':nth-child(2) > settings-roles-detail-track > .custom-control > .custom-control-input').should('exist'),
        uncheckRules: () => cy.get('#rules_events_enable').should('exist'),
        checkTrip: () => cy.get(':nth-child(4) > settings-roles-detail-reports > settings-roles-module-permissions > :nth-child(2) > :nth-child(2) > :nth-child(4) > div > .custom-control-input').should('exist'),
        uncheckVision: () => cy.get('#vision_enable').should('exist'),
        uncheckMaintenance: () => cy.get('#maintenance_enable').should('exist'),
        clickSave: () => cy.get('.modal-footer > :nth-child(2) > .btn')
        
    }

    AddRoleName(Name)
    {
        this.elements.addRoleName().type(Name);
    }
    
    CheckAllAndSave()
    {
        this.elements.uncheckMap().click({force: true});
        this.elements.uncheckRules().click({force: true});
        this.elements.checkTrip().click({force: true});
        this.elements.uncheckVision().click({force: true});
        this.elements.uncheckMaintenance().click({force: true});
        this.elements.clickSave().click({force: true});
    }
}

module.exports = new NewRole();
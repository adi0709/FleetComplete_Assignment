class NewRole{
    elements = {
        addRoleName: () => cy.get('#name').should('exist'),
        uncheckMap: () => cy.get(':nth-child(2) > settings-roles-detail-track > .custom-control > .custom-control-input').should('exist'),
        uncheckRulesBox: () => cy.get(':nth-child(3) > settings-roles-detail-events-rules > div[_ngcontent-hsf-c188=""] > .custom-control-input').should('exist')
        
    }

    AddRoleName(Name)
    {
        this.elements.addRoleName().type(Name);
    }
    UncheckMap()
    {
        this.elements.uncheckMap().click({force: true});
    }
    UncheckRulesBox()
    {
        this.elements.uncheckRulesBox().click({force: true});
    }
}

module.exports = new NewRole();
class NewGeoFence{
    elements = {
        addName: () => cy.get('#nameInput'),
        selectLocationInput: () => cy.get('.close-icon > span > svg > path').should('exist'),
        typeLocationInout: () => cy.get('.global-search > shared-search-input > .w-100 > .form-control').should('exist'),
        selectLocation: () => cy.get('.category-items-container > :nth-child(1)').should('exist'),
        selectCheckbox: () => cy.get('.poi-name-checkbox-container > :nth-child(1) > .custom-control-input').should('exist'),
        selectDropdown: () => cy.get('.input-icon > span > svg').should('exist'),
        selectDropboxOption: () => cy.get(':nth-child(4) > .shared-dropdown-component').should('exist'),
        addDescription: () => cy.get('#descriptionInput').should('exist'),
        clickSave: () => cy.contains('Save').should('exist')
    }

    AddName(Name)
    {
        this.elements.addName().type(Name);
    }
    EnterLocation()
    {
        this.elements.selectLocationInput().click();
        this.elements.typeLocationInout().type('New Delhi');
        cy.wait(2000);
        this.elements.selectLocation().click();
    }
    SelectCheckbox()
    {
        this.elements.selectCheckbox().uncheck({ force: true });
    }
    SelectDropbox()
    {
        this.elements.selectDropdown().click();
        this.elements.selectDropboxOption().click();
    }
    AddDescription(Desc)
    {
        this.elements.addDescription().type(Desc);
    }
    ClickSave()
    {
        this.elements.clickSave().click();
    }
}

module.exports = new NewGeoFence();
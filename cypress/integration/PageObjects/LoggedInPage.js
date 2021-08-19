class LoggedInPage{
    elements = {
        geofenceTab: () => cy.get('track-common-tabset.ng-tns-c198-0 > .header > shared-tabset > .tabset-wrapper > :nth-child(2) > a').should('exist'),
        settingsTab: () => cy.get(':nth-child(5) > .menu-item > .icon-container > shared-icon > span > svg').should('exist'),
        newGeofenceValue: () => cy.get(':nth-child(5) > .list-content > .content-info > .poi-name').should('exist')

    }

    ClickGeoFence()
    {
        this.elements.geofenceTab().click();
    }
    ClickProfileBtn()
    {
        this.elements.profileBtn.click({ force: true });
    }
    ClickSettingTab()
    {
        this.elements.settingsTab().click();
    }
    
}

module.exports = new LoggedInPage();
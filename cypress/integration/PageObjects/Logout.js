/// <reference types= "cypress" />
class Logout{
    elements = {
        profilebtn: () => cy.get('.profile-circle').should('exist'),
        logoutbtn: () => cy.get('.footer > .btn-inline-block > .btn').should('exist')
        
    }
    

    ClickProfile(){
        this.elements.profilebtn.click();
    }

    ClickLogoutBtn(){
        this.elements.logoutbtn.click();
    }
    
}

module.exports = new Logout();
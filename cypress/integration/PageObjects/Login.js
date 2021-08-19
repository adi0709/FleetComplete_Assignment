/// <reference types= "cypress" />
class Login{
    elements = {
        usernameInput: () => cy.get('#username').should('exist'),
        passwordInput: () => cy.get('#password').should('exist'),
        loginBtn: () => cy.get('#kc-login').should('exist'),
        errorMsg: () =>cy.contains("Invalid username or password.").should('exist')
    }
    

    typeUsername(username){
        this.elements.usernameInput().type(username);
    }

    typePassword(password){
        this.elements.passwordInput().type(password);
    }
    ClickLogin()
    {
        this.elements.loginBtn().click();
    }
}

module.exports = new Login();
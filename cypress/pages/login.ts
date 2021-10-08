class Login {
    url = '/';
    elements = {
        getUserInput: () => cy.get('[data-test = username]').should('be.visible'),
        getPasswordInput: () => cy.get('[data-test = password]').should('be.visible'),
        getLoginBtn: () => cy.get('[data-test = login-button]').should('be.visible'),
    };

    navigate() {
        cy.visit(this.url);
    }

    setUsername(username: string) {
        this.elements.getUserInput().type(username);
    }

    setPassword(password: string) {
        this.elements.getPasswordInput().type(password);
    }

    clickLoginBtn() {
        this.elements.getLoginBtn().click();
    }

    login(username: string, password: string) {
        this.setUsername(username);
        this.setPassword(password);
        this.clickLoginBtn();
    }
}

export const LoginPage = new Login();

const elements = {
    usernameInput: () => {
        return cy.get('[data-test = username]')
    },

    passwordInput: () => {
        return cy.get('[data-test = password]').should('be.visible')
    },

    loginBtn: () => {
        return cy.get('[data-test = login-button]').should('be.visible')
    }
};

const navigate = () => {
    cy.visit('https://www.saucedemo.com/');
}

const setUsername = (username: string) => {
    elements.usernameInput().type(username);
    }

const setPassword = (password: string) => {
    elements.passwordInput().type(password);
}

const clickLogin = () => {
    elements.loginBtn().click();
}

const login = (username: string, password: string) => {
    navigate();
    setUsername(username);
    setPassword(password);
    clickLogin();
}

export = {
    navigate,
    setUsername,
    setPassword,
    clickLogin,
    login,
}

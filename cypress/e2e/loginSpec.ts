import { LoginPage } from '../pages/login';

describe('Login Scenarios', ()  => {
    beforeEach(() => {
        LoginPage.navigate();
    })

    it('Should return redirects to x with valid username and password', () => {
        LoginPage.login('standard_user', 'secret_sauce');
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    })
})

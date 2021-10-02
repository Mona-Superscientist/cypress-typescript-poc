import loginPage from '../pages/login';

describe('Login Scenarios', ()  => {
    it('Should return redirects to x with valid username and password', () => {
        loginPage.login('standard_user', 'secret_sauce');
    })
})

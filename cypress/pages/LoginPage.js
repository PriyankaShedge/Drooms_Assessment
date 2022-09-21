import { PageActions } from "../utils/PageActions";
export class LoginPage {
    
    loginPage_username = '#loginusername';
    loginPage_password = '#loginpassword';
    loginPage_loginButton = 'button[onclick="logIn()"]';
    
    pageActions = new PageActions;

    login(data) {
        this.pageActions.enterTextInto(this.loginPage_username, data.username);
        this.pageActions.enterTextInto(this.loginPage_password,data.pwd);
        this.pageActions.clickButton(this.loginPage_loginButton);
        cy.wait(2000);
    }
}
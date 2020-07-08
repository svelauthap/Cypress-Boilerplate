/// <reference types ="cypress" />

import { LoginPage } from "../../page-objects/login-page"



describe('login to the Application', () => {

    const loginPage = new LoginPage()


    it('It should naviate to the Home page ', () => {
        loginPage.navigate()
    })


    it('It should naviate to the Signin page ', () => {
        loginPage.clickSignInLink()
    })

    it('It should enter the Email ID ', () => {
        loginPage.enterUserName()
    })

    it('It should enter the password ', () => {
        loginPage.enterpassWord()
    })

    it('It should click on Signin button', () =>{
        loginPage.clickSignInBtn()
    })


})


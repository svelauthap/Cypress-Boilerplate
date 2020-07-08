export class LoginPage {
    
    
    navigate() {
        cy.visit('http://automationpractice.com/index.php')
    }

    clickSignInLink() {
        const loginLink = cy.get('.login');
        loginLink.click();
    }


    enterUserName() {
        
        const emailTxtbox = cy.get('#email');
        cy.fixture('LoginDetails').then((user) =>{
            emailTxtbox.type('sivaa.test05@gmail.com')
        })
    }


    enterpassWord() {
        const pwTxtbox = cy.get('#passwd');
        pwTxtbox.type('123456');
    }

    clickSignInBtn() {
        const signinBtn = cy.get('#SubmitLogin > span');
        signinBtn.click();
    }



}
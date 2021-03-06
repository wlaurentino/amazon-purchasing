import { el } from './elements'

class loginPage {

    go() {
            cy.visit('/')
            cy.get('input[id="twotabsearchtextbox"]')
                .should('be.visible')
            cy.contains('Olá, Faça seu login')
                .should('be.visible')
                .click()
    }


    form(user) {
        cy.get(el.email)
            .type(user.email)

        cy.get('input[class=a-button-input]')
            .click()

        cy.get(el.password)
            .type(user.password)

        cy.get('input[id=signInSubmit]')
            .click()
        cy.get('span[id=nav-link-accountList-nav-line-1]')
            .should('be.visible')
            .contains('Olá, William')
    }


}

export default new loginPage()

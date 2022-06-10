import { el } from './elements'

class confirmPayAddressBuy {

    confirmPayMethod() {

        cy.get(el.confirmPayMethod)
            .click()

    }

    confirmAddress() {

        cy.get(el.confirmAddress)
            .should('be.visible')
        cy.contains('Estr. do Colégio 144')
            .log()

    }

    buy() {

        cy.get('span[id=submitOrderButtonId]')
            .click()

    }


}


export default new confirmPayAddressBuy()
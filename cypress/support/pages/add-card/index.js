import { el } from './elements'
import 'cypress-iframe'

const getIframe = () => {
    // get the iframe > document > body
    // and retry until the body element is not empty
    return cy
        .get('iframe[class*="apx-secure-iframe"]')
        .its('0.contentDocument.body').should('not.be.empty')
        // wraps "body" DOM element to allow
        // chaining more Cypress commands, like ".find(...)"
        .then(cy.wrap)
}

class addCard {

    clickAddCard() {

        cy.get(el.clickAddCard)
            .click()
    }

    addCardNum() {

         getIframe()
            .find(el.addCardNum)
            .type(el.cardNum)

    }

    addCardName() {

        getIframe()
            .find(el.addCardName)
            .type(el.cardName)

    }

    addCardExpMonth() {

        getIframe()
            .find(el.addCardExpMonth)
            .select('7', { force: true })
            .log()

    }

    addCardExpYear() {

        getIframe()
            .find(el.addCardExpYear)
            .select('2030', { force: true })
            .log()

    }

    addCardVerifNum() {

        getIframe()
            .find(el.addCardVerifNum)
            .wait(2000)
            .type(el.cardVerifNum)

    }

    addCardFrame() {

        getIframe()
            .find(el.addCardFrame)
            .click()

    }


}


export default new addCard()
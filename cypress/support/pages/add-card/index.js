import { el } from './elements'

class addCard {

    clickAddCard() {

        cy.get(el.clickAddCard)
            .click()
    }

    addCardNum() {

        cy.frameLoaded('iframe[class*="apx-secure-iframe"]')

        cy.iframe()
            .find(el.addCardNum)
            .type(el.cardNum)

    }

    addCardName() {

        cy.iframe()
            .find(el.addCardName)
            .type(el.cardName)

    }

    addCardExpMonth() {

        cy.iframe()
            .find(el.addCardExpMonth)
            .select('8', { force: true })
            .log()

    }

    addCardExpYear() {

        cy.iframe()
            .find(el.addCardExpYear)
            .select('2029', { force: true })
            .log()

    }

    addCardVerifNum() {

        cy.iframe()
            .find(el.addCardVerifNum)
            .wait(4000)
            .type(el.cardVerifNum)

    }

    addCardFrame() {

        cy.iframe()
            .find(el.addCardFrame)
            .click()

    }


}


export default new addCard()
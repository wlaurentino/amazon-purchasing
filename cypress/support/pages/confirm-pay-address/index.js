import { el } from './elements'

class confirmPayAddressBuy {

    confirmPayMethod() {

        cy.get(el.confirmPayMethod)
            .click()

    }

    confirmAddress() {

        cy.get(el.confirmAddress)
            .click()
            .log()

    }

    buy() {

        cy.get('span[data-cel-widget="submitOrderButtonId"]')
            .click()

    }


}
export default new confirmPayAddressBuy()
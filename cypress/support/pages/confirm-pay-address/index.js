import { el } from './elements'

class confirmPayAddressBuy {

    confirmPayMethod() {

        cy.get(el.confirmPayMethod)
            .click()

    }

    confirmAddress() {

        cy.get(el.confirmAddress)
           .log()

    }

    buy() {

        cy.get('span[data-cel-widget="submitOrderButtonId"]')
            .click()

    }


}
export default new confirmPayAddressBuy()
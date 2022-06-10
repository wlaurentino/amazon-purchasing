import { el } from './elements'

class addCheckOut {

    addItem(){

        cy.get(el.addToCart)
            .click()
            .log()
    }

    checkOutItem(){

        cy.get(el.checkoutItem)
            .click()

    }


}


export default new addCheckOut()
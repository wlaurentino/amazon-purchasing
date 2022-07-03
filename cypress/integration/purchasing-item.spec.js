import loginPage from '../support/pages/login'
import searchSelectItem from '../support/pages/search-item'
import addCheckOut from '../support/pages/add-cart-checkout'
import addCard from '../support/pages/add-card'
import confirmPayAddressBuy from '../support/pages/confirm-pay-address'

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe('login', function () {

    context('login, search item and add in the cart', function () {

        const user = {
            email: 'gama.william@gmail.com',
            password: 'Lauren!2112'
        }



        beforeEach(function () {
            cy.loginUser2(user)

        })

        /* it('deve logar com sucesso', function () {

            cy.visit('/')

        }) */

        it('purchasing item', function () {

            cy.visit('/')

            searchSelectItem.search()

            searchSelectItem.select()

            addCheckOut.addItem()

            addCheckOut.checkOutItem()

            //adding credit card
            addCard.clickAddCard()

            //adding credit card number
            addCard.addCardNum()

            //adding credit card name
            addCard.addCardName()

            //adding credit card expiration month
            addCard.addCardExpMonth()

            //adding credit card expiration year
            addCard.addCardExpYear()

            //adding credit card verification number
            addCard.addCardVerifNum()

            //add credit card to order 
            addCard.addCardFrame()

            //confirming payment method
            confirmPayAddressBuy.confirmPayMethod()

            //confirming address
            confirmPayAddressBuy.confirmAddress()

            //buying item
            confirmPayAddressBuy.buy()

        })

    })

})



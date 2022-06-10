import loginPage from '../support/pages/login'
import buscaSelecionaItem from '../support/pages/search-item'
import addCheckOut from '../support/pages/add-cart-checkout'
import addCard from '../support/pages/add-card'
import confirmPayAddressBuy from '../support/pages/confirm-pay-address'

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe('login', function () {

    context('logar, buscar item e adicionar carrinho', function () {

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

            buscaSelecionaItem.busca()

            buscaSelecionaItem.seleciona()

            addCheckOut.addItem()

            addCheckOut.checkOutItem()

            //adicionando cartão de crédito

            addCard.clickAddCard()

            addCard.addCardNum()

            addCard.addCardName()

            addCard.addCardExpMonth()

            addCard.addCardExpYear()

            addCard.addCardVerifNum()

            addCard.addCardFrame()

            confirmPayAddressBuy.confirmPayMethod()

            confirmPayAddressBuy.confirmAddress()

            confirmPayAddressBuy.buy()

        })

    })

})



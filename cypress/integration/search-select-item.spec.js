
import loginPage from '../support/pages/login'
import buscaSelecionaItem from '../support/pages/search-item'

describe('login', function () {

    context('logar e buscar item', function () {

        const user = {
            email: 'gama.william@gmail.com',
            password: 'Lauren!2112'
        }

        beforeEach(function(){
            cy.loginUser2(user)

        })

        it('deve logar com sucesso', function () {

            cy.visit('/')
            cy.wait(4000)

        })

        it('deve buscar um item', function(){

            cy.visit('/')

            buscaSelecionaItem.busca()

            buscaSelecionaItem.seleciona()

        })

    })


})





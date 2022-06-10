import login from '../support/pages/login'
import loginPage from '../support/pages/login'

describe('acessar página e logar', function () {

    context('acessar e logar com sucesso', function () {

        const user = {
            email: 'gama.william@gmail.com',
            password: 'Lauren!2112'
        }

        beforeEach(function(){
            cy.loginUser2(user)

        })

        it('deve acessar a página e logar com sucesso', function () {

            cy.visit('/')
            cy.wait(4000)
    
        })

    })


})

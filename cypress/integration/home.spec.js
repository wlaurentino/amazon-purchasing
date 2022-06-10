

it('deve exibir a home page da Amazon', function () {
    cy.visit('https://www.amazon.com.br/')
    cy.title()
        .should('eq', 'Amazon.com.br | Tudo pra você, de A a Z.')
    cy.get('input[id="twotabsearchtextbox"]')
        .should('be.visible')
})
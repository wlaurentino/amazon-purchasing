import { el } from './elements'

class buscaSelecionaItem {

    busca() {
        cy.get(el.searchItem)
            .type(el.item)
    }

    seleciona() {
        cy.get(el.selectItem)
            .click()
    }

}

export default new buscaSelecionaItem()

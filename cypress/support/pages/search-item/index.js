import { el } from './elements'

class searchSelectItem {

    search() {
        cy.get(el.searchItem)
            .type(el.item)
    }

    select() {
        cy.get(el.selectItem)
            .click()
    }

}

export default new searchSelectItem()

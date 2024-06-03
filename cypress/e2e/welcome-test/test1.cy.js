/// <reference types="cypress"/>
require('cypress-xpath');
import locators from '../../support/locators.js'

describe('Carrinho de compras', () => {
    it('Adicionando, alterando e excluindo produto no carrinho', () => {
    //adicionando
    cy.visit('https://www.netshoes.com.br/')
    cy.get(locators.SEARCH_PRODUCT).type('Shorts')
    cy.get(locators.CLICK_SEARCH).click()
    cy.xpath(locators.XP_PRODUCT_SELECT).first().click()
    cy.get(locators.SELECT_SIZE_G3).click()    
    cy.get(locators.BUY_BUTTON).click()   
    cy.wait(2000)
    cy.screenshot('Produto adicionado no carrinho')

    // //alterando quantidade de produtos no carrinho
    cy.get(locators.INCREASE_PRODUCT).click()
    cy.get(locators.PRODUCT_QUANTITY).should('have.value','2')
    cy.wait(2000)
    cy.screenshot('Quantidade de produtos aumentada')

    //removendo produtos do carrinho
    cy.get(locators.REMOVE_PRODUCT).click()
    cy.get(locators.TEXT_EMPTY_CART).should('exist')
    cy.wait(2000)
    cy.screenshot('Produto removido do carrinho')
    })
  })
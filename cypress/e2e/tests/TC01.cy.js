import DemoQA from '../pageAction/DemoMenu'
import '../../support/support.cy.js'
import '@4tw/cypress-drag-drop'
import { faker } from "@faker-js/faker";

beforeEach(() => {
    cy.visit('/')
    cy.wait(2000)
})




describe('empty spec', () => {


    it('[TC01] Verify that the user is able to fill the form and successfully submitted', () => {
        DemoQA.DemoMenu()
    })

    // it('[TC02] User should be able to check drag and drop functionality', () => {
    //     Dragdrop.DemoMenu()
    // })

}) 
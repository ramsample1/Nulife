import Locators from "./Locatos";
import Utils from "./utils";
const ut = new Utils();
const lc = new Locators();
class medication {
  add_medication() {
    cy.get(lc.medication_button).contains("Medications").click();
    ut.wait_and_click(lc.add_medicine)
    cy.get(lc.category_medicine).contains("Select Category",{ timeout: 10000 }).should("be.visible").click()
    ut.wait_and_click(lc.pain_category)
    cy.get(lc.active_ingredient).type("Paracetamol");
    cy.get(lc.enter_brand).type("Cipla");
    cy.get(lc.enter_gms).type("ABA4567");
    cy.get(lc.strength_size).type("10");
    cy.get(lc.provider).type("KBK");
    cy.get(lc.type_medicine).click();
    ut.wait_and_click(lc.type_medicine_select)
    cy.get(lc.shape_medicine).click();
    ut.wait_and_click(lc.shape_type)
    cy.get(lc.size).click();
    cy.get(lc.size_type).click();
    cy.get(lc.warning_medicine).type("Store in cold place");
    cy.get(lc.barcode_gen_button).click();
    cy.get(lc.submit).click();
    cy.get(".text-gray",{ timeout: 10000 }).should("be.visible") // assert for confirmation 
  }
}
export default medication;

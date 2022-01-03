import Locators from "./Locatos";

const lc = new Locators();
class medication {
  add_medication() {
    cy.get(lc.medication_button).click();
    cy.get(lc.add_medicine, { timeout: 10000 }).should("be.visible");
    cy.get(lc.add_medicine).click();
    cy.get(lc.category_medicine).click();
    cy.get(lc.pain_category,{timeout: 10000 }).should("be.visible");
    cy.get(lc.pain_category).click();
    cy.get(lc.active_ingredient).type("Paracetamol");
    cy.get(lc.enter_brand).type("Cipla");
    cy.get(lc.enter_gms).type("ABA4567");
    cy.get(lc.strength_size).type("10");
    cy.get(lc.provider).type("KBK");
    cy.get(lc.type_medicine).click();
    cy.get(lc.type_medicine_select,{ timeout: 10000}).should("be.visible")
    cy.get(lc.type_medicine_select).click();
    cy.get(lc.shape_medicine).click();
    cy.wait(3000)
    cy.get(lc.shape_type).click();
    cy.get(lc.size).click();
    cy.get(lc.size_type).click();
    cy.get(lc.warning_medicine).type("Store in cold place");
    cy.get(lc.barcode_gen_button).click();
    cy.get(lc.submit).click();
  }
}
export default medication;

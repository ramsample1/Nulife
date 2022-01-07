import Locators from "./Locatos";
import Utils from "./utils";
const ut = new Utils();
const doc = require("../../../fixtures/Add_doc_data.json");
const lc = new Locators();
class Doctors {
  add_doctor() {
    ut.wait_and_click(lc.doctor_tab)
    ut.wait_and_click(lc.add_doctor)
    cy.get(lc.doc_FN).type(doc.first_name);
    cy.get(lc.doc_LN).type(doc.last_name);
    cy.get(".rounded-circle.p-1.bg-grey").attachFile(
      "pexels-hüsamettin-akgün-3779853.jpg",
      { subjectType: "drag-n-drop" }
    );
    cy.get(
      ":nth-child(1) > [style='position: relative;'] > :nth-child(1) > .bg-white > img"
    ).attachFile("docSignature.png", { subjectType: "drag-n-drop" });
    cy.get(lc.doc_address1).type(doc.address1);
    cy.get(lc.doc_address2).type(doc.address2);
    cy.get(lc.doc_post_code).type(doc.post_code);
    cy.get(lc.doc_country).click();
    cy.get(lc.doc_country_select);
    cy.get(lc.doc_country_select)
      .contains("Ireland ( IE )", { timeout: 20000 })
      .should("be.visible")
      .click();
    cy.get(lc.doc_mobile).type(doc.mobile_no);
    cy.get(lc.doc_fax).type(doc.fax);
    cy.get(lc.doc_email).type(doc.email);
    cy.get(lc.doc_nursing_home).click();
    cy.get(lc.doc_nursing_home_select)
      .contains("don homies (testing pharmacy)", { timeout: 20000 })
      .should("be.visible")
      .click();
    cy.get(lc.doc_clinic).click();
    cy.get(lc.doc_clinic_select)
      .contains("pharmacy clinic", { timeout: 20000 })
      .should("be.visible")
      .click();
    cy.get(lc.doc_gms).type(doc.gms);
    cy.get(lc.doc_mcrn).type(doc.mcrn);
    cy.get(lc.cardex_review_yes).click();
    cy.get("button[type='submit']").click();
    cy.get("#column-doctor_no",{ timeout: 20000}).should("be.visible")

  }
  ph_edit_doctor() {

    cy.get("div[id='row-2'] div[class='d-flex'] div", {
      timeout: 20000,
    }).should("be.visible");
    cy.get("div[id='row-2'] div[class='d-flex'] div").click();
    cy.get(lc.edit_doc_FN, { timeout: 20000 }).should("be.visible");
    cy.get(lc.edit_doc_FN).clear().type("Testing Doc");
    cy.get(lc.edit_doc_LN).clear().type("Last name");
    cy.get(lc.edit_doc_address1).clear().type("Testing Address");
    cy.get(lc.edit_doc_email).clear().type("change@email.com");
    cy.get(lc.edit_doc_save).click();
  }
}
export default Doctors;

import Locators from "./Locatos";

const lc = new Locators();
const patient_data = require("../../../fixtures/AddPatientsData.json");

class Nursing_home_patients {
  add_patient() {
    // cy.get(lc.community_patient).click();
    cy.get(lc.add_patients, { timeout: 20000 }).should("be.visible");
    cy.get(lc.add_patients).click();
    cy.get(lc.first_name).type(patient_data.first_name);
    cy.get(lc.last_name).type(patient_data.last_name);
    cy.get(lc.address1).type(patient_data.address_one);
    cy.get(lc.address2).type(patient_data.address_two);
    cy.wait(2000)
    cy.get(lc.dob_picker).click();
    cy.wait(2000);
    cy.get(lc.dob_selector).click();
    cy.wait(2000);
    cy.get(lc.default_NH).contains("Default Nursing Home").click();
    cy.get(lc.nh_select, { timeout: 20000 }).should("be.visible");
    cy.get(lc.nh_select).contains("don homies (testing pharmacy)").click();
    cy.get(lc.schedule).click();
    cy.get(lc.nh_sch_select, { timeout: 20000 }).should("be.visible");
    cy.get(lc.nh_sch_select).contains("av_caring").click();
    cy.get(lc.mobile_no).type(patient_data.mobile_no);
    cy.get(lc.nh_doc).click();
    cy.get(lc.nh_doc_select, { timeout: 20000 }).should("be.visible");
    cy.get(lc.nh_doc_select).contains("Ron Jones").click();
    cy.get(lc.gms_no).type(patient_data.gms_no);
    cy.get(lc.pps_no).type("12345669966");
    cy.wait(1000);
    cy.get(lc.add_more_info).click();
    cy.get(lc.post_code).type(patient_data.post_code);
    cy.get(lc.email_patient).type(patient_data.email);
    cy.get(lc.nh_admit_date).click();
    cy.wait(2000);
    cy.get(lc.admit_date_select).click();
    cy.wait(2000);
    cy.get(lc.nh_next_date).click();
    cy.wait(2000);
    cy.get(lc.next_form_date_select).click();
    cy.wait(2000);
    cy.get(lc.diet).type("Nothing new");
    cy.get(lc.submit).click();
  }
  edit_patient() {
    // cy.get(lc.community_patient).click();
    cy.wait(2000);
    // cy.scrollTo("top");
    cy.get("div[id='row-0'] img[alt='noimage']", { timeout: 20000 }).should(
      "be.visible"
    );
    cy.get("div[id='row-0'] img[alt='noimage']").click();
    cy.wait(2000);
    cy.get(lc.edit_cp_fn).clear().type("New Edit");
    cy.get(lc.edit_cp_ln).clear().type("Patient");
    cy.get(lc.edit_post_code).clear().type("AB-1004");
    cy.get(lc.save_details).click();
    cy.wait(3000);
  }
}
export default Nursing_home_patients;

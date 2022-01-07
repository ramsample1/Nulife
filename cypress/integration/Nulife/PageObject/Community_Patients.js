import Locators from "./Locatos";
import Utils from "./utils";
const ut = new Utils();
const lc = new Locators();
const patient_data = require("../../../fixtures/AddPatientsData.json");

class Community_Patients {
  add_patient() {
    ut.wait_and_click(lc.add_patients)
    cy.get(lc.first_name).type(patient_data.first_name);
    cy.get(lc.last_name).type(patient_data.last_name);
    cy.get(lc.address1).type(patient_data.address_one);
    cy.get(lc.address2).type(patient_data.address_two);
    cy.get(lc.dob_picker).click();
    ut.wait_and_click(lc.dob_selector)
    ut.wait_and_click(lc.schedule)
    ut.wait_and_click(lc.schedule_select_community)
    // cy.get(lc.schedule_select_community).click();
    cy.get(lc.mobile_no).type(patient_data.mobile_no);
    cy.get("input[placeholder='Enter Doctor Name']").type("Ron Jones")
    cy.get(lc.gms_no).type(patient_data.gms_no);
    // cy.wait(1000);
    ut.wait_and_click(lc.add_more_info)
    cy.get(lc.post_code).type(patient_data.post_code);
    cy.get(lc.email_patient).type(patient_data.email);
    cy.get(lc.admit_date).click();
    ut.wait_and_click(lc.admit_date_select)
    cy.get(lc.next_form_date).click();
    ut.wait_and_click(lc.next_form_date_select)
    ut.wait_and_click(lc.diet)
    cy.get(lc.diet).type("Nothing new");
    cy.get(lc.submit).click();
    cy.wait(3000)
    ut.wait_and_click(".mb-0.headerClass") // assert to check its available 
  }

  edit_patient() {
    
    ut.wait_and_click("div[id='row-0'] img[alt='noimage']")
    ut.wait_and_click(lc.edit_cp_fn)
    cy.get(lc.edit_cp_fn).clear().type("New Edit");
    cy.get(lc.edit_cp_ln).clear().type("Patient");
    cy.get(lc.edit_post_code).clear().type("AB-1004");
    cy.get(lc.save_details).click();
    ut.wait_and_click(".mb-0.headerClass")
    cy.wait(3000)
  }
  page_filters() {
    cy.wait(5000);
    cy.get(lc.search_box,{ timeout: 20000}).should("be.visible")
    cy.get(lc.search_box).type("Ray");
    cy.wait(3000);
    cy.get('body').then((body) => {
      cy.wait(3000)
      if (body.find("#row-0").length > 0) {
          cy.get("#row-0").should("be.visible");
      }
      else {
          cy.get(lc.search_box).clear
      }
    })
    
    cy.get(lc.search_box).clear();
    cy.get(lc.filter_box).click();
    cy.wait(2000);
    cy.get("#row-0",{ timeout:20000}).should("be.visible") // for visiblity of row 1
    cy.get(lc.male_filter).click();
    cy.get("#row-0",{ timeout: 20000}).should("be.visible")
    cy.get(lc.filter_box).click();
    cy.get(lc.female_filter).click();
    cy.wait(2000);
    cy.get(lc.filter_box).click();
    cy.get(lc.inactive_filter).click();
    cy.wait(2000);
    cy.get(lc.filter_box).click();
    cy.get(lc.active_filter).click();
    cy.get("#row-0",{ timeout: 20000}).should("be.visible")
    cy.get(lc.filter_box).click();
    cy.get(lc.all_patients_filter).click();
    cy.get("#row-0",{ timeout: 20000}).should("be.visible")
  }
}
export default Community_Patients;

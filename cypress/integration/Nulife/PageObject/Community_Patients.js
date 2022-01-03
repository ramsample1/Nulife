import Locators from "./Locatos";

const lc = new Locators();
const patient_data = require("../../../fixtures/AddPatientsData.json");

class Community_Patients {
  add_patient() {
    // cy.get(lc.community_patient).click();
    cy.get(lc.add_patients, { timeout: 20000 }).should("be.visible");
    cy.get(lc.add_patients).click();
    cy.get(lc.first_name).type(patient_data.first_name);
    cy.get(lc.last_name).type(patient_data.last_name);
    cy.get(lc.address1).type(patient_data.address_one);
    cy.get(lc.address2).type(patient_data.address_two);
    cy.get(lc.dob_picker).click();
    cy.wait(2000);
    cy.get(lc.dob_selector).click();
    cy.wait(2000);
    cy.get(lc.schedule).click();
    cy.wait(2000);
    cy.get(lc.schedule_select_community).click();
    cy.get(lc.mobile_no).type(patient_data.mobile_no);
    cy.get("input[placeholder='Enter Doctor Name']").type("Ron Jones")
    cy.get(lc.gms_no).type(patient_data.gms_no);
    cy.wait(1000);
    cy.get(lc.add_more_info).click();
    cy.get(lc.post_code).type(patient_data.post_code);
    cy.get(lc.email_patient).type(patient_data.email);
    cy.get(lc.admit_date).click();
    cy.wait(2000);
    cy.get(lc.admit_date_select).click();
    cy.wait(2000);
    cy.get(lc.next_form_date).click();
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
    cy.get("div[id='row-0'] img[alt='noimage']",{timeout: 20000 }).should("be.visible");
    cy.get("div[id='row-0'] img[alt='noimage']").click();
    cy.wait(2000);
    cy.get(lc.edit_cp_fn).clear().type("New Edit");
    cy.get(lc.edit_cp_ln).clear().type("Patient");
    cy.get(lc.edit_post_code).clear().type("AB-1004");
    cy.get(lc.save_details).click();
    cy.wait(3000);
  }
  page_filters() {
    cy.wait(5000);
    // cy.get(lc.community_patient).click();
    cy.get(lc.search_box,{ timeout: 20000}).should("be.visible")
    cy.get(lc.search_box).type("Ray");
    cy.wait(3000);
    cy.get('body').then((body) => {
      if (body.find("div[class='cell-heading text-dark'] b").length > 0) {
          cy.get("div[class='cell-heading text-dark'] b").should("be.visible");
      }
      else {
          cy.get(lc.search_box).clear
      }
    })
    
    cy.get(lc.search_box).clear();
    cy.get(lc.filter_box).click();
    cy.wait(2000);
    cy.get("div[class='sc-AxirZ ktnnZL rdt_TableHead']",{ timeout:20000}).should("be.visible")
    cy.get(lc.male_filter).click();
    cy.wait(2000);
    cy.get(lc.filter_box).click();
    cy.get(lc.female_filter).click();
    cy.wait(2000);
    cy.get(lc.filter_box).click();
    cy.get(lc.inactive_filter).click();
    cy.wait(2000);
    cy.get(lc.filter_box).click();
    cy.get(lc.active_filter).click();
    cy.wait(2000);
    cy.get(lc.filter_box).click();
    cy.get(lc.all_patients_filter).click();
    cy.wait(2000);
    // cy.scrollTo("bottom");
    // cy.wait(2000);
    // cy.get("a[aria-label='Page 2']").click();
  }
}
export default Community_Patients;

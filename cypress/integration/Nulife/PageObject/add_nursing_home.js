import Locators from "./Locatos";

const lc = new Locators();

class nursing_home {
  add_nursing_home() {
    cy.get(":nth-child(2) > .d-flex > span").contains("Nursing Homes").click();
    cy.get("div[class='sc-AxirZ ktnnZL rdt_TableHead']", {
      timeout: 10000,
    }).should("be.visible");
    cy.get(lc.add_nh_button).click();
    cy.get(lc.nursing_home_name, { timeout: 10000 }).should("be.visible");
    cy.get(lc.nursing_home_name).type("Automation Home");
    cy.get(".rounded-circle.p-1.bg-grey").attachFile(
      "134315897-f80baece-365c-470f-aeea-8dbe18984244.jpg",
      { subjectType: "drag-n-drop" }
    );
    cy.get(lc.nh_address1).type("Dublin");
    cy.get(lc.nh_address2).type("City");
    cy.get(lc.nh_post_code).type("ABA4564");
    cy.get(lc.nh_mobile).type("456987123");
    cy.get(lc.nh_don_name).type("Automation Tester");
    cy.get(lc.nh_don_email).type("automation@test.com");
    cy.get(lc.nh_country).click();
    cy.get(".css-1ew0esf")
      .contains("Ireland ( IE )", { timeout: 10000 })
      .should("be.visible")
      .click();
    cy.get(lc.nh_submit_button).click();
  }

  edit_nursing_home() {
    cy.get(lc.nh_edit_icon, { timeout: 10000 }).should("be.visible").click();
    cy.get(lc.nh_edit_name).clear().type("Edit Nursing Home");
    cy.get(lc.nh_edit_address1).clear().type("Testing Address");
    cy.get(lc.nh_edit_don_name).clear().type("New Edit User");
    cy.get(lc.nh_save_edit_nh).click();
  }
  clinic() {
    cy.get(lc.nh_clinic_icon, { timeout: 10000 }).should("be.visible").click();
    cy.get(lc.nh_clinic_name,{ timeout: 10000}).should("be.visible").click().type("Automation Clinic");
    cy.get(lc.nh_clinic_submit).click();
    // cy.get(lc.close).scrollTo('top', { easing: 'linear' })
    
    // cy.get(lc.nh_clinic_edit, { timeout: 10000 }).should("be.visible").click();
    // cy.get(lc.nh_clinic_edit_name).clear().type("edit clinic name");
    // cy.get(lc.nh_update_clinic).click();
    // cy.get(lc.nh_refresh_clinics).click();
    // cy.get(lc.nh_clinic_delete, { timeout: 10000 })
    //   .should("be.visible")
    //   .click();
    cy.get(lc.nh_clinic_close).click();
  }
  delete_nursing_home() {
    cy.get(lc.nh_delete_button, { timeout: 10000 })
      .should("be.visible")
      .click();
    cy.get(lc.nh_delete_confirm).click();
    cy.get(lc.nh_delete_success, { timeout: 10000 })
      .should("be.visible")
      .click();
    cy.wait(2000)
  }
  nursing_home_patient_list(){
      cy.get("row-0", { timeout: 10000 }).should("be.visible")
      cy.get("row-0").click("left")
  }
}
export default nursing_home;

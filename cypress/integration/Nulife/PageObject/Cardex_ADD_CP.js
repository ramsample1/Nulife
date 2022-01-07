import Locators from "./Locatos";
import Utils from "./utils";
const ut = new Utils();
const lc = new Locators();

class Cardex_Add_CP {
  add_cardex() {
    cy.get(lc.patient_select, { timeout: 20000 }).should("be.visible");
    cy.get(lc.patient_select).click("left");
    ut.wait_and_click(lc.add_medication_button);
    // cy.get(lc.add_medication_button, { timeout: 20000 }).should("be.visible");
    // cy.get(lc.add_medication_button).click();
    ut.wait_and_click(lc.search_medicine);
    cy.get(lc.search_medicine, { timeout: 20000 }).should("be.visible");
    cy.get(lc.search_medicine).type("Paracetamol/1000");
    cy.get(".css-1ew0esf div", { timeout: 20000 }).should("be.visible");
    cy.wait(5000);
    cy.get(".css-1ew0esf div", { timeout: 20000 }).should("be.visible");
    //cy.get(".css-1ew0esf div").contains("Paracetamol Panadol Sol Max 1000mg Eff Grans Gsk 1000mg",{ timeout: 20000 }).should("be.visible")
    cy.get(".css-1ew0esf div")
      .contains("Paracetamol Panadol Sol Max 1000mg Eff Grans Gsk 1000mg")
      .click(); //paracetamol/100 2 medicine
    cy.get(".css-1wa3eu0-placeholder", { timeout: 20000 }).should("be.visible");
    cy.get(".css-1wa3eu0-placeholder").type("AND");
    cy.get(".css-1ew0esf div").contains("0.5 - AND HALF TABLET").click(); //3 no. option after type AND
  
    if (cy.get("input[placeholder='Enter Quantity'][value='0'][name='slots_detail[0].new_dosage']").should('exist')){
      cy.get("input[placeholder='Enter Quantity'][value='0'][name='slots_detail[0].new_dosage']").type("1")
    }
    else if (cy.get("input[placeholder='Enter Quantity'][value='0'][name='slots_detail[1].new_dosage']").should('exist')){
      cy.get("input[placeholder='Enter Quantity'][value='0'][name='slots_detail[1].new_dosage']").type("1")
    }
    else if (cy.get("input[placeholder='Enter Quantity'][value='0'][name='slots_detail[2].new_dosage']").should('exist')){
      cy.get("input[placeholder='Enter Quantity'][value='0'][name='slots_detail[2].new_dosage']").type("1")
    }
    else if (cy.get("input[placeholder='Enter Quantity'][value='0'][name='slots_detail[3].new_dosage']").should('exist')){
      cy.get("input[placeholder='Enter Quantity'][value='0'][name='slots_detail[3].new_dosage']").type("1")
    }
    
    cy.get(
      "div[class='p-0 modal-body'] button:nth-child(1) span:nth-child(1)").click();
    cy.wait(2000)
  }

  edit_cardex() {
    cy.get(lc.edit_cardex_button, { timeout: 20000 }).should("be.visible");
    cy.wait(2000);
    cy.get(lc.edit_cardex_button).click();
    cy.get(lc.frequency_edit, { timeout: 20000 }).should("be.visible");
    cy.get(lc.frequency_edit).type("Alternated MWF");
    cy.get(".css-1ew0esf div", { timeout: 20000 }).should("be.visible");
    cy.get(".css-1ew0esf div").contains("Alternated MWF").click();
    // cy.get("input[placeholder='Enter Quantity'][value='0'][name='slots_detail[2].new_dosage']").should("be.visible");
    cy.get(lc.edit_slot_cardex).clear().type("2");
    cy.wait(2000);
    cy.get(lc.update_cardex_button).click();
  }

  delete_cardex() {
    cy.wait(2000);
    cy.get(lc.delete_icon_cardex, { timeout: 20000 }).should("be.visible");
    cy.get(lc.delete_icon_cardex).click();
    cy.get("button[aria-label='Yes']").click();
    cy.get("button[aria-label='OK']", { timeout: 10000 }).should("be.visible");
    cy.get("button[aria-label='OK']").click();
    cy.get(".card-body", { timeout: 15000 }).should("be.visible");
  }

  delete_nursing_home_cardex() {
    cy.wait(2000);
    cy.get(lc.delete_icon_nursing_home_cardex, { timeout: 20000 }).should(
      "be.visible"
    );
    cy.get(lc.delete_icon_nursing_home_cardex).click();
    cy.get("button[aria-label='Yes']").click();
    cy.get("button[aria-label='OK']", { timeout: 10000 }).should("be.visible");
    cy.get("button[aria-label='OK']").click();
  }

  nursing_home_future_cardex() {
    cy.wait(2000);
    cy.get(lc.future_cardex_button, { timeout: 20000 })
      .should("be.visible")
      .click();
    cy.get(lc.future_medication, { timeout: 20000 })
      .should("be.visible")
      .click()
      .type("Paracetamol");
    cy.get(".css-1ew0esf")
      .contains("PARACETAMOL TIPOL 250MG SUPPOSITORIES Clonmel ")
      .click();
    cy.get("#default-pickerfuture_cardex_date").click();
    cy.get("span[aria-label='December 30, 2021']").click();
    cy.get("button[class='w-100 customButtonDesing btn btn-primary']").click();
    cy.get(".css-1wa3eu0-placeholder", { timeout: 20000 }).should("be.visible");
    cy.get(".css-1wa3eu0-placeholder").type("AND");
    cy.get(".css-1ew0esf div").contains("0.5 - AND HALF TABLET").click(); //3 no. option after type AND

    // conditions if timeslots are total 4
    cy.get("body").then((body) => {
      if (
        body.find(
          "input[placeholder='Enter Quantity'][value='0'][name='slots_detail[0].new_dosage']"
        ).length > 0
      ) {
        cy.get(
          "input[placeholder='Enter Quantity'][value='0'][name='slots_detail[0].new_dosage']"
        ).should("be.visible");
        cy.get(
          "input[placeholder='Enter Quantity'][value='0'][name='slots_detail[0].new_dosage']"
        ).type("1");
      }

      if (
        body.find(
          ":nth-child(2) > .row > .col-md-8 > .position-relative > .form-control"
        ).length > 0
      ) {
        cy.get(
          ":nth-child(2) > .row > .col-md-8 > .position-relative > .form-control"
        ).should("be.visible");
        cy.get(
          ":nth-child(2) > .row > .col-md-8 > .position-relative > .form-control"
        )
          .clear()
          .type("1");
      }

      if (
        body.find(
          "input[placeholder='Enter Quantity'][value='0'][name='slots_detail[2].new_dosage']"
        ).length > 0
      ) {
        cy.get(
          "input[placeholder='Enter Quantity'][value='0'][name='slots_detail[2].new_dosage']"
        ).should("be.visible");
        cy.get(
          "input[placeholder='Enter Quantity'][value='0'][name='slots_detail[2].new_dosage']"
        ).type("1");
      }

      if (
        body.find(
          "input[placeholder='Enter Quantity'][value='0'][name='slots_detail[3].new_dosage']"
        ).length > 0
      ) {
        cy.get(
          "input[placeholder='Enter Quantity'][value='0'][name='slots_detail[3].new_dosage']"
        ).should("be.visible");
        cy.get(
          "input[placeholder='Enter Quantity'][value='0'][name='slots_detail[3].new_dosage']"
        ).type("1");
      } else {
        cy.get(
          "div[class='p-0 modal-body'] button:nth-child(1) span:nth-child(1)"
        ).click();
      }
    });
    // submit button click
    // cy.get(".my-3 > span").click();
  }
  add_patient_notes() {
    cy.get(lc.patient_select, { timeout: 20000 }).should("be.visible");
    cy.get(lc.patient_select).click("left");
    cy.get(".noteDesign.cursor-pointer", { timeout: 20000 }).should(
      "be.visible"
    );
    cy.get(".noteDesign.cursor-pointer").click();
    cy.get("div[class='addpatinet card'] h5[class='card-title']", {
      timeout: 20000,
    }).should("be.visible");
    cy.get("div[class='addpatinet card'] h5[class='card-title']").click();
    cy.get("#DFf", { timeout: 20000 }).should("be.visible");
    cy.get("#DFf").type("Testing that notes of patient is adding or not");
    cy.get(".w-100.btn.btn-primary").click();
    cy.get("div[class='viewpatient card'] h5[class='card-title']", {
      timeout: 20000,
    }).should("be.visible");
    cy.get("div[class='viewpatient card'] h5[class='card-title']").click();
    cy.wait(3000);
    cy.get(
      "div[class='d-flex align-items-center modal-header'] button[aria-label='Close']"
    ).click();
    cy.wait(2000);
    cy.get("button[aria-label='Close']").click();
  }
}
export default Cardex_Add_CP;

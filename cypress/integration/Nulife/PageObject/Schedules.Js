import Locators from "./Locatos";

const lc = new Locators();
const data_sch = require("../../../fixtures/AddPatientsData.json");

class Schedules {
  add_schedule() {
    cy.get(lc.schedules_button, { timeout: 10000 }).should("be.visible");
    cy.get(lc.schedules_button).click();
    cy.get(lc.add_schedule, { timeout: 10000 }).should("be.visible");
    cy.get(lc.add_schedule).click();
    cy.get(lc.schedule_name, { timeout: 10000 }).should("be.visible");
    cy.get(lc.schedule_name).click();
    cy.get(lc.schedule_name).type(data_sch.schedule);
    cy.get(lc.schedule_time_slot).click();
    cy.get(lc.schedule_slot_select, { timeout: 10000 }).should("be.visible");
    cy.get(lc.schedule_slot_select).click();
    cy.wait(2000);
    cy.get(lc.slot_1,{ timeout: 10000}).should("be.visible").click();
    cy.wait(2000);
    cy.get(".css-10oqvlc-control > .css-1hwfws3", { timeout: 10000 }).should(
      "be.visible"
    ); //time slot 1
    cy.get(".css-10oqvlc-control > .css-1hwfws3").type("01:00");
    cy.get(".css-1ew0esf div").contains("01:00").click();
    cy.get(
      ":nth-child(2) > :nth-child(2) > .position-relative > .react-select > .css-9jfzet-control > .css-1hwfws3"
    ).type("02:00"); //time slot 2
    cy.get(".css-1bpab52-menu div").contains("02:00").click();
    cy.get(
      ":nth-child(2) > :nth-child(3) > .position-relative > .react-select > .css-9jfzet-control > .css-1hwfws3"
    ).type("03:00"); //time slot 3
    cy.get(".css-1ew0esf div").contains("03:00").click();
    cy.get(
      ":nth-child(4) > .position-relative > .react-select > .css-9jfzet-control > .css-1hwfws3"
    ).type("04:00"); //time slot 4
    cy.get(".css-1ew0esf div").contains("04:00").click();
    cy.get(lc.submit).click();
  }
  edit_schedule() {
    cy.wait(3000);
    cy.get(lc.edit_schedule_button, { timeout: 10000 }).should("be.visible");
    cy.get(lc.edit_schedule_button).click();
    cy.get(lc.edit_schedule_name, { timeout: 10000 }).should("be.visible");
    cy.get(lc.edit_schedule_name).clear().type("Test_automation_sch");
    cy.get(lc.update_schedule_button).click();
  }
  delete_schedule() {
    cy.wait(2000);
    cy.get(lc.delete_schedules, { timeout: 20000 }).should("be.visible");
    cy.get(lc.delete_schedules).click();
    cy.get(lc.delete_schedule_confirm, { timeout: 10000 }).should("be.visible");
    cy.get(lc.delete_schedule_confirm).click();
    cy.get("button[aria-label='OK']").click(); // success ok button
  }
  nursing_home_schedule() {
    cy.get(lc.schedules_button, { timeout: 10000 }).should("be.visible");
    cy.get(lc.schedules_button).click();
    cy.get(lc.add_schedule, { timeout: 10000 }).should("be.visible");
    cy.get(".addPatient").contains("Add Schedule").click();
    cy.get(lc.schedule_name, { timeout: 10000 }).should("be.visible");
    cy.get(lc.add_ward_button).click();
    cy.get(lc.ward_name, { timeout: 10000 })
      .should("be.visible")
      .type("automation new");
    cy.get(lc.ward_nursing_home).click();
    cy.get(".css-1ew0esf", { timeout: 10000 })
      .should("be.visible")
      .contains("don homies (testing pharmacy)")
      .click();
    cy.get(lc.add_ward).click();
    cy.get(lc.schedule_name, { timeout: 10000 }).should("be.visible");
    cy.get(lc.schedule_name).click();
    cy.get(lc.schedule_name).type("Automation Schedule");
    cy.get(lc.ward_select_schedule).contains("Select ward").click();
    cy.get(".css-1ew0esf").contains("automation new").click;
    cy.get(lc.schedule_time_slot).click();
    cy.get(lc.schedule_slot_select, { timeout: 10000 }).should("be.visible");
    cy.get(lc.schedule_slot_select).click();
    cy.wait(2000);
    cy.get(lc.slot_1).click();
    cy.wait(2000);
    cy.get(".css-10oqvlc-control > .css-1hwfws3", { timeout: 10000 }).should(
      "be.visible"
    ); //time slot 1
    cy.get(".css-10oqvlc-control > .css-1hwfws3").type("01:00");
    cy.get(".css-1ew0esf div").contains("01:00").click();
    cy.get(
      ":nth-child(2) > :nth-child(2) > .position-relative > .react-select > .css-9jfzet-control > .css-1hwfws3"
    ).type("02:00"); //time slot 2
    cy.get(".css-1bpab52-menu div").contains("02:00").click();
    cy.get(
      ":nth-child(2) > :nth-child(3) > .position-relative > .react-select > .css-9jfzet-control > .css-1hwfws3"
    ).type("03:00"); //time slot 3
    cy.get(".css-1ew0esf div").contains("03:00").click();
    cy.get(
      ":nth-child(4) > .position-relative > .react-select > .css-9jfzet-control > .css-1hwfws3"
    ).type("04:00"); //time slot 4
    cy.get(".css-1ew0esf div").contains("04:00").click();
    cy.get(lc.submit).click();
  }
}
module.exports = Schedules;

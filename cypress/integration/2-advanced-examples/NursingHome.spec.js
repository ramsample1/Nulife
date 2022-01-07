/// <reference types="cypress" />
import LoginPage from "../Nulife/PageObject/LoginPage";
import Nursing_home_patients from "../Nulife/PageObject/Nursing_home_patinets";
import Schedules from "../Nulife/PageObject/Schedules";
import Community_Patients from "../Nulife/PageObject/Community_Patients";
import Doctor from "../Nulife/PageObject/Doctors";
import Cardex_Add_CP from "../Nulife/PageObject/Cardex_Add_CP";
import nursing_home from "../Nulife/PageObject/add_nursing_home";
import Utils from "../Nulife/PageObject/utils";

const ut = new Utils();
const cp = new Community_Patients();
const lp = new LoginPage();
const doc = new Doctor();
const nh = new nursing_home();
const sch = new Schedules();
const nhp = new Nursing_home_patients();
const cdx = new Cardex_Add_CP();

describe("Pharmacy Nursing Home Suite ", function () {
  before(function () {
    cy.log("****Login****");
    lp.login_nursing_home();
    cy.saveLocalStorage();
    cy.log("***Login Done***");
  });
  beforeEach(function (){
    cy.viewport(1600, 1000);
    cy.restoreLocalStorage()
  })
  afterEach(function () {
    
    cy.visit("https://pharmacyadmin.appdesignproject.ie/patient-data")

  });
  after(function () {
    cy.log("***Logout***");
    cy.wait(2000);
    lp.logout();
    cy.log("***Logout Done***");
  });

  // it("Add Nursing Home Patient", function () {
  //   cy.wait(2000);
  //   nhp.add_patient();
  // });
  // it("Edit Nursing Home Patient", function () {
  //   cy.wait(2000);
  //   cp.edit_patient();
  // });

  // it("Check all filters working on patient page", function () {
  //   cy.wait(2000);
  //   cp.page_filters();
  //   cy.wait(2000);
  // });
  // it("Add & Edit Doctor functionality", function () {
  //   cy.wait(2000);
  //   doc.add_doctor();
  //   cy.wait(2000);
  //   doc.ph_edit_doctor();
  // });
  // it("Schedule functionality", function () {
  //   cy.wait(2000);
  //   sch.nursing_home_schedule();
  //   cy.wait(1000);
  //   sch.edit_schedule();
  //   cy.wait(1000);
  //   sch.delete_schedule();
  // });
  // it("Nursing Home Functionality", function () {
  //   cy.wait(2000);
  //   nh.add_nursing_home();
  //   cy.wait(2000);
  //   nh.edit_nursing_home();
  //   nh.clinic();
  //   cy.wait(2000);
  //   nh.delete_nursing_home();
  // });
  it("Cardex functionality", function () {
    cdx.add_cardex();
    cy.wait(1000);
    cdx.edit_cardex();
    cy.wait(2000);
    cdx.nursing_home_future_cardex();
    cy.wait(2000);
    cdx.delete_nursing_home_cardex();
  });
  it ("cardex Page Functionality", function () {
    


  })
});

/// <reference types="cypress" />

import Community_Patients from "../Nulife/PageObject/Community_Patients";
import LoginPage from "../Nulife/PageObject/LoginPage";
import medication from "../Nulife/PageObject/medication";
import Schedules from "../Nulife/PageObject/Schedules";
import Cardex_Add_CP from "../Nulife/PageObject/Cardex_Add_CP";
const cp = new Community_Patients();
const lp = new LoginPage();
const md = new medication();
const sch = new Schedules();
const cdx = new Cardex_Add_CP();

describe("Pharmacy Community Suite ", function () {
  beforeEach(function () {
    cy.log("****Login****");
    lp.login();
    cy.log("***Login Done***");
  });

  afterEach(function () {
    cy.log("***Logout***");
    cy.wait(2000);
    lp.logout();
    cy.log("***Logout Done***");
  });

  it("Add Patients functionality", function () {
    cy.wait(2000);
    cp.add_patient();
    cy.wait(2000);;
  });

  it("Edit Patients functionality", function () {
    cy.wait(2000);
    cp.edit_patient();
    cy.wait(2000);
  });
  it("Check all filters working on patient page", function () {
    cy.wait(2000);
    cp.page_filters();
    cy.wait(2000);
  });

  it("Check add medication functionality", function () {
    cy.wait(3000);
    md.add_medication();
    cy.wait(3000);
  });
  it("Add Schedule functionality", function () {
    cy.wait(2000);
    sch.add_schedule();
    cy.wait(1000)
    sch.edit_schedule();
    cy.wait(1000)
    sch.delete_schedule();
  });
  it("Add Cardex functionality", function () {

    cdx.add_cardex();
    cy.wait(1000);
    cdx.edit_cardex();
    cy.wait(2000)
    cdx.delete_cardex();
  });

  it("Add and view patient notes functionality", function () {
    cy.wait(3000);
    cdx.add_patient_notes();
  });
});

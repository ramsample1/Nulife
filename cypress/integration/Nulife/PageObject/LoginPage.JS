import Utils from "./utils";
const ut = new Utils();
const data = require("../../../fixtures/example.json");
let field

class LoginPage {
  login() {
    cy.viewport(1600, 1000);
    cy.visit("https://pharmacyadmin.appdesignproject.ie/login");
    ut.wait_and_click("input[placeholder='Email']")
    field = cy.get("input[placeholder='Email']");
    field.clear();
    field.type(data.email);
    const pass = cy.get("input[placeholder='Password']");
    pass.clear();
    pass.type(data.Password);
    const button = cy.get("button[type='submit']");
    button.click();
    ut.wait_and_click("#community_patient")
    // cy.get("#community_patient").click();
    cy.get(".mb-0.headerClass", { timeout: 20000 }).should("be.visible")
    
    // ut.wait_and_click("#row-0")
    
    
    return this;
  }
  login_nursing_home() {
    cy.viewport(1600, 900);
    cy.visit("https://pharmacyadmin.appdesignproject.ie/login");
    ut.wait_and_click("input[placeholder='Email']")
    const field = cy.get("input[placeholder='Email']");
    field.clear();
    field.type(data.email);
    const pass = cy.get("input[placeholder='Password']");
    pass.clear();
    pass.type(data.Password);
    const button = cy.get("button[type='submit']");
    button.click();
    ut.wait_and_click("#nursing_home")
    ut.wait_and_click(".mb-0.headerClass ")
    return this;
  }
  logout() {

    ut.wait_and_force_click(".align-self-center > :nth-child(4)")
    cy.wait(1000)
    ut. wait_and_force_click("button[aria-label='Yes']")
    cy.wait(1000)
    cy.get(".logo-img", { timeout: 10000 }).should("be.visible")
    
  }
}
Cypress.on("uncaught:exception", (err, runnable) => {
  console.log(err);
  return false;
});
export default LoginPage;
// module.exports = LoginPage;

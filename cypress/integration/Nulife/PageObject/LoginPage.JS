const data = require("../../../fixtures/example.json");

class LoginPage {
  login() {
    cy.viewport(1600, 1000);
    cy.visit("https://pharmacyadmin.appdesignproject.ie/login");
    cy.get("input[placeholder='Email']", { timeout: 10000 }).should(
      "be.visible"
    );
    const field = cy.get("input[placeholder='Email']");
    field.clear();
    field.type(data.email);
    const pass = cy.get("input[placeholder='Password']");
    pass.clear();
    pass.type(data.Password);
    const button = cy.get("button[type='submit']");
    button.click();
    cy.get("div[id='community_patient'] h5[class='card-title']", {
      timeout: 20000,
    }).should("be.visible");
    cy.get("div[id='community_patient'] h5[class='card-title']").click();
    
    cy.get("#row-0", { timeout: 20000 }).should("be.visible");
    
    
    return this;
  }
  login_nursing_home() {
    cy.viewport(1600, 900);
    cy.visit("https://pharmacyadmin.appdesignproject.ie/login");
    cy.get("input[placeholder='Email']", { timeout: 10000 }).should(
      "be.visible"
    );
    const field = cy.get("input[placeholder='Email']");
    field.clear();
    field.type(data.email);
    const pass = cy.get("input[placeholder='Password']");
    pass.clear();
    pass.type(data.Password);
    const button = cy.get("button[type='submit']");
    button.click();
    cy.get("div[id='nursing_home'] h5[class='card-title']", {
      timeout: 20000,
    }).should("be.visible");
    cy.get("div[id='nursing_home'] h5[class='card-title']").click();
    cy.get(".headerClass", { timeout: 10000 }).should("be.visible");
    return this;
  }
  logout() {
    cy.get(".align-self-center > :nth-child(4)", { timeout: 20000 }).should(
      "be.visible"
    );
    cy.wait(2000);
    cy.get(".align-self-center > :nth-child(4)").click();
    cy.wait(2000);
    cy.get("button[aria-label='Yes']", { timeout: 2000 }).should("be.visible");
    cy.get("button[aria-label='Yes']").click();
  }
}
Cypress.on("uncaught:exception", (err, runnable) => {
  console.log(err);
  return false;
});
export default LoginPage;
// module.exports = LoginPage;

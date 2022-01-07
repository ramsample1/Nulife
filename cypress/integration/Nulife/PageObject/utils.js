import 'cypress-localstorage-commands';
class Utils {
  wait_and_click(locator) {
    // cy.waitForNetworkIdle(4000);
    cy.get(locator, { timeout: 15000 }).click();
    cy.log("clicked")
  }
  wait_and_force_click(locator) {
    // cy.waitForNetworkIdle(4000);
    cy.get(locator, { timeout: 15000 }).click({ force: true });
    cy.log("clicked")
  }
  // wait_for_xpath(xpath){

  //   cy.wait(2000);
  //   cy.get(locator, { timeout: 10000 }).click();
  //   cy.log("Wait for xpath and clicked ")

  
 
}
export default Utils;

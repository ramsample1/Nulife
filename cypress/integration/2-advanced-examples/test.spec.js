/// <reference types="cypress" />

import LoginPage from "../Nulife/PageObject/LoginPage";
import Community_Patients from "../Nulife/PageObject/Community_Patients";
import Nursing_home_patients from "../Nulife/PageObject/Nursing_home_patinets";
const lp = new LoginPage();
const nhp = new Nursing_home_patients();
const cp = new Community_Patients();

// describe("Pharmacy Nursing Home Suite ", function () {
//   it("Login",function () {
//   // it("Test",function () {
//      cy.log("****Login****");
//   // })
//     lp.login_nursing_home();
//     Cypress.Cookies.debug(true)
//     cy.log("***Login Done***");
//   });
// //   beforeEach(function () {
// //     cy.viewport(1600, 900);
// //     Cypress.Cookies.preserveOnce("token");
// //   });

//   it("Add Nursing Home Patient", function () {
//     cy.viewport(1600, 900);
//     cy.wait(2000);
//     nhp.add_patient();
//     cy.wait(5000)
//     cy.viewport(1600, 900);
//   });
//   it("Edit Nursing Home Patient", function () {
//     cy.viewport(1600, 900);
//     cy.wait(2000);
//     cp.edit_patient();
//   });

//   it("Check all filters working on patient page", function () {
//     cy.viewport(1600, 900);
//     cy.wait(2000);
//     cp.page_filters();
//     cy.wait(2000);
//     Cypress.Cookies.preserveOnce('token', 'remember_token')
//   });
// });
const email = "akash@appdesign.ie"
const password = "ab698ebe0ba0670fac43d8f10ce2f93aa4f311c2bb2650b455eb078200488c57"
describe("Pharmacy Nursing Home Suite ", function () {
    let tokens = ''
    let refresh_tokens = ''
    it('generate token',function () {
      cy.request({
        method: 'POST',
        url: 'https://api-nulife.appdesignproject.ie/v1/auth/login',
        form : true,
        failOnStatusCode: false,
        body:{ email, password },

}).then(response => {
            cy.log(JSON.stringify(response.body))
            cy.log(response.body)
            cy.log(response.body.tokens.access.token)
             tokens = response.body.tokens.access.token
             cy.log(tokens)

      cy.request({
        
        url: 'https://api-nulife.appdesignproject.ie/v1/pharmacy/dashboard',
        method: 'Get',
        // body:{ email, password 
        // },
        headers: { 'Content-Type': 'application/json',Authorization: 'Bearer ' + tokens},
        failOnStatusCode: false,
      

      // }).then(response => {
      //                  cy.log(JSON.stringify(response.body))
      //                  if(response.body){
      //                      const resBody = JSON.parse(JSON.stringify(response.body) )
      //                      const token = resBody.tokens.access.token
      //                      cy.log(JSON.stringify(resBody))
      //                      cy.log(JSON.stringify(token))
      //                     }
               
                                    //  })
       
               
               
              //  if(response.body){
              //      const resBody = JSON.parse(JSON.stringify(response.body) )
              //      const token = response.body.tokens.access.token
              //      cy.log(JSON.stringify(resBody))
              //      cy.log(JSON.stringify(token))
                //  window.localStorage.setItem('auth_token',token)
              //  }
               
           })
    })
  })
})

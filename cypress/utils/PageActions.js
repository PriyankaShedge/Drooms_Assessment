

export class PageActions {

    getElement(ele){
        return cy.get(ele);
    }

    enterTextInto(ele, text) {
        cy.get(ele).type(text);
    }

    clickButton(ele) {
        cy.get(ele).click();
    }

    assertElementExist(ele){
        cy.get(ele).should('exist');
    }

    assertElementText(ele,arr){
        cy.get(ele).should($message => {
            expect($message.text()).to.be.oneOf(arr);
        })
    }

    assertElementFloatText(ele,text){
        cy.get(ele).invoke('text').then(parseFloat).should('be.eq',text)
            cy.log("Text matched")
        }

    assertTextPresent(ele,name){
        cy.get(ele).each((item, index, list) => {
            expect(Cypress.$(item).text()).to.eq(name[index]);
        });
    }
     
     captureAlert(){
        cy.on('window:alert', function(alertText){
           expect(alertText).eq("Product added.")      
           alertText=captureAlert();
    })
  
}

    getElementText(ele){
        let text;
        cy.get(ele).then(($btn) => {
             text = $btn.text()
            cy.log(text)
          })
          return text;
    }

    alertDisplayed(name){
        cy.on('window:alert', function(alertText){
        expect(alertText).eq(name)      
        acceptAlert()
        
     })
    }


    acceptAlert(){
        cy.on('window:confirm', () => true);
    }

    openPageUrl(url){
        cy.visit(url);
    }

    clickButtonWithTimeout(ele, delay){
        cy.get(ele, { timeout: delay }).click();
    }

    deleteAllCookies(){   
        cy.clearCookies();
    }
}

import { PageActions } from "../utils/PageActions";

export class DemoBlazeHomePage {

    homePage_categoriesTitle = '.list-group #cat';
    homePage_categories = '.list-group-item#itemc';
    homePage_priceTags = '.card-block h5';
    homePage_aboutUs = '.navbar-nav.ml-auto a[data-target="#videoModal"]';
    homePage_aboutUsVideo = '.form-group [class*="vjs-paused"]';
    homePage_login='#login2';
    homePage_product1 = 'h4 a[href*="idp_=1"]';
    homePage_product2 = 'h4 a[href*="idp_=2"]';
    homePage_addToCart = 'a[onclick*="addToCart"]';
    homePage_home = '.container #nava';
    homePage_cart ='#cartur';
    expectedAlertMessage = "Product added.";
    pageActions = new PageActions;

    navigate(url) {
        this.pageActions.deleteAllCookies();
        this.pageActions.openPageUrl(url);
    }

    isCategoriesTabDisplayed(){
        this.pageActions.assertElementExist(this.homePage_categoriesTitle);
    }

    isCategoryDisplayed(categoryName){
        this.pageActions.assertTextPresent(this.homePage_categories,categoryName);
    }

    isPriceTagDisplayed(){
        this.pageActions.assertElementExist(this.homePage_priceTags);
    }

    clickAboutUsOption(){
        this.pageActions.clickButton(this.homePage_aboutUs);
    }

    isVideoPaused(){
        this.pageActions.assertElementExist(this.homePage_aboutUsVideo);
    }

    clickLoginButton(){
        this.pageActions.clickButton(this.homePage_login);
        cy.wait(1000);
    }

    addProduct(){
        cy.on('window:alert', function(alertText){
        expect(alertText).eq("Product added.")      
       })
        this.pageActions.clickButton(this.homePage_product1)
        this.pageActions.clickButton(this.homePage_addToCart)
        cy.wait(1000);
    }

    addProducts(productNumber){
        var product = 'h4 a[href*="idp_=num"]';
        var finalproduct = product.replace('num',productNumber);
        this.pageActions.clickButton(finalproduct);
        this.pageActions.clickButton(this.homePage_addToCart);
        cy.wait(1000);
        this.pageActions.acceptAlert();
        this.pageActions.clickButton(this.homePage_home);
    }

    isProductAddedPopUpDisplayed(){
        this.pageActions.alertDisplayed("Product added");        
    }

    addMultipleProducts(){
        this.addProducts(1);
        this.addProducts(2);
    }

    openCart(){
        this.pageActions.clickButton(this.homePage_cart);
        cy.wait(1500)
    }

}
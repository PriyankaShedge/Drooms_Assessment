import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor"
import { DemoBlazeHomePage } from "../../../pages/DemoBlazeHomePage"
import { LoginPage } from "../../../pages/LoginPage"
import { CartPage } from "../../../pages/CartPage"
import {loginData } from "../../API/stepDefinitions/APITest" 
const homePage = new DemoBlazeHomePage;
const loginPage = new LoginPage;
const cartPage = new CartPage;

var popUpText;

Given("User opens demoblaze homepage",()=>{
    cy.visit("/")
});

Then("verify user see all 3 categories",(datatable)=>{ 
    const categories = datatable.raw()[0]; 
    homePage.isCategoriesTabDisplayed();
    homePage.isCategoryDisplayed(categories);
});

Then("verify all products have price tags",()=>{
   homePage.isPriceTagDisplayed();
});

When("user clicks on About us option",()=>{
    homePage.clickAboutUsOption();
 });

Then("verify video is displayed in paused state",()=>{
    homePage.isVideoPaused();
 });
 
 When("user logins to the application",()=>{
    homePage.clickLoginButton();
     loginPage.login(loginData);

 });

 Then("user verifies Product Added pop up on adding product to cart",()=>{ 
   homePage.addProduct();
 });

 When("user adds few products to cart",()=>{
    homePage.addMultipleProducts();
 });

 When("navigates to cart page",()=>{
    homePage.openCart();
 });

 Then("verify the Total amount matches with the total item prices in the cart",()=>{
    cartPage.validateCartPrices();
 })
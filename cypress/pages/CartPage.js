import { PageActions } from "../utils/PageActions";

export class CartPage {

    cartPage_prices = '#tbodyid tr td:nth-child(3)';
    cartPage_totalPrice = '#totalp';
    pageActions = new PageActions;
    

    validateCartPrices(){
        let expPrice;
        this.pageActions.getElement(this.cartPage_prices).then(($cells) =>{
        const total = $cells.toArray().map((el)=> el.innerText).map((s)=> s.replace('$',''))
        .map(parseFloat)
        const sum = Cypress._.sum(total)
       this.pageActions.assertElementFloatText(this.cartPage_totalPrice,sum);
       }); 
    }
}
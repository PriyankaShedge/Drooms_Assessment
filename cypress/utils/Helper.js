
import { apiRequest } from "../utils/APICalls"
import { viewCart,deleteProduct } from "../utils/GenerateRequestBody"
 
export const priceCompare = (jsonData, operator) => {

    var counter = 0;
    for (var i = 0; i < jsonData.length; i++) {
        var item = jsonData[i];
        if (operator == 'less') {
            
            if (item.price < 400) {
                counter++;
            }
        }
        else if (operator == 'more') {
            if (item.price >= 400) {
                counter++;
            }
        }
    }        return counter;

}

export const cleanUpCart = (token,body) => {
    cy.log("cart cleanup")
    body = viewCart(token);
    const res = apiRequest("POST", "viewcart", body).then(res => {
        expect(res.status).equal(200)
        deleteObj = JSON.parse(JSON.stringify(res.body))
        if (deleteObj.errorMessage != 'Bad parameter, token malformed.') {
            for (i = 0; i < deleteObj.Items.length; i++) {
                body = deleteProduct(deleteObj.Items[i].id)
                const res = apiRequest("POST", "deleteitem", body).then(res => {
                    expect(res.status).equal(200)
                })
            }
        }


    });
}

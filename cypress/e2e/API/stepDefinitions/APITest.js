import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor"
import { priceCompare,cleanUpCart } from "../../../utils/Helper";
import { loginCredentials, products, viewCart, deleteProduct } from "../../../utils/GenerateRequestBody";
import { apiRequest } from "../../../utils/APICalls"

export var obj
export var body
export var productsId
export var token = "123"
export var datatab
export var uniqueId = []
export var flag = true;
export var deleteObj
export var loginData

before(function () {
    cy.fixture('profile').then((data) => {
        loginData = data;

    })
})

Given("user creates {string} request for {string} endpoint", async (method, endpoint) => {
    const res = apiRequest(method, endpoint, body).then(res => {
        expect(res.status).equal(200)
        obj = JSON.parse(JSON.stringify(res.body));

    })
});

Then("verify result returns 9 records", () => {
    expect(obj.Items.length).equal(9)

})

Then("verify result returns {string} records with prices {string} than 400", async (count, operator) => {
    var jsonData = JSON.parse(JSON.stringify(obj.Items));
    const itemsCount = priceCompare(jsonData, operator)
    expect(itemsCount).equal(parseInt(count))
})

Given("user creates request body for {string}", async (category) => {
    body = '{"cat":' + '\"' + category + '\"}';
})

Then("verify result returns categories with count as {string}", async (count) => {
    expect(obj.Items.length).equal(parseInt(count))
})

Given("user creates request body for login", async () => {
    cy.log(loginData)
    body = loginCredentials(loginData);
})

When("user {string} multiple products using {string} request for {string} endpoint", async (operation, method, endpoint, datatable) => {
    token = obj.split(": ")[1]

    cleanUpCart(token,body)

    cy.log(token)
    if (operation == "add") {
        datatab = datatable.raw();
        for (i = 0; i < datatab.length; i++) {
            productsId = datatab[i][1];
            body = products(productsId, token)
            uniqueId[i] = JSON.parse(body).id;
            const res = apiRequest(method, endpoint, body).then(res => {
                expect(res.status).equal(200)
            })
        }
    }
    else if (operation == "delete") {
        for (i = 0; i < uniqueId.length; i++) {
            body = deleteProduct(uniqueId[i])
            const res = apiRequest(method, endpoint, body).then(res => {
                expect(res.status).equal(200)
            })
        }
    }

})

Then("user performs {string} request for {string} endpoint to verify cart for {string} items", async (method, endpoint, operation) => {
    body = viewCart(token);
    const res = apiRequest(method, endpoint, body).then(res => {
        expect(res.status).equal(200)
        if (operation == 'added') {
            expect(res.body.Items.length).equal(datatab.length)
            for (i = 0; i < datatab.length; i++) {
                expect(res.body.Items[i].prod_id).equal(datatab[i][1])
            }
        }
        else if (operation == 'deleted') {
            expect(res.body.Items.length).equal(0)
        }

    })
})

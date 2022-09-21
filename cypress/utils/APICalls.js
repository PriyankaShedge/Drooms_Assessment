
export var respBody;

export const apiRequest = (method, endpoint,body) => {
   const baseUrl = "https://api.demoblaze.com/";
   

    if(method=='GET'){
        return cy.request({
            method: method,
            url: baseUrl+endpoint,
            headers:{
                'Content-Type':  'application/json'
            } ,
            body:""
        })
    }
    else if(method == 'POST'){
        return cy.request({
            method: method,
            url: baseUrl+endpoint,
            headers: {
                'Content-Type':  'application/json'
            },
            body: body
         
  })
    }
    else if(method == 'DELETE'){
        return cy.request({
            method: method,
            url: baseUrl+endpoint,
            headers: {
                'Content-Type':  'application/json'
            },
            body: body
         
  })
    }
}



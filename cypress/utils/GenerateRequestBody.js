
export const loginCredentials = (data) =>{
    const loginData = new Map();
    loginData.set("username",data.username);
    loginData.set("password",data.password);
    const obj = Object.fromEntries(loginData);
    return JSON.stringify(obj)
   
}

export const products= (productsId,token)=>{
    const uniqueId = Date.now()+productsId;
    const prod = new Map();
    prod.set("id",uniqueId);
    prod.set("cookie",token);
    prod.set("prod_id",productsId);
    prod.set("flag",true);
    const obj = Object.fromEntries(prod);
    return JSON.stringify(obj)
}

export const viewCart=(token)=>{
    const cart = new Map();
    cart.set("cookie",token);
    cart.set("flag",true);
    const obj = Object.fromEntries(cart);
    return JSON.stringify(obj)
}

export const deleteProduct=(uniqueId)=>{
    const deleteItem = new Map();
    deleteItem.set("id",uniqueId);
    const obj = Object.fromEntries(deleteItem);
    return JSON.stringify(obj)
}
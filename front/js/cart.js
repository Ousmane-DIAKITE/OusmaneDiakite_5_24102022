"use strict";


// Données du Localstorage
 function getBasket (){
    let basket = localStorage.getItem("basket");
    if (basket == null ) {
        return [];
        
    } else {
        return JSON.parse(basket);
    }
 }
 
 function addBasket() {
    let basket = getBasket();
    let foundProduct = basket.find(p => p.id == product.id);
    if (foundProduct != undefined) {
        foundProduct.quantity++;
        console.log(foundProduct);
    } else {
        foundProduct = 1;
        basket.push(basket);
    }
    
 }
getBasket();


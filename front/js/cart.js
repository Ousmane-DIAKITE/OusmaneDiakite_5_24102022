"use strict";

// Création d'une fonction appel de mon API
async function getProductById (idProduct){
    let res = await fetch("http://localhost:3000/api/products/" + idProduct)
     return res.json();
 }

// Données du Localstorage
 function getBasket (){
    let basket = localStorage.getItem("basket");
    if (basket == null ) {
        return [];
        
    } else {
        return JSON.parse(basket);
    }
 }
 
 function displayAllBasket() {
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


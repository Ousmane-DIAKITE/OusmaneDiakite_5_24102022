"use strict";

// Création d'une fonction appel de mon API
async function getProductById (idProduct){
    let res = await fetch("http://localhost:3000/api/products/" + idProduct)
     return res.json();
 }

// Données du Localstorage
 function getBasket (idProduct){
    let basket = localStorage.getItem("basket");
    console.log(basket);
    if (basket == null ) {
        return [];
        
    } else {
        
    }
 }
 
getBasket();


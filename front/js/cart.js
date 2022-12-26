"use strict";


// Données du Localstorage
 function getBasket() {
    let basket = localStorage.getItem("basket");
    basket = JSON.parse(basket);
    console.log(basket);
    if (basket == null ) {
        return [];
        
    }
    
 }
 function displayItem(item) {
    
 }

 
 getBasket();


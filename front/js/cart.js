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
    const article = makeArticle(item);
    displayArticle(article);
    console.log(basket);
    const div = makeImageDiv(item);
    article.appendChild(div);
    
 }

 function displayArticle(article) {
    document.querySelector("#cart__items").appendChild(article);
    
 }

 function makeArticle(item) {
    
    
 }
 
 getBasket();


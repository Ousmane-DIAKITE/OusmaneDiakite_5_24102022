"use strict";

  const cart = []
  cart.forEach((item) => displayArticle(item))
  console.log(cart);
// Données du Localstorage
 function getBasket() {
    const numberOfItem = localStorage.length;
    console.log(numberOfItem);
    for (let i = 0; i < numberOfItem; i++) {
        const item = localStorage.getItem(localStorage.key(i));
        console.log(item);
        const itemObject = JSON.parse(item);
        console.log(itemObject);
        cart.push(itemObject);   
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
    document.querySelector(".cart__item").appendChild(article);
 }

 function makeArticle(item) {
    const article = document.createElement("article");
    article.classList.add("cart__item");
    article.dataset.id = item.id;
    article.dataset.colors = item.colors;
    return article
 }

 function makeImageDiv(item) {
    const div = document.createElement("div");
    div.classList.add("cart__item__img");
    let divImage = document.querySelector(".img");
        productImg.src = product.imageUrl;  
        productImg.alt = product.altTxt;
        div.appendChild(divImage);
    return div

 }


 getBasket();
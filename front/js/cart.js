"use strict";

// Création d'une fonction appel de mon API
async function getProductById (idProduct){
    let res = await fetch("http://localhost:3000/api/products/" + idProduct)
     return res.json();
 }

// Données du Localstorage
 function getProductById (idProduct){
    let basket = localStorage.getItem("basket");
    basket = JSON.parse(basket);
    console.log(basket);
    let sectionItem = document.getElementById("cart__items");
    console.log(sectionItem);
 }
 
getProductById();


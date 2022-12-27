"use strict";

function getAllProductsForCart () { 
    fetch("http://localhost:3000/api/products")
    .then((res) => res.json())
    .then((data) => getCartProducts(data)) 
    .catch((err) => {
        console.log('ça marche pas');
    });
}

function getCart() {
    let cart = localStorage.getItem("basket");

    return JSON.parse(cart);
}

function getCartProducts(allProducts) {
    let cart = getCart();
   
    for (let i = 0; i < allProducts.length; i++) {   
        for (let j = 0; j < cart.length; j++) {
            
            if (allProducts[i]._id === cart[j].id) {
                cart[j].price = allProducts[i].price;
                cart[j].name = allProducts[i].name;
                cart[j].imageUrl = allProducts[i].imageUrl;                
            }
        }  
    }
    displayCartProducts(cart);
}

function displayCartProducts(products) {
    console.log(products);
    for (let i=0; i < data.length; i++) {
        const sofa = data[i];
        
        // Création de l'élément "a"
        let linkProduct = document.createElement("a");
        linkProduct.href = "./product.html?id=" + sofa._id
        document.getElementById("items").append(linkProduct);
      
        // Création de l'élément "article"
        let productArticle = document.createElement("article");
        linkProduct.appendChild(productArticle);
        
      
        // Création de l'élément "img"
        let productImg = document.createElement("img");
        productImg.src = sofa.imageUrl;  
        productImg.alt = sofa.altTxt;
        productArticle.appendChild(productImg);
      
        // Création de l'élément titre "h3"
        let productTitle = document.createElement("h3");
        productTitle.textContent = sofa.name;
        productArticle.appendChild(productTitle);
      
        // Création de l'élément description "p"
        let productDescription = document.createElement("p");
        productDescription.textContent = sofa.description
        productArticle.appendChild(productDescription);
        }
}

  /*const cart = []
  cart.forEach((item) => displayArticle(item))

// Données du Localstorage
 function getBasket() {
    const numberOfItem = localStorage.length;

    for (let i = 0; i < numberOfItem; i++) {
        const item = localStorage.getItem(localStorage.key(i));

        const itemObject = JSON.parse(item);

        cart.push(itemObject);   
    }
 } 

 function displayItem(item) {
    const article = makeArticle(item);
    displayArticle(article);

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
*/

 getAllProductsForCart();
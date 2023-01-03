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
getCartProducts();
function displayCartProducts(cart) {
   
    for (let i=0; i < cart.length; i++) {
        console.log(cart);
        console.log(allProducts);

     // Insertion de l'élément "article"
        let productArticle = document.createElement("article");
        console.log(productArticle);
        document.querySelector("#cart__items").appendChild(productArticle);
        productArticle.className = "cart__item";
        productArticle.setAttribute('data-id', cart[allProducts]._id);
 
 
         // Insertion de l'élément "div"
         let productDivImg = document.createElement("div");
         productArticle.appendChild(productDivImg);
         productDivImg.className = "cart__item__img";
 
 
         // Insertion de l'image
         let productImg = document.createElement("img");
         productDivImg.appendChild(productImg);
         productImg.src = allProducts[cart].imgProduit;
         productImg.alt = allProducts[cart].altImgProduit;
         console.log(productImg);
 
           // Insertion de l'élément "div"
         let productItemContent = document.createElement("div");
         productArticle.appendChild(productItemContent);
         productItemContent.className = "cart__item__content";
         console.log(productItemContent);
         
        
/*
        const article = document.createElement("article");
        article.classList.add("cart__item");
        article.dataset.id = cart.id;
        article.dataset.color = cart.color;
        console.log(cart);
        
   
        const divElt = document.createElement("div");
        divElt.classList.add("cart__item__img");
        const imgElt = document.createElement("img");
        imgElt.src = cart.imageUrl;
        imgElt.alt = cart.altTxt;
        divElt.appendChild(imgElt);
        console.log(divElt);
        


     /*   
        // Création de l'élément "a"
        let linkProduct = document.createElement("cart__item");
        linkProduct.dataset.id = cart.id;
        console.log(cart);
        linkProduct.dataset.colors = item.colors;
        document.getElementById("cart__items").append(linkProduct);
      
        // Création de l'élément "article"
        let productArticle = document.createElement("article");
        linkProduct.appendChild(productArticle);
        
      
        // Création de l'élément "img"
        let productImg = document.createElement("img");
        productImg.src = cart.imageUrl;  
        productImg.alt = cart.altTxt;
        productArticle.appendChild(productImg);
      
        // Création de l'élément titre "h3"
        let productTitle = document.createElement("h3");
        productTitle.textContent = cart.name;
        productArticle.appendChild(productTitle);
      
        // Création de l'élément description "p"
        let productDescription = document.createElement("p");
        
        productDescription.textContent = cart.description
        productArticle.appendChild(productDescription);
        */
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
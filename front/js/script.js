"use strict";

getArticle();

function getArticle () { 
    fetch("http://localhost:3000/api/products")
    .then((res) => res.json())
    .then((data) => addProducts(data)) 
    .catch((err) => {
        console.log('ça marche pas');
    });
}

  // Ajout de la liste des produits
function addProducts(donnees) {
    for (let i=0; i < donnees.length; i++) {
    const canape = donnees[i];
    
    // Création de l'élément "a"
    let linkProduct = document.createElement("a");
    linkProduct.href = "./product.html?id=" + donnees[i]._id
    document.getElementById("items").append(linkProduct);
  
    // Création de l'élément "article"
    let productArticle = document.createElement("article");
    linkProduct.appendChild(productArticle);
    
  
    // Création de l'élément "img"
    let productImg = document.createElement("img");
    productArticle.appendChild(productImg);
    productImg.src = donnees[i].imageUrl;  
    productImg.alt = donnees[i].altTxt;
  
    // Création de l'élément titre "h3"
    let productTitle = document.createElement("h3");
    productArticle.appendChild(productTitle);
    productTitle.textContent = donnees[i].name;
  
    // Création de l'élément description "p"
    let productDescription = document.createElement("p");
    productArticle.appendChild(productDescription);
    productDescription.textContent = donnees[i].description
    }
  }   
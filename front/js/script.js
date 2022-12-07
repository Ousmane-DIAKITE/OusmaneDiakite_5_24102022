"use strict";



function getAllProducts () { 
    fetch("http://localhost:3000/api/products")
    .then((res) => res.json())
    .then((data) => displayAllProducts(data)) 
    .catch((err) => {
        console.log('ça marche pas');
    });
}

  // Ajout de la liste des produits
function displayAllProducts(data) {
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


  getAllProducts();
"use strict"

// Création de let pour récupérer l'URL de chaques id
let params = (new URL(document.location)).searchParams;
console.log(params);
let id = params.get("id");
console.log(id);

//Création de la Fonction GetProduct pour récupérer les données des produits en utilisant un fetch
function getProduct() {  
    fetch("http://localhost:3000/api/products/" + id)
    .then(response => response.json())
    .then((product) => displayProduct(product)) 
    .catch((error) => console.log(error)) 
}

// Création de la Fonction DisplayProduct pour afficher des element html dans le DOM
 function displayProduct(product) {

    // Création de l'élément "img"
    let productImg = document.createElement("img")
    productImg.src = product.imageUrl;  
    productImg.alt = product.altTxt;
   let divItemImg = document.querySelector(".item__img");
    divItemImg.appendChild(productImg);

    // Création de l'élément "titre"
    let productTitle = document.getElementById("title");
    productTitle.innerText = product.name;

    // Création de l'élément "titre"









 }


getProduct();


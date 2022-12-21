"use strict"

// Création de let pour récupérer l'URL de chaques id
let params = (new URL(document.location)).searchParams;
console.log(params);
let id = params.get("id");
//console.log(id);

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

    // Création de l'élément "prix"
    let productPrice = document.getElementById("price");
    productPrice.innerText = product.price;

    // Création de l'élément "description"
    let productDescription = document.getElementById("description");
    productDescription.innerText = product.description;

    // Appel les éléments "colors"
    getAllColors(product.colors);

 }

 // Création de la Fonction GetAllColors pour afficher les couleurs des élément html dans le DOM
 function getAllColors(colors) {
    // Création de la boucle pour récupérer  toutes les couleurs 
    let selectColors = document.getElementById("colors");
    for (let i = 0; i < colors.length; i++) {
        let optionColors = document.createElement("option");
        optionColors.value = colors[i];
        optionColors.innerText = colors[i];
        selectColors.appendChild(optionColors); 
   
    }
 }
function addToBasket() {
    let colors = document.getElementById("colors").value;
    let quantity = document.getElementById("quantity").value;

    quantity = (quantity <= 0) ? quantity = 1 : quantity = quantity;

    let product = {
        "id": id,
        "colors": colors,
        "quantity": quantity

    }
    if (localStorage.getItem("basket") === null) {
        localStorage.setItem("basket", "[]")

    }
  
    let basket = localStorage.getItem("basket");
    basket = JSON.parse(basket);

    let isPresent = false;
     

    for (let i = 0; i < basket.length; i++) {


        if (product.id === basket[i].id && product.colors === basket[i].colors) {
            basket[i].quantity = Number(basket[i].quantity) + Number(product.quantity);
            
            isPresent = true;
  
        } 
    }

    if (!isPresent) {
        basket.push(product);
        
    }
    if(checkQuantityColors(quantity, colors)) {
        let sofa = {
            "id": id,
            "colors": colors,
            "quantity": quantity
    
        }
        alert("Votre Article a bien été ajouté.");
    }

    
 

    localStorage.setItem("basket", JSON.stringify(basket));
   
}

    
function checkQuantityColors(quantity, colors) {

    if(quantity <= 0) {
        alert("Veuillez renseigner la quantité.");
        return false;
    }

    if (colors == "") {
        alert("Veuillez renseigner la couleur.")
        return false;
    }

    return true
}
    

    



//Création de l'élément bouton "Ajouter au panier"
const button = document.querySelector(".item__content__addButton");

button.addEventListener("click",addToBasket);



getProduct();


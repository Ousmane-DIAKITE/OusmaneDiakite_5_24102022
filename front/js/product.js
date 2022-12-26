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
    // Selectionner l'élément colors 
    let selectColors = document.getElementById("colors");
    // Création de la boucle pour récupérer  toutes les couleurs 
    for (let i = 0; i < colors.length; i++) {
        let optionColors = document.createElement("option");
        optionColors.value = colors[i];
        optionColors.innerText = colors[i];
        selectColors.appendChild(optionColors); 
   
    }
 }
 // Création de la Fonction pour rajouter nos produits dans le localStorage
function addToBasket() {
    // Sélectionner les Valeurs des éléments Quantité et Colors 
    let colors = document.getElementById("colors").value;
    console.log();
    let quantity = document.getElementById("quantity").value;
    if(checkColors(colors)) {
        let sofa = {
            "colors": colors,
        }
    }

    // (si la Quantité est inférieur ou égal à 0 la Quantité est égal à 1)
    quantity = (quantity <= 0) ? quantity = 1 : quantity = quantity;
    //Objet Produit
    let product = {
        "id": id,
        "colors": colors,
        "quantity": quantity

    }
    //Création du If pour sauvegarder le panier
    if (localStorage.getItem("basket") === null) {
        localStorage.setItem("basket", "[]")
        //Si le LocalStorage est vide, on crée un tableau vide
    }
    //Si tout est OK, on envoie le panier au LocalStorage
    let basket = localStorage.getItem("basket");
    basket = JSON.parse(basket);

    let isPresent = false;
     

    for (let i = 0; i < basket.length; i++) {
        if (product.id === basket[i].id && product.colors === basket[i].colors) {
            basket[i].quantity = Number(basket[i].quantity) + Number(product.quantity);
            
            isPresent = true;
            alert("Votre Article a bien été ajouté.");
        } 
    }

    if (!isPresent) {
        basket.push(product);
        
    }


    
 

    localStorage.setItem("basket", JSON.stringify(basket));
   
}

// Création de la Fonction CehckQuantity pour vérifier si les couleurs et la quantité sont renseigner  
function checkColors(colors) {

    if (colors == "") {
        alert("Veuillez renseigner la couleur.")
        return false;
    }

    return true
}
    

    



//Création de l'élément bouton "Ajouter au panier"
const button = document.querySelector(".item__content__addButton");


console.log('button');

button.addEventListener("click",addToBasket);




getProduct();


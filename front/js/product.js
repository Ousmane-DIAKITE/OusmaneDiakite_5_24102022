"use strict"

let params = (new URL(document.location)).searchParams;
console.log(params);
let id = params.get("id");
console.log(id);


function getProduct() {  
    fetch("http://localhost:3000/api/products/" + id)
    .then(response => response.json())
    .then((product) => displayProduct(product)) 
    .catch((error) => console.log(error)) 
}
 function displayProduct(product) {

console.log(displayProduct);

    let productImg = document.createElement("img");
    const divItemImg = document.querySelector(".item__img");
    const productImageUrl = product.imageUrl;
    const ProductAltTxt = product.altTxt;

    const productPrice = document.querySelector(".price");
    productPrice.textContent = product.price;


    const productDescription = document.querySelector(".description");
    productDescription.textContent = product.description;
    
    const productColor = product;
    
 }


getProduct();


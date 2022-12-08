"use strict"

let params = (new URL(document.location)).searchParams;
console.log(params);
let id = params.get("id");
console.log(id);


function getProduct() {  
    fetch("http://localhost:3000/api/products/" + id)
    .then((res) => res.json())
    .then((data) => { 
        ((data) => displayProduct(data)) 
        console.log(data)})
    .catch((err) => {
        console.log('Ca marche pas');

    });
}
 function displayProduct(product) {

    const divItemImg = document.querySelector("item__img");
    let productImg = document.createElement("img");
    productImg.src = product.imageUrl;  
    productImg.alt = product.altTxt;
    productArticle.appendChild(productImg);

    const productTitle = document.querySelector("title");
    productTitle = product.name;

    const productPrice = document.querySelector("price");
    productPrice = product.price;

    console.log(price);
  


  
    


    
 }

getProduct();


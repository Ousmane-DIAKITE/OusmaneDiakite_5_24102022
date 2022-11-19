"use strict"


getProduct();

function getProduct() {  
    fetch("http://localhost:3000/api/products")
    .then((res) => res.json())
    .then((data) => { 
        console.log(data)})
    .catch((err) => {
        console.log('Ca marche pas');
    });
}

function listProduct (allCanape) {
    
}

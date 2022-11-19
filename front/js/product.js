"use strict"


getProduct();

function getProduct() {  
    fetch("http://localhost:3000/api/products")
    .then((res) => res.json())
    .then((data) => { 
        ((data) => listProduct(data)) 
        console.log(data)})
    .catch((err) => {
        console.log('Ca marche pas');
    });
}
  // Ajout de la liste des produits
function listProduct (allCanape) {
    for (let i=0; i < allCanape.length; i++) {
        const canape = allCanape[i];
    }

}

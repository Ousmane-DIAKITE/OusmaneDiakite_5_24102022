"use strict"

function getArticle() {
    fetch("http://localhost:3000/api/products")
    .then((res) => res.json())
    .then((data) => addProducts(data))
    .catch((err) => {
        console.log('Ca marche pas');
    });
}
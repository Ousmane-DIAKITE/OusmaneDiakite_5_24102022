"use strict"

function getArticle() {  
    fetch("http://localhost:3000/api/products/ + id")
    .then((res) => res.json())
    .then((data) => {console.log(data)})
    .catch((err) => {
        console.log('Ca marche pas');
    });
}



"use strict";
fetch("http://localhost:3000/api/products/")
    .then(function(res) { 
        if (res.ok === 200) {
            return res.json();
        }/* Si le status-code 200 de la response est (res) correspond à une requête correctement exécuté (c'est ce qu'on attend ici) */
        })
    .then((value) => addProducts(value)) 
    .catch((err) => {
        console.log('ça marche pas' );
    });

 function addProducts(donnees) {
    
    var element = document.createElement('a');
    let anchor = document.createElement('a');
    anchor.href = "http://localhost:3000/images/kanap01.jpeg";
    anchor.text = "Kanap Sinopé"
   
    const itmes = document.querySelector("#items")
    itmes.appendChild(anchor)


}


    
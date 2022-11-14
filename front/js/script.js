"use strict";

function getArticle () { 

    fetch("http://localhost:3000/api/products/")
    .then(function(res) { 
        if (res.ok === 200) {
            return res.json();
        }/* Si le status-code 200 de la response est (res) correspond à une requête correctement exécuté (c'est ce qu'on attend ici) */
        })/* Récupération des articles depuis l'API au format json */
    .then((value) => addProducts(value)) 
    .catch((err) => {
        console.log('ça marche pas' );
    });
}
 function addProducts(donnees) {
    for (let i = 0; i < donnees.length; i++) {
        const canape = donnees[i];
    }
    // Création de l'élément "a"
    var linkproduct = document.createElement('a');
    linkproduct.href = "./addProducts.html,id=" + donnees[i]._id
    document.getElementById("items").append(linkproduct);

}



    
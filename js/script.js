"use strict";

async function loading() {
    fetch(apiaddress)
    .then((res) => {
    if (res.status == 200) {
    /* Le status-code 200 de la rÃ©ponse (res) correspond Ã  une requÃªte correctement exÃ©cutÃ©e (c'est ce qu'on attend ici) */
    return res.json(); /* RÃ©cupÃ©ration des articles depuis l'API au format json */
    }
    })
    .then(function (articles) {
    for (let article in articles) {
    /* On traite chacun des produits rÃ©cupÃ©rÃ©es depuis la rÃ©ponse de l'api */
    afficherProduit(article);
    }
    })
    .catch(function (err) { return err });
    }


/*
var link = document.getElementsByClassName("items").items.childNodes[1];
var kanap = async (url) => {
    var response = await fetch(url)
    var data = await response.json()
    console.log(data);

}
*/
const apiaddress = "http://localhost:3000/api/products/";
/*
kanap("http://localhost:3000/api/products");
*/

function afficherProduit(article) {
const kanap = Object[0];
const imageElement = document.createElement("img");
imageElement.src = "http://localhost:3000/images/kanap01.jpeg";
const nomElement = document.createElement("h3");
nomElement.innerText = "kanap SinopÃ©";
const prixElement = document.createElement("p");
prixElement.innerText = 1849;
const categorieElement = document.createElement("p");
categorieElement.innerText = categorie.kanap;

const section = document.querySelector("items");
section.appendChild(imageElement);
section.appendChild(nomElement);
section.appendChild(prixElement);
section.appendChild(categorieElement);

}






/*function afficherProduit() {
    var section = document.getElementById("items"); 
    var a = document.createElement('a');
    var article = document.createElement('article');
    var h3 = document.createElement('h3');
    var p = document.createElement('p');
    var img = document.createElement('img');
console.log(section);
    
}*/
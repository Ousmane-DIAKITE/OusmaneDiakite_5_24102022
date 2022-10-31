"use strict";


async function loading() {
    console.log("apiaddress = ", apiaddress);
    fetch(apiaddress)
    .then((res) => {
    console.log(res);
    if (res.status === 200) {
    var data = response.json()
    console.log(data);
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

    const apiaddress = "http://localhost:3000/api/products/";

   
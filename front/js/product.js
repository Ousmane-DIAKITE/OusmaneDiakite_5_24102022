"use strict"

(async function () {
    const articleId = getArticleId
    const article = getArticle(articleId)
    hydrateArticle()
})()

function getArticle() {
    return new URL(location.href).searchParams.get('id')
    fetch("http://localhost:3000/api/products")
    .then((res) => res.json())
    .then((data) => addProducts(data))
    .catch((err) => {
        console.log('Ca marche pas');
    });
}

function getArticle() {
    
}


function getArticleId() {
    
}
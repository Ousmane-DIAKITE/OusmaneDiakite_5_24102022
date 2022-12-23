"use strict";

//---------------------------------function appel de mon API------------------------------------------------------------
async function getProductById (idProduct){
    let res = await fetch("http://localhost:3000/api/products/" + idProduct)
     return res.json();
     console.log(res);
 }
"use strict";
fetch("http://localhost:3000/api/products/")
    .then(function(res) { 
        if (res.ok) {
            return res.json();
        }
        })
    .then(function(value) {
       console.log(value); 
    })
    .catch((err) => {
        console.log('ça marche pas' );
    });

 var element = document.createElement('a');
 let anchor = document.createElement('a');
 anchor.href = 



    
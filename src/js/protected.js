//code written by Anne-Lii Hansen VT 2024
"use strict"


window.onload = init;

//check if there is a token i localstorage.if not redirect to index.html
async function init() {

    const jwtToken = localStorage.getItem("token");

    if (!jwtToken) {
        window.location.href = "index.html"
    }

};
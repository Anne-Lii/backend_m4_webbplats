//code written by Anne-Lii Hansen VT 2024
"use strict"

window.onload = init;

//check if there is a token i localstorage. If not, redirect to index.html
async function init() {

    const jwtToken = localStorage.getItem("token");
   
    if (!jwtToken) {
        window.location.href = "index.html"
    } else {
        try {
            const response = await fetch("https://backend-m4-api.onrender.com/api/userinfo", {
                method: "GET",
                headers: {
                    "Authorization":  `Bearer ${jwtToken}`
                }
            });

            if (response.ok) {
                const userInfo = await response.json();
                const username = userInfo.user.username.toUpperCase();
                document.getElementById("userinfo").textContent = username;         
            } else {
                document.getElementById("userinfo").textContent = "Kunde inte hämta användarinformation";   
            }

        } catch (error) {
            console.error("Fel vid hämtning av användarinformation: ", error);
            document.getElementById("userinfo").textContent = "Ett fel inträffade vid hämtning av användarinformation.";
        }
    }
};
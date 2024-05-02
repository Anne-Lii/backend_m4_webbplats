//code written by Anne-Lii Hansen VT 2024
"use strict"

document.addEventListener("DOMContentLoaded", () => {

    const registerForm = document.getElementById("registerForm");

    registerForm.addEventListener("submit", async function (event) {
        event.preventDefault();//prevent standard form behavior

 console.log('Form submitted!');
        const username = document.getElementById("usernameReg").value;
        const password = document.getElementById("passwordReg").value;
        const email = document.getElementById("emailReg").value;

        try {
            const url = "https://backend-m4-api.onrender.com/api";
            const response = await fetch(url + "/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                    email: email
                })
            });
            if(response.ok) {
                alert("Användare registrerad!");
            } else {
                const errorMessage = await response.json();
                alert(errorMessage.error);
            }
        } catch (error) {
            console.error('Registreringsfel:', error);
            alert('Ett fel inträffade vid registreringen. Försök igen senare.');
        }
   });

});
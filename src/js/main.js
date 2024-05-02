//code written by Anne-Lii Hansen VT 2024
"use strict"

//load all content first
document.addEventListener("DOMContentLoaded", () => {

    const url = "https://backend-m4-api.onrender.com/api";
    const registerForm = document.getElementById("registerForm");//get form for register

    if(registerForm) {
        registerForm.addEventListener("submit", async function (event) {
            event.preventDefault();//prevent standard form behavior
    
            //read in value from input
            const username = document.getElementById("usernameReg").value;
            const password = document.getElementById("passwordReg").value;
            const email = document.getElementById("emailReg").value;
    
            //fetch API
            try {
                
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
                if (response.ok) {
                    alert("Användare registrerad!");
                    resetForm();//reset form
                } else {
                    const errorMessage = await response.json();
                    alert(errorMessage.error);
                }
            } catch (error) {
                console.error('Registreringsfel:', error);
                alert('Ett fel inträffade vid registreringen. Försök igen senare.');
            }
        });
    }

    function resetForm() {
        document.getElementById("usernameReg").value = "";
        document.getElementById("passwordReg").value = "";
        document.getElementById("emailReg").value = "";
    }

    const loginForm = document.getElementById("loginForm");//get form for login
    const loginMessage = document.getElementById("loginMessage");

    //event submit loginForm
    if(loginForm) {
        loginForm.addEventListener("submit", async function (event) {
            event.preventDefault();//prevent standard form behavior
    
            // Get username and password from inlogForm
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
    
            try {
                //send inlog to API
                const response = await fetch(url + "/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        username: username,
                        password: password
                    })
                });
    
                // Check if inlog was succesful
                if (response.ok) {
                    const data = await response.json();
                    const token = data.response.token;
    
                    // save token in localStorage
                    localStorage.setItem("token", token);

                    //clear messages
                    loginMessage.innerHTML = "";
                    //message login succesful
                    loginMessage.textContent = "Inloggningen lyckades!";

                    // check if user is authenticated
                    const localtoken = localStorage.getItem("token");
                    if (!localtoken) {
                
                    //unvalid JTW message
                    loginMessage.textContent = "Ogiltig JWT";
                    
                    } else {  
                         // Redirect user to startpage
                         window.location.replace("mypages.html");
                    }

                 
                } else {
                    
                    const errorMessage = await response.json();
                    loginMessage.textContent = errorMessage.error;
                }
                
            } catch (error) {
                console.error('Inloggningsfel:', error);
                loginMessage.textContent = 'Ett fel inträffade vid inloggningen. Försök igen senare.';
            }
        });
    }

    const logoutBtn = document.getElementById("logoutBtn");

    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            // Rensa token från localStorage
            localStorage.removeItem("token");
            
            // Omdirigera användaren tillbaka till inloggningssidan
            window.location.href = "login.html";
        });
    }
});
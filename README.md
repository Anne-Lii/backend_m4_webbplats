# moment 4 Autentisering och säkerhet

## Anne-Lii Hansen , anha2324@student.miun.se

En webbplats som med hjälp av API kan registrera användare via ett formulär samt logga in användare . 
Vid lyckad inloggning sparas en JSON Web Token (JWT) i localstorage och används för att komma åt Mina sidor som är en skyddad route.

## Teknologier
**HTML**
**CSS**
**JavaScript**

## Installation
`git clone https://github.com/Anne-Lii/backend_m4_webbplats.git` källkod från github
`npm install`
`npm run start`

## Funktionalitet

**registrering av användare** 
Genom att fylla i formuläret på registreringssidan och skicka in så har en användare skapats och lagrats i en MongoDB databas som är hostad på Atlas. Användaren behöver ange användarnamn, lösenord samt email adress.

**Inloggning**
Efter registrering kan användarnamnet samt tillhörande lösenord användas på inloggningssidan. Vid lyckad inloggning ges en JWT som lagras i localstorage.

**Autentisering med JTWT**
Den lagrade JWTn används i webbläsaren vid anrop för att autentisera användarens anrop till den skyddade routen Mina Sidor.

**Logga ut**
På Mina sidor finns en Logga ut-knapp och då tas JWTn bort från localstorage och användaren hamnar åter igen på inloggningssidan.
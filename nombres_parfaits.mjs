import { createInterface, readline } from "node:readline/promises";
import { stdin as input, stdout as output, stdin} from "node:process";

const readline = require('readline');

// Scanner pour lire l'entrée utilisateur
const scanner = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Fonction pour vérifier si un nombre est parfait
function estNombreParfait(n) {
    if (n <= 1) return false;
    
    let sommeDiviseurs = 1; // 1 est toujours un diviseur
    
    // On cherche les diviseurs jusqu'à la racine carrée
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            sommeDiviseurs += i;
            if (i !== n / i) { // Éviter de compter deux fois le même diviseur
                sommeDiviseurs += n / i;
            }
        }
    }
    
    return sommeDiviseurs === n;
}

// Fonction pour trouver les N premiers nombres parfaits
function trouverNombresParfaits(n) {
    const nombresParfaits = [];
    let nombreTest = 2; // On commence à 2 (1 n'est pas parfait)
    
    while (nombresParfaits.length < n) {
        if (estNombreParfait(nombreTest)) {
            nombresParfaits.push(nombreTest);
            console.log(`Nombre parfait trouvé : ${nombreTest}`);
        }
        nombreTest++;
    }
    
    return nombresParfaits;
}

// Programme principal
console.log("=== CALCUL DES N PREMIERS NOMBRES PARFAITS ===\n");

scanner.question("Combien de nombres parfaits voulez-vous trouver ? ", (reponse) => {
    const n = parseInt(reponse);
    
    if (isNaN(n) || n <= 0) {
        console.log("Veuillez entrer un nombre entier positif !");
        scanner.close();
        return;
    }
    
    console.log(`\n Recherche des ${n} premiers nombres parfaits...\n`);
    const debut = Date.now();
    
    const resultats = trouverNombresParfaits(n);
    
    const fin = Date.now();
    const tempsExecution = (fin - debut) / 1000;
    
    console.log(`\n RÉSULTATS :`);
    console.log(`Les ${n} premiers nombres parfaits sont :`);
    console.log(resultats.join(", "));
    console.log(`\n Temps d'exécution : ${tempsExecution.toFixed(2)} secondes`);
    
    scanner.close();
});
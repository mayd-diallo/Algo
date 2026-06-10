import { createInterface, readline } from "readline/promises";
import { stdin as input, stdout as outp } from "process";


// Scanner pour lire l'entrée utilisateur
const scanner = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Fonction pour calculer la VAN
function calculerVAN(investissement, cashFlows, taux) {
    let van = -investissement; // On soustrait l'investissement initial
    
    for (let an = 0; an < cashFlows.length; an++) {
        van += cashFlows[an] / Math.pow(1 + taux, an + 1);
    }
    
    return van;
}

// Programme principal
console.log("=== CALCUL DE LA VAN (Valeur Actuelle Nette) ===\n");

// Données du projet
const investissement = 900; // K€
const cashFlows = [220, 340, 340, 340, 350]; // VR inclus en année 5
const taux = 0.08; // 8%

console.log("📊 DONNÉES DU PROJET :");
console.log(`Investissement initial (année 0) : ${investissement} K€`);
console.log(`Taux d'actualisation : ${taux * 100}%`);
console.log(`Cash-flows :`);
console.log(`  Année 1 : ${cashFlows[0]} K€`);
console.log(`  Année 2 : ${cashFlows[1]} K€`);
console.log(`  Année 3 : ${cashFlows[2]} K€`);
console.log(`  Année 4 : ${cashFlows[3]} K€`);
console.log(`  Année 5 : ${cashFlows[4]} K€ (incluant VR = 350 K€)`);
console.log("");

// Calcul de la VAN
const van = calculerVAN(investissement, cashFlows, taux);
const vanArrondie = Math.round(van * 100) / 100;

console.log("CALCUL DÉTAILLÉ :");
let calculDetails = `VAN = -${investissement}`;
for (let i = 0; i < cashFlows.length; i++) {
    const facteur = 1 / Math.pow(1 + taux, i + 1);
    const valeurActuelle = cashFlows[i] * facteur;
    calculDetails += ` + ${cashFlows[i]}/(1,08)^${i+1} (${valeurActuelle.toFixed(2)})`;
}
console.log(calculDetails);
console.log("");

console.log(" RÉSULTAT :");
console.log(`VAN = ${vanArrondie} K€`);

// Interprétation
console.log("\n INTERPRÉTATION :");
if (van > 0) {
    console.log(` VAN positive (${vanArrondie} K€) → Projet rentable`);
    console.log(`   Le projet génère une valeur ajoutée de ${vanArrondie} K€`);
} else if (van < 0) {
    console.log(`❌ VAN négative (${vanArrondie} K€) → Projet non rentable`);
} else {
    console.log(`VAN nulle → Projet indifférent`);
}

// Vérification avec l'arrondi attendu
const vanAttendue = 353.22;
console.log(`\n Vérification :`);
console.log(`VAN calculée : ${vanArrondie} K€`);
console.log(`VAN attendue : ${vanAttendue} K€`);
const difference = Math.abs(vanArrondie - vanAttendue);
if (difference < 0.01) {
    console.log(`CORRECT ! La VAN correspond à la valeur attendue`);
} else {
    console.log(` Différence de ${difference.toFixed(2)} K€`);
}

scanner.close();
/* Afficher le nombre de personnes de chaque catégorie
Compléter l'algorithme précédent pour répondre à la demande suivante:
Si toutes les personnes ont moins de 20 ans, affichez « TOUTES LES PERSONNES ONT MOINS DE 20 ANS ».
Si aucune personne n'a moins de 20 ans, affichez « TOUTES LES PERSONNES ONT PLUS DE 20 ANS ».
Sinon, affichez le nombre de personnes pour chaque catégorie (« - de 20, + de 20, = à 20).*/


import { createInterface } from "readline/promises";
import { stdin as input, stdout as output } from "process";

async function main() {
    const r1 = createInterface({ input, output });
    
    let tabAges = [];
    let ages = "";
    let moinsDe20 = 0;
    let plusDe20 = 0;
    let egal20 = 0;

    // booucle pour saisir les 20 ages
    for (let i = 0; i < 20; i++) {
        ages = Number(Math.floor(Math.random() * 99) + 1);
        tabAges.push(ages);
    }
    console.table(tabAges)
    // Si toutes les personnes ont moins de 20 ans, affichez « TOUTES LES PERSONNES ONT MOINS DE 20 ANS ».
    // Si aucune personne n'a moins de 20 ans, affichez « TOUTES LES PERSONNES ONT PLUS DE 20 ANS ».
    // Sinon, affichez le nombre de personnes pour chaque catégorie(« - de 20, + de 20, = à 20).*/

    // Comptage des catégories
    for (ages of tabAges) {
        if (ages < 20) {
            moinsDe20++;
        } else if (ages === 20) {
            egal20++
        } else {
            plusDe20++;
        }
    }
    if (moinsDe20 === 20) {
        console.log("TOUTES LES PERSONNES ONT MOINS DE 20 ANS");
    } else if (plusDe20 === 20) {
        console.log("TOUTES LES PERSONNES ONT PLUS DE 20 ANS");
    } else {
        console.log(`- Moins de 20 ans : ${moinsDe20}`);
        console.log(`- Égales à 20 ans : ${egal20}`);
        console.log(`- Plus de 20 ans : ${plusDe20}`);
    }

    // if (saisie > 20) {
    //     moins_20 = moins_20 + 1;
    // } else if (saisie = 20) {
    //     egale_20 = egale_20 + 1;
    // } else {
    //     (saisie > 20)
    //     plus_20 = plus_20 + 1;
    // }
    // if (moins_20 == 20) {
    //     console.log(`toutes les personnes ont moins de 20 ans ${saisie}`);
    // } else if (egale_20 == 20) {
    //     console.log(`toutes les personnes ont  20 ans ${saisie}`);
    // } else {
    //     (plus_20 == 20)
    // } console.log(`toutes les personnes ont plus de 20 ans ${saisie}`);

    r1.close();
}
let fruits = ["pomme", "banane", "orange"];


await main();
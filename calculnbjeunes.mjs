
/*Exercice 2.7.1 : Calculer le nombre de jeunes
Il s'agit de dénombrer toutes les personnes d'âge inférieur strictement à 20 ans parmi un échantillon de 20
personnes. L’utilisateur est invité à saisir les 20 valeurs.
Décrivez l'algorithme qui affiche le nombre de jeunes et codez la solution.*/

import { createInterface } from "readline/promises";
import { stdin as input, stdout as output } from "process";

 const r1 = createInterface({ input, output }); 
async function main() {
    
    let compteur = 0 ;
let i= 1 ;

while (i<=20) {

}
    
        const saisie = await r1.question('entrer lâge de la personne ${i}');
        const âge = parseInt(saisie);

        if (âge<20) {
            compteur++;
        }
    }
console.log('nombre de personne < 20 ${compteur}');

    r1.close();
    

await main();
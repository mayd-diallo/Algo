//Utilisation des tableaux indicés
/*Exercice 3.3 : Dénombrer les lettres de l'alphabet dans un tableau Lire un texte d'au moins 120 caractères (à contrôler).
 Compter et afficher le nombre d'occurrences (d'apparitions) de chacune des lettres de l'alphabet.*/
 


import { createInterface } from "readline/promises";
import { stdin as input, stdout as output } from "process";

async function main() {
    const sc = createInterface({ input, output });
    let texte = await sc.question('entrez un texte au moins de 120 lettres');


    if (texte.endsWith('.')){
        texte = texte.slice(0,-1);
    };



for (let i = 0; i<= texte.length; i++){
if (texte.length<120){
    console.log('le texte est trop court');
    sc.close();
    return;
}
}
// Tableau de 26 compteurs
    const compteur = Array(26).fill(0);

    // Parcours du texte
    for (let i = 0; i < texte.length; i++) {
        const c = texte[i].toLowerCase();

        if (c >= 'a' && c <= 'z') {
            const index = c.charCodeAt(0) - 'a'.charCodeAt(0);
            compteur[index]++;
        }
    }

    // Affichage
    console.log("\nOccurrences des lettres :");
    for (let i = 0; i < 26; i++) {
        const lettre = String.fromCharCode('a'.charCodeAt(0) + i);
        console.log(`${lettre} : ${compteur[i]}`);
    }


    sc.close();
};
main();
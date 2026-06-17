/*
EXERCICE 3.4 : RECHERCHER UNE LETTRE DANS UNE CHAINE DE CARACTERES


Donnez l'algorithme d'un programme qui compte le nombre d'occurrences d'une lettre donnée (« a » par exemple) dans cette
chaîne.

Si la chaîne de caractères est vide ou n'est composée que du caractère « . », le message « LA CHAINE EST VIDE » sera affiché.
Proposez un jeu d'essai prévoyant les 3 cas suivants :
▪ La phrase est vide
▪ La lettre n'est pas présente
▪ La lettre est présente une ou plusieurs fois*/
import { createInterface } from "readline/promises";
import { stdin as input, stdout as output } from "process";

async function main() {
    const sc = createInterface({ input, output }); // initialiser le scanner

    // Soit une chaîne de caractères terminée par le caractère « . ».
    let string = '';
    let lettre = '';
    let compteur = 0;
    let onlyDot = /^[\.]+$/; // Si y'a que un ou plusieurs points (sans aucune lettre)
    do {
        string = await sc.question("entrez une chaîne de caractères terminée par le caractère « . » : ");
        if (!string.endsWith(".")) {
            console.log("La chaine ne se termine pas par un point.");
        }
        if (onlyDot.test(string)) {
            console.log("La chaine est vide.");
            sc.close();
            return;    // Met FIN AU PROGRAMME
        }
    } while (!string.endsWith("."));

    // La est composée que du caractère « . », le message « LA CHAINE EST VIDE » sera affiché

    lettre = await sc.question("entrez une lettre presente dans la chaîne de caractères : ");
    console.log(`\nChaine de caractère choisis : ${string}`);
    console.log(`Lettre choisis : ${lettre}`);

    if (string.includes(lettre)) {
        // La lettre est présente une ou plusieurs fois
        for (let i = 0; i < string.length; i++) {
            if (string[i] === lettre)
                compteur++;
        }
    } else {
        // La lettre n'est pas présente
        console.log("La lettre n'est pas présente");
    }
    console.log(`nbdefois ou la lettre est presente : ${compteur}`)
    sc.close(); // fermer le scanner
}
await main() //Appeler lefonction
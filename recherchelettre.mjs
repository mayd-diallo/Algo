/*
EXERCICE 3.4 : RECHERCHER UNE LETTRE DANS UNE CHAINE DE CARACTERES
Soit une chaîne de caractères terminée par le caractère « . ».

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

     const scanner = new createInterface({ input, output });
    let chaine_de_caractere = '';
    let lettre = '';
    // enregistrement de la saisie de l'urilisateur dans chaine_de_caractère 
    chaine_de_caractere = await scanner.question('saisir une chaine_de_caractère et terminé par un point');
    // vérification si la chaine_de_caractère se termine par un point

    //vérifier si la chaine de caractere eset different de vide
    if (chaine_de_caractere == '' || chaine_de_caractere == '.') {
        console.log("la chaine de caractere est vide");
    } else {
    //let dernier_caractere = chaine_de_caractere[chaine_de_caractere.length - 1];
        console.log("'la chaine_de_caractère n'est pas vide");
chaine_de_caractere =chaine_de_caractere.toLowerCase();
        // rechercher la lettre dans la chaine de caractere
        lettre = await scanner.question('quuelle est la lettre qui est a trouvé ?');
  lettre=lettre.toLowerCase();
  let trouve=false;
  //compter les occurences
  const test = await scannerquestion("entrer un test");
  let conteur = 0;
  let position = []
  for ( let i=0; i<test.length ; i++){
    if (test[i].toLowerCase() ===test.toLowerCase()) {
        compteur++;
        position.push(i+1);
    }
  }
        for (let i = 0; i < chaine_de_caractere.length; i++) {

            if (lettre == chaine_de_caractere[i]) {
               trouve=true;
                console.log("la lettre est dans la chaine de caractere ");
           break; }

            scanner.close();
        }
        if (trouve==false) {
            console.log("La lettre n'est pas présente dans la chaine de caractere");
            if (conteur>o) {
                console.log("la lettre se presente plusieurs fois dans la chaine de car");
            }
        }
    }
}


await main();
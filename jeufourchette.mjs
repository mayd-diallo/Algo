// Exercice 2.3 : Jeu de la fourchette L'ordinateur 
// « choisit » un nombre entier compris entre 0 et 100. 
// Le joueur essaie de le deviner. 
// Lors de chaque essai, l'ordinateur affiche la « fourchette » dans laquelle se trouve le nombre qu'il a choisi. 
// Le choix du nombre par l'ordinateur sera simulé par génération d'un nombre aléatoire : N <-- RANDOM(0,100)


import { createInterface } from "readline/promises";
import { stdin as input, stdout as output } from "process";

// async function main(){
//     const sc = createInterface({input, output});

//     const number = Math.floor(Math.random() * 101);
//     console.log(number)
//     let choix = "";

//     while(choix != number){

//         choix = await sc.question("\nEssayer de deviner le nombre secret : ")
//         if(isNaN(choix)) {
//             console.log("Ce n'est pas un nombre")
//             continue;
//         }
//         if(choix > number){
//             console.log("Le nombre à trouver est plus petit");
//         } else {
//             console.log("Le nombre à trouver est plus grand ");
//         }
//     }
//     console.log("\nBravo vous avez trouvé le bon nombre !")

//     sc.close();
// }
// main();

async function main() {
    const sc = createInterface({ input, output });// initiation du scanner
    // Exercice 2.3 : Jeu de la fourchette 
    // L'ordinateur « choisit » un nombre entier compris entre 0 et 100.
    let choix = ''; //affectation

    // Le choix du nombre par l'ordinateur sera simulé par génération d'un nombre aléatoire : N <-- RANDOM(0,100)
    const number = Math.floor(Math.random() * 101); //trouver le nbre choisi par l'utilisateur
    console.log(number);
    // Le joueur essaie de le deviner.
    do {
        choix = Number(await sc.question('essaie de deviner nombre entier compris entre 0 et 100 : '));//converir choix en nbre
        if (isNaN(choix)) {
            console.log('veuillez entre une valeur numérique') //afficher le nbre
            continue; // arreter la boucle
        }
        if (choix < number) {
            console.log('le nombre à deviner est plus grand');
        } else {
            console.log('le nombre à deviner est plus petit');
        }; // verifier cdt 

    } while (choix !== number) // faire appel boucle tan que
    console.log("bravo vous avez deviner le bon nombre !");
    sc.close();
}
main();
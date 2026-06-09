/*Nombre Premier Lire un nombre N et déterminer s’il est un nombre premier.*/

import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output} from "node:process";


async function main() {
    const rl = createInterface({ input, output });
    
    while (true) {
        let reponse = await rl.question("Entrez un nombre entier : ");
        let N = parseInt(reponse);
        
        if (isNaN(N)) {
            console.log("Veuillez entrer un nombre valide.");
            continue; 
        }
        
        if (estPremier(N)) {
            console.log(`${N} est un nombre premier.`);
        } else {
            console.log(`${N} n'est pas un nombre premier.`);
        }
        
        let continuer = await rl.question("Voulez-vous tester un autre nombre ? (o/n) : ");
        if (continuer.toLowerCase() !== 'o') {
            break;
        }
    }
    
    rl.close();
    await main ();
}

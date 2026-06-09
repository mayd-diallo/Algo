/* exercice : rechercher les diviseurs d'un nombre lire un nombre entier et déterminer tous ces diviseurs autres que 1 et lui-mêe */


import { createInterface } from "readline/promises";
import { stdin as input, stdout as output } from "process";

async function main() {
    const rl = createInterface({ input, output });
    
    let reponse = await rl.question("Entrez un nombre entier : ");
    let nombre = parseInt(reponse);
    
    if (isNaN(nombre) || nombre <= 1) {
        console.log("Veuillez entrer un nombre entier supérieur à 1");
        rl.close();
        return;
    }
    
    let diviseurs = [];
    
    for (let i = 2; i < nombre; i++) { 
        if (nombre % i === 0) {
            diviseurs.push(i);
        };
    }
    
    if (diviseurs.length === 0) {
        console.log(`${nombre} n'a pas d'autres diviseurs que 1 et lui-même (il est premier)`);
    } else {
        console.log(`Les diviseurs de ${nombre} autres que 1 et ${nombre} sont : ${diviseurs.join(", ")}`);
    }
    
    rl.close();
}

await main();
 


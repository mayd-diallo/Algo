import { createInterface } from "readline/promises";
import { stdin as input, stdout as output } from "process";
async function main() {
 // 1. On configure l'interface de lecture (entrée/sortie)
  const sc = new createInterface({ input, output });
let N=parseInt( await sc.question("Entrez un nombre entier positif supérieur à 1!"));
let estpremier=true;
let  diviseur=0;
for (let i = 2; i <=Math.sqrt(N) ; i++) {
    if (N%i==0) {
        estpremier=false;
        diviseur=i;
        break;
    }
}
if (!estpremier) {
console.log(` ❌le nombre : ${N} n'est pas un nombre premier car il est disvible par ${diviseur}`) ;   
} else {
   console.log(`✅ le nombre : ${N} est  premier`) ;    
}

sc.close();
}
await main();
import { createInterface } from "readline/promises";
import { stdin as input, stdout as output } from "process";

async function main() {
  // 1. On configure l'interface de lecture (entrée/sortie)
  const sc = new createInterface({ input, output });
let tabcashflow= new Array();
let val=0;
let invest= parseFloat(await sc.question('Montant de l\'investissement de départ:'));
const TAUX=0.08;
let vr= parseFloat(await sc.question('valeur résiduelle de l\'investissement au bout de 5 ans :'));
for (let i = 0; i < 4; i++) {
    val= parseFloat( await sc.question(`veuillez saisir le cash-flow n° :${i+1}`));
    tabcashflow.push(val);
}

console.log("\n"+ tabcashflow +"\n");

let VAN= -invest;
for (let k = 0; k <tabcashflow.length; k++) {
    VAN+=tabcashflow[k]/ (1+TAUX)**(k+1)     
} 
VAN+= vr/Math.pow((1+TAUX),(tabcashflow.length+1));

console.log(`La Valeur Actualisée Nette (VAN) de l'investissement : ${invest} K€ sera de : ${VAN.toFixed(2)} K€ avec un taux d'inflation de : ${(TAUX*100)} %`);
  sc.close();
}
await main();
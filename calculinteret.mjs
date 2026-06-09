/* Exercice 1.5 : 
Calcul d’intérêts Lire la somme initiale S placée sur un compte, l'intérêt i offert par la banque et le nombre N d'années de placement de la somme S. Calculez la valeur acquise par la somme S placée pendant N années : 
▪ avec un intérêt simple : S ( 1 + N * i ) 
▪ avec un intérêt composé : S ( 1 + i )N */

import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output} from "node:process";

async function main(){
    const sc = new createInterface({input, output});

    let S= Number( await sc.question("entrer la somme initiale placée sur un compte : "));
    let i = Number(await sc.question("interet offert pa la banque : "));
    let N = Number(await sc.question("nombre  d'années de placement de la somme: "));

    i = i/100;
    let interetSimple = S*(1+N*i);
    let intereCompose = S * Math.pow(1 + i, N);

    console.log(`la valeur acquise par la somme ${S} placée pendant ${N} equivaut : `);
    console.log(`avec interet simple : ${interetSimple.toFixed(2)}`);
    console.log(`avec interetcompose : ${interetCompose.toFixed(2)}`);
    sc.close();
}
    await main();

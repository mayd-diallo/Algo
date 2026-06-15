import { createInterface, readline } from "readline/promises";
import { stdin as input, stdout as outp } from "process";


const scanner = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculerVAN(I0, fluxNets, VR, i) {
    let VAN = -I0;
    for (let k = 1; k <= fluxNets.length; k++) {
        VAN += fluxNets[k - 1] * Math.pow(1 + i, -k);
    }
    VAN += VR * Math.pow(1 + i, -5);
    return VAN;
}
console.log("calacul de la VAN");
scanner.question("investissement de la VAN IO");
const fluxNets = [];

function getFlux(annee) {
    if (annee < 4);{
    scanner.question(`Cash-flow année ${annee + 1} (K€) : `, (cf))  
    
        fluxNets.push(parseFloat(cf));

        getFlux(annee + 1);
    }}
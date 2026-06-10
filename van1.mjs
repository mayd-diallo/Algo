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

console.log("\n=== CALCUL DE LA VAN ===\n");

scanner.question("Investissement I0 (K€) : ", (I0) => {
    const fluxNets = [];
    
    function getFlux(annee) {
        if (annee < 4) {
            scanner.question(`Cash-flow année ${annee + 1} (K€) : `, (cf) => {
                fluxNets.push(parseFloat(cf));
                getFlux(annee + 1);
            });
        } else {
            scanner.question("Valeur résiduelle VR (K€) : ", (VR) => {
                scanner.question("Taux d'actualisation i (%) : ", (taux) => {
                    const VAN = calculerVAN(parseFloat(I0), fluxNets, parseFloat(VR), parseFloat(taux) / 100);
                    console.log(`\n📊 VAN = ${VAN.toFixed(2)} K€`);
                    console.log(VAN > 0 ? "✅ Projet RENTABLE" : VAN < 0 ? "❌ Projet NON RENTABLE" : "⚖️ Projet INDIFFÉRENT");
                    scanner.close();
                });
            });
        }
    }
    
    getFlux(0);
});
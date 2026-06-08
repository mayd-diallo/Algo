import { createInterface } from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

let BeauTemps=true;
let veloEnbonetat=false;
let reparationImmediate=false;
let livreDansbibliotheque=false;
let livreDisponiblebibliotheque=true;

async function main() {
    const sc = createInterface({ input, output });

    let reponse = await sc.question('fera-t-il beau demain ? oui/non : ');

    console.log(reponse);

    if (reponse === "oui") {
        console.log("Je vérifie l'état de mon vélo");
        reponse = await sc.question("Mon vélo est-il en parfait état ? oui/non ");
        if (reponse === "oui") {
        console.log("Je me balade à vélo");
    } else {
        console.log("je vais chez le garasiste");
        reponse = await sc.question("les réparations sont-elles immédiates ? oui/non ");
        if (reponse === "oui") {
            console.log("Je me balade à vélo");
        }else{
            console.log("Je veux ceuillir des fleurs");
        }
    }
    }else{reponse = await sc.question("Mon vélo est-il en parfait état ? oui/non ");
        onsole.log("Je me balade à pieds");
        onsole.log("Je vais ");

    }
    if (reparationImmediate){
        console.log("les reparations sont immediate, je pars faire ma balade");
        
    }else {
         console.log("Les réparations ne sont pas immédiates. Je renonce à la balade.");
            console.log("Comme il fait beau, j'irai à pied jusqu'à l'étang pour cueillir des joncs.");
        }
    }  {
        console.log("Il ne fait pas beau. Je vais consacrer ma journée à la lecture.");
    console.log("Je veux relire le tome 1 de Game of Thrones.");
    }

    sc.close();


await main();

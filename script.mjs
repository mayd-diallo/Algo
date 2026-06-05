import { createInterface } from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

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

    sc.close();
}

await main();

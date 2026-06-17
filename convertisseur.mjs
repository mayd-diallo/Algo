
import { createInterface, readline } from "node:readline/promises";
import { stdin, stdout } from "node:process";


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Constantes
const ZERO_ABSOLU_F = -459.67;
const ZERO_ABSOLU_C = -273.15;
const TEMP_MIN_Terre_C = -95;
const TEMP_MAX = 5000000;

async function fahrenheitToCelsius(f) {
    return (f - 32) * 5 / 9;
}

function celsiusToFahrenheit(c) {
    return (c * 9 / 5) + 32;
}

// Fonction pour valider la température
function estTemperatureValide(valeur, unite) {
    if (valeur > TEMP_MAX) {
        return false;
    }
    
    if (unite === 'F' || unite === 'f') {
        return valeur >= ZERO_ABSOLU_F;
    } else if (unite === 'C' || unite === 'c') {
        return valeur >= ZERO_ABSOLU_C;
    }
    return false;
}

// Fonction pour afficher le résultat
function afficherResultat(valeur, unite) {
    let resultat;
    let uniteResultat;
    
    if (unite === 'F' || unite === 'f') {
        resultat = fahrenheitToCelsius(valeur);
        uniteResultat = 'C';
        console.log(`${valeur} °F = ${resultat.toFixed(2)} °C`);
        
        // Informations supplémentaires
        if (valeur <= -95) {
            console.log(`  Attention : ${valeur}°F est extrêmement froid !`);
        }
    } else if (unite === 'C' || unite === 'c') {
        resultat = celsiusToFahrenheit(valeur);
        uniteResultat = 'F';
        console.log(`${valeur} °C = ${resultat.toFixed(2)} °F`);
        
        // Informations supplémentaires
        if (valeur <= TEMP_MIN_Terre_C) {
            console.log(` Attention : ${valeur}°C est plus froid que la température la plus basse jamais enregistrée sur Terre !`);
        }
    }
}

// Fonction pour afficher les limites
function afficherLimites() {
    console.log('\n📊 Limites de température :');
    console.log(`   Zéro absolu : ${ZERO_ABSOLU_F}°F = ${ZERO_ABSOLU_C}°C`);
    console.log(`   Plus basse sur Terre : -95°C`);
    console.log(`   Température maximale : ${TEMP_MAX}°`);
    console.log();
}

// Fonction principale de saisie
function saisirTemperature() {
    console.log('\n' + '='.repeat(50));
    console.log('🌡️  PROGRAMME DE CONVERSION CELSIUS <-> FAHRENHEIT');
    console.log('='.repeat(50));
    afficherLimites();
    
    rl.question('Saisir une température avec son unité de mesure (C ou F) :\n', (input) => {
        // Nettoyer l'entrée
        const parties = input.trim().split(' ');
        
        // Vérifier le format
        if (parties.length !== 2) {
            console.log('❌ Format incorrect ! Veuillez saisir : "valeur C" ou "valeur F"');
            console.log('   Exemple : 32 C ou 100 F\n');
            saisirTemperature();
            return;
        }
        
        const valeur = parseFloat(parties[0]);
        const unite = parties[1];
        
        // Vérifier que la valeur est un nombre
        if (isNaN(valeur)) {
            console.log('❌ La valeur doit être un nombre valide !\n');
            saisirTemperature();
            return;
        }
        
        // Vérifier l'unité
        if (unite !== 'C' && unite !== 'c' && unite !== 'F' && unite !== 'f') {
            console.log('❌ Unité invalide ! Utilisez C ou F\n');
            saisirTemperature();
            return;
        }
        
        // Vérifier les limites
        if (!estTemperatureValide(valeur, unite)) {
            console.log(`❌ Température invalide !`);
            if (unite === 'F' || unite === 'f') {
                console.log(`   La température doit être >= ${ZERO_ABSOLU_F}°F (zéro absolu)`);
            } else {
                console.log(`   La température doit être >= ${ZERO_ABSOLU_C}°C (zéro absolu)`);
            }
            console.log(`   Et <= ${TEMP_MAX}°`);
            console.log('   Veuillez recommencer.\n');
            saisirTemperature();
            return;
        }
        
        // Afficher le résultat
        console.log('\n' + '-'.repeat(50));
        afficherResultat(valeur, unite);
        console.log('-'.repeat(50) + '\n');
        
        // Demander si l'utilisateur veut continuer
        rl.question('Voulez-vous effectuer une autre conversion ? (o/n) : ', (reponse) => {
            if (reponse.toLowerCase() === 'o' || reponse.toLowerCase() === 'oui') {
                saisirTemperature();
            } else {
                console.log('\n👋 Merci d\'avoir utilisé le convertisseur ! Au revoir.');
                rl.close();
            }
        });
    });
}

// Lancer le programme
console.log('\n🚀 Lancement du convertisseur de température...\n');
saisirTemperature();

// Gestion de la fermeture propre
rl.on('close', () => {
    process.exit(0);
});
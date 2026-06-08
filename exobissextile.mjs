// Fonction pour déterminer si une année est bissextile
function estBissextile(annee) {
    if (annee % 4 !== 0) {
        return false;
    } else if (annee % 100 !== 0) {
        return true;
    } else if (annee % 400 !== 0) {
        return false;
    } else {
        return true;
    }
}

// Version plus concise
function estBissextileConcise(annee) {
    return (annee % 4 === 0 && annee % 100 !== 0) || (annee % 400 === 0);
}

// Programme principal avec saisie utilisateur
function programmePrincipal() {
    // Pour Node.js (environnement serveur)
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    readline.question("Entrez une année : ", (reponse) => {
        const annee = parseInt(reponse);
        
        if (isNaN(annee)) {
            console.log("Veuillez entrer un nombre valide.");
        } else if (estBissextile(annee)) {
            console.log(`L'année ${annee} est BISSEXTILE`);
        } else {
            console.log(`L'année ${annee} est NON BISSEXTILE`);
        }
        
        readline.close();
    });
}

// Version pour navigateur (console uniquement)
function testerAnnee(annee) {
    if (estBissextile(annee)) {
        console.log(`L'année ${annee} est BISSEXTILE`);
    } else {
        console.log(`L'année ${annee} est NON BISSEXTILE`);
    }
}

// Exemples de test
console.log("=== TESTS ===");
testerAnnee(2020);  // Bissextile
testerAnnee(2021);  // Non bissextile
testerAnnee(1900);  // Non bissextile (divisible par 100 mais pas par 400)
testerAnnee(2000);  // Bissextile (divisible par 400)


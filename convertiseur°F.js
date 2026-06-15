// Conversion Degrés Fahrenheit (°F) <--> Degrés Celsius (°C)
//import (createInterface, readline);
const readline = require('readline');
const { createInterface } = require('readline/promises');
const rl =  readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Entrez 'F' pour Fahrenheit→Celsius ou 'C' pour Celsius→Fahrenheit : ", (type) => {
    rl.question("Entrez la température : ", (temps) => {
        const valeur = parseFloat(temps);
        
        if (isNaN(valeur)) {
            console.log("Température invalide !");
        } else if (type.toUpperCase() === 'F') {
            const celsius = (valeur - 32) * 5/9; 
            console.log(`${valeur}°F = ${celsius.toFixed(2)}°C`);
        } else if (type.toUpperCase() === 'C') {
            const fahrenheit = valeur * 9/5 + 32;
            console.log(`${valeur}°C = ${fahrenheit.toFixed(2)}°F`);
        } else {
            console.log("Option invalide !");
        }
        
        rl.close();
    });
});
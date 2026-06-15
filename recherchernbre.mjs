const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const tableau = [5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

console.log("recherche dans tableau trié");
console.log("Tableau :", tableau.join(""));

rl.question("Nombre à rechercher : ", (input) => {
    const nombre = parseInt(input);
    const position = tableau.indexOf(nombre);
    
    if (position !== -1) {
        console.log(`\n ${nombre} trouvé à l'indice ${position}`);
    } else {
        console.log(`\n 404 Not Found`);
    }
    
    rl.close();
});
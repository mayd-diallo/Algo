import { createInterface } from "readline/promises";
import { stdin as input, stdout as output } from "process";


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

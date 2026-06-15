```js
VARIABLES
    INT  : prix_cafe
    INT  : compteur_gobelet
 
    FLOAT: Timer
    FLOAT: argent_insere
    FLOAT: rendu_monnaie
    FLOAT: eau  //Quantité d'eau restante dans le réservoire en litre
 
    BOOL :monnaie //Reste suffisament de monnaie dans machine (true/false)
    BOOL :capteur_gobelet //gobelet coincé/mal positionné
    BOOL :etat_machine //Machine HS


    STR    : choix_utilisateur
    DECIMAL: prix_choix_utilisateur

    TABLEAU:
    [
        STR    : boisson
        BOOL   : disponibilité
        DECIMAL: prix
        TABLEAU: [
            
        ]: ingredients
    ]: tab_boissons //contient les boissons, leur dispo et leur prix...

DEBUT
 
    // Verification des stocks
    TRY
        FONCTION: verifier_les_stocks_boisson(ref tab_boissons)
        FONCTION: choisir_boisson(ref choix_utilisateur, ref prix_choix_utilisateur)
    CATCH (Error)
        NOTIFIER Error.message
        AFFICHER 'Erreur : Machine hors service'
        EXIT

FIN
```

### Annexe: Fonctions:
```js
VARS:
    TABLEAU:
    [
        STR   : nom
        ENTIER: quantité
    ] : tab_stocks //contient les ingrédients mais aussi les stocks, gobelets, pièces etc...

FONCTION verifier_les_stocks_boisson(ref tab_boissons)
DEBUT
    POUR CHAQUE ligne DANS tab_stocks
        SI ligne[quantité] <= quantité * 10/100 //change me later
            THROW Error("erreur verificqtion des stocks: ligne " + ligne[nom])

    POUR CHAQUE boisson DANS tab_boissons
        SI 
FIN
```

```js
FONCTION  choisir_boisson(ref choix_utilisateur, ref prix_choix_utilisateur)
    AFFICHER 'Veuillez choisir boisson'
    choix_utilisateur = LIRE 

END
```







    AFFICHER `Le prix du café est de ${prix_cafe}. Veuillez payer.`
            timer <- local.time
            LIRE argent_insere
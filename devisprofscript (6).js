

const list1=  document.querySelector("#prescripteur");

const tabDiffusion= [
"Par l'un de nos client !",
"Par relation",
"par un support publicitaire",
"Par un moteur de recherche",
"Par hasard"
]
let compteur=2;
tabDiffusion.forEach(el => {
   // console.log(el);
    const myOption = new Option();
    myOption.value=compteur;
    myOption.textContent=el;
    compteur++;
    list1.appendChild(myOption);
});

machaine="un site plaquette, un site communal, un catalogue en ligne, une boutique en ligne (e-commerce), le référencement, de l\'e-mailing, un intranet ou extranet, une GED (gestion électronique de document), un relookage de votre site,une formation, la réalisation d\'un cahier des charges, un audit accessibilité, le dépôt d'un nom de domaine en .fr, en savoir plus sur la solution ia souveraine";

const list2= document.getElementById("projet");
let tabData= machaine.split(", ");
for (let i = 0; i < tabData.length; i++) {
    //console.log(tabData[i]);
    if(i==5){
 const myOption= new Option();
    myOption.value=i+1;
    myOption.defaultSelected=true;
    myOption.textContent=tabData[i];
    list2.options[i]=myOption;
    }
    else{
 const myOption= new Option();
    myOption.value=i+1;
    myOption.textContent=tabData[i];
    list2.options[i]=myOption;

    }
   
}






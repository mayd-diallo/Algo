

const zoneSize= document.querySelector("#txtSize");
const btnIncrease= document.querySelector("#btnIncrease");
const btnDecrease=document.getElementById("btnDecrease");
//const paragraphe= document.querySelector("#txt");
const paragraphe= document.getElementsByTagName("p");

function sizing (event) {


    const getEventId= event.target.id;
    console.log(getEventId);
    
    // quel élément a déclenché l'évènement 

    if ( parseInt(zoneSize.value)==undefined) {
        
        console.error("la taille du texte n'est pas un nombre !");
    }

   let sizeTxt =parseInt( zoneSize.value);

    
  if( sizeTxt>= 8 && sizeTxt <=48 && getEventId === "txtSize")
  {
    //on ne fait rien;
  }
  else if ( sizeTxt> 8 && sizeTxt < 48 && getEventId==="btnIncrease") {

    sizeTxt++;
    
  } 
   else if ( sizeTxt> 8 && sizeTxt < 48 && getEventId==="btnDecrease") {

    sizeTxt--;
    
  } 
  else {
    
sizeTxt=16;

  }
 paragraphe.style.fontSize=sizeTxt+"px";
 zoneSize.value=sizeTxt;
 
} 
btnIncrease.addEventListener("click",sizing);
btnDecrease.addEventListener("click", sizing);
zoneSize.addEventListener("blur", sizing);

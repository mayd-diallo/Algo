const txtBirthday=document.getElementById("birthday");
const btnCalculate=document.querySelector("#calculate"); 
// const tabResult= document.querySelectorAll("p");

// tabResult.forEach((el)=>{el.textContent="traitement formulaire"});
const validation=document.querySelector(".result");
validation.textContent+=" traitement";

function calculateAge()
{
    let chaineBirthday= txtBirthday.value;
    let delay=Date.parse(chaineBirthday); // durée en milliseconde depuis 1er janvier 1970 à minuit  
    const birthDate= new Date(delay);//creation de l'objet date
    const today= new Date(); // creation de l'objet date du jour
    if (birthDate>today) {
        const validationSummarize=document.createElement("p"); //creation d'un paragraphe HTML
        validationSummarize.id="test"; //ajout d'un id pour utile pour JS
        validationSummarize.className="summarize";// ajout d'une classe pour mise en forme
        const mySection= document.querySelector("section"); // on va chercher la section dans la page
         mySection.appendChild(validationSummarize);// on rajoute le paragraphe dans la section 
         validationSummarize.textContent="Erreur la date doit être dans le passé !";// on rajoute du texte dans le paragraphe

       /*alert("Erreur la date doit être dans le passé");
        Affichage d'une fenêtre modale dans le navigateur avec bouton ok   
       */  


        /* console.error("Erreur la date doit être dans le passé"); 
        Affichage de l'erreur dans la console du navigateur F12*/ 

    } 
    
}


btnCalculate.addEventListener("click", function(){
calculateAge();

})


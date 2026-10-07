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
    const birthDate= new Date(delay);
    const today= new Date();
    if (birthDate>today) {
        
        const validationSummarize=document.createElement("p");
        validationSummarize.id="test";
        validationSummarize.className="summarize";
        const mySection= document.querySelector("section");
         mySection.appendChild(validationSummarize);
         validationSummarize.textContent="Erreur la date doit être dans le passé !";

       /*alert("Erreur la date doit être dans le passé");*/ 
//

        //console.error("Erreur la date doit être dans le passé");

    } 
    
}


btnCalculate.addEventListener("click", function(){
calculateAge();

})


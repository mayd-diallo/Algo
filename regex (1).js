

const mybtnSubmit= document.getElementById("valider");
const txtName=document.querySelector("#myName");
const chaine1 = document.querySelector("#myPassword1");
 const chaine2= document.querySelector("#myPassword2");

mybtnSubmit.addEventListener("click",
    function(event){
        event.preventDefault();

        const myForm=document.querySelector("form");

        if (validateName(txtName.value)==true && validateName==true ) {
       
            myForm.submit();   
        }else{

            alert("saisie du nom incorrect! ou mot de passe différents");
        }

    }
)
/**
 * 
 * @param {*} chaine 
 */

function validateName(chaine)
{ 
    let regexName=/^[A-Z][a-z]{3,}$/;
    
    return regexName.test(chaine);
}
/**
 * Valider que les 2 mots de passe sont identiques 
 * ET
 * longueur de 12 caractères minimum
 * au moins 1 majuscule 
 * au moins 1 minuscule 
 * au moins 1 chiffre 
 * @param {*} chaine1  
 * @param {*} chaine2 
 * @returns 
 */
function validatePassword(chaine1,chaine2)
{
if (chaine1===chaine2) {
    
    return true;
}
return false;
}
function validatePhoneNumber(_phoneNumber) {

    const regexPhone = /^0[1-7|9]\d{8}$/;
    const regexDotsReplace = /\.|\s/g;
    
    _phoneNumber = _phoneNumber.trim();
    _phoneNumber = _phoneNumber.replaceAll(regexDotsReplace, '');

 

    return regexPhone.test(_phoneNumber);
}


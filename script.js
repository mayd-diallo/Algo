
/*const zoneDate= document.getElementById("txtDate");*/
const zoneDate=document.querySelector("#txtDate");

function afficherDate () {

    let dateJour= new Date("2026/09/30");
    let jour= (dateJour.getDate()<10)?"0"+dateJour.getDate():dateJour.getDate();
    let mois= dateJour.getMonth()+1?"0"+(dateJour.getMonth()+1): dateJour.getMonth()+1;
    let annee= dateJour.getFullYear();

    let chaineDate= annee +"-" +mois+"-"+jour;
    console.log(chaineDate);
   zoneDate.value=chaineDate;
}



const mybtnDate=document.getElementById("btnDate");
mybtnDate.addEventListener("click", function() {
afficherDate();
//console.log("test");
})

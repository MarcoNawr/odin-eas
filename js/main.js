/* ##########################################################################
    Globale Variables
##########################################################################*/

const easDivContainer = document.querySelector(".easDivContainer");


/* ##########################################################################
    funktion Deklaration
##########################################################################*/

function createXMultipliedXDivs(x){
    for(i=0; i<x*x; i++){
        const newDiv = document.createElement("div");
        newDiv.classList.toggle("easDiv");
        newDiv.textContent = i;
        easDivContainer.appendChild(newDiv);

        /*CHANGE THIS TO: two forloops ==> One for Collum one for Row (e.g. 5x5). Needs a new CSS class */
    }
}


/* ##########################################################################
    invoke funktions
##########################################################################*/
createXMultipliedXDivs(10);
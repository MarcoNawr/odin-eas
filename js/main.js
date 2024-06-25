/* ##########################################################################
    Globale Variables
##########################################################################*/

const easDivContainer = document.querySelector(".easDivContainer");


/* ##########################################################################
    funktion Deklaration
##########################################################################*/

function createXDivs(x){
    for(i=0; i<x; i++){
        const newDiv = document.createElement("div");
        newDiv.classList.toggle("easDiv");
        newDiv.textContent = i;
        easDivContainer.appendChild(newDiv);
    }
}


/* ##########################################################################
    invoke funktions
##########################################################################*/
createXDivs(30);
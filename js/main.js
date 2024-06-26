/* ##########################################################################
    Globale Variables
##########################################################################*/

const easDivContainer = document.querySelector(".easDivContainer");


/* ##########################################################################
    funktion Deklaration
##########################################################################*/

function createXMultipliedXDivs(x){
    //ROW
    for(i=0; i<x; i++){
        const newDivRow = document.createElement("div");
        newDivRow.classList.toggle("easDivRow");      
        //COLUMN
        for(j=0; j<x; j++){
            const newDiv = document.createElement("div");
            newDiv.classList.toggle("easDiv");
            newDiv.textContent = i;
            newDivRow.appendChild(newDiv);
        }
        easDivContainer.appendChild(newDivRow);
    }
}


/* ##########################################################################
    invoke funktions
##########################################################################*/
createXMultipliedXDivs(90);
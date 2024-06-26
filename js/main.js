/* ##########################################################################
    Globale Variables
##########################################################################*/
let currentBackgroundcolor = "black";
let isDrawing = false;

const easDivContainer = document.querySelector(".easDivContainer");


/* ##########################################################################
    funktion Deklaration
##########################################################################*/

function createXMultipliedXDivs(x){
    //Delete already existing DIVS (Restart)
    deleteAlleasDivs();
    //ROW
    for(i=0; i<x; i++){
        const newDivRow = document.createElement("div");
        newDivRow.classList.toggle("easDivRow");      
        //COLUMN
        for(j=0; j<x; j++){
            const newDiv = document.createElement("div");
            newDiv.classList.toggle("easDiv");
            newDiv.textContent = "";
            newDiv.addEventListener("mousedown", function(){
                isDrawing = true;
            });
            newDiv.addEventListener("mouseover", function(e){
                if(isDrawing){
                    e.target.style.backgroundColor = currentBackgroundcolor;
                }
            });
            newDiv.addEventListener("mouseup", function(){
                isDrawing=false;
            });
            newDivRow.appendChild(newDiv);
        }
        easDivContainer.appendChild(newDivRow);
    }
}

function deleteAlleasDivs(){
    easDivContainer.innerHTML= "";
}


/* ##########################################################################
    invoke funktions
##########################################################################*/
createXMultipliedXDivs(35);


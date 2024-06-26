/* ##########################################################################
    Globale Variables
##########################################################################*/
const ERRORMESSAGE = "Only Numbers between 2 and 99";

let currentBackgroundcolor = "black";
let isDrawing = false;

const easDivContainer = document.querySelector(".easDivContainer");
easDivContainer.addEventListener("mouseleave", () => {isDrawing = false});

const input = document.querySelector(".easContainer__input");
input.addEventListener("input", ()=>{
    p_multiplyBy.textContent = "x " + input.value;
    if(input.value >=2 && input.value <100){
        p_ErrorMessage.style.visibility = "hidden";
    }else{
        p_ErrorMessage.textContent = ERRORMESSAGE;
        p_ErrorMessage.style.visibility = "visible";
    }    
});

const p_ErrorMessage = document.querySelector(".errorMessage");
const p_multiplyBy = document.querySelector("#p_multiplyBy");
const btnCreateDivs= document.querySelector("#createDivs");
btnCreateDivs.addEventListener("click", () =>{
    if(input.value >2 && input.value <100){
        createXMultipliedXDivs(input.value);
    }else{
        
    }
});

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
            //newDiv.textContent = "";
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





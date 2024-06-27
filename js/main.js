/* ##########################################################################
    Globale Variables
##########################################################################*/
const ERRORMESSAGE = "Only Numbers between 2 and 99";

let currentBackgroundcolor = "black";
let isDrawing = false;
let isRainbowMode = false;

const easDivContainer = document.querySelector(".easDivContainer");
easDivContainer.addEventListener("mouseleave", () => {isDrawing = false});
const p_ErrorMessage = document.querySelector(".errorMessage");
const p_multiplyBy = document.querySelector("#p_multiplyBy");
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
const btnCreateDivs= document.querySelector("#createDivs");
btnCreateDivs.addEventListener("click", () =>{
    if(input.value >=2 && input.value <100){
        createXMultipliedXDivs(input.value);
    }else{
        
    }
});
const btnBlack= document.querySelector("#Black");
btnBlack.addEventListener("click",()=> {setCurrentBackgroundcolor("black"); isRainbowMode=false;});
const btnBlue= document.querySelector("#Blue");
btnBlue.addEventListener("click",()=>{setCurrentBackgroundcolor("blue"); isRainbowMode=false;});
const btnRainbow= document.querySelector("#Rainbow");
btnRainbow.addEventListener("click",()=> {setCurrentBackgroundcolor("rainbow"); isRainbowMode=true;});
const btnEraser = document.querySelector("#Eraser");
btnEraser.addEventListener("click",() => {setCurrentBackgroundcolor("eraser"); isRainbowMode=false;});


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
                    if(isRainbowMode){
                        setCurrentBackgroundcolor("rainbow");
                        e.target.style.backgroundColor = currentBackgroundcolor;
                    }else{
                        e.target.style.backgroundColor = currentBackgroundcolor;
                    }
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

function setCurrentBackgroundcolor(color){
    if(color === "rainbow"){
        currentBackgroundcolor =  `rgb(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)})`
    }else if(color === "eraser"){
        currentBackgroundcolor =  "rgba( 255, 255, 255, 0.0 )";
    }else{
        currentBackgroundcolor = color;
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max+1);
}




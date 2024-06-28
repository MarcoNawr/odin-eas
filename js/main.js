/* ##########################################################################
    Globale Variables
##########################################################################*/

/*CONST*/
const ERRORMESSAGE = "Only Numbers between 2 and 99";

/*Variables */
let currentBackgroundcolor = "black";
let isDrawing = false;
let isRainbowMode = false;

/*QUERYSELECTOR*/
const easDivContainer = document.querySelector(".easDivContainer");
const p_ErrorMessage = document.querySelector(".errorMessage");
const p_multiplyBy = document.querySelector("#p_multiplyBy");
const input = document.querySelector(".easContainer__input");
const btnCreateDivs= document.querySelector("#createDivs");
const btnBlack= document.querySelector("#Black");
const btnBlue= document.querySelector("#Blue");
const btnRainbow= document.querySelector("#Rainbow");
const btnEraser = document.querySelector("#Eraser");
const drawingHint = document.querySelector(".easContainer__DrawingHint");

/*EVENTLISTENER*/
input.addEventListener("input", ()=>{
    p_multiplyBy.textContent = "x " + input.value;
    if(input.value >=2 && input.value <100){
        p_ErrorMessage.style.visibility = "hidden";
    }else{
        p_ErrorMessage.textContent = ERRORMESSAGE;
        p_ErrorMessage.style.visibility = "visible";
    }    
});
btnCreateDivs.addEventListener("click", () =>{
    if(input.value >=2 && input.value <100){
        createXMultipliedXDivs(input.value);
    }else{
        
    }
});
btnBlack.addEventListener("click",()=> {setCurrentBackgroundcolor("black"); isRainbowMode=false;});
btnBlue.addEventListener("click",()=>{setCurrentBackgroundcolor("blue"); isRainbowMode=false;});
btnRainbow.addEventListener("click",()=> {setCurrentBackgroundcolor("rainbow"); isRainbowMode=true;});
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
            newDiv.addEventListener("click", function(){
                if(isDrawing){
                    isDrawing=false;
                    drawingHint.textContent = "Click Mouse within Drawing Area to START DrawingMode";
                }else {
                    isDrawing = true;
                    drawingHint.textContent = "Click Mouse within Drawing Area to END DrawingMode"};
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




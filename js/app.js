/* const makeBoxes = () => {
    let boxList = [];
    for (let i = 1; i < 16; i++) {
        boxList.push(`<div id="box-${i}" class="box">${i}</div>`);
    }
    return boxList;
};//letrehozzunk a boxokat amelyeket vesszővel választunk el
 */
const makeBoxes = ()=>{
    const data=[
        {number:1},
        {number:2},
        {number:3},
        {number:4},
        {number:5},
        {number:6},
        {number:7},
        {number:8},
        {number:9},
        {number:10},
        {number:11},
        {number:12},
        {number:13},
        {number:14},
        {number:15},
    ];
    const content=data.map( ({number}) => `<div id="${number}" class="box">${number}</div>`);
    return content;
}

const renderBoxes = () => {
    const boxesContainer = document.querySelector(".boxes");
    boxesContainer.innerHTML = "";
    boxesContainer.innerHTML = makeBoxes().join('');
};//megragadjuk azt az elemet ahova beillesztjük a boxokat majd a "join()" tömbmetódussal a vesszőket töröljük/kicseréljük

/*document.addEventListener("DOMContentLoaded", renderBoxes);//oldal betöltésekor inicializálódik/renderelődik a weboldal
const boxes=document.querySelectorAll(".box")//ezek a kódsorok hamarabb futnak le mint a callback függvények. ezért itt még nem létezik a renderelt tartalom
console.log("Boxlista:",boxes); */


//Tennivalók:
//1.kivenni az input mező értékét
const getinputValue=function(){
    return document.querySelector("#num").value;
}

//2.megvizsgálni hogy megfelelő-e az érték?(nem üres string,1 és 15 között van)
const isItCorrect=()=>{
    const input=getinputValue();
    if (!input.trim()){
        return [false, 0];
    }
    if (isNaN(input)){
        return [false,0]
    }
    const currentValue=Number(input)
    if(currentValue<1 || currentValue>15){
        return [false,0]
    }
    return [true, currentValue];
}

//3.a szinező gomb megragadása és eseményfigyelőt ternni rá
function sendErrorMessage(){
    alert("Helytelen értéket adott meg!")
}

const coloring=()=>{
    const button=document.querySelector(".card button:nth-child(3)")
    button.addEventListener("click", ()=>{
        coloringBox();
        clearInput();
    })
}

const coloringBox=()=>{
    const boxes=document.querySelectorAll(".box")
    const [isValid,number]=isItCorrect();
    if(!isValid){
        sendErrorMessage();
        return;
    }
    const box=Array.from(boxes).find(box=>Number(box.id)===number)
    const [r,g,b]=createColor();
    box.style.backgroundColor=`rgb(${r},${g},${b})`
}

//4.véletlen szám generálása
const randomNumber=()=>{
    return Math.floor(Math.random()*256)
}

//5. számokból színt készíteni(rgb-3db)
const createColor=()=>{
    const r=randomNumber();
    const g=randomNumber();
    const b=randomNumber();
    return [r, g, b];
}

//6. 3.feladat színező eljárásban alkalmazni ezt a színt.
document.addEventListener("DOMContentLoaded", () =>{//feterro fuggveny 
    renderBoxes()
    coloring()
    reset(); 
    /* const boxes=document.querySelectorAll(".box")
    console.log("Boxlista:",boxes); */
});

//torles1
function clearInput(){
    const inputElement=document.querySelector("#num")
    inputElement.value="";
    inputElement.focus();
}

//torles2(egesz oldal ujrainditasa)
const reset=()=>{
    const reetButton=document.querySelector(".card button:nth-child(4)")
    reetButton.addEventListener("click",()=>{
        renderBoxes()
        clearInput()
    })
}
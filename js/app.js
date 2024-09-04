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
    const content=data.map(d =>);
}

const renderBoxes = () => {
    const boxesContainer = document.querySelector(".boxes");
    boxesContainer.innerHTML = "";
    boxesContainer.innerHTML = makeBoxes().join('');
};//megragadjuk azt az elemet ahova beillesztjük a boxokat majd a "join()" tömbmetódussal a vesszőket töröljük/kicseréljük

/*document.addEventListener("DOMContentLoaded", renderBoxes);//oldal betöltésekor inicializálódik/renderelődik a weboldal
const boxes=document.querySelectorAll(".box")//ezek a kódsorok hamarabb futnak le mint a callback függvények. ezért itt még nem létezik a renderelt tartalom
console.log("Boxlista:",boxes); */

document.addEventListener("DOMContentLoaded", () =>{//feterro fuggveny 
    renderBoxes()
    const boxes=document.querySelectorAll(".box")
    console.log("Boxlista:",boxes);
});
//Tennivalók:
//1.kivenni az input mező értékét
//2.megvizsgálni hogy megfelelő-e az érték?(nem üres string,1 és 15 között van)
//3.a szinező gomb megragadása és eseményfigyelőt ternni rá
//4.véletlen szám generálása
//5. számokból színt készíteni(rgb-3db)
//6. 3.feladat színező eljárásban alkalmazni ezt a színt.
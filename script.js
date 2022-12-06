
/*
Micro interactie met javascript: 
1: queryselector om de button en de header te kunnen gebruiken in js
2: click op de button
3: met classlist toggle de class "show-search" op de header zetten


artikel: Hey designers, if you only know one thing about JavaScript, this is what I would recommend 
https://css-tricks.com/video-screencasts/150-hey-designers-know-one-thing-javascript-recommend/

*/

//1: queryselector om de button en de header te kunnen gebruiken in js
var zoekbutton = document.querySelector("header > button")
var zoekveld = document.querySelector("header")

//2: click op de button om een functie uit te voeren
zoekbutton.addEventListener("click",doiets);

//3: met classlist toggle de class "show-search" op de header zetten
function doiets(){
    zoekveld.classList.toggle("show-search");
    zoekbutton.classList.toggle('close');


    // if(deHeader.classList.contains("show-search")){
    //     deHeader.classList.remove("show-search");
    // }else{
    //     deHeader.classList.add("show-search");
    // }
  
}

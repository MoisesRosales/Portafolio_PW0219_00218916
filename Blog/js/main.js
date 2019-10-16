var menu = document.getElementById("menu");
var a_lunes = document.getElementById("a-lunes");
var a_martes = document.getElementById("a-martes");
var a_miercoles = document.getElementById("a-miercoles");
var a_jueves = document.getElementById("a-jueves");
var a_viernes = document.getElementById("a-viernes");

var lunes = document.getElementById("day-1");
var martes = document.getElementById("day-2");
var miercoles = document.getElementById("day-3");
var jueves = document.getElementById("day-4");
var viernes = document.getElementById("day-5");


a_lunes.addEventListener("click", ()=>{
    console.log("1");
    lunes.classList.add("hide");
    martes.classList.add("hide");
    miercoles.classList.add("hide");
    jueves.classList.add("hide");
    viernes.classList.add("hide");
    
    lunes.classList.remove("hide");

});
a_martes.addEventListener("click", ()=>{
    lunes.classList.add("hide");
    martes.classList.add("hide");
    miercoles.classList.add("hide");
    jueves.classList.add("hide");
    viernes.classList.add("hide");
    
    martes.classList.remove("hide");
});
a_miercoles.addEventListener("click", ()=>{
    console.log("3");
    lunes.classList.add("hide");
    martes.classList.add("hide");
    miercoles.classList.add("hide");
    jueves.classList.add("hide");
    viernes.classList.add("hide");
    
    miercoles.classList.remove("hide");
});
a_jueves.addEventListener("click", ()=>{
    console.log("4");
    lunes.classList.add("hide");
    martes.classList.add("hide");
    miercoles.classList.add("hide");
    jueves.classList.add("hide");
    viernes.classList.add("hide");
    
    jueves.classList.remove("hide");
});
a_viernes.addEventListener("click", ()=>{
    console.log("5");
    lunes.classList.add("hide");
    martes.classList.add("hide");
    miercoles.classList.add("hide");
    jueves.classList.add("hide");
    viernes.classList.add("hide");
    
    viernes.classList.remove("hide");
});
menu.addEventListener("scroll", ()=>{
    console.log("6");

    menu.classList.remove("hide");
});



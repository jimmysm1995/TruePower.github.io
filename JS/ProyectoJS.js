/* *****************************/
/* web de True Power */
/* Index */
/* CSS de IndexProyecto*/
/* Autor: Jose Sanchez Martinez*/
/* Version 1.0*/
/*******************************/

/************ Funcion para barra de navegacion***************/

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
    x.className += " responsive";
    } else {
    x.className = "topnav";
    }
}
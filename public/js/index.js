const qs = (element) => document.querySelector(element);
const qsa = (element) => document.querySelectorAll(element);
const $ = (element) => document.getElementById(element);


/* const main = document.querySelector('container'); */
/* const main = document.querySelector('#mainContainer');  me capura el elemento del valor del id*/

/* Consigna 1 */
const main = $('mainContainer');
const subtitulo = qs('.subtitulo');
const parrafos = qsa('p');
const listado = qs('h2 a');

/* const cambiarFondo = ()=> {
    qs('body').classList.toggle('fondo')
}  cambia claro-oscuro haciendo click*/

let menu=documento. querySelector("#menu");
let logo=documento. querySelector(".logoDH");
let nombre = prompt('¿Cual es tu nombre?');

subtitulo.textContent += nombre ? nombre : "Invitado";

subtitulo.style.textTransform = "uppercase";
listado.style.color = "#E51B3E"

let respuesta = confirm('¿Queres cambiar el color de fondo?');

if(respuesta){
    qs('body').classList.add('fondo')
}
parrafos.forEach((parrafo,index)=>{
    if(index%2 === 0){
       parrafo.classList.add('destacadoImpar')
    }else {
        parrafo.classList.add('destacadoPar') 
    }
});

qs('.destacadoPar').classList.add('fondo')

main.style.display = "block";
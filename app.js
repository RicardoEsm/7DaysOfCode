function respuesta(){

let nombre =document.getElementById("nombre").value;
let edad = document.getElementById("edad").value;
let lenguaje = document.getElementById("lenguaje").value;
let mensaje= document.getElementById("mensaje-output")

mensaje.innerText= `Hola ${nombre} tienes ${edad} años y ya estás aprendiendo ${lenguaje}!`
}
document.getElementById("enviar-btn").addEventListener("click",respuesta)



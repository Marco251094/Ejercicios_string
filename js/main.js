


let botonEnviar = document.addEventListener("click", function(event){
    event.preventDefault();
    //Emailregex
let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
let RFCRegex = 
let exampleFormControlInput2 = document.getElementById("exampleFormControlInput2")
let exampleFormControlInput1 = document.getElementById("exampleFormControlInput1");
let exampleFormControlTextarea1 = document.getElementById("exampleFormControlTextarea1");
let alertaError = document.getElementById("alertError");
alertaError.style.display="none";
alertaError.innerHTML="";
exampleFormControlTextarea1.value = exampleFormControlTextarea1.value.trim();

//trim es para que no tome espacios como caracter
if(exampleFormControlTextarea1.value.trim().replaceAll("  ", "").length < 20){
    alertaError.innerHTML = "El mensaje debe contener 20 caracteres o más";
    alertaError.style.display ="block"
}
if(exampleFormControlInput1.value.match(emailRegex) == null){
    alertaError.style.display="block";
    alertaError.innerHTML += "<br/> El correo electrónico no es válido.";
}
if(exampleFormControlInput2.value.match(RFCRegex) == null){
    alertError.style.display="block";
    alertError.innerHTML += "</br> El RFC no es válido.";
}
});
//CharAt accede a los subindices
let nombre = "Marco Antonio Rubio Gonzalez";
nombre = nombre.toUpperCase();
let letra="";
let contFinal =0;
//Recorro la cadena 
for (let index = 0; index < nombre.length; index++) {
    console.log(nombre.charAt(index)); 
let contTemp = 1;
    for(let cont =index+1; cont < nombre.length; cont++)  {
    if(nombre.charAt(index) ==nombre.charAt(cont))
      
        contTemp++;
    }
    if(contTemp>contFinal){
        contFinal=contTemp;
        letra = nombre.charAt(index);
    }
}
console.log(letra, contFinal);

// Entrada: Nombre
// Salida: Nombre al revés

const nombre2 = "";

function reversa(str) {
  let arreglo = str.split("");
  let arregloInv = [];
  for (let i = arreglo.length; i >= 0; --i) {
    arregloInv.push(arreglo[i]);
  }
  return arregloInv.join("");
}
console.log(reversa(  nombre2)); 
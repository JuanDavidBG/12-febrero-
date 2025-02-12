/* 04 Imprimir el arreglo

Escribir una función llamda imprimirArreglo que recibe un arreglo al imprimir cada elemento en una linea aparte*/

const arreglo = ["Gatos", "Perros", "Pajaros"];
function imprimirArreglo(arreglo) {
  for (let i = 0; i <= arreglo.length; i++) {
    console.log(arreglo[i]);
  }
}

console.log(imprimirArreglo(arreglo));

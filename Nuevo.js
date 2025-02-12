/* Escribir una función llamada sumarArreglo que reciba tres argumentos: un arreglo de números, la posición inicial y la posición final.La Función debe retornar la suma de todos los números dentro del rango (la posición inicial y la posición final, incluyéndolas).

Nota: Puedes asumir que la posición inicial va a ser menor o igual a la posición final, y que están dentro de los limites del arreglo*/

let a = parseInt(prompt("Ingrese el numer incial"));
let b = parseInt(prompt("Ingrese el numero final"));
const c = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const sumarArreglo = (a, b, c) => {
  let suma = 0;
  if (a < c.length && b > a && a > 0) {
    for (let i = a; a <= b; i++) {
      suma = suma + c[i];
    }
  } else {
   throw new Error("los rangos separan el limite del arreglo"); 
}

let resultado = sumarArreglo(a, b, c);
console.log(resultado);

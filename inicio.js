//Genere un patron de astericos en forma de piramide

let valor = parseInt(prompt("Ingrese la altura para la piramide"));

const piramide = (valor) => {
  console.log(typeof valor);
  for (let i = 1; i <= valor; i++) {
    console.log(i);
  }
};

piramide(valor);

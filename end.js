function generarPiramide(filas) {
  let resultado = "";
  for (let i = 1; i <= filas; i++) {
    let espacios = " ".repeat(filas - i);
    let asteriscos = "*".repeat(2 * i - 1);
    resultado += espacios + asteriscos + "\n";
  }
  return resultado;
}

console.log(generarPiramide(5));

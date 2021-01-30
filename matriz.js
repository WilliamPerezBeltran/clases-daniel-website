let matriz = [
  [4, 3, 2, 8],
  [3, 1, 4, 2],
  [8, 5, 3, 2],
  [2, 1, 8, 3],
];

for (var i = 0; i < matriz.length; i++) {
  nuevoArray = [];
  for (var j = 0; j < matriz[i].length; j++) {
    nuevoArray.push({ fila: i, columna: j, dato: matriz[j][i] });
  }
  console.log("\n");
  construirRespuesta(nuevoArray);
}

function construirRespuesta(columnaArray) {
  let rta;
  let numeroMinimo = columnaArray[0].dato;
  for (var i = 0; i < columnaArray.length; i++) {
    if (columnaArray[i].dato < numeroMinimo) {
      numeroMinimo = nuevoArray[i].dato;

      rta = [
        {
          minimo: numeroMinimo,
          fila: columnaArray[i].columna + 1,
          columna: columnaArray[i].fila + 1,
        },
      ];
    }
  }
  console.log("rta", rta);
  return rta;
}

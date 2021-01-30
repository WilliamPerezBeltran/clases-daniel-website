let matriz = [[4,3,2,8],[3,1,4,2],[8,5,3,2],[2,1,8,3]]

// vectorNuevo = []
// nuevoArray = []
for (var i = 0; i < matriz.length; i++) {
	nuevoArray = []
	for (var j = 0; j < matriz[i].length; j++) {

		// console.log(matriz[i][j])
		// console.log(matriz[j][i])
		nuevoArray.push({fila:i,columna:j,dato:matriz[j][i]})
		
	}	
	console.log('\n')
	construirRespuesta(nuevoArray)

		
}
// console.log('nuevoArray',nuevoArray)

function construirRespuesta(columnaArray){
	// console.log('nuevoArray',columnaArray)
	let rta
	let  numeroMinimo = columnaArray[0].dato
	for (var i = 0; i < columnaArray.length; i++) {
		if (columnaArray[i].dato < numeroMinimo){
			numeroMinimo = nuevoArray[i].dato
			rta = [{minimo:numeroMinimo,fila:columnaArray[i].columna+1,columna:columnaArray[i].fila+1}]

		}
	}
	console.log('rta',rta)
	return rta


}



// nuevoArray = [4,3,8,2]
// let  numeroMinimo = nuevoArray[0]
// for (var i = 0; i < nuevoArray.length; i++) {
// 	if (nuevoArray[i]<numeroMinimo){
// 		numeroMinimo = nuevoArray[i]

// 	}
// }
// console.log('nuevoArray',nuevoArray)
// console.log('numeroMinimo',numeroMinimo)

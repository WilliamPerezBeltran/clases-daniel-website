let numero = [1,2,3,4,5,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,100]
let acurrencias=[]
let valoresUnicos = numero.filter((currentValue,index,array)=> array.indexOf(currentValue)=== index )

for (var i = 0; i < valoresUnicos.length; i++) {
	let contador = 0
	for (var j = 0; j < numero.length; j++) {

		if( valoresUnicos[i] === numero[j] ){
			contador++
		}
		
	}	

		// acurrencias.push({numero:valoresUnicos[i],occurrencias:contador})
		acurrencias.push(contador)
}

console.log('arrayPrimario',numero)
console.log('valoresUnicos',valoresUnicos)
console.log('acurrencias',acurrencias)
function tipo(){
	//La suma de 10.25 + 0.75 devuelve un numerico
	document.write(typeof(10.25+0.75));
}

function caso1(){
	let numero1 = 23;
	let numero2 = 34;
	let resultadoOperacion = numero1 + numero2;
	console.log(resultadoOperacion);
}

function caso2(){
	//Si queremos que la siguiente operación de como resultado el número 100, 
	//¿dónde colocarías los paréntesis sin cambiar el orden de la operación?
	
	let operacion = (46 + 8) * 2 / 2 + 46;
	console.log(operacion);
}

function caso3(){
	//Si queremos que la siguiente operación de como resultado el número 100, 
	//¿dónde colocarías los paréntesis sin cambiar el orden de la operación?
	
	let operacion = 46 +((8 * 2) / (2 + 46));
	console.log(operacion);
}

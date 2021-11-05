let surnames = ['10', 'juan', '@12', 'null', 'antonioPerezDelCarmen', 'abcdefghtioiasoisdjads', 'Manolo', 'Perez', 'Soledad'];
let excuses = ['OMG?', 'Whats going on?', 'How much is it?', '18', null, undefined, function () { }];
let nameless = ['Jeferson', 'Matilda', 'R@fael', '1van', 'Pep3', 'Loquesea', 'Fel1berto', 'Pepit@', 'D@M'];

// Funcion que despeja los arrays de los null, undefined, etc
function fixArrays(myArray) {
	let arrayFixed = [];
	for (let i in myArray) {
		// Si el tipo del elemento del array es string lo pushea dentro de mi nueva string "limpia"
		if (typeof myArray[i] == 'string') arrayFixed.push(myArray[i]);
	}
	return arrayFixed;
}

// Ej 1: Generador de excusas aleatorias 
function randomExcuses(arraySurnames, arrayExcuses, arrayNameless) {
	// Llamo a la funcion limpiadora 3 veces (1 por cada array)
	arraySurnamesClean = fixArrays(arrayExcuses);
	arrayExcusesClean = fixArrays(arrayExcuses);
	arrayNamelessClean = fixArrays(arrayExcuses);
	// Almaceno en una variable lo que devuelve mi funcion random
	// Dicha funcion devolverá un elemento al azar del array que le pase 
	let arrSu = randomWord(arraySurnamesClean);
	let arrEx = randomWord(arrayExcusesClean);
	let arrNa = randomWord(arrayNamelessClean);
	let str = "El señor " + arrSu + " no puede asistir a clase porque " + arrEx + " y por eso " + arrNa;
	return str;
}

function randomWord(arr) {
	// Almaceno en la variable random un elemento al azar de mi array  
	let random = arr[Math.floor(Math.random() * (arr.length))];
	return random;
}

// Ej 2: Contador de caracteres
function myCounter(myArray) {
	let cleanArray = fixArrays(myArray);
	let obj = {};
	for (let i in cleanArray) {
		// Llamo a la funcion updateObject pasandole como parametro 
		// un elemento del array y el objeto al que irá rellenando
		updateObject(cleanArray[i], obj);
	}
	return obj;
}

function updateObject(element, obj) {
	// Primero pasamos el elemento a minusculas
	element = element.toLowerCase();
	for (let i in element) {
		// letter guarda un caracter del elemento
		let letter = element[i];
		// si el objeto tiene una clave con el nombre 
		// del caracter, al valor le suma 1
		if (obj.hasOwnProperty(letter)) {
			obj[letter] += 1;
		}
		// sino, crea la clave y le asigna "1" como valor
		else {
			obj[letter] = 1;
		}
	}
}

// Ej 3: Eliminador de repeticiones dentro de un array
function deleteReps(myArray) {
	let cleanArray = fixArrays(myArray);
	// Instanciamos un objeto set para quitar las repeticiones del array 
	const mySet = new Set(cleanArray);
	// Volcamos cada elemento del set dentro del array con un operador de propagacion  
	const finalArray = [...mySet];
	return finalArray;
}

// Ej 4: Funcion que invierte cada string del array
function arrayInverted(myArray) {
	cleanArray = fixArrays(myArray);
	let finalArray = [];
	for (let i in cleanArray) {
		// Llamamos a la funcion auxiliar pasandole como parametros
		// el array y el indice por el que vamos. La funcion aux
		// nos devolverá un string con el elemento al reves.
		// A ese elemento lo pusheamos en una nueva array
		finalArray.push(auxArrayInverted(cleanArray, i));
	}
	return finalArray;
}
function auxArrayInverted(arr, index) {
	let str = '';
	//Leemos el elemento desde el final guardando caracter por caracter en un string
	for (let j = (arr[index].length) - 1; j >= 0; j--) {
		str += arr[index][j];
	}
	return str;
}

// ↓↓ Des-comenta la funcion que desees utilizar ↓↓  
//console.log(randomExcuses(surnames,excuses,nameless));
//console.log(myCounter(surnames));
//console.log(deleteReps(surnames));
//console.log(arrayInverted(surnames));
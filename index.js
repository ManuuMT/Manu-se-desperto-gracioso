let surnames = ['10', 'juan', '@12', 'null', 'antonioPerezDelCarmen', 'abcdefghtioiasoisdjads', 'Manolo', 'Perez', 'Soledad'];
let excuses = ['OMG?', 'Whats going on?', 'How much is it?', '18', null, undefined, function(){}];
let nameless = ['Jeferson', 'Matilda', 'R@fael', '1van', 'Pep3', 'Loquesea', 'Fel1berto', 'Pepit@', 'D@M'];



// Funcion que despeja los arrays de los null, undefined, etc
function fixArrays(myArray){ 
	let arrayFixed = [];

	for(let i in myArray){
		if(typeof myArray[i] == 'string' ) arrayFixed.push(myArray[i]); // Si el tipo del elemento del array es string
	}																	// lo pushea dentro de mi nueva string "limpia"
	return arrayFixed;
}



// Generador de excusas aleatorias 
function randomExcuses(arraySurnames,arrayExcuses,arrayNameless){
	
	// Llamo a la funcion limpiadora
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
	let random = arr[Math.floor(Math.random() * (arr.length))]; // Almaceno en la variable random 
	return random;												// un elemento al azar de mi array 
}



// Contador de caracteres
function myCounter(myArray){
	let cleanArray = fixArrays(myArray);	
	
	let obj={};

	for(let i in cleanArray){
		updateObject(cleanArray[i],obj); // Llamo a la funcion updateObject pasandole como parametro 
	}									 // un elemento del array y el objeto al que irá rellenando
	
	return obj;
	
}

function updateObject(element,obj){
		
		element = element.toLowerCase(); // Primero pasamos el elemento a minusculas
		
		for(let i in element){
			let letter = element[i]; // letter guarda un caracter del elemento

			if(obj.hasOwnProperty(letter)){ // si el objeto tiene una clave con el nombre del caracter
				obj[letter]+=1;				// al valor le suma 1
			}
			else{
				obj[letter]=1;				// sino, crea la clave y le asigna "1" como valor
			}
		}
}



// Eliminador de repeticiones dentro de un array
function deleteReps(myArray){
	let cleanArray = fixArrays(myArray);	
	
	const mySet = new Set(cleanArray);  // Instanciamos un objeto set para quitar las repeticiones del array 
	const finalArray = [...mySet];		// Volcamos cada elemento del set dentro del array con un operador de propagacion  
									
	return finalArray;
}



// Funcion que invierte cada string del array
function arrayInverted(myArray){
	cleanArray = fixArrays(myArray);
	let finalArray = [];

	for(let i in cleanArray){
		finalArray.push(auxArrayInverted(cleanArray,i)); // Llamamos a la funcion auxiliar pasandole como parametros
	}												   // el array y el indice por el que vamos. La funcion aux
	return finalArray;								   // nos devolverá un string con el elemento al reves. A ese
}													   // elemento lo pusheamos en una nueva array

function auxArrayInverted(arr,index){
	let str='';

	for(let j=(arr[index].length)-1 ; j>=0 ; j--){ //Leemos el elemento desde el final guardando  
		str+=arr[index][j];  					   // caracter por caracter en un string
	}
	
	return str;
	
}

// ↓↓ Des-comenta la funcion que desees utilizar ↓↓  

//console.log(randomExcuses(surnames,excuses,nameless));
//console.log(myCounter(surnames));
//console.log(deleteReps(surnames));
//console.log(arrayInverted(surnames));



// Un nuevo Set con los nombres de tu familia
let arrayFam = ["Diego", "Zoraida", "Nucita", "Macario"]

let miFam = new Set(arrayFam);
console.log(miFam);


// Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)

miFam.add("Macario");
console.log(miFam);


// Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)

miFam.add("Javascript");
console.log(miFam);


// ____________________________




 // Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

 let personal = {

    nombre: "Macario",
    apellido: "Valderrama",
    edad: 43,
    altura: 1.80,
    eresDesarrollador: true,

 }
 console.log(personal);

 // Una variable que obtenga tu edad a partir del objeto anterior

 let opEdad = (personal.edad);
 console.log(opEdad);

 
 // Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus 
 //dos mejores amig@s

 let datosPer = [personal];
 console.log(datosPer);

 let amigosFam = [
    
    {nombre: "Zory",
    apellido: "Garcia",
    edad: 42,
    altura: 1.50,},
    
    {nombre: "Diego",
    apellido: "Valderrama",
    edad: 19,
    altura: 1.85,}
    
 ]

 console.log(amigosFam);


 // Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

amigosFam.sort((a, b) => a + b )
console.log(amigosFam);

// ___________________________________



// La fecha de hoy

let fechaHoy = new Date();
console.log(fechaHoy);

//La fecha de tu nacimiento

let miFecha = new Date('1979-01-10');
console.log(miFecha);


// Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento

let medirDate = fechaHoy > miFecha;
console.log(medirDate)

// Una variable que contenga el día de tu nacimiento

console.log(miFecha.getDate())

//Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)

console.log(miFecha.getMonth()+1)

// Una variable que contenga el año de tu nacimiento (con 4 dígitos)

console.log(miFecha.getFullYear())

// ____________________________________

//  Pregunta al usuario cuál es su edad y almacénala en una variable llamada edad

prompt("Cual es tu edad")

const edad = prompt("¿Cual es tu edad?")

console.log(edad)


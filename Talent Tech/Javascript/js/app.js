//comentario de una sola linea

/* comentario de vvarias lineas*/

console.log("Hola, mundo!"); // Imprime: Hola, mundo!

// Variable de tipo booleano
let estado = true; // Representa un valor verdadero o falso
console.log(estado); // Imprime: true

// Variable de tipo número
const pi = 3.14159; // Representa un valor numérico constante
console.log(pi); // Imprime: 3.14159

// Variables de tipo texto (string)
let nombre = "Juan"; // Representa una cadena de caracteres
let apellido = "Perez"; // Representa otra cadena de caracteres
console.log(nombre + " " + apellido); // Imprime: Juan Perez

// Variable de tipo objeto
let persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 30
}; // Representa un objeto con propiedades
console.log(persona); // Imprime: { nombre: 'Juan', apellido: 'Perez', edad: 30 }

// Concatenar valores del objeto
let nombreCompleto = persona.nombre + " " + persona.apellido;
console.log("Nombre completo: " + nombreCompleto); // Imprime: Nombre completo: Juan Perez

// Usando template literals
let nombreCompletoTemplate = `${persona.nombre} ${persona.apellido}`;
console.log(`Nombre completo (template): ${nombreCompletoTemplate}`); // Imprime: Nombre completo (template): Juan Perez

// Variable de tipo array
let numeros = [1, 2, 3, 4, 5]; // Representa una lista de valores
console.log(numeros); // Imprime: [1, 2, 3, 4, 5]

// Concatenar valores del array
let numerosConcatenados = numeros.join(", ");
console.log("Números concatenados: " + numerosConcatenados); // Imprime: Números concatenados: 1, 2, 3, 4, 5

// Variable de tipo función
let saludar = function() {
    return "Hola, " + persona.nombre;
}; // Representa una función que retorna un saludo
console.log(saludar()); // Imprime: Hola, Juan

// Usando template literals en la función
let saludarTemplate = function() {
    return `Hola, ${persona.nombre}`;
};
console.log(saludarTemplate()); // Imprime: Hola, Juan

// Variable de tipo array
let num = [1, 2, 3, 4, 5]; // Representa una lista de valores

// Usando template literals para imprimir la estructura del array
console.log(`Array de números: [${num.join(', ')}]`); // Imprime: Array de números: [1, 2, 3, 4, 5]


let estatus = true; // Variable de tipo booleano

// Variable de tipo objeto
console.log (typeof(saludar))
console.log (typeof(nombre))
console.log (typeof(estado))

let nu1 = parseInt(prompt("Ingrese un número: ")); // Solicita un número al usuario
let nu2 = parseInt(prompt("Ingrese otro número: ")); // Solicita otro número al usuario

console.log (`el primer numero es:  + ${nu1} y  el segundo numero es: ${nu2}`); // Imprime los números ingresados

let s = nu1+nu2;
console.log (`la suma de los numeros es: ${s}`); // Imprime la suma de los números ingresados

 
// Variable de tipo número con valor decimal (flotante) 
let alea = (Math.random()* 5 ) + 1;// Genera un número aleatorio entre 1 y 5
console.log(alea); //Imprime el número aleatorio

let alea1 = (Math.random()* 100 ); // Genera un número aleatorio entre 0 y 100
console.log(alea1); //Imprime el número aleatorio